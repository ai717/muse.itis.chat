# Muse 实战案例库独立站（muse.itis.chat）同步规范

确认日期：2026-11-08，依据源码包、生产环境（GitHub Pages + muse.itis.chat）及 Muse 交付契约核准定稿。

## 生产环境在线状态（已验证）
- **正式域名**：`https://muse.itis.chat/`
- **托管服务**：GitHub Pages（`ai717/muse.itis.chat`，默认分支 `main`）
- **线上实测**：`/`、`/en/`、`/case/<id>/`、`/sitemap.xml`、`/data-en.json` 均已正常提供服务（HTTP 200，Server: GitHub.com）。

## 站点架构与读取规范
- 纯静态站点，无构建、无后端，支持直接部署至 Cloudflare Pages / GitHub Pages / 任何静态托管。
- 启动时并行加载 `data.json`（中文全量）和 `data-en.json`（英文全量）；在 `/en/` 独立路由下自动用 `../` 相对路径加载。
- `data-fallback.js` 与 `data-en-fallback.js` 分别导出 `window.FALLBACK_DATA` 与 `window.FALLBACK_DATA_EN`，在 file:// 本地离线或网络异常时自动秒级回退。
- 语言路由：`/` = 中文主页，`/en/` = 英文专属独立页（双向 hreflang 对称互联，独立 Schema.org 结构化数据，预渲染语义文章）。
- 英文难度映射：英文数据中 `difficulty` 保留中文，另加 `difficultyEn`（Beginner / Intermediate / Advanced）；`app.js` 优先读取 `difficultyEn`。

## 每期更新 Muse 核心交付物（收敛为精简三件套）
看板周二 / 周五 09:00 定时更新后交付：
1. `data.json` — 中文全量累积版：包含 site/subject/exportedAt/source + 9大固定分类 + issues期次追加 + cases全量累积（新增案例 id 从 13 开始严格连续续排，不跳号、不复用）。
2. `data-en.json` — 英文全量累积版：与中文逐条 1:1 严格对齐（id/category/score/heat/featured/issueDate/source.url 一致；其余文案英文化，带 `difficultyEn`，keyPrompt 原文为英文的保留、中文的译英）。
3. `UPDATE-NOTES-YYYY-MM-DD.md` — 本期变更清单：新期次 id 与日期、新增 case 的 id 列表与中英标题、featured 头条是哪条。
*(注：Muse 侧的 make_fallback.py 降级为校验工具，Fallback 文件由站点脚本自动生成，无需重复提交。)*

## 双方双重数据校验纪律
- **Muse 侧前置自检**：交付前校验 id 连续性、中英逐条对齐、必填字段完整性，自检通过方可打包交付。
- **站点侧守门校验**：`sync-site-seo.js` 启动时自动执行全维字段门禁检查（含分类合法性、双语对齐核对、信源完整度），若有异常立即报错中止，防止脏数据印入页面。

## 站点侧一键同步与上线流程
当收到 Muse 交付文件并覆盖后：
1. 执行一键同步：
   ```bash
   node sync-site-seo.js
   ```
   *自动完成：数据门禁校验 -> 再生双语 Fallback -> 更新双语首页 SEO 与全量 JSON-LD -> 更新英文预渲染卡片 -> 为新增 case 增量生成独立落地页 -> 全量重建 sitemap.xml。*
2. 提交推送到 GitHub：
   ```bash
   git add .
   git commit -m "feat(cases): sync issue YYYY-MM-DD"
   git push origin main
   ```
   GitHub Pages 约 20 秒内全自动完成全球 CDN 更新。
