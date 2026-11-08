/**
 * scripts/publish.js
 * 
 * 本地一键安全发布脚本：
 * 1. 自动执行 git pull --rebase origin main，确保拉取线上 Muse 最新发布，杜绝互相覆盖
 * 2. 自动运行 sync-site-seo.js 执行门禁校验并同步所有静态资产
 * 3. 自动暂存、提交并推送到 GitHub main 分支
 */

const { execSync } = require('child_process');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

function run() {
  console.log('🚀 开始本地一键安全构建与发布流程...');

  try {
    // 1. 先同步远程，避免冲突
    console.log('🔄 [1/4] 拉取远程最新提交 (git pull --rebase origin main)...');
    execSync('git pull --rebase origin main', { cwd: rootDir, stdio: 'inherit' });

    // 2. 跑门禁校验与静态资源全量同步
    console.log('⚙️ [2/4] 执行门禁校验与静态页面全量生成...');
    execSync('node sync-site-seo.js', { cwd: rootDir, stdio: 'inherit' });

    // 3. 检查是否有修改
    console.log('🔍 [3/4] 检查本地变更...');
    const status = execSync('git status --porcelain', { cwd: rootDir }).toString().trim();
    if (!status) {
      console.log('✨ 工作区干净，没有需要提交的内容，已与远程保持最新！');
      process.exit(0);
    }

    // 4. 提交并推送
    console.log('📦 [4/4] 暂存、提交并推送到远程 main 分支...');
    execSync('git add .', { cwd: rootDir, stdio: 'inherit' });
    const commitMsg = process.argv[2] || 'feat(cases): sync local changes and rebuild static pages';
    execSync(`git commit -m "${commitMsg}"`, { cwd: rootDir, stdio: 'inherit' });
    execSync('git push origin main', { cwd: rootDir, stdio: 'inherit' });

    console.log('🎉 发布成功！GitHub Pages 约在 20 秒内自动完成部署生效。');
  } catch (err) {
    console.error('❌ 发布过程遇到错误：', err.message);
    process.exit(1);
  }
}

run();
