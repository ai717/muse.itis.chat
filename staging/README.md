# Staging 待入库案例草稿区

本目录用于本地开发或人工录入新案例草稿，避免直接手动修改庞大的 `data.json`。

## 使用流程

1. **准备草稿**：
   复制 `staging/template.json`，命名为你的案例文件，例如 `staging/new-case-13.json`。
   按照模板填入中英文信息（无需手动指定 `id`，入库脚本会自动计算并续排全局连续递增的唯一 ID）。

2. **一键入库构建**：
   在项目根目录下运行：
   ```bash
   node scripts/add-case.js staging/new-case-13.json
   # 或运行
   npm run add staging/new-case-13.json
   ```
   脚本将自动完成：
   - 远程拉取防冲突同步（`git pull --rebase origin main`）
   - 提取最大 ID 并自动分配续排 ID（如 13）
   - 分解写入 `data.json` 与 `data-en.json`
   - 自动调用 `sync-site-seo.js` 执行全维校验、生成 `/case/<id>/` 独立落地页、更新中英文首页 SEO、Sitemap 与 Fallback
   - 将原草稿移入 `staging/archive/` 留档备查。

3. **一键推送上线**：
   ```bash
   node scripts/publish.js
   # 或运行
   npm run publish
   ```
