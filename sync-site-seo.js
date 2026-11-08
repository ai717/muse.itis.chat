/**
 * sync-site-seo.js
 * 
 * 自动化同步脚本：
 * 当 Muse 看板交付新的 data.json 与 data-en.json 后，运行此脚本：
 * 1. 自动生成与 JSON 严格对齐的 data-fallback.js 与 data-en-fallback.js
 * 2. 自动生成/更新每个案例的独立静态落地页 case/<id>/index.html (含独立 TechArticle JSON-LD)
 * 3. 自动更新 index.html 与 en/index.html 内的 JSON-LD、SEO Meta 标签与预渲染内容
 * 4. 自动全量重建 sitemap.xml
 */

const fs = require('fs');
const path = require('path');

// Google Analytics & Google Tag Manager 统计与验证代码片段
const GA_SNIPPET = `  <!-- Google Analytics & Google Tag Manager (GTM-5GG9VBGS) -->
  <script async src="https://www.googletagmanager.com/gtm.js?id=GTM-5GG9VBGS"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  </script>
  <!-- Google Search Console 域名验证 -->
  <meta name="google-site-verification" content="GTM-5GG9VBGS">`;

function injectGA(html) {
  if (html.includes('GTM-5GG9VBGS')) return html;
  return html.replace('</head>', `${GA_SNIPPET}\n</head>`);
}

function injectPaginationPlaceholder(html) {
  if (html.includes('id="paginationWrap"')) return html;
  if (html.includes('<!-- 空结果提示 -->')) {
    return html.replace(
      '<!-- 空结果提示 -->',
      `<!-- 分页控件容器 (每页60项自动分页) -->\n      <div class="pagination-wrap" id="paginationWrap" style="display: none;"></div>\n\n      <!-- 空结果提示 -->`
    );
  }
  return html.replace(
    /(<div class="empty-state"\s+id="emptyState")/i,
    `<!-- 分页控件容器 (每页60项自动分页) -->\n      <div class="pagination-wrap" id="paginationWrap" style="display: none;"></div>\n\n      $1`
  );
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function validateData(dataZh, dataEn) {
  console.log('🔍 执行数据完整性与双语对齐门禁校验...');
  const errors = [];
  const warnings = [];

  if (!Array.isArray(dataZh.cases) || !Array.isArray(dataEn.cases)) {
    errors.push('data.json 或 data-en.json 缺少 cases 数组！');
    return { ok: false, errors, warnings };
  }

  if (dataZh.cases.length !== dataEn.cases.length) {
    errors.push(`中英文案例数量不一致：中文 ${dataZh.cases.length} 条 vs 英文 ${dataEn.cases.length} 条！`);
  }

  const enMap = new Map();
  dataEn.cases.forEach(c => enMap.set(c.id, c));

  const validCategories = new Set(dataZh.categories.map(c => c.id));
  const validDifficulties = new Set(['入门', '进阶', '高阶']);
  const validDifficultiesEn = new Set(['Beginner', 'Intermediate', 'Advanced']);

  dataZh.cases.forEach((czh, index) => {
    const expectedId = index + 1;
    // 门禁1：id 全局从 1 递增，连续无跳号
    if (czh.id !== expectedId) {
      errors.push(`案例 id 未按预期连续排列（必须全局从 1 连续递增无跳号）：位置 ${index + 1} 上的 id 为 ${czh.id}`);
    }

    // 门禁2：分类白名单
    if (!validCategories.has(czh.category)) {
      errors.push(`案例 [${czh.id}] 分类 '${czh.category}' 不在 9 大分类字典中！`);
    }

    // 门禁3：难度规范
    if (!validDifficulties.has(czh.difficulty)) {
      warnings.push(`案例 [${czh.id}] 中文难度 '${czh.difficulty}' 建议为 入门/进阶/高阶`);
    }

    // 门禁4：必填字段齐全检查
    const required = ['title', 'valueLine', 'background', 'steps', 'outputDesc', 'reproduceTips'];
    required.forEach(f => {
      if (!czh[f] || (Array.isArray(czh[f]) && czh[f].length === 0)) {
        errors.push(`案例 [${czh.id}] 中文缺少必填字段: ${f}`);
      }
    });

    // 门禁5：信源完整性 (name, platform, grade, url)
    if (!czh.source || !czh.source.name || !czh.source.platform || !czh.source.grade || !czh.source.url) {
      errors.push(`案例 [${czh.id}] 缺少完整的 source 信源信息（name/platform/grade/url）！`);
    }

    // 门禁6：与英文条目逐一逐字段严格对齐
    const cen = enMap.get(czh.id);
    if (!cen) {
      errors.push(`英文数据中缺失对应的 id=${czh.id}`);
    } else {
      if (cen.category !== czh.category) {
        errors.push(`案例 [${czh.id}] 中英文分类不一致: ${czh.category} vs ${cen.category}`);
      }
      if (cen.score !== czh.score) {
        errors.push(`案例 [${czh.id}] 中英文评分不一致: ${czh.score} vs ${cen.score}`);
      }
      if (cen.heat !== czh.heat) {
        warnings.push(`案例 [${czh.id}] 中英文热度不一致: ${czh.heat} vs ${cen.heat}`);
      }
      if (cen.source?.url !== czh.source?.url) {
        errors.push(`案例 [${czh.id}] 中英文信源链接不一致: 中文(${czh.source?.url}) vs 英文(${cen.source?.url})`);
      }
      if (!cen.difficultyEn) {
        warnings.push(`案例 [${czh.id}] 英文版未提供 difficultyEn，建议补充 Beginner/Intermediate/Advanced`);
      } else if (!validDifficultiesEn.has(cen.difficultyEn)) {
        warnings.push(`案例 [${czh.id}] 英文难度 '${cen.difficultyEn}' 建议为 Beginner/Intermediate/Advanced`);
      }
      required.forEach(f => {
        if (!cen[f] || (Array.isArray(cen[f]) && cen[f].length === 0)) {
          errors.push(`案例 [${czh.id}] 英文缺少必填字段: ${f}`);
        }
      });
    }
  });

  return {
    ok: errors.length === 0,
    errors,
    warnings
  };
}

function runSync() {
  console.log('🚀 开始执行站点 SEO 与静态层全量同步...');

  const rootDir = __dirname;
  const dataZhPath = path.join(rootDir, 'data.json');
  const dataEnPath = path.join(rootDir, 'data-en.json');

  if (!fs.existsSync(dataZhPath) || !fs.existsSync(dataEnPath)) {
    console.error('❌ 错误：未找到 data.json 或 data-en.json！');
    process.exit(1);
  }

  const dataZh = JSON.parse(fs.readFileSync(dataZhPath, 'utf8'));
  const dataEn = JSON.parse(fs.readFileSync(dataEnPath, 'utf8'));

  // 执行严苛的前置校验
  const validation = validateData(dataZh, dataEn);
  if (validation.warnings.length > 0) {
    validation.warnings.forEach(w => console.warn(`⚠️ 校验提示: ${w}`));
  }
  if (!validation.ok) {
    console.error('❌ 数据门禁校验失败，同步中止：');
    validation.errors.forEach(e => console.error(`   - ${e}`));
    process.exit(1);
  }
  console.log('✅ 数据完整性与双语对齐门禁校验 100% 通过！');

  const totalCases = dataZh.cases.length;
  const today = new Date().toISOString().split('T')[0];
  const latestDate = dataZh.issues?.[dataZh.issues.length - 1]?.date || today;

  console.log(`📦 当前收录案例总数: ${totalCases} 条，最新期次: ${latestDate}`);

  // 1. 同步 Fallback 文件
  fs.writeFileSync(path.join(rootDir, 'data-fallback.js'), 'window.FALLBACK_DATA = ' + JSON.stringify(dataZh, null, 2) + ';\n');
  fs.writeFileSync(path.join(rootDir, 'data-en-fallback.js'), 'window.FALLBACK_DATA_EN = ' + JSON.stringify(dataEn, null, 2) + ';\n');
  console.log('✅ data-fallback.js 与 data-en-fallback.js 同步完毕');

  // 构建分类字典
  const catMapZh = {};
  dataZh.categories.forEach(c => { catMapZh[c.id] = c.name; });
  const catMapEn = {};
  dataEn.categories.forEach(c => { catMapEn[c.id] = c.name; });

  // 2. 生成每个 case/<id>/index.html
  const caseBaseDir = path.join(rootDir, 'case');
  if (!fs.existsSync(caseBaseDir)) fs.mkdirSync(caseBaseDir, { recursive: true });

  dataZh.cases.forEach(c => {
    const caseDir = path.join(caseBaseDir, String(c.id));
    if (!fs.existsSync(caseDir)) fs.mkdirSync(caseDir, { recursive: true });

    const catName = catMapZh[c.category] || c.category;
    const stepsHtml = (c.steps && c.steps.length > 0) ? `
      <div class="detail-section">
        <div class="detail-label">做法步骤 (${c.steps.length} 步)</div>
        <ol class="steps-clean-list">
          ${c.steps.map((st, i) => `
            <li class="step-clean-item">
              <span class="step-clean-num">${i + 1}.</span>
              <span class="step-clean-text">${escapeHtml(st)}</span>
            </li>
          `).join('')}
        </ol>
      </div>
    ` : '';

    const promptHtml = c.keyPrompt ? `
      <div class="detail-section">
        <div class="detail-label">关键提示词 (Prompt)</div>
        <div class="prompt-box">
          <div class="prompt-bar">
            <span>PROMPT TEMPLATE</span>
            <button class="prompt-copy-btn" id="copyPromptBtn">复制提示词</button>
          </div>
          <code class="prompt-code" id="promptCode">${escapeHtml(c.keyPrompt)}</code>
        </div>
      </div>
    ` : '';

    const outputHtml = (c.outputDesc || c.outputUrl) ? `
      <div class="detail-section">
        <div class="output-callout">
          <div class="output-callout-label">产出与证据</div>
          ${c.outputDesc ? `<div class="output-callout-text">${escapeHtml(c.outputDesc)}</div>` : ''}
          ${c.outputUrl ? `
            <div style="margin-top: 10px;">
              <a href="${escapeHtml(c.outputUrl)}" target="_blank" rel="noopener noreferrer" class="output-callout-link">
                <span>查看产出链接</span> &rarr;
              </a>
            </div>
          ` : ''}
        </div>
      </div>
    ` : '';

    const pitfallsHtml = c.pitfalls ? `
      <div class="detail-section">
        <div class="pitfalls-callout">
          <div class="pitfalls-callout-label">踩坑提示</div>
          <div class="pitfalls-callout-text">${escapeHtml(c.pitfalls)}</div>
        </div>
      </div>
    ` : '';

    const schemaObj = {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": c.title,
      "description": c.valueLine,
      "articleSection": catName,
      "url": `https://muse.itis.chat/case/${c.id}/`,
      "datePublished": c.issueDate,
      "inLanguage": "zh-CN",
      "author": {
        "@type": "Person",
        "name": c.source?.name || "Muse"
      },
      "publisher": {
        "@type": "Organization",
        "name": c.source?.platform || "Web"
      }
    };

    const caseHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>${escapeHtml(c.title)} - Meta Muse 实战案例库</title>
  <meta name="description" content="${escapeHtml(c.valueLine)}">
  <link rel="canonical" href="https://muse.itis.chat/case/${c.id}/">
  <link rel="icon" type="image/svg+xml" href="../../favicon.svg">
  <link rel="apple-touch-icon" href="../../monimuse-icon.svg">
  <meta name="theme-color" content="#f5efe6">

${GA_SNIPPET}
  
  <meta property="og:type" content="article">
  <meta property="og:title" content="${escapeHtml(c.title)} - Meta Muse 实战案例">
  <meta property="og:description" content="${escapeHtml(c.valueLine)}">
  <meta property="og:url" content="https://muse.itis.chat/case/${c.id}/">
  <meta property="og:image" content="https://muse.itis.chat/monimuse-icon.svg">

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(c.title)}">
  <meta name="twitter:description" content="${escapeHtml(c.valueLine)}">
  <meta name="twitter:image" content="https://muse.itis.chat/monimuse-icon.svg">

  <link rel="stylesheet" href="../../style.css">
  <script type="application/ld+json">
  ${JSON.stringify(schemaObj, null, 2)}
  </script>
</head>
<body>
  <div class="bg-glow bg-glow-1"></div>
  <div class="bg-glow bg-glow-2"></div>

  <div class="app-container">
    <header class="site-header">
      <div class="header-main">
        <div class="brand-wrap">
          <a href="../../" style="display: flex; align-items: center; gap: 12px; text-decoration: none; color: inherit;">
            <div class="monimuse-avatar-wrap" title="MoniMuse">
              <img src="../../monimuse-icon.svg" width="44" height="44" alt="MoniMuse" style="border-radius: 12px;">
            </div>
            <div>
              <div class="site-title">Muse 实战案例库</div>
              <div class="site-subtitle">Meta Muse 真实用户案例与复现指南</div>
            </div>
          </a>
        </div>
        <div style="display: flex; gap: 10px; align-items: center;">
          <a href="../../" class="btn btn-outline" style="font-size: 0.84rem;">&larr; 返回案例库大盘</a>
        </div>
      </div>
    </header>

    <main>
      <div class="featured-card" style="margin-bottom: 30px;">
        <div class="featured-top-row">
          <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
            <span class="badge badge-cat">${escapeHtml(catName)} · ${escapeHtml(c.difficulty)}</span>
            <span class="badge badge-grade">Grade ${escapeHtml(c.source?.grade || 'B')}</span>
            <span class="stat-tag stat-score">★ 评分 ${c.score}</span>
            <span class="stat-tag stat-heat">🔥 热度 ${c.heat}</span>
            <span class="stat-tag">📅 期次 ${escapeHtml(c.issueDate)}</span>
          </div>
        </div>

        <div class="detail-flow">
          <div class="detail-header">
            <h1 class="detail-title" style="margin-top: 10px; cursor: default;">${escapeHtml(c.title)}</h1>
            <div class="detail-valueline">${escapeHtml(c.valueLine)}</div>
          </div>

          <!-- 任务背景 -->
          <div class="detail-section">
            <div class="detail-label">任务背景</div>
            <div class="detail-text">${escapeHtml(c.background)}</div>
          </div>

          <!-- 步骤 -->
          ${stepsHtml}

          <!-- 关键提示词 -->
          ${promptHtml}

          <!-- 产出与证据 -->
          ${outputHtml}

          <!-- 复现要点 -->
          <div class="detail-section">
            <div class="detail-label">复现要点</div>
            <div class="detail-text">${escapeHtml(c.reproduceTips)}</div>
          </div>

          <!-- 踩坑提示 -->
          ${pitfallsHtml}

          <!-- 信源核对 -->
          <div class="detail-section" style="margin-top: 6px;">
            <div class="source-verify-box">
              <div class="source-meta-left">
                <span>作者/报道：<strong>${escapeHtml(c.source?.name)}</strong></span>
                <span>&bull;</span>
                <span>平台：<strong>${escapeHtml(c.source?.platform)}</strong></span>
                <span>&bull;</span>
                <span>信源等级：<strong>Grade ${escapeHtml(c.source?.grade)}</strong></span>
                ${c.source?.publishedAt ? `<span>&bull;</span><span>发布日期：${escapeHtml(c.source.publishedAt)}</span>` : ''}
              </div>
              ${c.source?.url ? `
                <a href="${escapeHtml(c.source.url)}" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="padding: 6px 14px; font-size: 0.82rem;">
                  <span>打开原文报道</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              ` : ''}
            </div>
          </div>

          <!-- 底部行动 -->
          <div class="featured-footer" style="margin-top: 24px;">
            <a href="../../" class="btn btn-outline">&larr; 返回查看全部 ${totalCases} 个实战案例</a>
            ${c.source?.url ? `
              <a href="${escapeHtml(c.source.url)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                <span>访问原文报道</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            ` : ''}
          </div>
        </div>
      </div>
    </main>

    <footer class="site-footer">
      <div class="footer-content">
        <p class="footer-source">数据来源：${escapeHtml(dataZh.source)}</p>
        <p class="footer-note">严格依真实用户报道整理 · 支持本地离线与完整核验</p>
      </div>
    </footer>
  </div>

  <div class="toast" id="toast"></div>

  <script>
    const copyBtn = document.getElementById('copyPromptBtn');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        const code = document.getElementById('promptCode').innerText;
        navigator.clipboard.writeText(code).then(() => {
          const t = document.getElementById('toast');
          t.textContent = '提示词已复制到剪贴板！';
          t.classList.add('show');
          setTimeout(() => t.classList.remove('show'), 2000);
        });
      });
    }
  </script>
</body>
</html>`;

    fs.writeFileSync(path.join(caseDir, 'index.html'), caseHtml);
  });
  console.log(`✅ ${totalCases} 个独立案例详情页 (/case/<id>/) 同步生成完毕`);

  // 3. 全量重建 sitemap.xml
  let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- 首页 (中英双语) -->
  <url>
    <loc>https://muse.itis.chat/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://muse.itis.chat/en/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
`;

  dataZh.cases.forEach(c => {
    sitemapXml += `  <url>
    <loc>https://muse.itis.chat/case/${c.id}/</loc>
    <lastmod>${c.issueDate || today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>\n`;
  });

  dataZh.categories.forEach(cat => {
    sitemapXml += `  <url>
    <loc>https://muse.itis.chat/?cat=${cat.id}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
  });

  sitemapXml += `</urlset>\n`;
  fs.writeFileSync(path.join(rootDir, 'sitemap.xml'), sitemapXml);
  console.log('✅ sitemap.xml 全量重建完毕');

  // 4. 更新 index.html 中的案例总数描述与 Schema
  let indexHtml = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf8');
  indexHtml = indexHtml.replace(/收录 \d+ 个 Meta Muse/g, `收录 ${totalCases} 个 Meta Muse`);
  indexHtml = indexHtml.replace(/12 个真实用户/g, `${totalCases} 个真实用户`);
  indexHtml = indexHtml.replace(/12个真实用户/g, `${totalCases}个真实用户`);

  // 生成中文 Schema ItemList
  const schemaListZh = dataZh.cases.map((c, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "item": {
      "@type": "TechArticle",
      "headline": c.title,
      "description": c.valueLine,
      "articleSection": catMapZh[c.category] || c.category,
      "url": `https://muse.itis.chat/case/${c.id}/`,
      "datePublished": c.issueDate,
      "inLanguage": "zh-CN",
      "author": { "@type": "Person", "name": c.source?.name },
      "publisher": { "@type": "Organization", "name": c.source?.platform }
    }
  }));

  const fullSchemaZh = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://muse.itis.chat/#website",
        "url": "https://muse.itis.chat/",
        "name": dataZh.site,
        "description": dataZh.subject,
        "inLanguage": "zh-CN"
      },
      {
        "@type": "CollectionPage",
        "@id": "https://muse.itis.chat/#collection",
        "url": "https://muse.itis.chat/",
        "name": `${dataZh.site} - 真实用户案例与复现指南`,
        "description": dataZh.subject,
        "mainEntity": {
          "@type": "ItemList",
          "itemListElement": schemaListZh
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Meta Muse 实战案例库收录了哪些主要场景？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "涵盖日常订阅审计降本、一口气自动化10件日常定时任务、二手车砍价小抄、非程序员用Muse Code整站修复代码库、健身房实时教练等真实场景。"
            }
          },
          {
            "@type": "Question",
            "name": "案例库的提示词和数据真实吗？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "所有案例均来自一手报道与测试作者，保留信源评级与原始文章核对链接，不编造、不夸大。"
            }
          }
        ]
      }
    ]
  };

  indexHtml = indexHtml.replace(
    /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
    `<script type="application/ld+json">\n  ${JSON.stringify(fullSchemaZh, null, 2)}\n  </script>`
  );

  indexHtml = injectGA(indexHtml);
  indexHtml = injectPaginationPlaceholder(indexHtml);

  fs.writeFileSync(path.join(rootDir, 'index.html'), indexHtml);
  console.log('✅ index.html SEO、GA 统计与 Schema 更新完毕');

  // 5. 更新 en/index.html
  const schemaListEn = dataEn.cases.map((c, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "item": {
      "@type": "TechArticle",
      "headline": c.title,
      "description": c.valueLine,
      "articleSection": c.category,
      "url": `https://muse.itis.chat/case/${c.id}/`,
      "datePublished": c.issueDate,
      "inLanguage": "en",
      "author": { "@type": "Person", "name": c.source?.name },
      "publisher": { "@type": "Organization", "name": c.source?.platform }
    }
  }));

  const fullSchemaEn = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://muse.itis.chat/en/#website",
        "url": "https://muse.itis.chat/en/",
        "name": dataEn.site,
        "description": dataEn.subject,
        "inLanguage": "en"
      },
      {
        "@type": "CollectionPage",
        "@id": "https://muse.itis.chat/en/#collection",
        "url": "https://muse.itis.chat/en/",
        "name": `${dataEn.site} - Real User Case Studies & Playbooks`,
        "description": dataEn.subject,
        "mainEntity": {
          "@type": "ItemList",
          "itemListElement": schemaListEn
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What are the most popular real-world use cases for Meta Muse?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Real-world workflows include subscription audits saving over $1,000/year, automating 10 recurring daily routines, used car pre-purchase negotiation briefs, whole-codebase repairs with Muse Code by non-programmers, and real-time interval gym coaching via camera."
            }
          },
          {
            "@type": "Question",
            "name": "Are the prompts and outputs verified from real sources?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, every case study is linked to its primary source with credibility ratings (Grade A/B/C) and direct URLs to the original published article or video."
            }
          }
        ]
      }
    ]
  };

  const articlesHtmlEn = dataEn.cases.map(c => `
    <article class="case-card" data-id="${c.id}" data-cat="${c.category}" role="button" tabindex="0">
      <div class="card-top-row">
        <div class="card-top-left">
          <span class="badge badge-cat">${escapeHtml(catMapEn[c.category] || c.category)} · ${escapeHtml(c.difficultyEn || c.difficulty)}</span>
          <span class="badge badge-grade">Grade ${escapeHtml(c.source?.grade || 'B')}</span>
        </div>
        <div class="card-metrics">
          <span class="stat-tag stat-score">★ ${c.score}</span>
          <span class="stat-tag stat-heat">🔥 ${c.heat}</span>
        </div>
      </div>
      <h3 class="card-title">${escapeHtml(c.title)}</h3>
      <p class="card-valueline">${escapeHtml(c.valueLine)}</p>
      <div class="card-footer">
        <span class="card-source">${escapeHtml(c.source?.platform || c.source?.name)}</span>
        <span class="card-detail-action">View playbook &rarr;</span>
      </div>
    </article>
  `).join('\n');

  let enIndexHtml = fs.readFileSync(path.join(rootDir, 'en', 'index.html'), 'utf8');
  enIndexHtml = enIndexHtml.replace(/Explore \d+ verified Meta Muse/g, `Explore ${totalCases} verified Meta Muse`);
  enIndexHtml = enIndexHtml.replace(/12 verified real-world/g, `${totalCases} verified real-world`);
  enIndexHtml = enIndexHtml.replace(/Showing \d+ cases/g, `Showing ${totalCases} cases`);

  enIndexHtml = enIndexHtml.replace(
    /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
    `<script type="application/ld+json">\n  ${JSON.stringify(fullSchemaEn, null, 2)}\n  </script>`
  );

  enIndexHtml = enIndexHtml.replace(
    /<div class="cases-grid" id="casesGrid">[\s\S]*?<\/div>\s*<div class="empty-state"/,
    `<div class="cases-grid" id="casesGrid">\n${articlesHtmlEn}\n      </div>\n\n      <div class="empty-state"`
  );

  enIndexHtml = injectGA(enIndexHtml);
  enIndexHtml = injectPaginationPlaceholder(enIndexHtml);

  fs.writeFileSync(path.join(rootDir, 'en', 'index.html'), enIndexHtml);
  console.log('✅ en/index.html SEO、GA 统计、Schema 与预渲染文章卡片更新完毕');

  console.log('🎉 同步全部完成！所有静态 SEO、JSON-LD、详情页与 Sitemap 均已与最新数据 100% 同步！');
}

runSync();
