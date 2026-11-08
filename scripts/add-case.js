/**
 * scripts/add-case.js
 * 
 * 本地新增案例入库脚本：
 * 1. 自动 rebase 拉取远程最新 main 分支，杜绝覆盖线上 Muse 提交
 * 2. 自动计算并分配全局连续递增的唯一 ID
 * 3. 自动同步注入 data.json 与 data-en.json
 * 4. 自动触发 sync-site-seo.js 全维校验并生成静态落地页与 SEO 结构化数据
 * 5. 将处理完的草稿归档至 staging/archive/
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
  console.log('🚀 开始执行本地新增案例入库流程...');

  // 1. 防冲突拉取远程最新代码
  try {
    console.log('🔄 检查并同步远程最新代码 (git pull --rebase)...');
    execSync('git pull --rebase origin main', { cwd: rootDir, stdio: 'inherit' });
  } catch (err) {
    console.warn('⚠️ 远程同步遇到冲突或网络离线，请先检查 git status 或网络连接。');
  }

  // 2. 确定待入库草稿文件
  let targetFile = process.argv[2];
  if (!targetFile) {
    const files = fs.readdirSync(stagingDir).filter(f => f.endsWith('.json') && f !== 'template.json');
    if (files.length === 0) {
      console.log('ℹ️ 未指定草稿文件且 staging/ 目录下无新草稿。');
      console.log('💡 请复制 staging/template.json 创建新草稿，例如: staging/case-custom.json');
      console.log('👉 运行方式: node scripts/add-case.js staging/case-custom.json');
      process.exit(0);
    }
    targetFile = path.join(stagingDir, files[0]);
  } else {
    targetFile = path.resolve(process.cwd(), targetFile);
  }

  if (!fs.existsSync(targetFile)) {
    console.error(`❌ 错误：找不到待入库文件 ${targetFile}`);
    process.exit(1);
  }

  const draft = JSON.parse(fs.readFileSync(targetFile, 'utf8'));

  const dataZh = JSON.parse(fs.readFileSync(dataZhPath, 'utf8'));
  const dataEn = JSON.parse(fs.readFileSync(dataEnPath, 'utf8'));

  // 3. 计算全局连续 ID
  const maxZhId = dataZh.cases.length > 0 ? Math.max(...dataZh.cases.map(c => c.id)) : 0;
  const maxEnId = dataEn.cases.length > 0 ? Math.max(...dataEn.cases.map(c => c.id)) : 0;
  const nextId = Math.max(maxZhId, maxEnId) + 1;

  console.log(`📌 自动分配全局连续案例 ID: #${nextId}`);

  const issueDate = draft.issueDate || new Date().toISOString().split('T')[0];

  // 4. 构建中文条目
  const caseZh = {
    id: nextId,
    title: draft.titleZh || draft.title,
    valueLine: draft.valueLineZh || draft.valueLine,
    category: draft.category,
    difficulty: draft.difficulty || '入门',
    score: Number(draft.score) || 85,
    heat: Number(draft.heat) || 80,
    featured: Boolean(draft.featured),
    issueDate: issueDate,
    background: draft.backgroundZh || draft.background,
    steps: draft.stepsZh || draft.steps || [],
    keyPrompt: draft.keyPrompt || '',
    outputDesc: draft.outputDescZh || draft.outputDesc,
    outputUrl: draft.outputUrl || '',
    reproduceTips: draft.reproduceTipsZh || draft.reproduceTips,
    pitfalls: draft.pitfallsZh || draft.pitfalls || '',
    source: {
      name: draft.source?.name || '',
      platform: draft.source?.platform || '',
      grade: draft.source?.grade || 'B',
      url: draft.source?.url || '',
      publishedAt: draft.source?.publishedAt || ''
    }
  };

  // 5. 构建英文条目
  const caseEn = {
    id: nextId,
    title: draft.titleEn || draft.title,
    valueLine: draft.valueLineEn || draft.valueLine,
    category: draft.category,
    difficulty: draft.difficulty || '入门',
    difficultyEn: draft.difficultyEn || (draft.difficulty === '高阶' ? 'Advanced' : (draft.difficulty === '进阶' ? 'Intermediate' : 'Beginner')),
    score: Number(draft.score) || 85,
    heat: Number(draft.heat) || 80,
    featured: Boolean(draft.featured),
    issueDate: issueDate,
    background: draft.backgroundEn || draft.background,
    steps: draft.stepsEn || draft.steps || [],
    keyPrompt: draft.keyPrompt || '',
    outputDesc: draft.outputDescEn || draft.outputDesc,
    outputUrl: draft.outputUrl || '',
    reproduceTips: draft.reproduceTipsEn || draft.reproduceTips,
    pitfalls: draft.pitfallsEn || draft.pitfalls || '',
    source: {
      name: draft.source?.name || '',
      platform: draft.source?.platform || '',
      grade: draft.source?.grade || 'B',
      url: draft.source?.url || '',
      publishedAt: draft.source?.publishedAt || ''
    }
  };

  // 6. 追加到 data.json & data-en.json
  dataZh.cases.push(caseZh);
  dataEn.cases.push(caseEn);

  const nowIso = new Date().toISOString();
  dataZh.exportedAt = nowIso;
  dataEn.exportedAt = nowIso;

  // 更新期次统计
  if (dataZh.issues && dataZh.issues.length > 0) {
    const lastIssue = dataZh.issues[dataZh.issues.length - 1];
    if (lastIssue.date === issueDate) {
      lastIssue.caseCount = (lastIssue.caseCount || 0) + 1;
    } else {
      dataZh.issues.push({
        id: (lastIssue.id || 1) + 1,
        date: issueDate,
        caseCount: 1,
        status: 'done'
      });
    }
  }
  if (dataEn.issues && dataEn.issues.length > 0) {
    const lastIssue = dataEn.issues[dataEn.issues.length - 1];
    if (lastIssue.date === issueDate) {
      lastIssue.caseCount = (lastIssue.caseCount || 0) + 1;
    } else {
      dataEn.issues.push({
        id: (lastIssue.id || 1) + 1,
        date: issueDate,
        caseCount: 1,
        status: 'done'
      });
    }
  }

  fs.writeFileSync(dataZhPath, JSON.stringify(dataZh, null, 2) + '\n');
  fs.writeFileSync(dataEnPath, JSON.stringify(dataEn, null, 2) + '\n');
  console.log(`✅ 已将新案例 #${nextId} 写入 data.json 与 data-en.json`);

  // 7. 触发自动化构建与 SEO 同步
  console.log('⚙️ 触发静态 SEO 全量同步构建...');
  execSync('node sync-site-seo.js', { cwd: rootDir, stdio: 'inherit' });

  // 8. 归档草稿
  if (!fs.existsSync(archiveDir)) fs.mkdirSync(archiveDir, { recursive: true });
  const archivePath = path.join(archiveDir, `${path.basename(targetFile, '.json')}-case-${nextId}.json`);
  fs.renameSync(targetFile, archivePath);
  console.log(`📦 草稿文件已归档至: ${path.relative(rootDir, archivePath)}`);

  console.log(`🎉 新案例 #${nextId} 入库与构建成功！`);
  console.log(`💡 下一步：运行 'npm run publish' 或 'node scripts/publish.js' 一键推送到 GitHub 上线！`);
}

run();
