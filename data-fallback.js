window.FALLBACK_DATA = {
  "site": "Muse 实战案例库",
  "subject": "Meta Muse（个人 AI 助手）真实用户实战案例",
  "exportedAt": "2026-11-14T05:03:32+08:00",
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
    },
    {
      "id": 3,
      "date": "2026-11-09",
      "caseCount": 26,
      "status": "done"
    },
    {
      "id": 4,
      "date": "2026-11-10",
      "caseCount": 2,
      "status": "done"
    },
    {
      "id": 5,
      "date": "2026-11-13",
      "caseCount": 2,
      "status": "done"
    },
    {
      "id": 6,
      "date": "2026-11-14",
      "caseCount": 1,
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
      "featured": false,
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
    },
    {
      "id": 24,
      "title": "两周实测：Muse 把 312 封未读邮件分进 9 条线，还顺手订下 3 间会议室",
      "valueLine": "连上 Gmail 和日历放跑两周，邮件分拣与你自己的判断约九成一致，日程冲突 7 次全拦下。",
      "category": "work",
      "difficulty": "进阶",
      "score": 82,
      "heat": 55,
      "featured": false,
      "issueDate": "2026-11-09",
      "background": "The AI Crux 的测评者把自己的真实 Gmail 和 Google Calendar 接给 Muse，连续实测两周，看它能不能扛住一个普通工作日的收件箱与日程，而不是只看发布会演示。连接耗时 11 分钟，第一天还因令牌过期重新授权了一次。",
      "steps": [
        "把 Gmail 与 Google Calendar 连接到 Muse（约 11 分钟）",
        "让 Muse 对 312 封未读邮件做分拣归类",
        "让它在订会议室前先检查日历冲突",
        "从邮件里提取客户提出的会议时间并建日程、发确认回复",
        "在活动时间线里逐条复核它的动作记录"
      ],
      "keyPrompt": "",
      "outputDesc": "两周内 Muse 把 312 封未读邮件分进 9 条线，测评者自评与其本人分类约 92% 一致；日历冲突 7 次全部提前拦下，并实际订下 3 间会议室。跨应用工作流 14 条首跑只完成 6 条，简化触发条件后升至 9 条。",
      "outputUrl": "",
      "reproduceTips": "先只连邮箱和日历两个源，从分拣和查冲突这类只读任务开始；跨应用自动化先简化触发条件再放量，并养成看活动时间线的习惯。",
      "pitfalls": "原文实测：一封客户邮件没写时区，Muse 按本地时区建了日程，作者开会前 40 分钟才发现；跨应用工作流首跑失败率约四成，多为这种不出声的错误。",
      "source": {
        "name": "The AI Crux",
        "platform": "科技博客",
        "grade": "C",
        "url": "https://www.theaicrux.com/2026/09/meta-muse-review-i-ran-my-inbox-through.html",
        "publishedAt": "2026-09-20"
      }
    },
    {
      "id": 25,
      "title": "一句话建好每日巡检：Muse 的定时目标在关掉 App 后照样跑",
      "valueLine": "用聊天一分钟设好每天自动检查网站的目标，后台持续运行；提醒的设置与取消各约 20 秒。",
      "category": "automation",
      "difficulty": "入门",
      "score": 78,
      "heat": 50,
      "featured": false,
      "issueDate": "2026-11-09",
      "background": "独立测评站 MetaMuseAI 在 2026 年 9 月 30 日至 10 月 5 日间，用一个真实免费版账号对 Muse 做了 11 项实测，覆盖调研、提醒、邮件审批、目标、WhatsApp 等场景，全程在 muse.ai 网页端完成。",
      "steps": [
        "在 muse.ai 网页端登录免费版账号",
        "用一句聊天指令让 Muse 创建一个每天自动检查指定网站的目标",
        "观察目标在关闭 App 后继续后台运行",
        "再用聊天指令把目标删除，验证可随时撤销",
        "顺手测试设置与取消次日 9 点提醒，各约 20 秒"
      ],
      "keyPrompt": "",
      "outputDesc": "每日网站巡检目标约一分钟建成，之后在后台持续运行；提醒设置与取消各约 20 秒完成。整个测试期轻量使用两天约消耗每周免费额度的 12%，发邮件前 Muse 会停下弹出审批（Allow / 始终允许 / Deny)，作者拒绝后无任何邮件发出。",
      "outputUrl": "",
      "reproduceTips": "从提醒和每日巡检这类低风险定时任务开始；发送、购买类动作保留逐次审批；先在网页端跑通再考虑连更多账号。",
      "pitfalls": "原文实测：首次任务在“Connecting…”卡了约一分钟，Goals 页曾加载 25 秒并卡在占位图；启动慢是常态，别误以为任务没提交。",
      "source": {
        "name": "MetaMuseAI（Alison Jack）",
        "platform": "独立测评站",
        "grade": "C",
        "url": "https://metamuseai.site/muse/review/",
        "publishedAt": ""
      }
    },
    {
      "id": 26,
      "title": "订位一句话搞定：Muse 订好晚 6 点双人桌并写进日历，可惜贵过预算",
      "valueLine": "Gizmodo 实测：说清时间和人数，Muse 当场订好餐厅并同步日历、确认邮件进箱——但它挑的店价格远超交代的预算。",
      "category": "daily",
      "difficulty": "入门",
      "score": 72,
      "heat": 70,
      "featured": false,
      "issueDate": "2026-11-09",
      "background": "Gizmodo 记者 Webb Wright 用免费版 Muse 处理拖了很久的杂事，第一件就是当晚看戏前在曼哈顿中城订一家价格适中的餐厅、双人、晚 6 点。他连接了个人 Gmail 和 Google Calendar 后把任务交了出去。",
      "steps": [
        "在设置页连接个人 Gmail 与 Google Calendar",
        "告诉 Muse:当晚在曼哈顿中城订一家价格适中、双人晚 6 点的餐厅",
        "从它给的首选里确认一家，让它完成预订",
        "让它把预订同步写进日历",
        "收到确认邮件后，自己打开菜单核对价格是否在预算内"
      ],
      "keyPrompt": "",
      "outputDesc": "Muse 迅速完成预订并把事项加进日历，确认邮件随即到达收件箱。但记者随后打开餐厅菜单发现价格明显高于他交代的预算区间，来回沟通又慢，最终放弃、改去自己熟悉的餐厅 walk-in。",
      "outputUrl": "",
      "reproduceTips": "订位时把预算上限写成硬数字并要求下单前回报总价；确认邮件到手后自己再核一遍菜单价格，别等到了店里才发现超标。",
      "pitfalls": "原文实测：Muse 挑的餐厅价格远超预算，且后续对话响应慢；涉及钱的筛选条件必须写死并二次确认。",
      "source": {
        "name": "Webb Wright / Gizmodo",
        "platform": "Gizmodo",
        "grade": "C",
        "url": "https://gizmodo.com/i-asked-muse-to-help-me-book-my-holiday-travel-it-didnt-fly-far-2000823264",
        "publishedAt": "2026-10-12"
      }
    },
    {
      "id": 27,
      "title": "把 4 个日期和常用保姆名单交给 Muse：午饭还没做完，托育预约全订好了",
      "valueLine": "华尔街日报实测：登录一次之后，Muse 在记者做午饭的工夫里，把四个时段的保姆预约全部完成，还主动提出同步日历。",
      "category": "family",
      "difficulty": "进阶",
      "score": 83,
      "heat": 74,
      "featured": false,
      "issueDate": "2026-11-09",
      "background": "《华尔街日报》记者 Nicole Nguyen 用一周测试 Muse（她的代理被命名为“终结者”），其中最棘手的行政任务是家里那套迷宫般的托育预订平台：时段多、常用保姆要指定，手动订一次很费神。",
      "steps": [
        "把四个需要的日期与时段、以及常用保姆名单交给 Muse",
        "在托育平台页面亲自完成一次登录",
        "放手让 Muse 在平台上逐个提交预约",
        "让它把预约同步进 Google Calendar",
        "在平台和日历里各核对一遍结果"
      ],
      "keyPrompt": "",
      "outputDesc": "记者手动登录后，Muse 在她做午饭期间把四个时段的保姆预约全部订好，并主动提出把事项加入 Google Calendar。记者评价这类“填表型”行政活正是它最能减负的地方。",
      "outputUrl": "",
      "reproduceTips": "这类平台先由本人完成登录再交棒；把日期、时段、指定人员一次列清，订完后在平台与日历双处核对。",
      "pitfalls": "原文提示：平台登录必须本人完成，Muse 不能代输密码；同文另一项测试里它把健身房推荐搞错了城市，涉及判断的推荐结果要复核。",
      "source": {
        "name": "Nicole Nguyen / 华尔街日报",
        "platform": "报纸",
        "grade": "C",
        "url": "https://www.wsj.com/tech/personal-tech/meta-muse-ai-agent-review-ab956101",
        "publishedAt": ""
      }
    },
    {
      "id": 28,
      "title": "Muse 登录 AT&T 账户查出隐藏折扣：话费每月立省 40 美元",
      "valueLine": "让代理钻进运营商账户找从未启用的折扣，一次五到十分钟的对话换来每年 480 美元。",
      "category": "money",
      "difficulty": "进阶",
      "score": 85,
      "heat": 78,
      "featured": false,
      "issueDate": "2026-11-09",
      "background": "创作者 Peter Yang 把自己的 AT&T 账户交给 Muse 审计：他在 Muse 的安全存储里存好账号密码，让代理用内置浏览器登录账户逐项查账单。四条线路每月话费约 200 美元，他一直没注意运营商有个现成的自动付款折扣从没启用过。",
      "steps": [
        "把 AT&T 账号密码存入 Muse 的安全凭据存储",
        "让 Muse 用内置浏览器登录账户，逐项拆解四条线路的账单构成",
        "Muse 找出从未启用的每线每月 10 美元 AutoPay 加无纸化折扣",
        "确认切换付款方式为银行账户，银行账号信息由本人亲自输入",
        "折扣当场生效，每月话费直降 40 美元"
      ],
      "keyPrompt": "",
      "outputDesc": "Muse 查出把付款方式从信用卡换成银行账户即可启用每线每月 10 美元的 AutoPay 加无纸化折扣，四条线合计每月省 40 美元、每年 480 美元，折扣当场生效，整个过程只花了五到十分钟对话。轮到在 AT&T 网站输入银行账号和路由号码时，Muse 出于隐私拒绝代填，由 Yang 本人输入。",
      "outputUrl": "",
      "reproduceTips": "先把运营商账号密码存入 Muse 的安全存储，再让它登录查账、专门找未启用的折扣（如 autopay、paperless）；真正改付款方式前自己核对一遍账单明细。",
      "pitfalls": "涉及银行账号等敏感凭据的环节 Muse 会停手，必须本人输入；同一视频里它给 Xfinity 打电话谈到的优惠，最后仍需账户持有人本人回电才能最终确认。",
      "source": {
        "name": "Peter Yang（All Things Muse 整理）",
        "platform": "博客",
        "grade": "B",
        "url": "https://www.allthingsmuse.com/articles/building-with-muse-peter-yang/",
        "publishedAt": ""
      }
    },
    {
      "id": 29,
      "title": "把三个 Google 账号交给 Muse：每天早 7 点的个人简报自动送达",
      "valueLine": "十分钟设置换来每天准时的全家日程简报和只报急事的收件箱盯梢。",
      "category": "automation",
      "difficulty": "入门",
      "score": 84,
      "heat": 70,
      "featured": false,
      "issueDate": "2026-11-09",
      "background": "作者 Marcus Molina 用了两周 Muse 后发现，真正的价值不在聊天，而在连接：他把三个 Google 账号的日历和邮箱都接了进来，一次性说清自己想要什么样的工作日开局。之后每天的生活行政事务基本被这套定时简报和收件箱盯梢接管。",
      "steps": [
        "把三个 Google 账号的日历和 Gmail 依次连接进 Muse",
        "一次性描述简报需求：会议、孩子的比赛与课程、天气、未完成提醒",
        "设置每天早上 7 点定时推送个人简报",
        "让 Muse 持续盯收件箱，只在需要做决定时标出邮件并附截止时间",
        "渡轮、酒店等确认邮件自动与日历交叉核对是否已排进行程"
      ],
      "keyPrompt": "",
      "outputDesc": "每天早上 7 点准时收到一份个人简报：汇总三个账号的会议、孩子的排球比赛和钢琴课，加一行天气，最后附上未完成的提醒。邮箱方面，它在政府 ACTION REQUIRED 邮件到达当天下午就发出提醒并附具体步骤；把教练发来的 243.39 美元赛事周末酒店房间邀约连同周二截止时间一起标出；渡轮订票确认还会和日历核对两段行程是否都在。整套设置只花了约十分钟。",
      "outputUrl": "",
      "reproduceTips": "先连日历再连邮箱，一次把简报要素说清（会议、家人活动、天气、提醒）；每周只新增一个连接，跑稳了再加下一个。",
      "pitfalls": "简报质量取决于连接的完整度：只连一个账号就会漏掉其他账号里的家庭日程；需要做决定的邮件它只负责标出和给截止时间，回不回仍要自己判断。",
      "source": {
        "name": "Marcus Molina",
        "platform": "Medium",
        "grade": "B",
        "url": "https://medium.com/@marcus_49480/your-ai-assistant-is-useless-until-you-plug-it-into-your-life-a529eef5d4f2",
        "publishedAt": "2026-10-13"
      }
    },
    {
      "id": 30,
      "title": "把 PDF 丢给 Muse 生成日历事件：创作者录屏实测 11 项日常任务",
      "valueLine": "11 项任务全程录屏可核查，最值得抄的是 PDF 转日历和只写草稿不代发的邮件流。",
      "category": "work",
      "difficulty": "进阶",
      "score": 82,
      "heat": 74,
      "featured": false,
      "issueDate": "2026-11-09",
      "background": "创作者 Leslie Samuel 用录屏方式把 11 项真实日常任务逐项交给 Muse 跑给他看：清理收件箱、批量退订、西语练习、把 PDF 变成日历事件、健身计划打卡、Marketplace 上架与买家跟进、商务邮件草稿、每日 AI 新闻播客等，全程坚持一条规则——任何邮件发送前必须经他本人批准。",
      "steps": [
        "给 Muse 连接邮箱与日历，并设定发送前必须本人批准的规则",
        "把收到的 PDF（如行程单、确认函）交给 Muse，自动生成完整日历事件",
        "让 Muse 清理收件箱并批量退订不再需要的邮件",
        "商务邮件只让它写到草稿，自己审过再发送",
        "用录屏逐项复盘 11 项任务，标出哪些可放手、哪些要盯"
      ],
      "keyPrompt": "",
      "outputDesc": "11 项任务全部在录屏中实际跑通，其中把收到的 PDF 直接转成带完整信息的日历事件、清理收件箱并批量退订、起草商务邮件（停在草稿等批准）是最能直接照搬的办公流；视频按时间轴逐项展示了哪些做得好、哪些还需要人盯着。",
      "outputUrl": "",
      "reproduceTips": "从只读和草稿类任务开始：先给只读加草稿权限，让它把 PDF 转日历、清收件箱、写邮件草稿，所有发送动作保留人工批准，跑顺了再逐步放权。",
      "pitfalls": "作者明确要求发送类动作必须本人批准后才执行；涉及对外沟通和平台刊登的任务，初期都要逐项抽查结果再放行。",
      "source": {
        "name": "Leslie Samuel",
        "platform": "YouTube",
        "grade": "B",
        "url": "https://www.youtube.com/watch?v=RCKBIY1gxkI",
        "publishedAt": "2026-10-06"
      }
    },
    {
      "id": 31,
      "title": "临出发才规划纽约亲子游：Muse 在一个对话里订好停车、渡轮票和酒店",
      "valueLine": "一个对话订完一趟自驾亲子游的全部零碎预订，还会按体力安排顺路停靠。",
      "category": "daily",
      "difficulty": "入门",
      "score": 80,
      "heat": 58,
      "featured": false,
      "issueDate": "2026-11-09",
      "background": "Rajesh Akinepalli 带父亲去纽约旅行，机票几周前就订好了，其他一切拖到最后一刻毫无计划。临行前他把整趟行程交给 Muse 在同一个对话里逐项搞定：市区停车、轮渡票、沿途酒店，都不用在多个 App 之间来回拼凑。",
      "steps": [
        "把父子同行、时间紧、怕累等约束一次告诉 Muse",
        "在同一个对话里先订曼哈顿停车位",
        "接着订自由女神像渡轮票，再订自驾沿途酒店",
        "让它按驾驶强度插入 Letchworth State Park 等顺路停靠点",
        "自己复核机场摆渡等关键班次信息后出发"
      ],
      "keyPrompt": "",
      "outputDesc": "Muse 在一个对话里接连订好曼哈顿的停车位、去自由女神像的渡轮票和自驾沿途的酒店；它还顾及了父子俩的时间约束和长途驾驶的体力，建议了 Letchworth State Park 这类顺路的停靠点。整趟行程不到两天全部玩完。",
      "outputUrl": "",
      "reproduceTips": "把同行人、体力约束、必去点和预算一次说清，让 Muse 在一个对话里连续订停车、门票和酒店；涉及机场接驳和班次时刻的结果务必去官网二次核对。",
      "pitfalls": "它推荐的一班 Newark 机场到 LaGuardia 的摆渡车根本不存在，差点误事；线上订渡轮票为保确认名额价格偏高，现场其实没什么人。交通时刻类信息必须自己再核一遍。",
      "source": {
        "name": "Rajesh Akinepalli",
        "platform": "LinkedIn",
        "grade": "B",
        "url": "https://www.linkedin.com/posts/akinepalli_ai-travel-family-activity-7524512200460435456-VCyv",
        "publishedAt": "2026-11-06"
      }
    },
    {
      "id": 32,
      "title": "一周实测：Muse 在 Marketplace 卖掉 180 美元的自行车，还替他跟买家还价",
      "valueLine": "刊登、谈判、成交全流程代办但一步不越权，卖闲置第一次有了助理。",
      "category": "money",
      "difficulty": "进阶",
      "score": 86,
      "heat": 80,
      "featured": false,
      "issueDate": "2026-11-09",
      "background": "创作者 Full Value Dan 用整整一周把自己的真实生活交给 Muse 做压力测试，只测四件真事：订晚餐、卖闲置、交罚单和管私信。他要求所有花钱和发消息的动作都停下来等他点头，想看这个免费代理到底能不能当日常助理用。",
      "steps": [
        "把自行车照片和 180 美元标价交给 Muse，在 Marketplace 生成刊登",
        "买家出价 150 美元后，让 Muse 按预设底线起草 170 美元回价",
        "每一步谈判消息发送前都经本人批准",
        "成交安排与晚餐预订、罚单代缴等其他跑腿在同一周陆续跑通",
        "按助理 9/10、综合 8.5/10 的评分复盘哪些活适合长期交给它"
      ],
      "keyPrompt": "",
      "outputDesc": "他标价 180 美元的自行车被 Muse 挂上 Facebook Marketplace，买家出价 150 美元、他回价 170 美元的来回谈判都由 Muse 经手且每一步都经他批准；订晚餐走一次性 Stripe 虚拟卡，餐厅拿不到真实卡号；一张停车罚单拍照发过去就被代缴；私信被分拣并标出疑似诈骗。他给出的评分是助理能力 9/10、综合 8.5/10。",
      "outputUrl": "",
      "reproduceTips": "卖闲置时把底价和可接受还价幅度先划好，让 Muse 只负责刊登、回复和谈判草稿，任何价格承诺发出前都经你确认。",
      "pitfalls": "精确的图片编辑它做不好，跟进类任务偶尔会掉链子，视频生成也有限制；涉及钱的谈判务必保持草稿加确认模式，不要全自动放行。",
      "source": {
        "name": "Full Value Dan",
        "platform": "YouTube",
        "grade": "B",
        "url": "https://www.youtube.com/watch?v=_cx6wD_4cRs",
        "publishedAt": ""
      }
    },
    {
      "id": 33,
      "title": "美发沙龙老板实测一周：Muse 把色卡变成 Excel 订货单，还自动核对缺货",
      "valueLine": "图片色卡和纸质订货单这种最土的后台活，也能变成自动表格加缺货清单。",
      "category": "work",
      "difficulty": "进阶",
      "score": 78,
      "heat": 66,
      "featured": false,
      "issueDate": "2026-11-09",
      "background": "Rich Rose 经营美发沙龙生意，后台订货全靠手工：供应商色卡是图片、订货单是纸质照片、价格和缺货情况要逐项人工核对。他用一周时间在真实业务里测 Muse，想看它能不能把这摊后台杂活接过去。",
      "steps": [
        "把供应商色卡图片发给 Muse，要求转成带公式的 Excel 订货表",
        "核对样表的字段、价格和计算公式无误",
        "把纸质订货单拍照发给它，自动识别并录入",
        "让它同步更新最新价格并交叉核对缺货品项",
        "拿着缺货清单再决定补货和下单"
      ],
      "keyPrompt": "",
      "outputDesc": "Muse 把供应商色卡转成了可自动计算的定制 Excel 订货表，又能扫描纸质订货单照片、更新价格，并自动交叉核对哪些货品缺货；这些任务都在它自己的网页浏览器里后台运行，人可以走开去忙别的。",
      "outputUrl": "",
      "reproduceTips": "把色卡、价目表这类图片资料直接发给它，先让它产出一张样表核对字段和公式，再让它批量处理照片订货单并输出缺货清单。",
      "pitfalls": "视频为未剪辑实测，复杂表格第一次生成后仍需人工核对公式和价格；涉及真实采购金额的环节不要跳过复核直接下单。",
      "source": {
        "name": "Rich Rose",
        "platform": "YouTube",
        "grade": "B",
        "url": "https://www.youtube.com/watch?v=iP_jf9WxE9s",
        "publishedAt": ""
      }
    },
    {
      "id": 34,
      "title": "一周十件跑腿实测：Muse 做对 5 件、做错 2 件，省下约 1 小时 10 分钟",
      "valueLine": "带完整翻车记录的实测最有参考价值：订餐和邮件最靠谱，钱和日期的批准必须逐字看。",
      "category": "daily",
      "difficulty": "入门",
      "score": 76,
      "heat": 62,
      "featured": false,
      "issueDate": "2026-11-09",
      "background": "创作者 DY Playbook 做了一次少见的诚实实验：连续七天给 Muse 派十件真实跑腿——订餐、按菜谱买菜、发邮件、改牙医预约、买演唱会票、订火车、续停车许可证、买 150 美元以内的空气净化器、订酒店、卖自行车——并用做对、做错、卡住、自己收回四档逐项记账。",
      "steps": [
        "把十件真实跑腿按天分派给 Muse，每件单独交代清楚",
        "每个花钱或预订动作都在批准弹窗逐项确认，全程共点了 31 次",
        "逐项按做对、做错、卡住、收回四档记录结果",
        "对比自己动手的耗时，算出实际省下的约 1 小时 10 分钟",
        "复盘翻车原因：批准不细看和任务无声卡住"
      ],
      "keyPrompt": "",
      "outputDesc": "最终成绩单：10 件里 5 件做对、2 件做错、2 件无声卡住、1 件被作者收回自己做，全程点了 31 次批准。订餐和邮件草稿表现最好；总耗时约 2 小时，对比自己动手约 3 小时 10 分钟，省下大约 1 小时 10 分钟。",
      "outputUrl": "",
      "reproduceTips": "学他的记账法：每件跑腿按做对、做错、卡住分类复盘；一次只派一件、要求它中途确认，钱和日期相关的批准弹窗必须逐字读完再点。",
      "pitfalls": "两个翻车都发生在作者不再细看批准弹窗之后：买菜漏了鸡肉还把洋葱买双份，火车订错了星期六。牙医改约和演唱会票则无声卡住没下文——涉及钱和日期的批准必须逐字看，派活要一次只给一件并要求中途汇报。",
      "source": {
        "name": "DY Playbook",
        "platform": "Facebook",
        "grade": "B",
        "url": "https://www.facebook.com/reel/1639878604332176/",
        "publishedAt": "2026-09-23"
      }
    },
    {
      "id": 35,
      "title": "用了 50 天后筛出的成熟工作流：每天一段 5 分钟通勤音频简报",
      "valueLine": "把晨间资讯压成 5 分钟音频定时送达，是 50 天实测后仍被保留的工作流之一。",
      "category": "automation",
      "difficulty": "进阶",
      "score": 74,
      "heat": 55,
      "featured": false,
      "issueDate": "2026-11-09",
      "background": "Sean Cypher 特意等 Muse 上线 50 天、早期 bug 大多被记录在案之后才做复盘，从实测过的工作流里筛出真正站得住的 10 个。其中一个是为每天通勤定制的音频简报：把要看的资讯压缩成一段约 5 分钟、路上就能听完的播报。",
      "steps": [
        "等产品上线 50 天、早期坑基本暴露后再挑长期工作流",
        "选定通勤必听的几个信息源和主题范围",
        "把简报设定为每天早晨定时生成约 5 分钟的音频",
        "通勤路上一次听完，替代逐个 App 刷资讯",
        "按 50 天复盘标准定期淘汰不好用的工作流"
      ],
      "keyPrompt": "",
      "outputDesc": "该工作流被列为他 50 天实测后保留的第 4 号用例：一段定制的 5 分钟晨间通勤音频简报，把晨间必看的信息做成音频定时送达，通勤路上听完就掌握全貌，不必再逐个 App 刷一遍。",
      "outputUrl": "",
      "reproduceTips": "先定死三件事：简报只收哪几个信息源、时长上限约 5 分钟、每天几点送达；跑一周后按实际收听感受删减来源，保住时长纪律。",
      "pitfalls": "这类工作流是他 50 天里筛出来的成熟版，早期版本并不稳定；音频简报的信息源和时长要在设置时限定死，否则内容容易发散、时长失控。",
      "source": {
        "name": "Sean Cypher",
        "platform": "YouTube",
        "grade": "B",
        "url": "https://www.youtube.com/watch?v=F5t5HummxjU",
        "publishedAt": "2026-11-01"
      }
    },
    {
      "id": 36,
      "title": "女装店主让 Muse 审计邮件自动化：关掉重复发送的流程，还顺手重建了网站",
      "valueLine": "把 Klaviyo 等工具交给 Muse 做一次邮件流程体检，重复群发、模板和追踪一次理清。",
      "category": "money",
      "difficulty": "进阶",
      "score": 84,
      "heat": 66,
      "featured": false,
      "issueDate": "2026-11-09",
      "background": "April Polk 独自经营女装品牌 JaeLuxe Shoetique，没有其他员工，此前请过两拨外包做邮件营销和广告都翻了车、花了几千美元还没做对。她把自己的 Muse（取名 Chase）接上 QuickBooks、Klaviyo、Canva 等店铺日常工具，让它接管营销运维。",
      "steps": [
        "先把两页品牌指南（字体、语气、客群）上传给 Muse，它审阅社交账号后扩写成 12 页版本",
        "让 Muse 审计全部邮件自动化流程，找出重复向顾客双重发送的流程并关掉",
        "让 Muse 重建邮件模板并开启效果追踪，看清哪些邮件真正带来销售",
        "网站改版也交给它，约半小时完成重建",
        "所有对外动作保留本人审批，Muse 不先斩后奏"
      ],
      "keyPrompt": "",
      "outputDesc": "据报道，Muse 关掉了会给顾客重复发信的冗余邮件流程、重建了模板并打开追踪，店主终于能看清哪些邮件真正驱动销售；它还用约半小时重建了品牌网站。",
      "outputUrl": "",
      "reproduceTips": "先上传品牌指南让 Muse 学会你的语气和禁忌，再从只读审计开始：先让它列出重复流程和问题清单，你确认后再逐个关停或重建。",
      "pitfalls": "报道也提醒，两位受访店主都与 Meta 有合作关系且未提到工具出错；实际使用中店主本人仍会复核并调整 Muse 的产出，不能完全放手。",
      "source": {
        "name": "The American Spectator（Salena Zito 报道 April Polk）",
        "platform": "The American Spectator",
        "grade": "C",
        "url": "https://spectator.org/while-the-public-fears-ai-these-ohio-and-iowa-business-owners-are-finding-relief/",
        "publishedAt": "2026-11-03"
      }
    },
    {
      "id": 37,
      "title": "66 岁杂货店主拍照批发目录给 Muse：15 分钟生成整期广告",
      "valueLine": "不用打字录入，把批发目录划好重点拍张照，每周广告 15 分钟搞定。",
      "category": "money",
      "difficulty": "入门",
      "score": 82,
      "heat": 63,
      "featured": false,
      "issueDate": "2026-11-09",
      "background": "Tom Mulholland 在爱荷华州 Malvern 经营有百年历史的 Mulholland Grocery，每周工作 65 小时、团队只有 10 人，自称完全不懂技术。以前批发目录到了，他要花几个小时把要卖的商品逐个敲进广告里；他把自己的 Muse（Wall-E）用在了做广告、排班和整理订单上。",
      "steps": [
        "批发目录到货后，在要上架的商品旁做高亮标记",
        "把标好的目录页拍照发给 Muse",
        "Muse 读取照片内容，约 15 分钟后生成整期广告",
        "顺带让它整理员工排班，并汇总那些以前淹没在收件箱里的特殊订货需求",
        "本人确认广告内容后再发布"
      ],
      "keyPrompt": "",
      "outputDesc": "据报道，Mulholland 把划好重点的批发目录拍照发给 Muse，15 分钟后广告就生成完毕，而以前光打字录入就要几个小时；Muse 还帮他排员工班表、汇总特殊订货需求。",
      "outputUrl": "",
      "reproduceTips": "从最重复的那件文书活开始：把纸质目录、价签或表格拍照发给 Muse 并说明输出格式，先核对一两期再放手让它常规化。",
      "pitfalls": "店主仍需自己核对广告里的商品和价格；他已连接 QuickBooks 但报道时尚未实际用起来，财务类功能不要默认它已经在跑。",
      "source": {
        "name": "New York Post（报道 Tom Mulholland）",
        "platform": "New York Post",
        "grade": "C",
        "url": "https://nypost.com/2026/09/29/tech/meta-releases-new-secret-weapon-muse-assistant-aimed-at-small-businesses/",
        "publishedAt": "2026-09-29"
      }
    },
    {
      "id": 38,
      "title": "九年 CRM 攒下 9355 个联系人：让 Muse 合并 289 组重复记录，清到 8999 个",
      "valueLine": "先备份、合并决定留给自己，让 Muse 把九年的联系人重复和过期信息一次清干净。",
      "category": "money",
      "difficulty": "进阶",
      "score": 85,
      "heat": 58,
      "featured": false,
      "issueDate": "2026-11-09",
      "background": "营销顾问 Amanda（The Digital Gal）从 2017 年起用 Nimble CRM，九年攒下的联系人库一团乱：同一个人有两三条略有差别的记录，还有大量过期信息。她决定让 Muse 陪她做一次全库审计，合并与否由她拍板，动手前先做完整备份。",
      "steps": [
        "动手前先给整个 CRM 数据库做完整备份",
        "让 Muse 全库扫描，找出同一个人多条记录的重复分组",
        "每组重复的合并决定由本人逐组确认，Muse 不擅自合并",
        "遇到 8 组冲突纠缠不清的记录，让 Muse 单独搁置、留给本人判断",
        "清理完成后复核总数和重点客户记录是否无误"
      ],
      "keyPrompt": "",
      "outputDesc": "作者自述结果：共合并 289 组重复记录、删除 356 份副本，数据库从 9355 个联系人清到 8999 个干净联系人；另有 8 组冲突太复杂的记录被 Muse 主动搁置、交她本人判断，没有乱猜。",
      "outputUrl": "",
      "reproduceTips": "客户数据动手前必须备份，并把规矩说死：合并决定权在你、拿不准的单独列出来给你看。先拿一个小分组试跑，确认风格后再全库推进。",
      "pitfalls": "作者强调她始终坐在审批位上逐组确认；联系人是生意资产，一旦自动合并出错很难恢复，没有备份不要开始。",
      "source": {
        "name": "The Digital Gal（Amanda 自述）",
        "platform": "The Digital Gal",
        "grade": "B",
        "url": "https://thedigitalgal.com/what-is-meta-muse/",
        "publishedAt": ""
      }
    },
    {
      "id": 39,
      "title": "用 Muse Code 一口气造 5 个应用：总共花了约 10 美元，界面漂亮但规则逻辑会翻车",
      "valueLine": "花小钱实测终端编程代理的真实边界：产出速度惊人，但胜负条件、红绿灯这类规则执行不可靠。",
      "category": "coding",
      "difficulty": "进阶",
      "score": 81,
      "heat": 70,
      "featured": false,
      "issueDate": "2026-11-09",
      "background": "创作者 PromptsLove 在 Muse Code 发布当天自费实测，用它一口气做了五个应用：一个多页前端网站、益智游戏 Gridlock、3D 交通路口模拟、把提交日志变发布说明的 SaaS 工具 Shipyard，以及把手绘图转成可编辑流程图的 Python 应用，逐个打分并公开了花费。",
      "steps": [
        "在终端安装 Muse Code，在项目文件夹里运行",
        "每个应用都给详细提示词而不是一句话需求",
        "逐个实测产出：点遍界面、跑通核心流程、检查规则逻辑是否真的生效",
        "记录每类失败：Gridlock 的通关判定没触发、交通模拟里车辆和行人闯红灯",
        "统计总花费并对照其他编程模型做性价比判断"
      ],
      "keyPrompt": "",
      "outputDesc": "作者实测：五个应用全部生成，总花费约 10 美元（Standard 档）；Shipyard 和手绘图数字化工具拿到 4/5 分，手绘流程图的每个分支连拼写都被正确还原；但 Gridlock 的获胜逻辑从未触发、交通模拟会违反自己设定的红绿灯规则。",
      "outputUrl": "",
      "reproduceTips": "提示词要把规则写成可验收的条件，交付后专门测边界逻辑（胜负、权限、状态切换），不要只看界面是否漂亮；预算敏感可考虑 Contributor 档，但要用代码参与训练来换低价。",
      "pitfalls": "作者两次踩到同一个坑：模型明明理解规则，却不把规则执行到底，连最高推理档位也一样；另外视觉产出风格同质化明显，不指定品牌风格就会千篇一律。",
      "source": {
        "name": "PromptsLove",
        "platform": "PromptsLove",
        "grade": "B",
        "url": "https://promptslove.com/blog/honest-review-muse-code-and-muse-spark/",
        "publishedAt": ""
      }
    },
    {
      "id": 40,
      "title": "会前准备被打满分 10/10：没告诉它哪封邮件，Muse 自己找对了线索",
      "valueLine": "不给任何提示，让 Muse 自己从邮箱和日历里拼出会议背景和提问清单。",
      "category": "work",
      "difficulty": "入门",
      "score": 80,
      "heat": 52,
      "featured": false,
      "issueDate": "2026-11-09",
      "background": "测评人 Diana（AI Agents Library）用自己的真实业务材料给 Muse 出了一张 10 项任务考卷，在免费版上逐项打分。其中会前准备一项她故意什么都没交代：不说是哪封邮件往来，而当时有好几个都像的候选线索。",
      "steps": [
        "连接 Gmail 与 Google Calendar（过程中 Muse 缺日历权限时主动提出并引导连接）",
        "只给目标：为接下来的通话做准备，不指定任何邮件线索",
        "Muse 在多个候选线索中自行判断出正确的那一封",
        "它调出日历邀请，结合往来内容生成一份通话提问清单",
        "本人带着清单直接进会，事后按五项标准打分"
      ],
      "keyPrompt": "",
      "outputDesc": "该项被打 10/10 满分：Muse 在没被告知的情况下找对了邮件线索、定位到日历邀请，并备好了一组通话问题，其中还包括测评人自己都没想到要提前准备的问题。同卷的每周业务简报得 9/10。",
      "outputUrl": "",
      "reproduceTips": "把邮箱和日历都连上后，只给目标不给路径，让它自己找线索最能看出真本事；这个流程值得固化成每次开会前自动跑的例行任务。",
      "pitfalls": "同一轮测试里，收件箱分诊只得 6/10：Muse 误判一封她其实已经发出的邮件为未发送，若照单全收可能给同一人重复发信——凡涉及对外发送的判断必须复核。",
      "source": {
        "name": "AI Agents Library（Diana 实测）",
        "platform": "AI Agents Library",
        "grade": "B",
        "url": "https://www.aiagentslibrary.com/blog/meta-muse-review/",
        "publishedAt": ""
      }
    },
    {
      "id": 41,
      "title": "用 Muse Spark 当科学家、Wonder 当评审：造出自动筛药助手，38 个化合物判对 34 个",
      "valueLine": "盲测协议下让两个 Muse 模型分工实验与复核，单次运行只要约 0.29 美元。",
      "category": "coding",
      "difficulty": "高阶",
      "score": 86,
      "heat": 55,
      "featured": false,
      "issueDate": "2026-11-09",
      "background": "开发者 Aleksandra Hodzzik 在黑客松期间用 Meta 的模型搭了 MuseCell：一个在真实 BBBC021 细胞图像上工作的盲测筛选助手。难点在于药物作用机制判断今天靠生物学家人工比图、补剂量、查文献，她想把选实验、做判断、查文献这条链自动化，还要全程盲测防作弊。",
      "steps": [
        "给助手设定盲测协议：化合物名称揭盲前不可见，先提交结论再对答案",
        "Muse Spark 1.3 担任科学家与显微镜手，在有限的孔位预算内规划拍哪 4 个孔、读测量值、维护假设板",
        "Muse Wonder 1.0 担任 PI 评审，复核盲测证据账本，批准结论或要求再补一个实验",
        "最终判定交给协议代码按相似度投票做主，模型只负责规划、争论和解释",
        "揭盲后才允许查 PubChem、ChEMBL 和 PubMed 核对，并生成带引用的完整档案"
      ],
      "keyPrompt": "",
      "outputDesc": "仓库公开的评测结果：agent v5 在 38 个化合物上判对 34 个作用机制，冻结划分的留出集上 19 个判对 18 个；单次运行平均约 0.29 美元、约 1.5 分钟（38 次运行均值），并提供可在线回放的演示。",
      "outputUrl": "",
      "reproduceTips": "关键设计是分工与制衡：让强模型负责规划、另一个模型复核、最终判定交给确定性代码；同时给每次运行设费用上限，仓库代码开源可直接参考其护栏实现。",
      "pitfalls": "作者明确记录：当模型用自己的判断推翻公开的 NSC 投票时大多判错（v4 中 7 次错 6 次），所以别让模型当最终裁判；该工具仅供科研筛选，不能输出诊断或治疗建议。",
      "source": {
        "name": "Aleksandra Hodzzik（GitHub 仓库 MuseCell）",
        "platform": "GitHub",
        "grade": "B",
        "url": "https://github.com/aleksandrahodzzik/musecell",
        "publishedAt": "2026-10-29"
      }
    },
    {
      "id": 42,
      "title": "摄影师把后台交给 Muse：管发票、每天更新业务仪表盘，还画出 308 个地点的拍摄地图",
      "valueLine": "发票跟踪、每日数据看板和地点库地图三件套，把摄影师从表格里解放出来。",
      "category": "money",
      "difficulty": "进阶",
      "score": 82,
      "heat": 50,
      "featured": false,
      "issueDate": "2026-11-09",
      "background": "摄影师 Eric Rubens 一个人跑自己的摄影生意，发票、业务数据和外拍地点全靠表格硬撑。他的 Muse（取名 Rube）接管了这套后台：发票有人盯、数据每天自动汇总成仪表盘、多年收藏的外拍地点也被做成了能直接用的地图。",
      "steps": [
        "让 Muse 跟踪发票状态，替代手工表格登记",
        "设定每天自动更新业务仪表盘，收入和订单一目了然",
        "把 Instagram 里收藏的 308 个地点导出，交给 Muse 做成互动地图",
        "顺带让它订票、到点提醒自己发帖",
        "每天扫一眼仪表盘确认数据无误"
      ],
      "keyPrompt": "",
      "outputDesc": "据其自述，Rube 持续跟踪他的发票、每天更新业务仪表盘，并用他收藏的 308 个 Instagram 地点建成一份互动地图，还帮他订了两张票、提醒发帖——他说自己终于从电子表格里解放出来。",
      "outputUrl": "",
      "reproduceTips": "先盘点你每天重复看的三张表：发票、订单、素材库，逐个交给 Muse 并约定更新频率；地点、客户这类长期积累的收藏，让它结构化成地图或看板，价值会越用越大。",
      "pitfalls": "",
      "source": {
        "name": "Eric Rubens（经 Muse CN Hub 整理，原发 Instagram）",
        "platform": "Instagram",
        "grade": "B",
        "url": "https://muse.himiao.cc/cases/runs-a-photography-business-back-office-invoices-dashboards-",
        "publishedAt": "2026-09-08"
      }
    },
    {
      "id": 43,
      "title": "新加坡创作者实测：给 Muse 装上剪片 Skill，转稿、去停顿、出分镜跑了近两小时",
      "valueLine": "用打字就能给 Muse 安装预设工作流：一个剪片 Skill 能自己转文字稿、剪掉停顿重复、做分镜等你批准，长任务全程可问进度、可停。",
      "category": "content",
      "difficulty": "进阶",
      "score": 76,
      "heat": 52,
      "featured": false,
      "issueDate": "2026-11-09",
      "background": "新加坡创作者阿石在 Muse 于 2026 年 10 月 28 日开放新加坡市场后即日实测。Muse 界面上没有 Skill 入口，他想验证这种「藏起进阶功能」的个人代理，能不能靠打字装上一个复杂的剪片工作流并真正跑完。",
      "steps": [
        "直接打字叫 Muse 建立或安装剪片 Skill，不需要找任何设置入口",
        "Skill 流程先把影片转成文字稿，再按文字稿剪走停顿和重复的地方",
        "接着让它设计 Storyboard（分镜）交回来批准，批准后才继续",
        "运行期间随时打字问进度，不会打断后台工作；想看细节就开 Task Log",
        "测试时它已交出部分剪好的影片；鼠标移到任务上按 Stop 可随时停止"
      ],
      "keyPrompt": "",
      "outputDesc": "原文记录：这个剪片流程运行了接近一两个小时，测试时 Muse 已交出部分剪好的影片，只剪走了一些剪接位，未做动画等后期制作，完整成效作者说会在之后影片分享。阿石认为它不显示代码、只定期更新进度的设计对初学者更友好。",
      "outputUrl": "",
      "reproduceTips": "需要 Muse 账号（作者在新加坡开放首日注册）；把工作流的每个环节用打字讲清并要求中间产物先给你批准；长任务先用短片试跑，确认剪辑口径再放大。",
      "pitfalls": "原文同篇实测的短板：它的图片模型较一般，把公司 Logo 印到头像衣服上两次都没做对，作者认为不及 ChatGPT 与 Gemini 的图片能力；剪片成效当时只交付了部分，未做动画等后期。",
      "source": {
        "name": "阿石 / OMP",
        "platform": "OMP（omp.asia）",
        "grade": "B",
        "url": "https://omp.asia/meta-muse-singapore-tutorial/",
        "publishedAt": "2026-10-29"
      }
    },
    {
      "id": 44,
      "title": "数位时代实测：让 Muse 盯 PChome 商品价格，查到 NT$45,200 并设好每 6 小时复查",
      "valueLine": "把想买商品丢给 Muse，它会自己开浏览器查现价与库存，缺货或降价时主动通知——台湾电商网站实测可正常读取。",
      "category": "daily",
      "difficulty": "入门",
      "score": 79,
      "heat": 58,
      "featured": false,
      "issueDate": "2026-11-09",
      "background": "《数位时代》编辑部实测一轮 Muse 后，挑了「商品价格追踪」做本地化验证：台湾用户最关心的是它能不能读台湾电商、能不能在缺货与降价时自己盯着，而不是只会给建议。",
      "steps": [
        "把想追踪的商品名称或网址贴给 Muse，并要求降价或补货时通知",
        "Muse 用浏览器打开 PChome 24h 商品页，核对名称、现价与库存状态",
        "它查到 iPhone 18 Pro 现价 NT$45,200、建议售价 45,890，目前缺货只能按到货通知",
        "接着它设定每 6 小时检查一次的排程，补货或降价时通知",
        "比价页面会存在 Library 分页，降价通知出现在聊天里，随时可回看"
      ],
      "keyPrompt": "",
      "outputDesc": "原文实测结果：Muse 用浏览器开启商品页，查到现价 NT$45,200、建议售价 45,890，并发现目前缺货，只能按「有货通知我」；接着设定了每 6 小时检查，补货或降价时通知，确认台湾电商网站可以正常读取。",
      "outputUrl": "",
      "reproduceTips": "台湾用户需先用 VPN 开通账号（仅开通时需要），装好 App 后不开 VPN 也能用；免费版有每周额度。追踪清单把商品名或网址给全，并明确通知条件是降价、补货还是两者都要。",
      "pitfalls": "原文提醒：连上脸书、Instagram 等账号等于给它读取权限，第一次连信箱或行事历建议先选只读；涉及付款的「价格触发自动购买」需单独开启并预存支付方式，不要默认放行。",
      "source": {
        "name": "数位时代 BusinessNext 编辑部",
        "platform": "数位时代 BusinessNext",
        "grade": "C",
        "url": "https://www.bnext.com.tw/article/92505/muse-tutorial-hands-on",
        "publishedAt": "2026-10-06"
      }
    },
    {
      "id": 45,
      "title": "让 Muse 盯着自己的网站：一有新文章，自动去 Facebook 专页推广",
      "valueLine": "把「监控网站更新并自动发帖推广」设成背景长期任务，交办一次就不用再守着——这是聊天机器人做不到的代理式用法。",
      "category": "advanced",
      "difficulty": "进阶",
      "score": 74,
      "heat": 50,
      "featured": false,
      "issueDate": "2026-11-09",
      "background": "美国消费科技记者 Jamey Tucker 在自己的「What the Tech?」站点上实测 Muse。他先让它找迈阿密邮轮港附近的酒店、找演唱会票，接着给它派了一件长期差事：盯着自己的网站，有新文章就去他的 Facebook 专页推广。",
      "steps": [
        "先用短任务热身：让 Muse 找迈阿密邮轮港附近一晚的酒店房，它几分钟内找到房间、只等批准就能订",
        "再试多步任务：找拉斯维加斯 Eagles 演唱会票加威尼斯人酒店两晚，它先追问日期再开 Ticketmaster 搜票",
        "然后交办长期任务：监控 WhatTheTech.tv 网站，一发现新文章就推广到他的 Facebook 专页",
        "任务设好后在背景持续运行，不需要坐着一条条下指令",
        "涉及付款时它会停下来要姓名、地址与信用卡等信息，批准权始终在本人手里"
      ],
      "keyPrompt": "",
      "outputDesc": "原文记录：酒店任务中 Muse 几秒内打开自有浏览器开始搜房，几分钟后已找到房间、只待批准即可完成预订；长期任务方面，作者明确写道他已让 Muse 监控自己的网站、每当发现新故事就推广到 Facebook 专页，该任务在背景持续工作。",
      "outputUrl": "",
      "reproduceTips": "先从查房、查票这类只读任务验证它的搜集质量，再交办带外部动作的长期任务；发帖、预订、付款都保留逐次批准，批准前看清它要发的内容与对象。",
      "pitfalls": "原文提醒：给代理的账号与服务权限越多，它越有用，但你的数字生活暴露也越多；任务可能需要网站、账号、文件甚至付款信息的访问权，每次授权前要看清范围。",
      "source": {
        "name": "Jamey Tucker / What the Tech?",
        "platform": "WhatTheTech.tv",
        "grade": "C",
        "url": "https://whatthetech.tv/meta-muse-the-ai-that-doesnt-just-answer-questions-it-takes-action/",
        "publishedAt": ""
      }
    },
    {
      "id": 46,
      "title": "泰晤士报一周实测：新手爸爸把亲子日、万圣节服装和睡前故事都交给了 Muse",
      "valueLine": "连上日历、健康与银行后，Muse 能排亲子出游并订好动物园票、按尺码和喜好在 Target 选好节日服装、按当天主题现编睡前故事——但爸爸最后决定故事还是自己读。",
      "category": "family",
      "difficulty": "入门",
      "score": 82,
      "heat": 66,
      "featured": false,
      "issueDate": "2026-11-09",
      "background": "《泰晤士报》记者做了一周实验：把生活控制权交给 Meta 的 Muse，看它能不能提升自己的「爸爸技能」。他给 Muse 只读权限接入 Gmail、Apple Health 与 Google Calendar，并立下规矩：不检查 Muse 的工作成果，全盘照单全收。",
      "steps": [
        "给 Muse 只读权限接入 Gmail、Apple Health 与 Google Calendar，让它在背景扫描易漏的日程与健康趋势",
        "让它安排适合幼儿的生日出游：本地人气店早午餐、格里菲斯天文台与洛杉矶动物园，它连动物园门票都订好了",
        "临近万圣节，只给它幼儿的尺码和对迪士尼的喜爱，让它去 Target 选服装；不到一分钟它带回《玩具总动员》Jessie 套装连红牛仔帽",
        "批准付款后，它在后台逛完 Target 网站并安排当日到店自提，只需本人输入邮箱验证码和信用卡安全码",
        "日常小事也交给它：按价格排区内最好的托儿所名单、按离家距离排幼儿园、按家庭饮食要求出五天餐单和购物清单"
      ],
      "keyPrompt": "",
      "outputDesc": "原文记录的家庭产出：亲子日行程（早午餐＋天文台＋动物园）已排好且动物园门票由 Muse 订妥；万圣节服装不到一分钟选定并完成购买与当日自提安排；它还交付了按价格排序的托儿所名单、按距离排序的幼儿园名单和五天餐单。实验总结称，靠取消订阅、谈宽带账单等折扣，Muse 一个月帮他省下近 100 美元。",
      "outputUrl": "",
      "reproduceTips": "从只读权限起步，先让它做名单、行程这类可核对的家庭任务；购物只给尺码与偏好这类必要约束，付款与验证码环节保留本人操作；它的记忆里会存下大量个人信息，定期去 Memory 里检查和编辑。",
      "pitfalls": "原文实测的翻车：航班改道时它对延误时长过于乐观（称一小时内起飞，实际等了约四小时）；问球赛酒吧时它先错判比赛日期（按菲律宾时区查了开球时间），又把人带去一家无聊的连锁酒店大堂酒吧。时间与地点类答案务必自己复核。",
      "source": {
        "name": "The Times",
        "platform": "The Times",
        "grade": "C",
        "url": "https://www.thetimes.com/uk/technology-uk/article/can-muse-ai-improve-my-dad-skills-meta-kzz3jp83l",
        "publishedAt": ""
      }
    },
    {
      "id": 47,
      "title": "中文实测三段追问：让 Muse 把 30 分钟入门练习做成表格，再生成 Markdown 文件验收",
      "valueLine": "用繁体中文交办、追问改表格、再命令生成指定档名的文件——一条可照抄的小任务链，练的就是「交办—改版—验收」完整回路。",
      "category": "study",
      "difficulty": "入门",
      "score": 73,
      "heat": 44,
      "featured": false,
      "issueDate": "2026-11-09",
      "background": "台湾 SEO 站 Whoops 的编辑在网页版 Muse 上做中文实测（操作画面摄于 2026 年 9 月 27 至 28 日）：不用英文、不用复杂功能，只用繁体中文把一个「AI 代理入门练习」的小学习任务完整走完五步，看它能不能交付可下载验收的文件成品。",
      "steps": [
        "在 muse.ai 新增 Side chat，用繁体中文提出需求：安排一份 30 分钟的 AI 代理入门练习，分 3 个阶段，先在对话中给内容",
        "在同一对话追问，把练习整理成 3 列表格：阶段与时间、操作内容、完成标准，每格一句话",
        "再下令把表格制成 Markdown 文件，指定档名 ai-agent-practice.md、标题「AI 代理入門練習」",
        "等聊天出现文件卡片后点开核对标题与三阶段表格，可从选单 Download 或 Download as PDF",
        "最后到 Library 的 Documents 分类找回成品，完成验收"
      ],
      "keyPrompt": "請用繁體中文，幫我安排一份 30 分鐘的 AI 代理入門練習，分成 3 個階段，列出每階段要做的事。先在對話中提供內容即可。",
      "outputDesc": "原文完整记录产出：Muse 先在对话给出三阶段练习，再按追问改成三栏表格，最后生成文件卡片；点开 ai-agent-practice.md 就能看到文件标题与三阶段表格，并可下载或导出 PDF，Library 里能按 Documents 分类找回。",
      "outputUrl": "",
      "reproduceTips": "第一次使用先从整理文字、制作文件这类小任务开始练手；交办时把目标、格式、档名与验收方式一次写清，主题可换成会议准备、读书计划或文章大纲；聊天显示完成不等于验收通过，务必打开文件核对。",
      "pitfalls": "原文提醒：文件说完成却找不到时，要回到聊天文件卡片与 Library 找，并要求它提供成品、实际打开，不接受只有口头回报；涉及外部行动的任务还要另行核对订单、寄件或行事历上的实际结果。",
      "source": {
        "name": "Whoops SEO 编辑部",
        "platform": "Whoops SEO（seo.whoops.com.tw）",
        "grade": "B",
        "url": "https://seo.whoops.com.tw/meta-muse/",
        "publishedAt": ""
      }
    },
    {
      "id": 48,
      "title": "台湾创作者三周实测：每天早上 8 点，Muse 自动生成 AI 新闻 Podcast 送到 Spotify",
      "valueLine": "把每天听的资讯早餐外包给代理：到点自动生成一集 AI 新闻播客、直接在 Spotify 收听，这是他三周 10 个用法里最省时间的一个。",
      "category": "content",
      "difficulty": "进阶",
      "score": 80,
      "heat": 60,
      "featured": false,
      "issueDate": "2026-11-09",
      "background": "台湾创作者于为畅（Wendell)从 2026 年 9 月中开始用 Muse，不到三周做了 10 件事：架网站、追机票、上架 Marketplace、量身定做日文课等。其中内容类的代表作，是让 Muse 每天早上自动生产一集 AI 新闻 Podcast。",
      "steps": [
        "把需求交给 Muse：每天早上 8 点自动生成 AI 新闻 Podcast",
        "设定好后它按日程在背景执行，App 关着也照常生产",
        "成品直接送到 Spotify，每天早上打开就能听",
        "同期他还用语音记录灵感：说一句「记下来」，点子自动存进笔记本",
        "用量提醒来自他的实测：重度使用时，他一天就能用光一周的免费额度"
      ],
      "keyPrompt": "",
      "outputDesc": "原文（影片说明）明确列出该用法已落地：每天早上 8 点自动生成 AI 新闻 Podcast，直接在 Spotify 听。作者总结这 10 个用法的主线是「Muse 不是帮你省钱，是帮你省时间」；同集还有一晚架好 17muse.com 网站与社团、拍照上架 Marketplace 等已完成案例。",
      "outputUrl": "",
      "reproduceTips": "先想清节目的主题范围、时长与推送时间，用自然语言一次交办；先验收头几集的选题与口播质量再放行长期运行；免费额度有限，定时音频类任务先估算消耗再叠加其他排程。",
      "pitfalls": "作者实测提醒：他一天就能用光一周的额度，重度排程任务要盯用量；台湾当时尚未开放 Muse，他是先行跨区使用，功能与额度以自己账号实际显示为准。",
      "source": {
        "name": "于为畅 Wendell",
        "platform": "YouTube",
        "grade": "B",
        "url": "https://www.youtube.com/watch?v=ARMaDt5JBUg",
        "publishedAt": "2026-10-09"
      }
    },
    {
      "id": 49,
      "title": "每周自动盯娃功课：Muse 例行检查儿子的 Google Classroom 成绩与缺交作业",
      "valueLine": "把「查成绩、查缺交、查考试」做成每周例行：家长不用再逐个 App 翻，儿子的功课状态定时汇总到手边。",
      "category": "family",
      "difficulty": "进阶",
      "score": 77,
      "heat": 49,
      "featured": false,
      "issueDate": "2026-11-09",
      "background": "用户 Pete Halvorsen 给自己的 Muse 排了一组例行任务：晨间有冲浪与天气报告、基于 Whoop 与 Apple Health 的健康简报、关注球队的比分；而每周例行里最特别的一项，是替他盯儿子的学校功课。",
      "steps": [
        "先把晨间例行设好：冲浪/天气报告（含潮汐与最佳时段）、Whoop 与 Apple Health 健康简报、关注球队比分与当日赛程",
        "再建每周例行：检查儿子的 Google Classroom，包括成绩、缺交的作业和 upcoming 考试",
        "同一组周例行里还有每周日早上的个人消费回顾：本周花销、异常支出与即将过期的积分权益",
        "例行任务按周自动运行，家长只看汇总结果",
        "发现缺交或考试临近时，再人工介入跟进"
      ],
      "keyPrompt": "",
      "outputDesc": "原文（用户本人 Threads 发帖）列明其 Muse 的每周例行包括：儿子的 Google Classroom、成绩、缺交作业与即将到来的考试；晨间例行则包含基于 Whoop/Apple Health（前一天睡眠与运动）的健康简报。该帖是用户自述的已配置例行清单，整理方未复跑验证。",
      "outputUrl": "",
      "reproduceTips": "先想清要盯的科目与频率，用自然语言一次交办「每周检查 Classroom 的成绩、缺交与考试」；涉及孩子的学校账号与成绩数据，授权范围先想清楚，只给必要访问；汇总只作提醒，重要事项点进原系统复核。",
      "pitfalls": "原文为用户自述清单，未附逐次运行截图；健康与学校数据都属敏感信息，只连接你愿意分享的部分，简报数字使用前抽查核对。",
      "source": {
        "name": "Pete Halvorsen（经 Museable 汇总）",
        "platform": "Threads / Museable",
        "grade": "B",
        "url": "https://www.musecase.dev/browse/14",
        "publishedAt": ""
      }
    },
    {
      "id": 50,
      "title": "用 Muse Spaces 搭少儿英文动画自动生产线：输入主题自动出片",
      "valueLine": "把 Muse Spaces 搭成可复用的动画生产系统：输入主题后自动完成选题、剧本、分镜、角色、动画、配音、字幕与成片，一次实测约 17 分钟生成一集少儿英文动画。",
      "category": "content",
      "difficulty": "进阶",
      "score": 85,
      "heat": 78,
      "featured": false,
      "issueDate": "2026-11-10",
      "background": "作者之前用 Muse 做了一段少儿英文启蒙动画（3–6 岁、30–45 秒、9:16 竖屏、原创 3D 卡通），被大量追问教程。他的目标不是做一条视频，而是搭一套能反复用的生产系统：换个主题就能再产一集，而不是每集从零手工串工具。",
      "steps": [
        "在 Muse 里进入 Spaces，新建空间《AI 儿童英语动画自动化生产中心》，先定死参数：目标年龄 3–6 岁、时长 30–45 秒、9:16、1080×1920、原创可爱 3D 卡通、零基础英语、输出 MP4。",
        "用「总导演」提示词让 Muse 把全流程建起来：自动选题、英文剧本、分镜、角色、场景图、动画、英语配音、音效字幕、自动剪辑合成、质检、导出真实 MP4；给两种模式：一键全自动与分阶段可控，并明说缺工具/权限要直说、不许模拟成功。",
        "发现初版工作流被拆成 50 多步后，用第二段提示词做真精简（不是界面折叠）：合并为 5 个阶段——策划与分镜一次完成、角色与图片只生成新素材、动画与配音并行、程序做确定性剪辑、质检与交付；要求复用素材、改单镜头只更新受影响部分。",
        "建固定角色库：星星兔（引导学习）、布布熊（故事互动）、米米鹿（知识讲解），每个角色存外观参考图、服装配色、性格、声音配置与生成提示词，跨集复用不重建。",
        "正式生产时只给一集的任务指令（主题、教学词、时长、风格），让系统自动跑完；单镜头失败就只修那个镜头。",
        "出问题时用「技术维护工程师」提示词让 Muse 自查自修：按检查→定位→修复→验证→汇报五步走，不重建整个空间、不删已成功素材。"
      ],
      "keyPrompt": "你现在是我的 AI 视频制作总导演、技术负责人和自动化工作流执行者。请在 Muse Spaces 中创建一个长期使用的儿童英语动画制作工作空间。目标：当我输入一个视频主题，尽可能自动完成整个制作流程：1. 自动确定英语教学主题；2. 编写适合 3–6 岁儿童的英文剧本；3. 设计完整故事和分镜；4. 创建或复用卡通角色；5. 生成场景与分镜图片；6. 将分镜制作成动画；7. 生成自然清晰的英语配音；8. 添加音效与字幕；9. 自动剪辑并合成视频；10. 检查视频质量；11. 导出真实可播放的 MP4。提供两种模式：A. 一键全自动；B. 分阶段可控，修改某个镜头时保留其他已完成素材。注意：我要的是真正可运行的视频制作系统，不是展示流程的静态网页；所有按钮、进度和下载必须对应真实任务和文件；缺少必要工具或权限请明确说明，不要模拟成功。（原文另附精简工作流、角色库、自检修复三段配套提示词）",
      "outputDesc": "一套可长期复用的动画生产空间 + 已实际产出的少儿英文启蒙动画成片（一次制作约 17 分钟生成一段）；教程含 4 段可直接复制的核心提示词（建空间、精简流程、角色库、自检修复）。原帖 4.2 万浏览、547 赞、848 收藏。",
      "outputUrl": "",
      "reproduceTips": "先原样跑通一集（比如认识五种水果），再换主题批量生产；参数先定死再建空间；角色库从第一集就建，别等漂移了再补。用户投稿线索，原文为 X 长文教程，流程与提示词完整可复现。",
      "pitfalls": "1. 初版工作流被拆成 50 多步，重复规划和上下文传递浪费严重，必须专门做一次流程精简；但作者提醒：步骤减少不等于 Token 一定减少，他还没拿到前后消耗对比，别编数字。2. 角色跨集漂移（脸型、服装、声音变）只能靠角色库降低概率，不能保证完全一致。3. 配音与口型不同步：优先用旁白、远景和少量正面说话镜头，必要时再上专门口型工具。4. 最大的坑是「假完成」：界面显示完成不算数，必须检查有没有真实可播放的 MP4 文件。",
      "source": {
        "name": "红莲魔尊 @maoyang01233685（用户投稿）",
        "platform": "X",
        "grade": "B",
        "url": "https://x.com/maoyang01233685/status/2119573786324574525",
        "publishedAt": "2026-11-09"
      }
    },
    {
      "id": 51,
      "title": "给 Muse 做个「复活包」：账号没了，换个新号也能原样复活",
      "valueLine": "四层备份法防封号丢号：官方数据导出导入 + 让 Muse 自己打复活包 + 重要文件单独下载 + 每周自动备份到 Google Drive，作者刚给自己做完、实测能用。",
      "category": "advanced",
      "difficulty": "入门",
      "score": 82,
      "heat": 68,
      "featured": false,
      "issueDate": "2026-11-10",
      "background": "最近 Muse 动不动封号，养了几个月的 Muse 一旦消失，记住的偏好、创建的空间、运行中的任务全跟着没了。作者把「防响指」做成了一套备份打法：账号真没了，换个新账号，把复活包贴给新的 Muse，它读完核对就能接着干。",
      "steps": [
        "官方备份（最稳但不完整）：设置 > 数据控制 > 下载你的智能体数据，打包聊天记录和工作区文件；新账号在 设置 > 数据控制 > 导入记忆 恢复。注意导入只会把记录提炼成记忆，原聊天记录回不来，空间和任务也恢复不了，所以还需要后面几招。",
        "让 Muse 自己打复活包（关键一步）：把续帖里的指令发给你的 Muse，让它把记住的关于你的事、偏好和做事规矩整理成《复活指令》文件，再把空间、目标、定时任务和重要文件打包成 zip（密码密钥不放进去），打完自己回读核对再发你。",
        "重要单文件单独存：去资料库把重要文件直接下载一份，存到自己电脑或网盘，别只存在 Muse 里。用得重就每周备一次，主要靠固定任务跑的每月一次也够；系统大改过当天手动多备一份。",
        "备份自动化：让 Muse 连上 Google Drive 建一个日志文件夹，复活包打好直接传上去；再设一个每周任务，每周重打一版最新的，原地替换 Drive 里那份，之后什么都不用管。",
        "（注：主帖说 3 个办法，续帖实际给到办法四，共 4 个。）"
      ],
      "keyPrompt": "请帮我打一个复活包：1、把你记住的关于我的事、我的偏好和做事规矩，整理成一个《复活指令》文件，写清：我是谁、已经结案不要再问的事、还没定等我决定的事；2、把我的空间、目标、定时任务和重要文件打包成一个 zip，密码和密钥不要放进去；3、打完自己回读核对一遍，再发给我。以后我换新账号，会把这两个文件发给新的你，你读完先复述恢复了什么，等我确认后再行动。",
      "outputDesc": "一套四层备份打法 + 可直接复制的复活包指令；恢复时新 Muse 读完文件会先复述恢复了什么、等确认后再行动。原帖 3.3 万浏览、221 赞、381 收藏，末帖附与自己 Muse（JARVIS）聊备份的截图。",
      "outputUrl": "",
      "reproduceTips": "今晚就能做：先走官方导出，再把关键指令发给你的 Muse 打复活包，下载后另存一份到网盘；重度用户每周一次，轻度每月一次。用户投稿线索，原文为 X 串文，步骤完整。",
      "pitfalls": "1. 只做官方备份不够：导入记忆救不回原聊天记录，空间和定时任务会消失，必须叠加复活包。2. 复活包 zip 里绝不放密码和密钥。3. 备份别只存在 Muse 里——账号没了备份跟着陪葬，必须落到自己电脑/网盘/Drive。4. 手动备份容易忘，能自动化就设每周任务。",
      "source": {
        "name": "蚂蚁蚂蚁红 @wolverheeheeine（用户投稿）",
        "platform": "X",
        "grade": "B",
        "url": "https://x.com/wolverheeheeine/status/2119410331558748188",
        "publishedAt": "2026-11-08"
      }
    },
    {
      "id": 52,
      "title": "装上官方 Chrome 插件，让 Muse 直接操作你自己的浏览器",
      "valueLine": "Meta 官方插件「Muse from Meta」：装上后 Muse 不再用云端共享浏览器，而是直接操作你本地的 Chrome。作者自述就此解决了云浏览器共享 IP 脏（易封号、Reddit 全是 403）、速度慢等老问题，还能直接用本地 Chrome 的登录态访问各网站。注意：效果均为作者自述，帖内没有实际任务产出截图。",
      "category": "advanced",
      "difficulty": "入门",
      "score": 74,
      "heat": 55,
      "featured": false,
      "issueDate": "2026-11-13",
      "background": "作者此前专门发帖警告过：别用 Muse 登录重要账号——Muse 的云托管浏览器走共享机房 IP 池，IP 很脏，访问 Reddit 全部 403，很多服务也会拒绝。2026-11-12 他发现 Meta 官方上线了 Chrome 插件「Muse from Meta」，装上之后兴奋发帖：Muse 可以直接操作他自己的浏览器，他攒了好几个的问题「一下被解决了」。",
      "steps": [
        "在 Chrome 网上应用店搜索并安装 Meta 官方插件「Muse from Meta」（介绍语为「Chrome 中的个人 AI 智能体」）；作者配图显示该条目状态为「已安装」。",
        "装好后，再让 Muse 执行需要浏览器的任务时，它通过插件直接操作你本地的 Chrome，而不是云端托管浏览器。",
        "因为出口变成你自己本地的网络和 IP，作者自述避开了云端共享 IP 池的「脏 IP」问题：不再动不动触发封号，之前全是 403 的 Reddit 等服务也能正常访问。",
        "本地 Chrome 里已有的个人信息和登录态可以直接复用，无痛访问需要登录的网站，不必在云端浏览器里再登一遍。",
        "作者自述操作本地 Chrome 的速度比操作云端浏览器快很多，整体「超级丝滑」。"
      ],
      "keyPrompt": "",
      "outputDesc": "产出证据有限，如实标注：作者晒出的唯一实证是 Chrome 商店里「Muse from Meta」条目的「已安装」截图；帖中没有展示 Muse 实际操作浏览器完成某个具体任务的过程、结果截图或录屏。避封号、解 403、提速、复用登录态等效果均为作者自述，未在帖内以操作证据验证。原帖 5,412 浏览、75 赞、104 收藏。",
      "outputUrl": "",
      "reproduceTips": "门槛很低：Chrome 商店搜「Muse from Meta」安装即可；务必认准 Meta 官方发布，别装仿冒插件。建议先拿不敏感的公开网站小任务试水，确认走的是本地浏览器后再逐步放开。本条为用户 WhatsApp 投稿、牛老板破例批准收录（未过常规「产出证据」门禁），效果请自行验证。",
      "pitfalls": "1. 效果未经帖内实证：避封号、解 Reddit 403、速度更快都只是作者自述，没有任务产出截图，别当成已验证结论。2. 安全边界要想清楚：让 AI 操作带着你全部登录态的本地 Chrome，等于把这些账号的访问交给它，邮箱、银行等敏感站点要谨慎，重要账号的全权操作仍不建议放开。3. 产品尚早期：作者配图中该商店条目评分显示 0.0 星、评价极少，稳定性与权限范围以官方说明为准，出问题先查插件版本与授权设置。",
      "source": {
        "name": "Flynn @fly3nn（用户投稿）",
        "platform": "X",
        "grade": "B",
        "url": "https://x.com/fly3nn/status/2120876768454472043",
        "publishedAt": "2026-11-12"
      }
    },
    {
      "id": 53,
      "title": "「Muse from Meta」官方 Chrome 插件登陆 Windows，Mac 爆火后双平台齐了",
      "valueLine": "一条 Windows 版上架通知：Meta 官方 Chrome 插件「Muse from Meta」在 Mac 端走红后，现已能在 Windows 电脑上使用，Chrome 商店搜「Muse from Meta」即可。作者称今天刚上线、下载量才 100 多人（作者发帖时自述的商店数据，未独立核实）。如实说明：帖内没有任何实际使用产出，与站内 id 52 是同一款插件。",
      "category": "advanced",
      "difficulty": "入门",
      "score": 71,
      "heat": 38,
      "featured": false,
      "issueDate": "2026-11-13",
      "background": "2026-11-12 晚，明子206 发帖通知：Mac 端爆火的 Muse Chrome 插件，现在 Windows 电脑也可以用了。他提示在 Chrome 应用店搜索「Muse from Meta」、官方来源是 Meta，并称今天刚上线、目前才 100 多人下载，配了商店搜索结果截图。这款插件正是站内 id 52（Flynn 的实测分享帖）讲的同一款，本条只是它的 Windows 上架动态。",
      "steps": [
        "打开 Chrome 网上应用店，搜索「Muse from Meta」；作者截图里搜索结果首条即该官方条目。",
        "认准官方来源是 Meta 再安装，别装同名的第三方仿冒插件。",
        "按作者说法，此前主要是 Mac 端用户在用且很火；这次上架后，Windows 电脑同样可以安装使用。",
        "想要背景的可以对照站内 id 52：那条是用户装上插件后的自述分享（效果未经实证），本条不重复那些说法。"
      ],
      "keyPrompt": "",
      "outputDesc": "无产出证据，如实标注：这是一条纯上架通知帖。作者只附了 Chrome 商店的搜索截图，没有描述自己用插件执行过任何具体任务，也没有过程、结果截图或录屏；「今天刚上线、目前才 100 多人下载」为作者发帖时自述的商店时点数据，未独立核实且会随时间变化。原帖 2,408 浏览、13 赞、23 收藏。",
      "outputUrl": "",
      "reproduceTips": "想尝鲜门槛很低：Chrome 商店搜「Muse from Meta」，认准 Meta 官方发布者安装即可，Windows 与 Mac 均可。使用注意与 id 52 相同：先拿不敏感的公开网站小任务试水，并想清楚让 AI 操作带全部登录态的本地 Chrome 的安全边界。本条为牛老板在知情（与 id 52 撞题、无产出证据）后仍点选破例单发，仅作 Windows 上线动态记录，价值请自行判断。",
      "pitfalls": "1. 纯资讯、无实测：「Mac 端爆火」「刚上线」都是作者的说法，帖内没有效果证据；插件实际能做什么请看 id 52 并注意那条的效果同样是作者自述。2. 别把本条和 id 52 当成两个产品：同一款「Muse from Meta」插件，本条只是 Windows 平台的上架通知。3. 下载量 100 多是发帖时点的自述数据，会变；安装时务必核对发布者为 Meta，谨防仿冒。",
      "source": {
        "name": "明子206 @mingzi206（用户投稿）",
        "platform": "X",
        "grade": "B",
        "url": "https://x.com/mingzi206/status/2120908975822770357",
        "publishedAt": "2026-11-12"
      }
    },
    {
      "id": 54,
      "title": "126 万浏览验证的 Muse 干货全整理：复制提示词丢给 Muse，它替你一件件做",
      "valueLine": "一篇汇编型实操长文：作者把近 30 天 8 条 Muse 干货源帖（源帖合计浏览 1,263,360，为作者 2026-11-12 核实数）整理成 6 章可执行体系——Spaces 工作台、免费额度雷达、AI 视频工作流、内容增长、免登录读链接、自动部署与定时。核心用法是把文首的「全自动执行提示词」加上本文链接丢给自己的 Muse，它读完按顺序逐件执行，人只提目标、看效果、对外操作前拍板。",
      "category": "advanced",
      "difficulty": "进阶",
      "score": 80,
      "heat": 72,
      "featured": true,
      "issueDate": "2026-11-14",
      "background": "2026-11-12 20:18，生命假象（@sgwer73）在 X 发长文《全网最全推特大神的 Muse 干货全整理：126 万浏览验证过》。近一个月 Muse 的干货帖很多但散在各处，他把其中 8 条源帖逐条拆解、自己复现了一遍，再按「先搭台子、再省额度、再做内容、最后自动化」的顺序整理成 6 章体系，并给每章配了真实的工作台、雷达和抓取结果页面截图。本帖是狗爸爸投稿，经总管核验后直发收录。",
      "steps": [
        "第一章搭 Spaces 工作台：建选题库、免费额度雷达、AI 视频工作流、自媒体创作中心、热点看板 5 个工作台；动手前先查云端配置、定下账号操作确认规则与十条工作规则，验收标准是存入真素材、关页重开还在。",
        "第二章建免费额度雷达：用 12 项建卡模板逐项登记额度，按到期时间排序、每日定时复查；作者的分流打法是 OpenRouter 免费层（其自述实测 50 次/天、充 $10 升到 1000 次/天）加 Pi 子任务加 FreeToken-Bots 每日扫描，密钥只放安全存储。",
        "第三章跑 AI 视频工作流：先列分镜表，再逐镜生成、逐镜验收；文中实例包括一张照片做 12 秒竖屏项链广告（三镜）、森叔用 Muse 加无限画布做的 18 秒成片《别开门》。",
        "第四章做内容增长：套用 Koda 的选题、标题、开头配比方法，配合发前六问清单自检；热点看板每 30 分钟刷新，按真实互动排序选题。",
        "第五章免登录读链接：走分级路线——公开元数据、访客接口、开源工具（yt-dlp、XHS-Downloader）、真浏览器拦截，读到多少说多少，不装全读到。",
        "第六章上自动部署与定时：让 Muse 帮忙部署服务（文中实例为在 cloady 免费档部署 xray，作者纠正免费档实为每月 10GB 出站）；定时任务只接步骤固定、结果写回、失败可见的事，记忆每日打包备份。",
        "总装验收：把文首「全自动执行提示词」加上本文链接发给自己的 Muse，让它读完按顺序逐件执行；人只提目标、看效果，所有对外操作执行前由人拍板。"
      ],
      "keyPrompt": "（核心指令摘录：原帖文首执行提示词全文未能完整抓取，以下只录确证的核心指令短句，不作全文引用）把文章链接粘在提示词最后，发给自己的 Muse，让它读完后按顺序逐件执行；人只提目标、看效果，对外操作前先拍板。",
      "outputDesc": "产出不是单件作品，而是一套装进自己 Muse 的执行体系：5 个 Spaces 工作台、免费额度雷达、AI 视频工作流、内容热点看板，以及自动部署与定时任务，作者自述每节都照着做过一遍、帖内各章配有真实页面截图。热度为总管 2026-11-14 实读原帖：25,179 浏览、510 赞、784 收藏、81 转帖。注意标题里的「126 万浏览」指 8 条源帖合计浏览 1,263,360（作者 2026-11-12 核实数），不是本帖自身的浏览量。",
      "outputUrl": "",
      "reproduceTips": "1. 别一口气全上：先挑一章落地（建议先搭工作台加额度雷达），用作者给的验收标准自查（如素材关页重开还在），跑通再加下一章。2. 额度数字是作者个人账户的实测口径（如 OpenRouter 免费层次数），免费规则会变，照做前回官网核对。3. 密钥只放安全存储，别写进提示词或公开文档。4. 定时任务只接步骤固定、结果写回、失败可见的事，需要临场判断的活别全自动。",
      "pitfalls": "1. 诚实标注：作者是整理者加复现者，主体案例来自 8 条源帖的原作者，本帖未贴作者本人逐步操作的完整原始记录，各章效果请回源帖交叉核对。2. 第三方桥接 muse2api 非官方 API：作者自述对桥接项目做过源码审计，但使用仍有封号风险，非必要别拿主力账号接。3. 免费额度与免费档规则会变（如 cloady 免费档实为每月 10GB 出站，是作者纠正后的口径），领取与部署前回官网核对。4. 「全自动执行」不等于无人值守：涉及账号、发布、付费的对外操作，务必保留人工拍板环节。",
      "source": {
        "name": "生命假象 @sgwer73（用户投稿）",
        "platform": "X",
        "grade": "B",
        "url": "https://x.com/sgwer73/status/2120853798839267562",
        "publishedAt": "2026-11-12"
      }
    }
  ]
};
