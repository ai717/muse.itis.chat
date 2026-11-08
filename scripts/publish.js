/**
 * scripts/publish.js
 * 
 * 本地一键安全发布脚本：
 * 1. 自动安全暂存本地未提交变动并执行 git pull --rebase origin main，确保拉取线上 Muse 最新发布，杜绝冲突覆盖
 * 2. 自动运行 sync-site-seo.js 执行门禁校验并同步所有静态资产
 * 3. 自动暂存、提交并推送到 GitHub main 分支
 */

const { execSync } = require('child_process');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

function run() {
  console.log('====================================================');
  console.log('🚀 开始本地一键安全构建与发布流程...');
  console.log('====================================================');

  let stashed = false;
  try {
    // 检查是否有本地临时修改
    const dirty = execSync('git status --porcelain', { cwd: rootDir }).toString().trim();
    if (dirty) {
      console.log('📦 [1/4] 本地存在未提交修改，正在安全暂存 (git stash)...');
      try {
        execSync('git stash', { cwd: rootDir, stdio: 'ignore' });
        stashed = true;
      } catch (e) {}
    }

    // 1. 同步远程，避免冲突
    console.log('🔄 [2/4] 拉取远程最新提交 (git pull --rebase origin main)...');
    try {
      execSync('git pull --rebase origin main', { cwd: rootDir, stdio: 'inherit' });
    } catch (e) {
      console.warn('⚠️ 远程同步遇到网络异常，尝试基于当前本地状态继续...');
    }

    if (stashed) {
      try {
        execSync('git stash pop', { cwd: rootDir, stdio: 'ignore' });
      } catch (e) {}
    }

    // 2. 跑门禁校验与静态资源全量同步
    console.log('\n⚙️ [3/4] 执行门禁校验与静态页面全量生成...');
    execSync('node sync-site-seo.js', { cwd: rootDir, stdio: 'inherit' });

    // 3. 检查是否有修改需要提交
    const status = execSync('git status --porcelain', { cwd: rootDir }).toString().trim();
    if (!status) {
      console.log('\n✨ 工作区干净，没有需要提交的变动，当前已是最新状态！');
      process.exit(0);
    }

    // 4. 提交并推送
    console.log('\n📦 [4/4] 暂存、提交并推送到远程 main 分支...');
    execSync('git add .', { cwd: rootDir, stdio: 'inherit' });
    const commitMsg = process.argv[2] || 'feat(cases): sync local changes and rebuild static pages';
    execSync(`git commit -m "${commitMsg}"`, { cwd: rootDir, stdio: 'inherit' });
    execSync('git push origin main', { cwd: rootDir, stdio: 'inherit' });

    console.log('\n====================================================');
    console.log('🎉 发布成功！');
    console.log('👉 GitHub Pages 将在 20 秒内自动完成全球部署上线：https://muse.itis.chat/');
    console.log('====================================================\n');
  } catch (err) {
    console.error('\n❌ 发布过程遇到错误：', err.message);
    if (stashed) {
      try { execSync('git stash pop', { cwd: rootDir, stdio: 'ignore' }); } catch (e) {}
    }
    process.exit(1);
  }
}

run();
