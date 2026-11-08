window.FALLBACK_DATA = {
  "site": "Muse 实战案例库",
  "subject": "Meta Muse（个人 AI 助手）真实用户实战案例",
  "exportedAt": "2026-11-09",
  "source": "Muse 空间 muse-shi-zhan-an-li-ku 的 getState 结构化导出",
  "categories": [
    {
      "id": "daily",
      "name": "日常生活",
      "hint": "订票、购物、行程"
    },
    {
      "id": "work",
      "name": "工作效率",
      "hint": "邮件、日历、文档"
    },
    {
      "id": "content",
      "name": "内容创作",
      "hint": "写作、视频、社媒"
    },
    {
      "id": "money",
      "name": "搞钱与生意经营",
      "hint": "获客、运营、变现"
    },
    {
      "id": "coding",
      "name": "编程与建站",
      "hint": "建站、做小游戏、写工具"
    },
    {
      "id": "study",
      "name": "学习研究",
      "hint": "调研、读书、学技能"
    },
    {
      "id": "family",
      "name": "家庭与健康",
      "hint": "家人、健康、家务"
    },
    {
      "id": "automation",
      "name": "自动化与定时任务",
      "hint": "定时、监控、自动流程"
    },
    {
      "id": "advanced",
      "name": "高阶玩法",
      "hint": "多步协作、建空间看板"
    }
  ],
  "issues": [
    {
      "id": 1,
      "date": "2026-11-08",
      "caseCount": 12,
      "status": "done"
    },
    {
      "id": 2,
      "date": "2026-11-09",
      "caseCount": 11,
      "status": "done"
    }
  ],
  "cases": [
    {
      "id": 1,
      "title": "用 Muse 一口气自动化 10 件日常：周更简报、降价提醒、晨间播报全托管",
      "valueLine": "照着原文 10 条现成 prompt 抄，就能把提醒、比价、新闻和健康打卡变成每天自动跑的定时任务。",
      "category": "automation",
      "difficulty": "入门",
      "score": 88,
      "heat": 78,
      "featured": false,
      "issueDate": "2026-11-08",
      "background": "作者想验证 Meta 的 Muse 不只是聊天，而是真能长期替自己盯事：每周新品、想买的东西降没降价、每天天气日程、睡前复盘等琐事分散在多个 App 里，容易漏。",
      "steps": [
        "先问 Muse「Give me 10 things you could automate for me right now」，让它结合已连接的账号列出可自动化的任务清单",
        "逐条套用原文模板下达定时任务，例如每周日中午推送游戏、漫画新品周报，每天查一次目标商品价格",
        "连接 iPhone 日历与健康数据，设置工作日晨间简报和下午久坐提醒",
        "设置每晚问责复盘：询问今天完成了什么、什么顺延，并给出明日 Top 3 优先级",
        "对带地点的日历事件开启出发提醒，让 Muse 提前查路况并告知出发时间"
      ],
      "keyPrompt": "Every [day], send me a digest of new releases this week: [products]. One line each, skip anything obvious.",
      "outputDesc": "原文逐项记录了真实结果：周报帮作者发现 Ace Combat 8 与 Marvel 漫画新刊；价格监控在 eBay 找到 20 美元以下含免邮的 WWE 蓝光；健康提醒在他久坐的一天 14 点准时戳他起身走动；赴朋友生日派对前给出路况提醒，最终提前 20 分钟到达。",
      "outputUrl": "",
      "reproduceTips": "需要 Muse App（iPhone）并按任务逐项授权日历、健康等连接器；定时类任务把模板里的 [day]/[time]/[products] 换成自己的时间和品类即可，从低风险的提醒类开始试。",
      "pitfalls": "原文未专门列坑；注意价格监控找到的是捆绑套装（含一件不想要的商品），下单前仍需人工核对 Listing 细节。",
      "source": {
        "name": "Elton Jones / Tom's Guide",
        "platform": "Tom's Guide",
        "grade": "C",
        "url": "https://www.tomsguide.com/ai/i-used-meta-muse-to-automate-10-tasks-from-reminders-to-trip-alerts-and-i-cant-believe-how-well-metas-ai-handled-everything",
        "publishedAt": "2026-10-07"
      }
    },
    {
      "id": 2,
      "title": "带新手从零上手 Muse：订阅审计一轮砍掉每年 1000 多美元",
      "valueLine": "先只给只读权限做一次订阅审计，就能把自动续费的漏钱口全部揪出来。",
      "category": "daily",
      "difficulty": "入门",
      "score": 84,
      "heat": 62,
      "featured": false,
      "issueDate": "2026-11-08",
      "background": "非技术用户刚下载 Muse，不知道先连什么、给什么权限最安全；同时邮箱里藏着已转付费的免费试用和发到冷门文件夹的自动续费通知，一直在白白扣钱。",
      "steps": [
        "在应用商店下载 Muse，用主 Facebook 账号登录并点 Get started，允许通知",
        "按弹窗连接 Gmail 与 Google Calendar，逐屏看清权限（该次实测 Gmail 为读取与退订、不能删信；日历权限包含删事件）",
        "先用小任务热身：问 10 月 23 日家庭日历有什么，再让 Muse 自己上网查一场演唱会的时间地点并补全日程",
        "填写 Soul（说话风格）与 Memory（个人与家庭信息），再在 Goals 页填真实目标",
        "发起订阅审计，Muse 先逐项访谈确认哪些订阅是真爱、哪些可砍，再给出带续费日期的清单"
      ],
      "keyPrompt": "",
      "outputDesc": "原文称审计列出带续费日期的订阅清单，当事人当场取消多项，其中 Clear 一项每年省 300 多美元，合计每年省 1000 多美元；页面明确注明这是演示者本人的一次个案数字、非典型结果。",
      "outputUrl": "",
      "reproduceTips": "从只读审计类任务开始，连接器一次只连一个并逐屏核对权限；支付方式只在确实要让 Muse 代购时再通过 Link by Stripe 连接。",
      "pitfalls": "原文提醒：日历授权包含删除事件的权限，批准前务必看清；给代理设定「不超过 50 美元随便花」未必会被严格遵守，付款环节要保留人工确认。",
      "source": {
        "name": "Allie K. Miller（视频整理：OpenClaw Database）",
        "platform": "博客",
        "grade": "B",
        "url": "https://openclawdatabase.com/news/videos/2026-10-09-meta-muse-setup-walkthrough-gmail-calendar-browser-soul-memory/",
        "publishedAt": "2026-10-09"
      }
    },
    {
      "id": 3,
      "title": "把 20 年前的博客复活成每日播客：Muse 扒 Wayback Machine 自动开播",
      "valueLine": "让 Muse 跨平台找回散落的旧内容、汇总成档，再每天随机朗读一篇推送给你。",
      "category": "content",
      "difficulty": "进阶",
      "score": 83,
      "heat": 68,
      "featured": false,
      "issueDate": "2026-11-08",
      "background": "Muse 设计总监 Alex Cornell 20 年前的博客辗转搬过 Blogger、Tumblr 等多个平台，内容散落难找、更没法日常重温，想把它变成一种轻松可消费的新形态。",
      "steps": [
        "给自己的 Muse（他取名 Marlowe）下达寻宝任务，让它去 Wayback Machine 与旧博客平台找回全部旧文",
        "让 Muse 把找回的文章汇总成一份稳定的 PDF 存档",
        "要求把存档转成个人播客：用合成语音朗读文章",
        "设置成每天早上推送一期、随机抽一篇朗读，长期自动运行"
      ],
      "keyPrompt": "The way that I like to read it now, just again for memory, is via a podcast, which is sent to me every morning, and it is just basically a random reading.",
      "outputDesc": "原文称产出为每日更新的个人播客：每天早上一期随机旧文朗读，作者形容听到 20 年前的自己吐槽「90% 的人都穿同色裤子」非常爆笑；同文另含把高尔夫/国际象棋数据做成可视化教练看板、把 Instagram 收藏做成复古购物目录的完整工作流（含截图）。",
      "outputUrl": "",
      "reproduceTips": "需要 Muse 的联网浏览与语音合成能力；先把旧内容的平台、账号、年代等线索给全，找回后先做 PDF 存档再转音频，便于核对完整性。",
      "pitfalls": "",
      "source": {
        "name": "Claire Vo / How I AI（受访：Alex Cornell）",
        "platform": "博客",
        "grade": "B",
        "url": "https://www.chatprd.ai/how-i-ai/alex-cornell-meta-muse-workflows",
        "publishedAt": "2026-10-12"
      }
    },
    {
      "id": 4,
      "title": "买二手车前让 Muse 做市调：生成两页砍价 PDF，开口价直指省 4000 美元",
      "valueLine": "让 Muse 先查同款成交价再生成谈判底稿，去车行前就握好开价、目标价和走人价。",
      "category": "money",
      "difficulty": "入门",
      "score": 82,
      "heat": 60,
      "featured": false,
      "issueDate": "2026-11-08",
      "background": "作者看中一辆标价 24394 美元的 2004 款二手 Jeep Wrangler，怕买贵；此前一台旧相机套装被本地相机店只开价 20 美元，更想先摸清真实行情再谈。",
      "steps": [
        "把 Cars.com 上的目标车链接交给 Muse，让它在聊天内打开浏览器逐项看车况与标价",
        "让 Muse 查同款车型的市场行情与「好价」区间，判断标价高出多少、卖家近期是否降过价",
        "让 Muse 生成两页谈判 PDF：第一页是给车行看的同款对比表，第二页是自己的应对话术底稿",
        "同一方法先练手相机套装：让 Muse 查 eBay 同款近月成交价，再倒推车行/回收商的合理收购区间"
      ],
      "keyPrompt": "",
      "outputDesc": "原文引 Muse 结论：该车被平台评为 Fair Deal，好价上限约 20578 美元，标价高出约 3800–5900 美元且 9 月 24 日刚降过 1500 美元；产出的两页 PDF 写明开价 19000、目标 20000–21000、超过 22000 走人，作者测算按开价成交约省 4000 美元（原文注明为纸面测算）。相机套装查得 eBay 成交 220–225 美元，远高于店铺 20 美元开价。",
      "outputUrl": "",
      "reproduceTips": "只需 Muse 免费版与其内置浏览器；把车型链接、里程、配置等参数给全，并明确只做调研、付款与签约自己完成。",
      "pitfalls": "原文实测：Muse 能做调研和话术，但无法无缝直接替你与车行谈判（需额外授权），且作者要求它冒充男性谈判被拒绝；谈判数字是策略测算，不等于 guaranteed 成交价。",
      "source": {
        "name": "AnnaMarie Houlis / Moneywise",
        "platform": "Moneywise",
        "grade": "C",
        "url": "https://moneywise.com/managing-money/budgeting/meta-muse-ai-agent-money-tasks",
        "publishedAt": "2026-10-10"
      }
    },
    {
      "id": 5,
      "title": "非程序员实测 Muse Code 修整站：11 条死链 5 分钟修完，还查出两个配置错误",
      "valueLine": "先在仓库副本上从最小的脏活开始试，逐条审 diff 再合并，是非程序员用编程代理的安全姿势。",
      "category": "coding",
      "difficulty": "高阶",
      "score": 82,
      "heat": 57,
      "featured": false,
      "issueDate": "2026-11-08",
      "background": "作者本人不写代码，站点靠 Hugo+GitHub+Vercel 且日常改动全由 AI 代理完成，想验证 Meta 10 月 12 日发布的终端编程代理 Muse Code「能读整个代码库」的说法在真实仓库上是否成立。",
      "steps": [
        "在 developer.meta.com 注册并订阅 50 美元档 Muse Code（该档含 Muse Wonder Full），在终端跑安装脚本，约 2 分钟完成",
        "先克隆一份仓库副本，绝不直接对线上项目动手",
        "按从小到大下达三项任务：修复全部站内死链、按现有页面结构新增一个内容板块、审计整个构建配置",
        "逐条阅读代理给出的 diff，看不懂就拒绝并要求用大白话解释，确认后才合并到正式仓库"
      ],
      "keyPrompt": "",
      "outputDesc": "原文记录实测结果：11 条死链不到 5 分钟全部修完且每条附一行说明；新板块约 20 分钟完成并自检了与模板的一致性；构建审计查出两个已悄悄拖累图片优化数月的错误配置，此前其他工具从未报出；另有一次约 40 分钟的重构全程无需人工盯守。",
      "outputUrl": "",
      "reproduceTips": "需要有真实 Git 仓库、会用终端粘贴安装脚本，并订阅 Muse Code；务必先跑副本、从可低成本核验的小任务开始，养成逐条审 diff 的纪律。",
      "pitfalls": "原文明确：前端设计品味明显落后（布局通用、按钮损坏、不守样式规范），让它改页面模板逻辑对、审美不行；纯终端无图形界面，文档按工程师口吻写；文中还提示应假定仓库内容会进入 Meta 云端，敏感代码慎用。",
      "source": {
        "name": "No Code Required",
        "platform": "博客",
        "grade": "B",
        "url": "https://www.nocoderequired.net/posts/meta-muse-code-ai-agent-reads-entire-codebase/",
        "publishedAt": "2026-10-20"
      }
    },
    {
      "id": 6,
      "title": "中文实测：让 Muse 只读官方资料做 Jev 应用场景 Excel 表，再用两轮追问改到能用",
      "valueLine": "限定只看官方页面、每条标注可点出处、没写的就写「官方没说」，能把技术资料整理成小白能读的表。",
      "category": "study",
      "difficulty": "入门",
      "score": 81,
      "heat": 58,
      "featured": false,
      "issueDate": "2026-11-08",
      "background": "作者渔夫要写一篇给非技术读者讲 TypeSafe AI 新模型 Jev 的文章，网上解读说法不一、资料晦涩，需要先把官方资料理成一份可核对的资料表，自己只负责写文章。",
      "steps": [
        "在 Mac 桌面端登录 Muse，先关掉「用数据训练模型」（按需）、把审批力度保持默认、调好主动消息频率",
        "把任务提示词发给 Muse：指定只看两个官方页面链接、表格每行讲一件事、三列依次为大白话说明、具体例子、出处链接，官方没提的必须写「官方没说」不许补",
        "指定产出为 Excel 文件「Jev应用场景资料表」并直接发在聊天里",
        "验收后第一轮追问改表头为「项目、说明、例子、来源」并去掉类型列、按基本信息/适合/不适合排序加小标题",
        "第二轮追问把来源列改成完整网址并设为可点击超链接"
      ],
      "keyPrompt": "我准备写一篇文章，给不懂技术的读者讲清楚 TypeSafe AI 新发布的 Jev 模型能用在什么地方。文章我自己写，你帮我把资料理清楚就行。",
      "outputDesc": "原文配多张过程截图，记录 Excel 资料表第一版生成后经两轮对话修改（精简表头、重排分组、修好可点击来源链接）的完整验收过程；同文还实测了 Gmail 一周 AI 资讯整理后存入 Notion 并设为每周一自动执行的定时任务。",
      "outputUrl": "",
      "reproduceTips": "需要可访问 Muse 的地区账号（作者用美区+Mac 桌面端演示）；连接 Gmail 时只给读取权限并在提示词里明确「只看邮件，不回复、不删除」；定时任务注意默认美国时区，提示词里写明北京时间。",
      "pitfalls": "原文实测第一版有表头啰嗦、来源列点不开等小问题，需要靠追问迭代，不要指望一版到位。",
      "source": {
        "name": "渔夫 / Agent Skills Dev",
        "platform": "博客",
        "grade": "B",
        "url": "https://agentskillsdev.com/guides/meta-muse/",
        "publishedAt": "2026-09-25"
      }
    },
    {
      "id": 7,
      "title": "让 Muse 每周定时上架帽子到 Vinted：二手卖家错峰发布打法",
      "valueLine": "把照片、定价和标题规则一次交清，再用每周定时上架避开批量发布的限流。",
      "category": "money",
      "difficulty": "进阶",
      "score": 80,
      "heat": 55,
      "featured": false,
      "issueDate": "2026-11-08",
      "background": "作者要在二手平台 Vinted 卖一批帽子，一次性批量上架疑似会被平台限制曝光，手动一件件定时发又太耗时间，想让 Muse 按节奏代发。",
      "steps": [
        "把每顶帽子的照片上传给 Muse，并逐件告诉它期望售价",
        "给 Muse 定标题规则，要求不堆砌多余信息",
        "在 Muse 内置浏览器里亲自登录 Vinted（Meta 称 Muse 看不到在该浏览器输入的密码）",
        "不要一次发完，设置成每周定时发布一件的排程，让 Muse 按表推进",
        "头几次运行后检查用量消耗，再决定是否扩展到更多库存"
      ],
      "keyPrompt": "",
      "outputDesc": "原文记录该流程已实际跑通：登录后由 Muse 按每周节奏逐件发布帽子；作者还给出可扩展打法——用一下午把 100 件商品的图片、详情、定价做成表格，再让定时代理逐件消化库存。",
      "outputUrl": "",
      "reproduceTips": "需要 Vinted 账号并在 Muse 内置浏览器中本人完成登录；先用少量库存验证标题规则与排程，再放大到表格化库存。",
      "pitfalls": "原文提醒：每几小时跑一次的高频定时任务会吃掉大量周额度（引 Roborhythms 的实测），每周一次的低频排程相对安全，但头几轮仍要盯用量。",
      "source": {
        "name": "iTechnically Kan",
        "platform": "博客",
        "grade": "B",
        "url": "https://itechnicallykan.com/blog/posts/what-is-meta-muse/",
        "publishedAt": ""
      }
    },
    {
      "id": 8,
      "title": "香港媒体实测：每天晚 8 点让 Muse 把频道更新做成 PDF 报纸经 WhatsApp 推送",
      "valueLine": "把每天要刷的 YouTube/IG 更新外包给 Muse 定时汇总成图文 PDF，到点自动发到 WhatsApp。",
      "category": "automation",
      "difficulty": "进阶",
      "score": 80,
      "heat": 64,
      "featured": false,
      "issueDate": "2026-11-08",
      "background": "unwire.hk 小编每天要反复刷自家 YouTube 频道与 Instagram 看更新，耗时且容易漏，想让 Muse 像秘书一样定时整理并主动汇报；同文还实测了 WhatsApp 遥控找图、发 Threads 等 6 个场景。",
      "steps": [
        "先在电脑端 Muse 对话里说「我想用 WhatsApp 来操作 Muse」，点它给的捷径进设置页",
        "用手机 WhatsApp 的「设置→已连接设备→新增设备」扫描 Muse 显示的 QR Code 完成连接",
        "在 WhatsApp 里对 Muse 下达定时指令：找 Unwire 在 Instagram、YouTube 最新 5 个内容，做成图文并茂的 PDF 报纸，每天 20 点汇报",
        "先让它立即生成一份验收版式与内容，再放行定时运行",
        "在 Muse 头像菜单里随时查看任务历史、已批准权限与每日排定工作，可编辑或清除"
      ],
      "keyPrompt": "請為我找 Unwire 在 Instagram,YouTube 最新的 5 個內容，並寫成圖文並茂的 PDF 報紙，每天 8PM 在 WhatsApp 向我匯報",
      "outputDesc": "原文配图展示成品 PDF 报纸版面：图文摘录了 Unwire YouTube 与 Instagram 的最新内容，可直接发 PDF 或链接；文中另有实测证据——同法遥控 Muse 在 Lightroom 按相机型号 ILCE-7M3 筛出照片、识别桌面人像照片经 WhatsApp 回传、以及汇总 AI 新闻并在人工确认后发到 Threads 且在账号里核验到帖文。",
      "outputUrl": "",
      "reproduceTips": "需要 Mac 端 Muse 的电脑操作权限与 WhatsApp 连接；指令里把信息源、条数、产出格式、汇报时间和渠道一次写清，敏感操作（如发帖）保留逐次确认。",
      "pitfalls": "原文提醒：Muse 用的是内置浏览器而非本人浏览器，只应交给它无需登录、无需隐私数据的任务，银行类操作强烈不推荐；用画面上的实际名称（如相机型号 ILCE-7M3）下指令成功率更高，Lightroom 滚动查找耗时比预期长。",
      "source": {
        "name": "unwire.hk 编辑部",
        "platform": "unwire.hk",
        "grade": "C",
        "url": "https://unwire.hk/2026/10/02/meta-muse/ai/",
        "publishedAt": "2026-10-02"
      }
    },
    {
      "id": 9,
      "title": "小生意实测三连：Muse 做竞品调研与 30 天上市计划，盈亏平衡算到个位数",
      "valueLine": "给死预算和成本约束，让 Muse 产出能直接开工的上市计划与盈亏平衡表，但定价决策别全信它。",
      "category": "money",
      "difficulty": "进阶",
      "score": 79,
      "heat": 52,
      "featured": false,
      "issueDate": "2026-11-08",
      "background": "BetterBizLab 想验证 Muse 对小商家到底有没有用，而不是跑问答基准：虚构一个护肤小品牌，需要 25 美元以下纯素面霜的竞品情报、30 天上市计划，以及 TikTok Shop 入驻的真实政策调研。",
      "steps": [
        "通过 Muse 网页版下达竞品任务：找 3 款美国在售 25 美元以下纯素面霜，要名称、价格、规格、卖点、来源链接、竞品弱点与 3 条差异化策略，并明确不许编造无法核实的信息",
        "给上市计划任务喂全约束：售价 19.99 美元、单件成本 5.50 美元、首批 500 件、营销预算 1500 美元、30 天、Shopify+TikTok Shop 双渠道、1 名店主+1 名兼职助理",
        "要求输出按周行动表、责任分工、预算分配、KPI、盈亏平衡、风险与 Go/No-Go 标准，且不许虚构运费与平台费率",
        "第三项任务只许查官方资源调研 TikTok Shop 入驻要求、费用与十步清单，并要求区分已核实/未知/建议，且禁止登录与提交表单"
      ],
      "keyPrompt": "",
      "outputDesc": "原文逐项核验并打分（总分 63/75）：竞品表给出 e.l.f. 13 美元、Versed 14.99 美元、The Ordinary 8 美元等真实产品与链接；上市计划把 1500 美元预算拆到广告 600、达人 400 等六项且加总无误，按不同单件变动成本算出回本销量 104/131/159/232 件；TikTok Shop 调研产出十步入驻清单并主动纠正了早前的费用说法。",
      "outputUrl": "",
      "reproduceTips": "关键是给全约束并明令「查不到就说不知道、不许编数字」；产出只作调研与计划初稿，定价、合规、财务决策必须人工复核。",
      "pitfalls": "原文揪出三处坑：把卖出 150 件直接等同获客成本 10 美元（件数不等于新客数）、样品的产品成本没计入营销账、给 1.5 人小团队排了日更 10–14 条视频的过载工作量；另有竞品弱点结论漏掉了 e.l.f. 的无香版本。",
      "source": {
        "name": "BetterBizLab",
        "platform": "博客",
        "grade": "B",
        "url": "https://betterbizlab.com/meta-muse-review/",
        "publishedAt": ""
      }
    },
    {
      "id": 10,
      "title": "重度用户公开 26 个已落地用法：让 Muse 自己写了个看板管全部项目",
      "valueLine": "没有现成功能就让 Muse 现写一个：自定义看板、定时新闻、订场订票都能变成长期资产。",
      "category": "advanced",
      "difficulty": "高阶",
      "score": 78,
      "heat": 60,
      "featured": false,
      "issueDate": "2026-11-08",
      "background": "用户 Noah 下载 Muse 后把能数字化的琐事尽量外包给自己的助手 Q，但项目和点子越来越多、散落在各处，他需要一个能和代理共同维护的可视化管理工具——市面上现成软件又不完全合意。",
      "steps": [
        "先花前期时间把 Muse 连接到需要的服务与 App，并教会它自己的做事偏好与审批规矩（如以自己名义发消息前必须先给草稿过目）",
        "直接向 Muse 提出「给我写一个自定义看板」的需求，按业务/个人分区、待办/搁置等列来组织项目",
        "日常只用对话操作看板：有新点子就让 Muse 建卡并放进指定分区与列，自己偶尔打开看全局、点选下一个要推进的项目",
        "不满意任何功能、配色就直接让 Muse 改，直到顺手为止",
        "同法扩展其他长期任务：每晚汇总关心的新闻领域、查网球场空位并订场、查电影场次座位并购票，结果同步进日历"
      ],
      "keyPrompt": "",
      "outputDesc": "视频逐字稿记录产出：一个由 Muse 编写并持续维护的个性化看板（分区+看板列齐全，可对话增删卡）；同视频还展示了已落地的定时新闻报告（可文字/语音/播客三种形态）、网球场预订并写入日历、电影票购买、连接 Plaid 做交易监控、监控 YouTube 评论与 Sentry 报错等 26 个用法。",
      "outputUrl": "",
      "reproduceTips": "需要 Muse 账号并逐个连接日历等服务（有官方连接器时更顺滑）；先立好审批规矩再放权，前期投入的调教时间会在后续自动化中回本。",
      "pitfalls": "原文坦言 Muse 并非最强的编程者，适合写看板这类被做过很多次的简单工具，复杂专业软件仍应买现成产品；以本人名义发消息/发帖务必坚持先审草稿。",
      "source": {
        "name": "Noah（视频逐字稿整理：SozAI）",
        "platform": "博客",
        "grade": "B",
        "url": "https://sozai.app/transcript/meta-muse-use-cases-implemented/",
        "publishedAt": ""
      }
    },
    {
      "id": 11,
      "title": "YouTube 实测：用 5 美元档 Muse Wonder 从零搭全栈网站，界面惊艳但登录有坑",
      "valueLine": "一次提示让 Muse Wonder 生成带数据库与登录的全栈站点只要几分钟，但认证与 Cookie 必须人工验。",
      "category": "coding",
      "difficulty": "高阶",
      "score": 76,
      "heat": 66,
      "featured": false,
      "issueDate": "2026-11-08",
      "background": "博主想实测刚发布的 Muse Wonder 编程能力到底行不行，选了最能暴露问题的任务：从零做一个带数据库和用户认证的完整网站，而不是静态页面。",
      "steps": [
        "开通视频中使用的 5 美元 Muse Coding 档位并完成设置",
        "写好测试提示词，指定技术栈：Astro + Tailwind CSS 建站、Drizzle ORM + LibSQL 做数据库、Better Auth 做登录",
        "观看 Muse 自主搭建全过程（视频 3:28 起完整呈现构建过程）",
        "从界面设计与 SVG 生成质量、登录流程、Cookie 与自主自测四个方面逐项验收",
        "对暴露的认证问题现场追问修复（视频 8:06 起记录追 Bug 与 9:21 起现场改的过程）"
      ],
      "keyPrompt": "",
      "outputDesc": "视频完整记录产出：一个从零生成的全栈网站，作者评价其 UI 设计与 SVG 生成出乎意料地精致；同时有明确的产出证据链——章节时间戳标出「构建 4 分钟但零自测」、登录 Bug 排查与现场修复全过程，结论部分（12:18 起）汇总其上限与限制。",
      "outputUrl": "",
      "reproduceTips": "需要 Muse Coding 付费档与一个明确的技术栈提示词；验收重点放在登录、Cookie 等看不见的底层环节，不要只看界面。",
      "pitfalls": "视频实测指出：Muse 搭完 4 分钟却完全没有自测，认证与 Cookie 环节藏有真实 Bug，需要人工追查修复后才能用。",
      "source": {
        "name": "YouTube 科技博主（Muse Wonder 首测视频）",
        "platform": "YouTube",
        "grade": "B",
        "url": "https://www.youtube.com/watch?v=IWBlo54qz9Y",
        "publishedAt": ""
      }
    },
    {
      "id": 12,
      "title": "扎克伯格最爱用法：健身房架摄像头，让 Muse 在回合间隙 1 分钟内给格斗反馈",
      "valueLine": "把镜头接给 Muse 并反复催它提速，能得到回合间隙的实时姿势纠错教练。",
      "category": "family",
      "difficulty": "高阶",
      "score": 74,
      "heat": 72,
      "featured": false,
      "issueDate": "2026-11-08",
      "background": "扎克伯格练综合格斗时回合间只有 1 分钟休息，普通视频复盘来不及在训练中用；他想让 Muse 直接盯着健身房摄像头，在间隙里给出能立刻调整的反馈。该案例来自他与 Alexandr Wang 在 Cheeky Pint 播客（2026-10-12）的自述，博客逐项核对了官方口径。",
      "steps": [
        "在健身房架设摄像头并把视频流交给 Muse 观看",
        "Muse 自行设计了工作流：把视频拆成静帧来分析，而不是直接处理整段视频（这一步并非扎克伯格下令，是 Muse 自己想出的）",
        "每回合结束的休息间隙，Muse 基于静帧给出重心分布、髋部位置等反馈，并警告「这个姿势容易被反击」",
        "因初版回复要约 30 秒，反复向 Muse 下令「休息只有 60 秒，给我提速、改进你自己」，逼它优化到间隙内可用"
      ],
      "keyPrompt": "Breaks are 60 seconds, make it faster. Improve yourself.",
      "outputDesc": "原文称这是扎克伯格的「最爱用法」：Muse 在回合间隙给出关于重心、髋位与易被反击姿势的具体反馈，且其自建的视频处理后端全程不展示代码；同文另记录其周末与 3 岁女儿烘焙时由 Muse 周六早通过 Instacart 备齐食材、Wang 的 Muse 每周从台湾与日本小众茶园订一款新茶的已落地用法。",
      "outputUrl": "",
      "reproduceTips": "需要能接入摄像头画面的 Muse 环境与稳定的训练场景光线；先给清硬约束（反馈必须在休息间隙内返回），再用迭代指令逼它优化速度。日本等地区能否接入健身房摄像头官方未确认，复现前先查本地连接器清单。",
      "pitfalls": "原文核对指出：该工作流的地区可用性官方未确认；同谈的烘焙订货依赖 Instacart 连接器，未在日本等地的官方连接器清单内，不能原样照搬。",
      "source": {
        "name": "SmartScope（据 Cheeky Pint 播客整理）",
        "platform": "博客",
        "grade": "B",
        "url": "https://smartscope.blog/en/blog/meta-muse-4-real-use-cases-mark-zuckerberg-2026/",
        "publishedAt": ""
      }
    },
    {
      "background": "编辑部收件匣动辄累积数百封信，公关邀请、新闻稿、电子报与内部通知混杂，人工逐封翻找耗时且容易漏掉真正要回的急件与催缴通知。",
      "category": "work",
      "difficulty": "入门",
      "featured": true,
      "heat": 55,
      "id": 13,
      "issueDate": "2026-11-09",
      "keyPrompt": "幫我看電子郵件裡面有沒有應該回覆但沒有回覆的信件",
      "outputDesc": "原文实测数字：Muse 共扫描 601 个对话串，筛出 4 笔需处理邮件并按急迫程度排序（人资差勤确认当日截止列最急、杂志核稿催件、稿件催交、受访者申诉回复）；另额外提醒一封无须回复但关乎个人权益的餐登记截止通知，并自动排除新闻稿与电子报。",
      "outputUrl": "",
      "pitfalls": "原文提示：分析催稿信时 Muse 发现该 Gmail 只有对方来信、缺前期往来，推测沟通可能在公司 Outlook 信箱——跨信箱往来仍需人工确认，别默认一个信箱就是全貌。",
      "reproduceTips": "需要 Muse 账号并授权 Gmail 读取；先用只读权限跑一次盘点，结果逐封人工核对后再决定是否开放代发。台湾等地尚未全面开放，跨区使用可能受限。",
      "score": 87,
      "source": {
        "grade": "C",
        "name": "远见杂志",
        "platform": "远见杂志",
        "publishedAt": "2026-10-21",
        "url": "https://www.gvm.com.tw/article/133924"
      },
      "steps": [
        "在 Muse 中连接 Gmail 并授权读取",
        "发出测试指令「幫我看電子郵件裡面有沒有應該回覆但沒有回覆的信件」",
        "Muse 扫描过去 30 天的邮件对话串，逐一判断最后一封是否已由本人回复",
        "再按内容实质与时效性筛选，只留下真有回复需求的信件并按急迫程度排序",
        "逐封人工复核排序结果，自己决定回不回、怎么回"
      ],
      "title": "远见实测：让 Muse 扫完 601 个邮件对话串，只留下 4 封真该回的信",
      "valueLine": "一句指令把几百封邮件压成按急迫度排序的待回清单，先从只读盘点开始最稳。"
    },
    {
      "background": "作者有一笔闲置的 Google Cloud 数据库每月扣 9.54 美元，自己都没察觉这笔说不清的 recurring charge，一直在白白续费。",
      "category": "money",
      "difficulty": "入门",
      "featured": false,
      "heat": 60,
      "id": 14,
      "issueDate": "2026-11-09",
      "keyPrompt": "Go through my Gmail receipts for the last 12 months and list every recurring charge I might not be using. For the one I pick, draft the refund request and show me before you send.",
      "outputDesc": "原文自述结果：Google 第一次拒绝退款，Muse 起草的跟进申诉在 39 分钟后争取到 114.14 美元全额免除；作者注明这是其本人账户第一周实测的个案结果。",
      "outputUrl": "",
      "pitfalls": "原文提醒：涉及 2FA 验证码的环节邮箱连接器会按设计剥离验证码、需本人输入；退款类任务要明确让 Muse 每天早晨检查回复、只在有回复时才通知，否则不会自动跟进。",
      "reproduceTips": "需要连接 Gmail（收据都在邮件里）；涉及发送与付款的不可逆一步保留审批卡确认；先从一笔小额闲置订阅练手。",
      "score": 86,
      "source": {
        "grade": "B",
        "name": "Sid Saladi / The Product Channel",
        "platform": "Substack",
        "publishedAt": "2026-09-21",
        "url": "https://sidsaladi.substack.com/p/meta-muse-use-cases-50-real-ways"
      },
      "steps": [
        "连接 Gmail，让 Muse 读取过去 12 个月的收据邮件",
        "发出原文指令，让它列出每一笔可能没在用的 recurring charge，自己圈定要追的那一笔",
        "让 Muse 起草退款申请，先给本人过目、批准后才发送",
        "对方首次拒绝后，让 Muse 针对回复内容再起草跟进申诉并发送",
        "把跟进设成每日检查：有回复才通知，无回复不打扰"
      ],
      "title": "追回闲置云服务扣费：Muse 申诉两轮拿回 114.14 美元",
      "valueLine": "让 Muse 先把一年的收据翻出闲置扣费，再替你写申诉并跟进到底，小钱也能追回来。"
    },
    {
      "background": "作者受够了拍照记卡路里 App 的老毛病：坚持不过两周就弃用，删了 App 订阅还在续费（原文引 Cal AI 官方 FAQ 称删 App 不等于取消订阅），想零额外订阅地把饮食记录坚持下来。",
      "category": "family",
      "difficulty": "入门",
      "featured": false,
      "heat": 58,
      "id": 15,
      "issueDate": "2026-11-09",
      "keyPrompt": "",
      "outputDesc": "原文给出 15 天实测账：15 天里 13 天有完整餐食记录、16 次晨间打卡无一缺席、Muse 主动抓出 3 次重复记录、遇到 3 条含糊记录时先询问而不乱猜；原文同时承认估算类工具通病（引 Cal AI FAQ 称其约 80% 准确，镜头看不见锅里那勺油）。",
      "outputUrl": "",
      "pitfalls": "原文划的硬线：这只是记录工具、不是饮食教练；未满 18 岁或有进食障碍史者不要用；热量与蛋白质目标、它猜的份量、以及任何医疗判断都必须自己把关。原文的完整设置 prompt 在付费段落，本条未收录以免编造。",
      "reproduceTips": "只需 Muse 本身、无需另付订阅；每餐坚持发照片或一句话是前提；晨间 8:40 的打卡时间按自己作息改；数字出错直接用大白话纠正让它改总账。",
      "score": 85,
      "source": {
        "grade": "B",
        "name": "Sid Saladi / The Product Channel",
        "platform": "Substack",
        "publishedAt": "2026-10-02",
        "url": "https://sidsaladi.substack.com/p/cal-ai-alternative-turn-meta-muse"
      },
      "steps": [
        "用一条设置 prompt 让 Muse 自己写好食物记录规则、只维护一个日志文件",
        "设置每天早上 8:40 主动发来昨天的汇总数字，晚上再补一句今日还剩多少额度",
        "每餐只发一张照片或一句话说明，Muse 负责记录并累计当日总量",
        "发现数字不对时直接用大白话指出，Muse 修正当天总账",
        "每周日做一次周回顾，检查重复记录与漏记"
      ],
      "title": "用 Muse 代替付费卡路里 App：连记 15 天，晨间打卡 16 次零缺席",
      "valueLine": "一餐一句话加每日晨间打卡，就能不用另开订阅把饮食记录坚持两周以上。"
    },
    {
      "background": "独立测评方 AI Agents Library 想验证 Muse 能否胜任 Facebook 主页的日常运营四件套：看数据、写文案、做配图、定时发布，而不是只看官方演示。",
      "category": "money",
      "difficulty": "进阶",
      "featured": false,
      "heat": 50,
      "id": 16,
      "issueDate": "2026-11-09",
      "keyPrompt": "",
      "outputDesc": "原文逐项打分（免费版，2026-10-10 实测）：主页数据分析 8.5/10（数字与 Meta Business Suite 完全一致）、定时发布 8.5/10（按约上线）、配图 7.5/10（初版偏离品牌、上传参考设计后接近，但图中文字仍会出错）、发公共群组帖 7/10（本人登录后经浏览器完成），四项平均 7.9/10；测评结论是可做受监督的助手、不建议无人值守发布。同一测评方更广的十项商家任务总评为 6.5/10。",
      "outputUrl": "",
      "pitfalls": "原文结论：有标准答案的任务（数据、排期）得分最高，需要品牌判断的配图得分最低；图中文字会写错，发布前必须逐张检查，不要无人值守自动发。",
      "reproduceTips": "需要 Facebook Page 管理权限并在 Muse 内置浏览器中本人完成登录；先喂它过往帖子学语气、再给一张自有参考设计校准配图；所有发布保留人工审批。",
      "score": 83,
      "source": {
        "grade": "B",
        "name": "AI Agents Library（由 Built with Muse 汇总）",
        "platform": "博客",
        "publishedAt": "2026-10-13",
        "url": "https://builtwithmuse.com/blog/what-muse-did-for-small-businesses"
      },
      "steps": [
        "用免费版 Muse 连接 Facebook Page，先让它读取主页分析数据并与 Business Suite 逐项核对",
        "让 Muse 基于过往帖子学习店主语气后撰写帖子文案",
        "让它生成配图；第一版偏离品牌时，上传一张自有参考设计再让它重做",
        "把定稿帖子设为定时发布，到点核验是否按约上线",
        "再测试发到公共 Facebook 群组：由本人在浏览器登录后让 Muse 经浏览器完成发布"
      ],
      "title": "独立打分实测：让 Muse 跑完 Facebook 主页四件套，平均 7.9 分但别无人值守",
      "valueLine": "数据与排期可以放心交给 Muse，配图与发布必须留人工终审——这是有分数为证的分工线。"
    },
    {
      "background": "小生意主 Justin Babcock 长期靠感觉发 Facebook 与 Instagram，不知道哪类内容真有效、最常发的主题到底行不行，只能凭猜运营。",
      "category": "content",
      "difficulty": "进阶",
      "featured": false,
      "heat": 45,
      "id": 17,
      "issueDate": "2026-11-09",
      "keyPrompt": "Set up a weekly task that runs every Monday morning. Before we do anything else, look at my actual numbers. Read my Facebook Page and Instagram professional account analytics for the last 90 days. Tell me: 1. My five best performing posts, and what they have in common. Format, length, first line, whether they led with a problem or an offer. 2. My five worst, and what those have in common. 3. Which topic I post about most, and whether it is the topic that actually performs. 4. What time and day my audience is actually active, not what the generic advice says. 5. The questions that come up most in my comments and messages. Keep it under a page. End with the one thing you would change about what I post, and why the data says so.",
      "outputDesc": "原文自述该任务每周一实际运行：读取近 90 天真实数据后给出最佳/最差各 5 条的共性、最常发主题与真实表现的对照、受众真实活跃时段与高频提问；作者举例有一次报告直接指出他发得最多的主题恰恰是表现最差的主题。",
      "outputUrl": "",
      "pitfalls": "原文强调安全边界写法：每条定时任务都要在指令里写明只准备、不代发（如 Do not post or send anything. Show me the drafts and wait for me to pick.），任务若擅自行动是先改指令而不是怪工具；不要一次建满三条，先跑一周建立信任再加。",
      "reproduceTips": "先在 Muse 中连接 Facebook Page 与 Instagram 专业账号，否则无数据可读；从一条周报开始，在 Upcoming 页管理与取消；定时任务每次运行都消耗周额度。",
      "score": 82,
      "source": {
        "grade": "B",
        "name": "Justin Babcock / Web Education Services",
        "platform": "博客",
        "publishedAt": "2026-10-15",
        "url": "https://www.webeducationservices.com/muse-on-autopilot"
      },
      "steps": [
        "在 Muse 里连接 Facebook Page 与 Instagram 专业账号",
        "把原文的每周数据任务整段发给 Muse，设定每周一早上运行",
        "Muse 读取近 90 天分析数据，输出最佳 5 条与最差 5 条的共性、最常发主题与真实表现的对照、受众活跃时段、高频评论问题",
        "报告控制在一页内，结尾只给一条最该改的建议及数据依据",
        "本人审阅后再决定改什么，Muse 只准备、不代发"
      ],
      "title": "每周一自动复盘社媒数据：Muse 读 90 天后台，只给一条最该改的建议",
      "valueLine": "把 90 天真实后台交给周一定时任务，停止凭感觉发内容，每周只改数据指出的那一件事。"
    },
    {
      "background": "Yahoo Finance 记者 Daniel Howley 要搬家，找搬家公司比价是最典型的苦差：找公司、把同样的户型信息重复讲四遍、再干等回电，半天就没了。",
      "category": "daily",
      "difficulty": "入门",
      "featured": false,
      "heat": 65,
      "id": 18,
      "issueDate": "2026-11-09",
      "keyPrompt": "",
      "outputDesc": "原文汇总的实测结果：Muse 实际联系了 4 家本地搬家公司，其中 2 家在约 2 分钟内回电、其余以邮件回复，用户只需在一次短对话里确认信息；同文另一项已核验的协调类成果是它连上 Yahoo Fantasy 后对比预测分数、提交 Kansas City 防守组的豁免申请、放掉 Green Bay 并在申请通过后设好首发阵容。",
      "outputUrl": "",
      "pitfalls": "原文重点警告：同一批实测里 Muse 给过已关门多年的餐厅、还编造过一个餐厅电话号码（被追问后承认并提醒别信未核实的号码）；凡地址、电话、价格、营业状态，务必让它给来源链接并自己点开核对。删除类操作也有前车之鉴（The Verge 实测在笔记本上清掉数千封推广邮件，但手机端 Google 登录反复出错）。",
      "reproduceTips": "把户型、楼层、有无电梯、搬家日期一次说清，并明确只比价不下单（原文给出可抄的任务模板：目标、限制、输出三段式，输出要求附来源链接）；联系方式开放范围先想清楚。",
      "score": 80,
      "source": {
        "grade": "B",
        "name": "Hao Kang / DEV Community（汇总 Yahoo Finance 等实测）",
        "platform": "DEV Community",
        "publishedAt": "",
        "url": "https://dev.to/hao_kang_82922526dfe5d934/meta-muse-in-13-real-world-tests-what-to-delegate-what-to-verify-3hlh"
      },
      "steps": [
        "把搬家条件一次说全：几居室、几楼、有无电梯、目标日期，并明确只询价、不预订不付款",
        "Muse 自行查找本地搬家公司，逐家代为发起询价并重复填写相同的户型信息",
        "等待回音：原文记录 4 家中 2 家约 2 分钟内回电，其余邮件回复",
        "让 Muse 把各家报价、可约时间与联系方式整理成表，每项附来源链接",
        "自己点开链接核对电话与价格后再决定选哪家"
      ],
      "title": "让 Muse 代打搬家比价电话：联系 4 家公司，2 家两分钟内回电",
      "valueLine": "重复沟通型的跑腿最适合外包：条件说清、只比价不下单、结果用表格加来源链接验收。"
    },
    {
      "background": "CNN 记者 Lisa Eadicicco 即将搬家，又要和朋友规划下月去 Cape May 的旅行：要打包的东西、可用时间、朋友的餐厅推荐全散在对话和邮件里，没人有空逐项整理。",
      "category": "daily",
      "difficulty": "入门",
      "featured": false,
      "heat": 75,
      "id": 19,
      "issueDate": "2026-11-09",
      "keyPrompt": "",
      "outputDesc": "原文记录产出：按天拆分的打包清单（含每天该花多少时间、单独留一袋首夜必需品等建议）；朋友回复后，Muse 把她的餐厅推荐整理成一份精致的 Google Doc 并附同类备选；同文另记录其成功预订周五约会之夜。",
      "outputUrl": "",
      "pitfalls": "原文实测翻车点：让 Muse 推荐约会地点时，它给出两家已关门多年的店；Ideas 页宣称能直接私信 Marketplace 卖家砍价，实测只能筛选刊登并起草消息、不能代发。地点与营业状态务必点开来源核对。",
      "reproduceTips": "需要连接 Google 应用（Gmail 与 Docs）；把待打包物品、可用时间和偏好（如每次只打包一小段）一次说清；预订与发送保留逐次确认。",
      "score": 79,
      "source": {
        "grade": "C",
        "name": "Lisa Eadicicco / CNN",
        "platform": "CNN",
        "publishedAt": "2026-09-23",
        "url": "https://www.cnn.com/2026/09/23/tech/meta-muse-ai-agent?cid=external-feeds_iluminar_meta"
      },
      "steps": [
        "把还没打包的物品、搬家前可用时间、以及想短时多次打包的偏好告诉 Muse（记者给自己的代理取名 Pip）",
        "Muse 生成按天排的打包计划，标注每天打包时长，并建议单独准备首夜必需品袋",
        "连接 Google 应用后，让 Muse 给朋友发邮件询问她对 Cape May 旅行的想法",
        "朋友回复后，让 Muse 把她的餐厅推荐整理成 Google Doc，并补充同类备选选项",
        "文档与计划逐项人工核对后再执行"
      ],
      "title": "CNN 实测：搬家打包按天排好，朋友的旅行推荐自动变成 Google 文档",
      "valueLine": "把物品、时间和偏好一次交清，Muse 能产出可直接照做的按天计划和可分享的旅行文档。"
    },
    {
      "background": "广告营销博主 Jon Loomer 想做一个帮广告主判断该不该用价值规则的决策工具，内容基础是他多年讲价值规则的文章、视频与播客稿，但他不想写代码、更不想雇开发。",
      "category": "coding",
      "difficulty": "进阶",
      "featured": false,
      "heat": 62,
      "id": 20,
      "issueDate": "2026-11-09",
      "keyPrompt": "",
      "outputDesc": "原文记录产出：名为 Value Rules Decision Tool 的在线工具已在其站点上线可用（引导用户逐项走完所用限制与条件、最后给出是否该用价值规则的结论）；作者明确说是在一个晚上做完的、全程零代码，但也坦言还不是成品、只是大体符合预期。同文另有已落地的用法：让其代理 Frank 每周一早上检查 Meta 帮助中心与开发者页面的变更。",
      "outputUrl": "",
      "pitfalls": "原文坦言过程并不省心：逻辑不按预期走、无用步骤等问题来回争执多轮，需要作者给出大量细致想法反复迭代，不要指望一句话出成品。",
      "reproduceTips": "桌面端使用更顺手；先把自己的文章、脚本与一份总纲文件喂成知识库再开工；上线方式可选 iframe 嵌入或 HTML 加自定义 CSS，作者选了后者。",
      "score": 78,
      "source": {
        "grade": "B",
        "name": "Jon Loomer",
        "platform": "博客",
        "publishedAt": "2026-09-15",
        "url": "https://www.jonloomer.com/muse-meta-ai-agent/"
      },
      "steps": [
        "先让 Muse（作者取名 Frank）调研自己当年的全部内容，给出可做工具的选题建议",
        "从 3 个初版想法中砍掉两个想做太多的，最终选定 Value Rules Decision Tool",
        "把博客文章、视频帖、播客脚本再加一份自写的 Master Brief 喂给 Muse 建知识库",
        "多轮迭代：逐项争论并修正不合预期的逻辑与多余步骤，直到流程顺手",
        "以添加 HTML 并更新自定义 CSS 的方式把工具嵌到自己页面上线"
      ],
      "title": "零代码一晚做出在线决策工具：博主喂自己全部内容让 Muse 建站",
      "valueLine": "把多年内容喂成知识库再多轮磨逻辑，不写代码也能上线一个真能用的专业小工具。"
    },
    {
      "background": "测评作者夫妇请的私厨每周上门备餐两次，厨师每月要手工做发票发送，既琐碎又容易拖，想把开票变成一句话的事。",
      "category": "automation",
      "difficulty": "入门",
      "featured": false,
      "heat": 55,
      "id": 21,
      "issueDate": "2026-11-09",
      "keyPrompt": "",
      "outputDesc": "原文记录：厨师只用 2 条聊天消息就完成设置，此后每月 1 号自动生成并发送发票；每月厨师只需告诉 Muse 本月工作小时数即可，作者称厨师本人印象深刻且不再被发票拖住。",
      "outputUrl": "",
      "pitfalls": "原文提醒：涉及发送与金额的动作要保留审批设置；另实测 Amazon 会拦截 Muse 的机器人访问，依赖被拦截站点的自动化不要硬上。",
      "reproduceTips": "只需 Muse 聊天界面、无需学任何自动化工具；把收款方、计费方式与每月发送日期一次说清，头两个月逐张核对发票金额再放行。",
      "score": 77,
      "source": {
        "grade": "B",
        "name": "Efficient App",
        "platform": "博客",
        "publishedAt": "2026-09-24",
        "url": "https://efficient.app/apps/muse"
      },
      "steps": [
        "厨师在 Muse 里用第 1 条消息说明需求：每月 1 号自动创建并发送发票给这对客户",
        "用第 2 条消息补齐计费信息与发送规则，完成设置",
        "此后每月厨师只需告诉 Muse 本月实际工作小时数",
        "Muse 按小时数自动生成发票并在每月 1 号发送",
        "客户在聊天里直接收到发票，无需再催"
      ],
      "title": "私厨每月自动开票：2 条消息设好，之后只报工时就自动发送",
      "valueLine": "重复性的月度开票用两条消息就能托管，适合所有按月结算的自由职业者照搬。"
    },
    {
      "background": "Simon Smith 想练西班牙语，市面 App 的词表和节奏都不合意，他决定用自己的词表和 CSV 数据亲手做一个只属于自己的练习 App，并好奇不同代理做同一个 App 的差距。",
      "category": "study",
      "difficulty": "进阶",
      "featured": false,
      "heat": 42,
      "id": 22,
      "issueDate": "2026-11-09",
      "keyPrompt": "",
      "outputDesc": "原文记录作者自述结果：同一个西语学习 App 他分别用 Muse 与另一工具各做一遍，两边都能用；他认为 Muse 版在实现速度、迭代速度与 App 本身响应速度上更好、构建过程无重大 Bug、按要求精简界面后反馈跟进快，更跟手的版本也让他学得更好。原文明确标注此为作者自述、整理方未复跑验证；页面给出的 prompt 是整理方拟的模板、非作者原话，故本条不收录为 keyPrompt。",
      "outputUrl": "",
      "pitfalls": "原文提到的坑：界面杂物需要多轮要求才删干净；App 慢会直接伤学习效果；若日后要开放给更多人用，需要另找带登录功能的托管方案重做。",
      "reproduceTips": "先写清自己的练习方式（词表、题型、一节课长什么样），词汇与课程数据用 CSV 保存以便迁移重建；先做可全屏打开的 artifact 初版，再反复让它删繁就简。",
      "score": 73,
      "source": {
        "grade": "B",
        "name": "Simon Smith（经 Bot Pages 整理）",
        "platform": "博客",
        "publishedAt": "2026-10-19",
        "url": "https://www.botpages.co/use-cases/build-a-personal-spanish-learning-app-in-muse-and-chatgpt"
      },
      "steps": [
        "先写下自己想怎么练：词表来源、练习题型、复习方式与每节课的样子",
        "在 Muse 里先做一版可全屏打开的 artifact 初版（作者最初就是在 Muse 里起步）",
        "把词汇与课程数据保存在 CSV 文件里，保证日后能换平台重建",
        "反复要求 Muse 删掉多余文字与干扰，直到屏幕上只剩练习本身",
        "日常使用中继续按反馈快速迭代速度与界面"
      ],
      "title": "用自己的词表让 Muse 做专属西语练习 App：同题对比下迭代更快",
      "valueLine": "用自己的 CSV 词表定制练习节奏，学语言的工具也能完全按自己的习惯来做。"
    },
    {
      "background": "一位用户的健康数据散在三个互不相通的 App 里：Whoop 管恢复与睡眠、Apple Health 管日常、Cronometer 管饮食营养，想看全貌只能逐个打开，拼不出一张完整的图。",
      "category": "advanced",
      "difficulty": "高阶",
      "featured": false,
      "heat": 48,
      "id": 23,
      "issueDate": "2026-11-09",
      "keyPrompt": "",
      "outputDesc": "原文（转述该用户在 X 的分享并附截图说明）：约 1 小时内 Muse 用其云端电脑把三方导出合并成一个健康看板，一屏呈现睡眠、训练与饮食；原文明确注明系用户自述、整理方未亲自复现，上手前应抽查几个数字与原 App 核对。",
      "outputUrl": "",
      "pitfalls": "原文提醒：健康数据敏感，只上传自己愿意分享的部分；看板只能当个人追踪工具、不能当医疗建议；交付后必须抽查关键数字与原 App 是否一致。",
      "reproduceTips": "需要 Muse 账号与三个 App 的数据导出文件；先想好要看的图（如睡眠对恢复、每日蛋白质）再上传；不写代码也能做，但要预留核对数据的时间。",
      "score": 71,
      "source": {
        "grade": "B",
        "name": "Agent Stack List（转述 X 用户分享）",
        "platform": "博客",
        "publishedAt": "2026-10-30",
        "url": "https://agentstacklist.com/trending/muse/health-dashboard-whoop-apple-health/"
      },
      "steps": [
        "分别从 Whoop 导出恢复与睡眠数据、从 Cronometer 导出饮食数据、导出 Apple Health 数据（如 CSV 或系统导出文件）",
        "把导出文件全部上传给 Muse",
        "向 Muse 描述想要的图表组合，例如睡眠与恢复的对照、每日蛋白质摄入",
        "Muse 在其云端电脑上合并三方数据并生成统一看板",
        "抽查看板上的几个关键数字与原 App 逐一核对无误后再日常使用"
      ],
      "title": "约 1 小时合并三方健康数据：Muse 把 Whoop、Apple Health 与食谱记录拼成一个看板",
      "valueLine": "不用写代码，把三个健康 App 的导出喂给 Muse 就能得到一屏看全的个人健康看板。"
    }
  ]
};
