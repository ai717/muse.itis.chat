# Muse 实战案例库独立站（muse.itis.chat）同步规范

确认日期：2026-11-08，依据源码包实际核对与上游 Muse 看板交付契约。

## 站点架构与读取规范
- 纯静态站点，无构建、无后端，支持直接部署至 Cloudflare Pages / GitHub Pages / 任何静态托管。
- 启动时并行加载 `data.json`（中文全量）和 `data-en.json`（英文全量）；在 `/en/` 独立路由下自动用 `../` 相对路径加载。
- `data-fallback.js` 与 `data-en-fallback.js` 分别导出 `window.FALLBACK_DATA` 与 `window.FALLBACK_DATA_EN`，在 file:// 本地离线或网络异常时自动秒级回退。
- 语言路由：`/` = 中文主页，`/en/` = 英文专属独立页（双向 hreflang 对称互联，独立 Schema.org 结构化数据，预渲染语义文章）。
- 英文难度映射：英文数据中 `difficulty` 保留中文，另加 `difficultyEn`（Beginner / Intermediate / Advanced）；`app.js` 优先读取 `difficultyEn`。

## 每期更新时 Muse 交付文件包（全量累积版，周二/周五）
1. `data.json` — 中文全量（site/subject/exportedAt/source + 9大分类 + issues期次追加 + cases全量累积，新案例 id 递增）。
2. `data-en.json` — 英文全量（字段与中文严格逐条 1:1 对齐，所有正文英文化，保留难度 `difficultyEn`，包含 keyPrompt 原文/翻译）。
3. `data-fallback.js` & `data-en-fallback.js` — 与两个 json 数据一致的离线回退脚本。
4. `UPDATE-NOTES-YYYY-MM-DD.md` — 本期变更清单。

## 静态 SEO 层一键自动化（零手动维护）
项目内置一键同步脚本：
```bash
node sync-site-seo.js
```
当上游覆盖新的 `data.json` 与 `data-en.json` 后，运行该脚本将自动完成：
1. **更新 `index.html`**：同步更新 Meta 描述、案例总数、Schema.org JSON-LD (ItemList)。
2. **更新 `en/index.html`**：同步更新英文 Meta 描述、Schema.org JSON-LD (ItemList)、搜索引擎预渲染卡片流、状态栏总数。
3. **增量生成静态详情页**：自动为新增的每个案例生成独立的 `/case/<id>/index.html` 独立落地页，内置独立 `TechArticle` 结构化数据。
4. **重建 `sitemap.xml`**：自动追加新案例 URL，更新全站 `lastmod` 与抓取权重。
5. **同步 Fallback 脚本**：自动刷新 `data-fallback.js` 和 `data-en-fallback.js`。
