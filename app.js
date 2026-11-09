// Muse 实战案例库 - 双语 (CH / EN) 交互核心脚本
(function () {
  'use strict';

  // 国际化文案字典
  const I18N = {
    zh: {
      siteTitle: 'Muse 实战案例库',
      siteSubject: 'Meta Muse（个人 AI 助手）真实用户实战案例',
      statTotalCasesLabel: '实战案例',
      statCategoriesLabel: '分类覆盖',
      statLatestDateLabel: '最新期次',
      featuredBadge: '🌟 本期头条',
      trendingTitle: '热门榜 Top 5',
      trendingHint: '按用户热度综合排序',
      searchPlaceholder: '搜索标题、背景、步骤、工具或出处...',
      sortHeat: '🔥 按热度从高到低',
      sortScore: '★ 按评分从高到低',
      sortNewest: '🕒 按最新期次',
      favBtn: '只看收藏',
      allCategories: '全部',
      resultsCount: (count, total) => `展示 ${count} 个案例 (共 ${total} 个)`,
      pagePrev: '上一页',
      pageNext: '下一页',
      pageOf: (cur, total, count) => `第 ${cur}/${total} 页（共 ${count} 条）`,
      resetFilters: '重置所有筛选',
      cardPromptBadge: '💬 提示词',
      emptyTitle: '未找到匹配的案例',
      emptyDesc: '尝试更换搜索词、切换分类或取消“只看收藏”',
      emptyReset: '恢复显示全部案例',
      sourceLink: '原文',
      viewDetails: '详情 &rarr;',
      viewPlan: '方案 &rarr;',
      modalBackground: '任务背景',
      modalSteps: (count) => `做法步骤 (${count} 步)`,
      modalPrompt: '关键提示词 (Prompt)',
      modalCopyPrompt: '复制提示词',
      modalOutput: '产出与证据',
      modalOutputLink: '访问真实产出链接',
      modalTips: '复现要点',
      modalPitfalls: '踩坑提示',
      modalSource: '原始信源核对',
      modalAuthor: '作者/报道',
      modalPlatform: '平台',
      modalGrade: '信源等级',
      modalDate: '发布日期',
      modalDedicated: '独立专属落地页 ↗',
      modalVisitSource: '访问原文报道',
      modalClose: '关闭',
      modalGuaranteed: '所有字段提取自源数据',
      toastCopied: '提示词已复制到剪贴板！',
      toastFavAdded: '已加入收藏',
      toastFavRemoved: '已取消收藏',
      footerSourcePrefix: '数据来源：',
      footerNote: '所有文案、数据及评分严格以源数据为准 · 支持本地离线存储与核验 · MoniMuse 伴侣驱动'
    },
    en: {
      siteTitle: 'Muse Case Library',
      siteSubject: 'Meta Muse (Personal AI Assistant) Real-World User Case Studies & Playbooks',
      statTotalCasesLabel: 'Cases',
      statCategoriesLabel: 'Categories',
      statLatestDateLabel: 'Latest Issue',
      featuredBadge: '🌟 FEATURED',
      trendingTitle: 'Trending Top 5',
      trendingHint: 'Ranked by real-world heat',
      searchPlaceholder: 'Search titles, steps, prompts, sources...',
      sortHeat: '🔥 Highest Heat',
      sortScore: '★ Highest Score',
      sortNewest: '🕒 Latest Issue',
      favBtn: 'Saved',
      allCategories: 'All',
      resultsCount: (count, total) => `Showing ${count} of ${total} cases`,
      pagePrev: 'Previous',
      pageNext: 'Next',
      pageOf: (cur, total, count) => `Page ${cur} of ${total} (${count} cases)`,
      resetFilters: 'Reset all filters',
      cardPromptBadge: '💬 Prompt',
      emptyTitle: 'No matching cases found',
      emptyDesc: 'Try adjusting your search, selecting another category, or clearing the saved filter',
      emptyReset: 'Show all cases',
      sourceLink: 'Source',
      viewDetails: 'Details &rarr;',
      viewPlan: 'View &rarr;',
      modalBackground: 'Task Background',
      modalSteps: (count) => `Step-by-Step Guide (${count} Steps)`,
      modalPrompt: 'Key Prompt Template',
      modalCopyPrompt: 'Copy Prompt',
      modalOutput: 'Output & Verified Evidence',
      modalOutputLink: 'View Live Output Link',
      modalTips: 'Replication Notes',
      modalPitfalls: 'Known Pitfalls & Warnings',
      modalSource: 'Source Verification',
      modalAuthor: 'Author / Coverage',
      modalPlatform: 'Platform',
      modalGrade: 'Source Grade',
      modalDate: 'Published',
      modalDedicated: 'Dedicated Page ↗',
      modalVisitSource: 'View Original Article',
      modalClose: 'Close',
      modalGuaranteed: 'Strictly verified from source data',
      toastCopied: 'Prompt copied to clipboard!',
      toastFavAdded: 'Added to saved',
      toastFavRemoved: 'Removed from saved',
      footerSourcePrefix: 'Data source: ',
      footerNote: 'All copy, metrics, and URLs strictly verified from source data · MoniMuse Companion Driven'
    }
  };

  // 状态变量
  let state = {
    lang: 'zh',
    dataZh: null,
    dataEn: null,
    data: null,
    currentCategory: 'all',
    searchKeyword: '',
    currentPage: 1,
    pageSize: 60,
    currentSort: 'heat',
    favoritesOnly: false,
    favorites: new Set(),
    activeModalCaseId: null
  };

  const STORAGE_KEY_FAV = 'muse_case_favorites_v1';
  const STORAGE_KEY_LANG = 'muse_site_lang_v1';

  // DOM 节点引用
  const dom = {
    siteTitle: document.getElementById('siteTitle'),
    siteSubject: document.getElementById('siteSubject'),
    statTotalCases: document.getElementById('statTotalCases'),
    statTotalCasesLabel: document.getElementById('statTotalCasesLabel'),
    statCategories: document.getElementById('statCategories'),
    statCategoriesLabel: document.getElementById('statCategoriesLabel'),
    statLatestDate: document.getElementById('statLatestDate'),
    statLatestDateLabel: document.getElementById('statLatestDateLabel'),
    langZhBtn: document.getElementById('langZhBtn'),
    langEnBtn: document.getElementById('langEnBtn'),
    featuredSection: document.getElementById('featuredSection'),
    trendingGrid: document.getElementById('trendingGrid'),
    searchInput: document.getElementById('searchInput'),
    clearSearchBtn: document.getElementById('clearSearchBtn'),
    sortSelect: document.getElementById('sortSelect'),
    favFilterBtn: document.getElementById('favFilterBtn'),
    favCountBadge: document.getElementById('favCountBadge'),
    categoryTabs: document.getElementById('categoryTabs'),
    resultsCount: document.getElementById('resultsCount'),
    resetFilterLink: document.getElementById('resetFilterLink'),
    casesGrid: document.getElementById('casesGrid'),
    paginationWrap: document.getElementById('paginationWrap'),
    emptyState: document.getElementById('emptyState'),
    emptyResetBtn: document.getElementById('emptyResetBtn'),
    footerSource: document.getElementById('footerSource'),
    // Modal
    caseModal: document.getElementById('caseModal'),
    modalMeta: document.getElementById('modalMeta'),
    modalFavBtn: document.getElementById('modalFavBtn'),
    modalCloseBtn: document.getElementById('modalCloseBtn'),
    modalBody: document.getElementById('modalBody'),
    modalFooter: document.getElementById('modalFooter'),
    toast: document.getElementById('toast')
  };

  // 初始化入口
  async function init() {
    loadLanguagePreference();
    loadFavoritesFromStorage();
    bindGlobalEvents();
    await loadData();
  }

  // 读取语言偏好设置
  function loadLanguagePreference() {
    try {
      // 位于 /en/ 独立静态英文路由下，默认锁定为英文
      if (window.location.pathname.includes('/en/')) {
        state.lang = 'en';
        return;
      }

      // 优先从 URL 参数中获取 ?lang=
      const urlParams = new URLSearchParams(window.location.search);
      const urlLang = urlParams.get('lang');
      if (urlLang === 'en' || urlLang === 'zh') {
        state.lang = urlLang;
        localStorage.setItem(STORAGE_KEY_LANG, urlLang);
        return;
      }

      // 其次从 localStorage 获取
      const saved = localStorage.getItem(STORAGE_KEY_LANG);
      if (saved === 'en' || saved === 'zh') {
        state.lang = saved;
        return;
      }

      // 最后检测浏览器语言偏好
      if (navigator.language && !navigator.language.toLowerCase().startsWith('zh')) {
        state.lang = 'en';
      } else {
        state.lang = 'zh';
      }
    } catch (e) {
      state.lang = 'zh';
    }
  }

  // 加载数据 (中英双语并行加载)
  async function loadData() {
    const basePath = window.location.pathname.includes('/en/') ? '../' : './';
    try {
      const [resZh, resEn] = await Promise.all([
        fetch(basePath + 'data.json').then(r => r.ok ? r.json() : null).catch(() => null),
        fetch(basePath + 'data-en.json').then(r => r.ok ? r.json() : null).catch(() => null)
      ]);

      state.dataZh = resZh || window.FALLBACK_DATA;
      state.dataEn = resEn || window.FALLBACK_DATA_EN || state.dataZh;
    } catch (err) {
      console.warn('Fetch data failed, using fallback data...', err);
      state.dataZh = window.FALLBACK_DATA;
      state.dataEn = window.FALLBACK_DATA_EN || window.FALLBACK_DATA;
    }

    applyCurrentLanguageData();
    renderAll();
  }

  // 根据当前 state.lang 激活对应数据包与文档属性
  function applyCurrentLanguageData() {
    state.data = state.lang === 'en' ? (state.dataEn || state.dataZh) : state.dataZh;

    // 更新 html 属性
    document.documentElement.lang = state.lang === 'en' ? 'en' : 'zh-CN';

    // 更新切换器按钮状态
    if (dom.langZhBtn && dom.langEnBtn) {
      if (state.lang === 'zh') {
        dom.langZhBtn.classList.add('active');
        dom.langEnBtn.classList.remove('active');
      } else {
        dom.langZhBtn.classList.remove('active');
        dom.langEnBtn.classList.add('active');
      }
    }

    // 更新静态界面字典
    updateStaticTexts();
  }

  // 切换语言
  function setLanguage(newLang) {
    if (newLang === state.lang) return;
    state.lang = newLang;
    try {
      localStorage.setItem(STORAGE_KEY_LANG, newLang);
    } catch (e) {}

    // 如果处于静态部署环境，通过标准独立路由切换，实现 Google 最佳双语多 URL 索引体验
    if (window.location.protocol.startsWith('http')) {
      if (newLang === 'en' && !window.location.pathname.includes('/en/')) {
        window.location.href = './en/' + (window.location.search || '');
        return;
      }
      if (newLang === 'zh' && window.location.pathname.includes('/en/')) {
        window.location.href = '../' + (window.location.search || '');
        return;
      }
    }

    try {
      const url = new URL(window.location.href);
      url.searchParams.set('lang', newLang);
      window.history.replaceState({}, '', url.toString());
    } catch (e) {}

    applyCurrentLanguageData();
    renderAll();

    // 如果弹窗处于打开状态，即时重新渲染该弹窗为目标语言
    if (state.activeModalCaseId !== null) {
      openCaseModal(state.activeModalCaseId);
    }
  }

  // 更新界面的静态 UI 文本
  function updateStaticTexts() {
    const t = I18N[state.lang];
    if (dom.siteTitle && state.data) dom.siteTitle.textContent = state.data.site;
    if (dom.siteSubject && state.data) dom.siteSubject.textContent = state.data.subject;

    if (dom.statTotalCasesLabel) dom.statTotalCasesLabel.textContent = t.statTotalCasesLabel;
    if (dom.statCategoriesLabel) dom.statCategoriesLabel.textContent = t.statCategoriesLabel;
    if (dom.statLatestDateLabel) dom.statLatestDateLabel.textContent = t.statLatestDateLabel;

    // 搜索输入框 placeholder
    if (dom.searchInput) dom.searchInput.placeholder = t.searchPlaceholder;

    // 排序下拉选项文本
    if (dom.sortSelect) {
      const opts = dom.sortSelect.options;
      if (opts.length >= 3) {
        opts[0].text = t.sortHeat;
        opts[1].text = t.sortScore;
        opts[2].text = t.sortNewest;
      }
    }

    // 只看收藏按钮文本
    if (dom.favFilterBtn) {
      const span = dom.favFilterBtn.querySelector('span:not(.fav-count-badge)');
      if (span) span.textContent = t.favBtn;
    }

    // 热门榜标题
    const trendingHeaderTitle = document.querySelector('.section-trending .section-title');
    if (trendingHeaderTitle) trendingHeaderTitle.textContent = t.trendingTitle;
    const trendingHint = document.querySelector('.section-trending .section-hint');
    if (trendingHint) trendingHint.textContent = t.trendingHint;

    // 重置所有筛选链接
    if (dom.resetFilterLink) dom.resetFilterLink.textContent = t.resetFilters;

    // 空状态
    const emptyTitleEl = document.querySelector('.empty-title');
    if (emptyTitleEl) emptyTitleEl.textContent = t.emptyTitle;
    const emptyDescEl = document.querySelector('.empty-desc');
    if (emptyDescEl) emptyDescEl.textContent = t.emptyDesc;
    if (dom.emptyResetBtn) dom.emptyResetBtn.textContent = t.emptyReset;

    // 页脚
    if (dom.footerSource && state.data) {
      dom.footerSource.textContent = t.footerSourcePrefix + state.data.source;
    }
    const footerNoteEl = document.querySelector('.footer-note');
    if (footerNoteEl) footerNoteEl.textContent = t.footerNote;

    // 友情链接双语文本
    const footerLinksContainer = document.querySelector('.footer-links');
    if (footerLinksContainer) {
      if (state.lang === 'en') {
        footerLinksContainer.innerHTML = `
          <span class="footer-links-label">Friendly Links:</span>
          <a href="https://www.moyunews.com/" target="_blank" rel="noopener noreferrer">MoyuNews</a>
          <span class="footer-links-sep">&bull;</span>
          <a href="https://free.itis.chat/" target="_blank" rel="noopener noreferrer">ITIS Free</a>
          <span class="footer-links-sep">&bull;</span>
          <a href="https://m.ucncn.cn/" target="_blank" rel="noopener noreferrer">MoneyLab</a>
          <span class="footer-links-sep">&bull;</span>
          <a href="https://doin.win/" target="_blank" rel="noopener noreferrer">Free Mini Games</a>
          <span class="footer-links-sep">&bull;</span>
          <a href="https://itis.chat/" target="_blank" rel="noopener noreferrer">AI Navigation</a>
          <span class="footer-links-sep">&bull;</span>
          <a href="https://hao.itis.chat/" target="_blank" rel="noopener noreferrer">Deals Daily</a>
        `;
      } else {
        footerLinksContainer.innerHTML = `
          <span class="footer-links-label">友情链接：</span>
          <a href="https://www.moyunews.com/" target="_blank" rel="noopener noreferrer">摸鱼杂货店</a>
          <span class="footer-links-sep">&bull;</span>
          <a href="https://free.itis.chat/" target="_blank" rel="noopener noreferrer">免费开源数字资源</a>
          <span class="footer-links-sep">&bull;</span>
          <a href="https://m.ucncn.cn/" target="_blank" rel="noopener noreferrer">搞钱实验室</a>
          <span class="footer-links-sep">&bull;</span>
          <a href="https://doin.win/" target="_blank" rel="noopener noreferrer">小游戏大全</a>
          <span class="footer-links-sep">&bull;</span>
          <a href="https://itis.chat/" target="_blank" rel="noopener noreferrer">AI资源导航</a>
          <span class="footer-links-sep">&bull;</span>
          <a href="https://hao.itis.chat/" target="_blank" rel="noopener noreferrer">薅羊毛日报</a>
        `;
      }
    }
  }

  // 加载收藏记录
  function loadFavoritesFromStorage() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_FAV);
      if (stored) {
        const arr = JSON.parse(stored);
        if (Array.isArray(arr)) {
          state.favorites = new Set(arr);
        }
      }
    } catch (e) {
      state.favorites = new Set();
    }
    updateFavBadges();
  }

  // 保存收藏记录
  function saveFavoritesToStorage() {
    try {
      localStorage.setItem(STORAGE_KEY_FAV, JSON.stringify(Array.from(state.favorites)));
    } catch (e) {}
    updateFavBadges();
  }

  // 切换案例收藏
  function toggleFavorite(id, e) {
    if (e) e.stopPropagation();
    const numId = Number(id);
    const t = I18N[state.lang];
    let isFav = false;
    if (state.favorites.has(numId)) {
      state.favorites.delete(numId);
      isFav = false;
      showToast(t.toastFavRemoved);
    } else {
      state.favorites.add(numId);
      isFav = true;
      showToast(t.toastFavAdded);
    }
    saveFavoritesToStorage();

    updateCardFavState(numId, isFav);
    if (state.activeModalCaseId === numId) {
      updateModalFavState(isFav);
    }

    if (state.favoritesOnly) {
      renderCasesGrid();
    }
  }

  // 更新徽章数字
  function updateFavBadges() {
    if (dom.favCountBadge) {
      dom.favCountBadge.textContent = state.favorites.size;
    }
  }

  // 更新卡片收藏状态
  function updateCardFavState(id, isFav) {
    const btns = document.querySelectorAll(`[data-fav-case-id="${id}"]`);
    btns.forEach(btn => {
      if (isFav) {
        btn.classList.add('active');
        btn.setAttribute('title', state.lang === 'en' ? 'Saved (click to remove)' : '已收藏，点击取消');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('title', state.lang === 'en' ? 'Save case' : '加入收藏');
      }
    });
  }

  // 更新弹窗收藏状态
  function updateModalFavState(isFav) {
    if (!dom.modalFavBtn) return;
    if (isFav) {
      dom.modalFavBtn.classList.add('active');
      dom.modalFavBtn.setAttribute('title', state.lang === 'en' ? 'Saved (click to remove)' : '已收藏，点击取消');
    } else {
      dom.modalFavBtn.classList.remove('active');
      dom.modalFavBtn.setAttribute('title', state.lang === 'en' ? 'Save case' : '加入收藏');
    }
  }

  // 全量渲染
  function renderAll() {
    if (!state.data) return;

    renderHeaderAndStats();
    renderFeatured();
    renderTrending();
    renderCategoryTabs();
    renderCasesGrid();
    checkInitialUrlDeepLink();
  }

  // 检查初始 URL 是否有指定某个案例
  function checkInitialUrlDeepLink() {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      let caseId = urlParams.get('case');
      if (!caseId && window.location.hash) {
        const m = window.location.hash.match(/case-(\d+)/);
        if (m) caseId = m[1];
      }
      if (caseId) {
        const targetId = Number(caseId);
        const exists = (state.data?.cases || []).some(c => c.id === targetId);
        if (exists && state.activeModalCaseId !== targetId) {
          setTimeout(() => openCaseModal(targetId), 100);
        }
      }
    } catch (e) {}
  }

  // 1. 渲染顶部与统计
  function renderHeaderAndStats() {
    const { site, subject, cases, categories, issues } = state.data;
    if (site && dom.siteTitle) dom.siteTitle.textContent = site;
    if (subject && dom.siteSubject) dom.siteSubject.textContent = subject;

    if (dom.statTotalCases) dom.statTotalCases.textContent = cases ? cases.length : 0;
    if (dom.statCategories) dom.statCategories.textContent = categories ? categories.length : 0;

    let latestDate = '--';
    if (issues && issues.length > 0) {
      latestDate = issues[0].date;
    } else if (cases && cases.length > 0) {
      latestDate = cases[0].issueDate || '--';
    }
    if (dom.statLatestDate) dom.statLatestDate.textContent = latestDate;
  }

  // 2. 渲染本期头条 (Featured)
  function renderFeatured() {
    const cases = state.data.cases || [];
    const featuredCase = cases.find(c => c.featured) || cases[0];
    const t = I18N[state.lang];

    if (!featuredCase) {
      dom.featuredSection.innerHTML = '';
      return;
    }

    const catName = getCategoryName(featuredCase.category);
    const diffText = getDifficultyText(featuredCase);
    const gradeClass = getGradeClass(featuredCase.source?.grade);
    const isFav = state.favorites.has(featuredCase.id);

    dom.featuredSection.innerHTML = `
      <div class="featured-card">
        <div class="featured-top-row">
          <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
            <span class="featured-badge">${t.featuredBadge}</span>
            <span class="badge badge-cat">${escapeHtml(catName)} · ${escapeHtml(diffText)}</span>
            <span class="badge badge-grade ${gradeClass}">Grade ${escapeHtml(featuredCase.source?.grade || '')}</span>
          </div>
          <button class="card-fav-btn ${isFav ? 'active' : ''}" data-fav-case-id="${featuredCase.id}" title="${isFav ? (state.lang === 'en' ? 'Saved' : '已收藏') : (state.lang === 'en' ? 'Save' : '加入收藏')}">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
        </div>

        <h2 class="featured-title" data-open-modal="${featuredCase.id}">${escapeHtml(featuredCase.title)}</h2>
        
        <p class="featured-valueline">${escapeHtml(featuredCase.valueLine)}</p>

        <div class="featured-meta-bar">
          <span class="stat-tag stat-score">★ ${featuredCase.score}</span>
          <span style="color: var(--text-dim);">&bull;</span>
          <span class="stat-tag stat-heat">🔥 ${featuredCase.heat}</span>
          <span style="color: var(--text-dim);">&bull;</span>
          <span class="stat-tag">📅 ${escapeHtml(featuredCase.issueDate)}</span>
        </div>

        <div class="featured-footer">
          <div class="featured-source-wrap">
            <span>${escapeHtml(featuredCase.source?.platform || '')} · <strong>${escapeHtml(featuredCase.source?.name || '')}</strong></span>
            ${featuredCase.source?.url ? `
              <a href="${escapeHtml(featuredCase.source.url)}" target="_blank" rel="noopener noreferrer" class="source-link-btn" title="Original source">
                <span>${t.sourceLink}</span>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            ` : ''}
          </div>

          <div class="featured-actions">
            <button class="btn btn-primary" data-open-modal="${featuredCase.id}">
              <span>${t.viewPlan}</span>
            </button>
          </div>
        </div>
      </div>
    `;

    // 绑定事件
    const favBtn = dom.featuredSection.querySelector(`[data-fav-case-id="${featuredCase.id}"]`);
    if (favBtn) {
      favBtn.addEventListener('click', (e) => toggleFavorite(featuredCase.id, e));
    }

    const openBtns = dom.featuredSection.querySelectorAll(`[data-open-modal="${featuredCase.id}"]`);
    openBtns.forEach(btn => {
      btn.addEventListener('click', () => openCaseModal(featuredCase.id));
    });
  }

  // 3. 渲染热门榜 Top 5
  function renderTrending() {
    const cases = state.data.cases || [];
    const sorted = [...cases].sort((a, b) => b.heat - a.heat);
    const top5 = sorted.slice(0, 5);

    dom.trendingGrid.innerHTML = top5.map((c, index) => {
      const rank = index + 1;
      const catName = getCategoryName(c.category);
      return `
        <div class="trending-card" data-open-modal="${c.id}" tabindex="0" role="button" aria-label="${escapeHtml(c.title)}">
          <div>
            <div class="trending-card-top">
              <span class="rank-badge rank-${rank}">${rank < 10 ? '0' + rank : rank}</span>
              <span class="trending-heat">🔥 ${c.heat}</span>
            </div>
            <div class="trending-title" title="${escapeHtml(c.title)}">${escapeHtml(c.title)}</div>
          </div>
          <div class="trending-meta">
            <span>${escapeHtml(catName)}</span>
            <span>Grade ${escapeHtml(c.source?.grade || '')}</span>
          </div>
        </div>
      `;
    }).join('');

    const cards = dom.trendingGrid.querySelectorAll('.trending-card');
    cards.forEach(card => {
      const id = Number(card.getAttribute('data-open-modal'));
      card.addEventListener('click', () => openCaseModal(id));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openCaseModal(id);
        }
      });
    });
  }

  // 4. 渲染分类标签条
  function renderCategoryTabs() {
    const { categories, cases } = state.data;
    if (!categories) return;
    const t = I18N[state.lang];

    const countMap = {};
    (cases || []).forEach(c => {
      countMap[c.category] = (countMap[c.category] || 0) + 1;
    });

    const totalCount = cases ? cases.length : 0;

    let html = `
      <button class="cat-tab-btn ${state.currentCategory === 'all' ? 'active' : ''}" data-cat="all">
        <span>${t.allCategories}</span>
        <span class="cat-count">${totalCount}</span>
      </button>
    `;

    categories.forEach(cat => {
      const count = countMap[cat.id] || 0;
      const isActive = state.currentCategory === cat.id;
      html += `
        <button class="cat-tab-btn ${isActive ? 'active' : ''}" data-cat="${escapeHtml(cat.id)}" title="${escapeHtml(cat.hint || cat.name)}">
          <span>${escapeHtml(cat.name)}</span>
          <span class="cat-count">${count}</span>
        </button>
      `;
    });

    dom.categoryTabs.innerHTML = html;

    const tabBtns = dom.categoryTabs.querySelectorAll('.cat-tab-btn');
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const cat = btn.getAttribute('data-cat');
        setCategory(cat);
      });
    });
  }

  // 切换分类
  function setCategory(catId) {
    state.currentCategory = catId;
    state.currentPage = 1;
    const tabBtns = dom.categoryTabs.querySelectorAll('.cat-tab-btn');
    tabBtns.forEach(btn => {
      if (btn.getAttribute('data-cat') === catId) {
        btn.classList.add('active');
        btn.scrollIntoView({ behavior: 'smooth', inline: 'nearest', block: 'nearest' });
      } else {
        btn.classList.remove('active');
      }
    });
    renderCasesGrid();
  }

  // 5. 渲染案例网格
  function renderCasesGrid() {
    const cases = state.data.cases || [];
    const keyword = state.searchKeyword.trim().toLowerCase();
    const t = I18N[state.lang];

    let filtered = cases.filter(c => {
      if (state.currentCategory !== 'all' && c.category !== state.currentCategory) {
        return false;
      }
      if (state.favoritesOnly && !state.favorites.has(c.id)) {
        return false;
      }
      if (keyword) {
        const matchTitle = (c.title || '').toLowerCase().includes(keyword);
        const matchValueLine = (c.valueLine || '').toLowerCase().includes(keyword);
        const matchBackground = (c.background || '').toLowerCase().includes(keyword);
        const matchSteps = (c.steps || []).join(' ').toLowerCase().includes(keyword);
        const matchPrompt = (c.keyPrompt || '').toLowerCase().includes(keyword);
        const matchOutput = (c.outputDesc || '').toLowerCase().includes(keyword);
        const matchTips = (c.reproduceTips || '').toLowerCase().includes(keyword);
        const matchSourceName = (c.source?.name || '').toLowerCase().includes(keyword);
        const matchPlatform = (c.source?.platform || '').toLowerCase().includes(keyword);

        if (!matchTitle && !matchValueLine && !matchBackground && !matchSteps &&
            !matchPrompt && !matchOutput && !matchTips && !matchSourceName && !matchPlatform) {
          return false;
        }
      }
      return true;
    });

    filtered.sort((a, b) => {
      if (state.currentSort === 'score') {
        return b.score - a.score;
      } else if (state.currentSort === 'newest') {
        if (a.issueDate === b.issueDate) return b.id - a.id;
        return (b.issueDate || '').localeCompare(a.issueDate || '');
      } else {
        return b.heat - a.heat;
      }
    });

    const totalCount = filtered.length;
    const pageSize = state.pageSize || 60;
    const totalPages = Math.ceil(totalCount / pageSize) || 1;
    if (state.currentPage > totalPages) state.currentPage = totalPages;
    if (state.currentPage < 1) state.currentPage = 1;

    if (totalPages > 1) {
      dom.resultsCount.textContent = `${t.resultsCount(totalCount, cases.length)} · ${t.pageOf(state.currentPage, totalPages, totalCount)}`;
    } else {
      dom.resultsCount.textContent = t.resultsCount(totalCount, cases.length);
    }

    const hasFilter = state.currentCategory !== 'all' || state.searchKeyword || state.favoritesOnly;
    dom.resetFilterLink.style.display = hasFilter ? 'inline-block' : 'none';

    if (totalCount === 0) {
      dom.casesGrid.style.display = 'none';
      dom.emptyState.style.display = 'block';
      if (dom.paginationWrap) {
        dom.paginationWrap.style.display = 'none';
        dom.paginationWrap.innerHTML = '';
      }
      return;
    }

    dom.casesGrid.style.display = 'grid';
    dom.emptyState.style.display = 'none';

    const startIndex = (state.currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginated = filtered.slice(startIndex, endIndex);

    dom.casesGrid.innerHTML = paginated.map(c => {
      const catName = getCategoryName(c.category);
      const diffText = getDifficultyText(c);
      const isFav = state.favorites.has(c.id);

      return `
        <div class="case-card" data-case-id="${c.id}" tabindex="0" role="button" aria-label="${escapeHtml(c.title)}">
          <div>
            <div class="card-header-row">
              <div class="card-badges">
                <span class="badge badge-cat">${escapeHtml(catName)} · ${escapeHtml(diffText)}</span>
                ${c.keyPrompt ? `<span class="badge badge-prompt-dot" title="Has prompt template">${t.cardPromptBadge}</span>` : ''}
              </div>
              <button class="card-fav-btn ${isFav ? 'active' : ''}" data-fav-case-id="${c.id}" title="${isFav ? (state.lang === 'en' ? 'Saved' : '已收藏') : (state.lang === 'en' ? 'Save' : '加入收藏')}" aria-label="Save">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </button>
            </div>

            <h3 class="card-title">${escapeHtml(c.title)}</h3>
            
            <p class="card-valueline">${escapeHtml(c.valueLine)}</p>

            <div class="card-stats-row">
              <span class="stat-tag stat-score">★ ${c.score}</span>
              <span class="stat-tag stat-heat">🔥 ${c.heat}</span>
              <span class="stat-tag stat-grade">Grade ${escapeHtml(c.source?.grade || '')}</span>
            </div>
          </div>

          <div class="card-footer">
            <div class="card-source-info" title="${escapeHtml(c.source?.platform || '')} · ${escapeHtml(c.source?.name || '')}">
              <span>${escapeHtml(c.source?.platform || '')}</span>
            </div>

            <div style="display: flex; align-items: center; gap: 8px;">
              ${c.source?.url ? `
                <a href="${escapeHtml(c.source.url)}" target="_blank" rel="noopener noreferrer" class="source-link-btn" title="Verify original source" data-source-link="true">
                  <span>${t.sourceLink}</span>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              ` : ''}
              <span class="card-detail-action">${t.viewDetails}</span>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // 绑定卡片点击
    const cardEls = dom.casesGrid.querySelectorAll('.case-card');
    cardEls.forEach(card => {
      const id = Number(card.getAttribute('data-case-id'));
      card.addEventListener('click', (e) => {
        if (e.target.closest('[data-source-link]') || e.target.closest('[data-fav-case-id]')) {
          return;
        }
        openCaseModal(id);
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          if (e.target.closest('[data-source-link]') || e.target.closest('[data-fav-case-id]')) {
            return;
          }
          e.preventDefault();
          openCaseModal(id);
        }
      });

      const srcLink = card.querySelector('[data-source-link]');
      if (srcLink) {
        srcLink.addEventListener('click', (e) => e.stopPropagation());
      }

      const favBtn = card.querySelector(`[data-fav-case-id="${id}"]`);
      if (favBtn) {
        favBtn.addEventListener('click', (e) => toggleFavorite(id, e));
      }
    });

    renderPagination(totalPages, totalCount);
  }

  // 渲染分页控件
  function renderPagination(totalPages, totalCount) {
    if (!dom.paginationWrap) return;
    if (totalPages <= 1) {
      dom.paginationWrap.style.display = 'none';
      dom.paginationWrap.innerHTML = '';
      return;
    }

    const t = I18N[state.lang];
    dom.paginationWrap.style.display = 'flex';

    const cur = state.currentPage;
    let html = '';

    // 上一页
    const prevDisabled = cur === 1 ? 'disabled' : '';
    html += `
      <button class="pagination-btn pagination-prev" data-page="${cur - 1}" ${prevDisabled}>
        &larr; ${t.pagePrev}
      </button>
    `;

    // 页码智能折叠
    const pagesToShow = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pagesToShow.push(i);
    } else {
      pagesToShow.push(1);
      if (cur > 3) pagesToShow.push('...');
      const start = Math.max(2, cur - 1);
      const end = Math.min(totalPages - 1, cur + 1);
      for (let i = start; i <= end; i++) pagesToShow.push(i);
      if (cur < totalPages - 2) pagesToShow.push('...');
      pagesToShow.push(totalPages);
    }

    pagesToShow.forEach(p => {
      if (p === '...') {
        html += `<span class="pagination-ellipsis">&hellip;</span>`;
      } else {
        const isActive = p === cur ? 'active' : '';
        html += `
          <button class="pagination-btn ${isActive}" data-page="${p}" aria-label="Page ${p}">
            ${p}
          </button>
        `;
      }
    });

    // 下一页
    const nextDisabled = cur === totalPages ? 'disabled' : '';
    html += `
      <button class="pagination-btn pagination-next" data-page="${cur + 1}" ${nextDisabled}>
        ${t.pageNext} &rarr;
      </button>
    `;

    html += `
      <span class="pagination-info">${t.pageOf(cur, totalPages, totalCount)}</span>
    `;

    dom.paginationWrap.innerHTML = html;

    const btns = dom.paginationWrap.querySelectorAll('.pagination-btn[data-page]');
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.hasAttribute('disabled')) return;
        const targetPage = Number(btn.getAttribute('data-page'));
        if (targetPage >= 1 && targetPage <= totalPages && targetPage !== state.currentPage) {
          state.currentPage = targetPage;
          renderCasesGrid();
          scrollToGrid();
        }
      });
    });
  }

  function scrollToGrid() {
    const target = dom.resultsCount || dom.categoryTabs || dom.casesGrid;
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // 6. 详情弹窗 Modal
  function openCaseModal(id) {
    const numId = Number(id);
    const c = (state.data.cases || []).find(item => item.id === numId);
    if (!c) return;

    state.activeModalCaseId = numId;
    const catName = getCategoryName(c.category);
    const diffText = getDifficultyText(c);
    const gradeClass = getGradeClass(c.source?.grade);
    const isFav = state.favorites.has(numId);
    const t = I18N[state.lang];

    dom.modalMeta.innerHTML = `
      <span class="badge badge-cat">${escapeHtml(catName)}</span>
      <span class="badge badge-cat">${escapeHtml(diffText)}</span>
      <span class="badge badge-grade ${gradeClass}">Grade ${escapeHtml(c.source?.grade || '')}</span>
      <span class="stat-tag stat-score">★ ${c.score}</span>
      <span class="stat-tag stat-heat">🔥 ${c.heat}</span>
      <span class="stat-tag">📅 ${escapeHtml(c.issueDate)}</span>
    `;

    updateModalFavState(isFav);

    // 结构更整体的沉浸式详情流
    let bodyHtml = `
      <div class="detail-flow">
        <div class="detail-header">
          <h2 class="detail-title" style="margin-top: 0;">${escapeHtml(c.title)}</h2>
          <div class="detail-valueline">${escapeHtml(c.valueLine)}</div>
        </div>
    `;

    // 1. 任务背景
    if (c.background && c.background.trim() !== '') {
      bodyHtml += `
        <div class="detail-section">
          <div class="detail-label">${t.modalBackground}</div>
          <div class="detail-text">${escapeHtml(c.background)}</div>
        </div>
      `;
    }

    // 2. 做法步骤 (steps 数组，连贯数字序号列表)
    if (Array.isArray(c.steps) && c.steps.length > 0) {
      bodyHtml += `
        <div class="detail-section">
          <div class="detail-label">${t.modalSteps(c.steps.length)}</div>
          <ol class="steps-clean-list">
            ${c.steps.map((st, i) => `
              <li class="step-clean-item">
                <span class="step-clean-num">${i + 1}</span>
                <div class="step-clean-text">${escapeHtml(st)}</div>
              </li>
            `).join('')}
          </ol>
        </div>
      `;
    }

    // 3. 关键提示词
    if (c.keyPrompt && c.keyPrompt.trim() !== '') {
      bodyHtml += `
        <div class="detail-section">
          <div class="detail-label">${t.modalPrompt}</div>
          <div class="prompt-box">
            <div class="prompt-bar">
              <span>PROMPT TEMPLATE</span>
              <button class="prompt-copy-btn" id="modalPromptCopyBtn">${t.modalCopyPrompt}</button>
            </div>
            <code class="prompt-code" id="modalPromptCode">${escapeHtml(c.keyPrompt)}</code>
          </div>
        </div>
      `;
    }

    // 4. 产出与证据
    if (c.outputDesc || c.outputUrl) {
      bodyHtml += `
        <div class="detail-section">
          <div class="output-callout">
            <div class="output-callout-label">${t.modalOutput}</div>
            ${c.outputDesc ? `<div class="output-callout-text">${escapeHtml(c.outputDesc)}</div>` : ''}
            ${c.outputUrl && c.outputUrl.trim() !== '' ? `
              <div style="margin-top: 10px;">
                <a href="${escapeHtml(c.outputUrl)}" target="_blank" rel="noopener noreferrer" class="output-callout-link">
                  <span>${t.modalOutputLink}</span> &rarr;
                </a>
              </div>
            ` : ''}
          </div>
        </div>
      `;
    }

    // 5. 复现要点
    if (c.reproduceTips && c.reproduceTips.trim() !== '') {
      bodyHtml += `
        <div class="detail-section">
          <div class="detail-label">${t.modalTips}</div>
          <div class="detail-text">${escapeHtml(c.reproduceTips)}</div>
        </div>
      `;
    }

    // 6. 踩坑提示
    if (c.pitfalls && c.pitfalls.trim() !== '') {
      bodyHtml += `
        <div class="detail-section">
          <div class="pitfalls-callout">
            <div class="pitfalls-callout-label">${t.modalPitfalls}</div>
            <div class="pitfalls-callout-text">${escapeHtml(c.pitfalls)}</div>
          </div>
        </div>
      `;
    }

    // 7. 信源信息核对
    if (c.source) {
      bodyHtml += `
        <div class="detail-section">
          <div class="detail-label">${t.modalSource}</div>
          <div class="source-verify-box">
            <div class="source-meta-left">
              <span>${t.modalAuthor}：<strong>${escapeHtml(c.source.name || '')}</strong></span>
              <span>&bull;</span>
              <span>${t.modalPlatform}：<strong>${escapeHtml(c.source.platform || '')}</strong></span>
              <span>&bull;</span>
              <span>${t.modalGrade}：<strong>Grade ${escapeHtml(c.source.grade || '')}</strong></span>
              ${c.source.publishedAt && c.source.publishedAt.trim() !== '' ? `
                <span>&bull;</span>
                <span>${t.modalDate}：${escapeHtml(c.source.publishedAt)}</span>
              ` : ''}
            </div>
            ${c.source.url ? `
              <a href="${escapeHtml(c.source.url)}" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="padding: 6px 14px; font-size: 0.82rem;">
                <span>${t.modalVisitSource}</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            ` : ''}
          </div>
        </div>
      `;
    }

    bodyHtml += `</div>`; // end detail-flow

    dom.modalBody.innerHTML = bodyHtml;

    dom.modalFooter.innerHTML = `
      <div style="font-size: 0.8rem; color: var(--text-muted); display: flex; align-items: center; gap: 8px;">
        <span>${t.modalGuaranteed}</span>
        <span>&bull;</span>
        <a href="./case/${c.id}/" target="_blank" style="color: var(--accent-caramel); text-decoration: underline; font-weight: 600;" title="${t.modalDedicated}">
          ${t.modalDedicated}
        </a>
      </div>
      <div style="display: flex; gap: 8px; align-items: center;">
        ${c.source?.url ? `
          <a href="${escapeHtml(c.source.url)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="padding: 7px 14px; font-size: 0.82rem;">
            <span>${t.modalVisitSource}</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        ` : ''}
        <button class="btn btn-outline" id="modalFooterCloseBtn" style="padding: 7px 14px; font-size: 0.82rem;">${t.modalClose}</button>
      </div>
    `;

    const copyBtn = document.getElementById('modalPromptCopyBtn');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        const text = c.keyPrompt;
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(() => {
            showToast(t.toastCopied);
          }).catch(() => fallbackCopyText(text));
        } else {
          fallbackCopyText(text);
        }
      });
    }

    const footerCloseBtn = document.getElementById('modalFooterCloseBtn');
    if (footerCloseBtn) {
      footerCloseBtn.addEventListener('click', closeCaseModal);
    }

    try {
      const url = new URL(window.location.href);
      url.searchParams.set('case', String(numId));
      window.history.replaceState({ caseId: numId }, '', url.toString());
      document.title = `${c.title} - ${state.data.site}`;
    } catch (e) {}

    dom.caseModal.classList.add('open');
    dom.caseModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  // 关闭详情弹窗
  function closeCaseModal() {
    dom.caseModal.classList.remove('open');
    dom.caseModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    state.activeModalCaseId = null;

    try {
      const url = new URL(window.location.href);
      url.searchParams.delete('case');
      window.history.replaceState({}, '', url.pathname + (url.hash || ''));
      document.title = state.data ? `${state.data.site} - ${state.data.subject}` : 'Meta Muse 实战案例库';
    } catch (e) {}
  }

  // 剪贴板兜底复制
  function fallbackCopyText(text) {
    const t = I18N[state.lang];
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      showToast(t.toastCopied);
    } catch (err) {
      showToast('Copy failed');
    }
    document.body.removeChild(textArea);
  }

  // Toast 吐司提示
  let toastTimer = null;
  function showToast(msg) {
    if (!dom.toast) return;
    dom.toast.textContent = msg;
    dom.toast.classList.add('show');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      dom.toast.classList.remove('show');
    }, 2200);
  }

  // 绑定全局事件
  function bindGlobalEvents() {
    // 语言切换
    if (dom.langZhBtn) {
      dom.langZhBtn.addEventListener('click', () => setLanguage('zh'));
    }
    if (dom.langEnBtn) {
      dom.langEnBtn.addEventListener('click', () => setLanguage('en'));
    }

    // 搜索输入
    dom.searchInput.addEventListener('input', (e) => {
      state.searchKeyword = e.target.value;
      state.currentPage = 1;
      dom.clearSearchBtn.style.display = state.searchKeyword ? 'flex' : 'none';
      renderCasesGrid();
    });

    // 清空搜索
    dom.clearSearchBtn.addEventListener('click', () => {
      dom.searchInput.value = '';
      state.searchKeyword = '';
      state.currentPage = 1;
      dom.clearSearchBtn.style.display = 'none';
      dom.searchInput.focus();
      renderCasesGrid();
    });

    // 排序选择
    dom.sortSelect.addEventListener('change', (e) => {
      state.currentSort = e.target.value;
      state.currentPage = 1;
      renderCasesGrid();
    });

    // 只看收藏切换
    dom.favFilterBtn.addEventListener('click', () => {
      state.favoritesOnly = !state.favoritesOnly;
      state.currentPage = 1;
      if (state.favoritesOnly) {
        dom.favFilterBtn.classList.add('active');
      } else {
        dom.favFilterBtn.classList.remove('active');
      }
      renderCasesGrid();
    });

    // 重置所有筛选
    const resetFilters = () => {
      state.currentCategory = 'all';
      state.searchKeyword = '';
      state.currentPage = 1;
      dom.searchInput.value = '';
      dom.clearSearchBtn.style.display = 'none';
      state.favoritesOnly = false;
      dom.favFilterBtn.classList.remove('active');
      setCategory('all');
    };

    dom.resetFilterLink.addEventListener('click', resetFilters);
    dom.emptyResetBtn.addEventListener('click', resetFilters);

    // 弹窗关闭
    dom.modalCloseBtn.addEventListener('click', closeCaseModal);
    dom.caseModal.addEventListener('click', (e) => {
      if (e.target === dom.caseModal) {
        closeCaseModal();
      }
    });

    dom.modalFavBtn.addEventListener('click', (e) => {
      if (state.activeModalCaseId !== null) {
        toggleFavorite(state.activeModalCaseId, e);
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && dom.caseModal.classList.contains('open')) {
        closeCaseModal();
      }
    });
  }

  // 获取分类名称
  function getCategoryName(catId) {
    if (!state.data || !state.data.categories) return catId;
    const item = state.data.categories.find(c => c.id === catId);
    return item ? item.name : catId;
  }

  // 获取难度文本
  function getDifficultyText(c) {
    if (state.lang === 'en') {
      return c.difficultyEn || (c.difficulty === '入门' ? 'Beginner' : (c.difficulty === '进阶' ? 'Intermediate' : 'Advanced'));
    }
    return c.difficulty;
  }

  // 辅助函数：信源 Grade 类
  function getGradeClass(grade) {
    if (grade === 'A') return 'grade-A';
    if (grade === 'B') return 'grade-B';
    if (grade === 'C') return 'grade-C';
    return '';
  }

  // HTML 转义
  function escapeHtml(str) {
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // 启动
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
