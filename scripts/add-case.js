/**
 * scripts/add-case.js
 * 
 * 本地新增案例入库脚本：
 * 1. 自动 safe-stash + rebase 拉取远程最新 main 分支，杜绝覆盖线上 Muse 提交
 * 2. 自动扫描 staging/ 下所有新草稿文件（支持单份或多份批量入库）
 * 3. 自动计算并分配全局连续递增的唯一 ID
 * 4. 自动同步注入 data.json 与 data-en.json
 * 5. 自动触发 sync-site-seo.js 全维校验并生成静态落地页与 SEO 结构化数据
 * 6. 将处理完的草稿归档至 staging/archive/
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = path.resolve(__dirname, '..');
const dataZhPath = path.join(rootDir, 'data.json');
const dataEnPath = path.join(rootDir, 'data-en.json');
const stagingDir = path.join(rootDir, 'staging');
const archiveDir = path.join(stagingDir, 'archive');

function run() {
  console.log('====================================================');
  console.log('🚀 开始执行本地新增案例入库流程...');
  console.log('====================================================');

  // 1. 确定待入库草稿文件列表
  let targetFiles = [];
  if (process.argv[2]) {
    targetFiles = [path.resolve(process.cwd(), process.argv[2])];
  } else {
    if (fs.existsSync(stagingDir)) {
      const files = fs.readdirSync(stagingDir).filter(f => f.endsWith('.json') && f !== 'template.json');
      targetFiles = files.map(f => path.join(stagingDir, f));
    }
  }

  if (targetFiles.length === 0) {
    console.log('\nℹ️ 当前 staging/ 目录下暂无待入库草稿。');
    console.log('💡 快速指引：');
    console.log('   1. 进入 staging 目录，复制 template.json；');
    console.log('   2. 重命名为你自己的草稿文件（例如 staging/my-new-case.json）并填入内容；');
    console.log('   3. 再次双击运行本脚本，即可全自动完成分配编号、入库并生成静态网页！\n');
    return;
  }

  // 2. 防冲突拉取远程最新代码
  let stashed = false;
  try {
    const dirty = execSync('git status --porcelain', { cwd: rootDir }).toString().trim();
    if (dirty) {
      try {
        execSync('git stash', { cwd: rootDir, stdio: 'ignore' });
        stashed = true;
      } catch (e) {}
    }
    console.log('🔄 [1/4] 检查并同步远程最新代码 (git pull --rebase)...');
    execSync('git pull --rebase origin main', { cwd: rootDir, stdio: 'inherit' });
    if (stashed) {
      try { execSync('git stash pop', { cwd: rootDir, stdio: 'ignore' }); } catch (e) {}
    }
  } catch (err) {
    console.warn('⚠️ 远程同步遇到网络波动，尝试基于当前本地状态继续...');
    if (stashed) {
      try { execSync('git stash pop', { cwd: rootDir, stdio: 'ignore' }); } catch (e) {}
    }
  }

  console.log(`\n📋 [2/4] 发现待入库草稿 ${targetFiles.length} 个，开始按序处理...`);

  const dataZh = JSON.parse(fs.readFileSync(dataZhPath, 'utf8'));
  const dataEn = JSON.parse(fs.readFileSync(dataEnPath, 'utf8'));

  let maxZhId = dataZh.cases.length > 0 ? Math.max(...dataZh.cases.map(c => c.id)) : 0;
  let maxEnId = dataEn.cases.length > 0 ? Math.max(...dataEn.cases.map(c => c.id)) : 0;
  let currentNextId = Math.max(maxZhId, maxEnId) + 1;

  if (!fs.existsSync(archiveDir)) fs.mkdirSync(archiveDir, { recursive: true });

  const addedIds = [];

  for (const targetFile of targetFiles) {
    if (!fs.existsSync(targetFile)) {
      console.warn(`⚠️ 跳过不存在的文件: ${targetFile}`);
      continue;
    }

    let draft;
    try {
      draft = JSON.parse(fs.readFileSync(targetFile, 'utf8'));
    } catch (e) {
      console.error(`❌ 解析 JSON 失败 (${path.basename(targetFile)}):`, e.message);
      continue;
    }

    const assignedId = currentNextId++;
    const issueDate = draft.issueDate || new Date().toISOString().split('T')[0];

    // 构建中文条目
    const caseZh = {
      id: assignedId,
      title: draft.titleZh || draft.title || '未命名案例',
      valueLine: draft.valueLineZh || draft.valueLine || '',
      category: draft.category || 'daily',
      difficulty: draft.difficulty || '入门',
      score: Number(draft.score) || 85,
      heat: Number(draft.heat) || 80,
      featured: Boolean(draft.featured),
      issueDate: issueDate,
      background: draft.backgroundZh || draft.background || '',
      steps: draft.stepsZh || draft.steps || [],
      keyPrompt: draft.keyPrompt || '',
      outputDesc: draft.outputDescZh || draft.outputDesc || '',
      outputUrl: draft.outputUrl || '',
      reproduceTips: draft.reproduceTipsZh || draft.reproduceTips || '',
      pitfalls: draft.pitfallsZh || draft.pitfalls || '',
      source: {
        name: draft.source?.name || '社区贡献',
        platform: draft.source?.platform || 'Web',
        grade: draft.source?.grade || 'B',
        url: draft.source?.url || 'https://muse.itis.chat/',
        publishedAt: draft.source?.publishedAt || issueDate
      }
    };

    // 构建英文条目
    const caseEn = {
      id: assignedId,
      title: draft.titleEn || draft.title || 'Untitled Case',
      valueLine: draft.valueLineEn || draft.valueLine || '',
      category: draft.category || 'daily',
      difficulty: draft.difficulty || '入门',
      difficultyEn: draft.difficultyEn || (draft.difficulty === '高阶' ? 'Advanced' : (draft.difficulty === '进阶' ? 'Intermediate' : 'Beginner')),
      score: Number(draft.score) || 85,
      heat: Number(draft.heat) || 80,
      featured: Boolean(draft.featured),
      issueDate: issueDate,
      background: draft.backgroundEn || draft.background || '',
      steps: draft.stepsEn || draft.steps || [],
      keyPrompt: draft.keyPrompt || '',
      outputDesc: draft.outputDescEn || draft.outputDesc || '',
      outputUrl: draft.outputUrl || '',
      reproduceTips: draft.reproduceTipsEn || draft.reproduceTips || '',
      pitfalls: draft.pitfallsEn || draft.pitfalls || '',
      source: {
        name: draft.source?.name || 'Community',
        platform: draft.source?.platform || 'Web',
        grade: draft.source?.grade || 'B',
        url: draft.source?.url || 'https://muse.itis.chat/en/',
        publishedAt: draft.source?.publishedAt || issueDate
      }
    };

    dataZh.cases.push(caseZh);
    dataEn.cases.push(caseEn);
    addedIds.push(assignedId);

    // 更新期次统计
    if (dataZh.issues && dataZh.issues.length > 0) {
      const lastIssue = dataZh.issues[dataZh.issues.length - 1];
      if (lastIssue.date === issueDate) {
        lastIssue.caseCount = (lastIssue.caseCount || 0) + 1;
      } else {
        dataZh.issues.push({ id: (lastIssue.id || 1) + 1, date: issueDate, caseCount: 1, status: 'done' });
      }
    }
    if (dataEn.issues && dataEn.issues.length > 0) {
      const lastIssue = dataEn.issues[dataEn.issues.length - 1];
      if (lastIssue.date === issueDate) {
        lastIssue.caseCount = (lastIssue.caseCount || 0) + 1;
      } else {
        dataEn.issues.push({ id: (lastIssue.id || 1) + 1, date: issueDate, caseCount: 1, status: 'done' });
      }
    }

    // 归档草稿文件
    const archivePath = path.join(archiveDir, `${path.basename(targetFile, '.json')}-case-${assignedId}.json`);
    fs.renameSync(targetFile, archivePath);
    console.log(`  ✓ 成功入库: #${assignedId} - ${caseZh.title} (草稿已归档)`);
  }

  const nowIso = new Date().toISOString();
  dataZh.exportedAt = nowIso;
  dataEn.exportedAt = nowIso;

  fs.writeFileSync(dataZhPath, JSON.stringify(dataZh, null, 2) + '\n');
  fs.writeFileSync(dataEnPath, JSON.stringify(dataEn, null, 2) + '\n');
  console.log(`\n💾 [3/4] 数据已持久化至 data.json 与 data-en.json`);

  // 3. 触发自动化构建与 SEO 同步
  console.log('⚙️ [4/4] 触发静态 SEO 全量同步构建引擎...');
  execSync('node sync-site-seo.js', { cwd: rootDir, stdio: 'inherit' });

  console.log('\n====================================================');
  console.log(`🎉 恭喜！新增案例 [${addedIds.join(', ')}] 已全部入库并完成静态页面生成！`);
  console.log('💡 下一步：双击运行【2-一键安全发布上线.bat】即可直接推送到 GitHub 上线！');
  console.log('====================================================\n');
}

run();
