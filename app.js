const APPS_LIST = [
  {
    id: 'cyber-colony',
    title: 'Protocol Zero',
    subtitle: 'Cyberpunk Defense Game',
    category: 'game',
    categoryName: 'Game',
    accent: '#06b6d4',
    artBg: 'linear-gradient(135deg, #091d29 0%, #040e14 100%)',
    specBadge: 'HTML5 Canvas',
    description: 'Game aksi bertahan hidup futuristik dengan canvas rendering berkecepatan tinggi, efek audio dinamis, dan prototype APK download.',
    liveUrl: 'https://nzadev.github.io/cyber-colony/',
    repoUrl: 'https://github.com/nzadev/cyber-colony',
    tech: ['HTML5 Canvas', 'Web Audio', 'Android Prototype', 'JS Native'],
    iconSvg: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="22" y1="12" x2="18" y2="12"/><line x1="6" y1="12" x2="2" y2="12"/><line x1="12" y1="6" x2="12" y2="2"/><line x1="12" y1="22" x2="12" y2="18"/><circle cx="12" cy="12" r="3"/></svg>`
  },
  {
    id: 'airpad',
    title: 'AirPad Controller',
    subtitle: 'Virtual Gamepad via WebSocket',
    category: 'game',
    categoryName: 'Game & Tool',
    accent: '#f43f5e',
    artBg: 'linear-gradient(135deg, #260a13 0%, #100408 100%)',
    specBadge: 'WebSocket Bridge',
    description: 'Mengubah smartphone menjadi gamepad PC nirkabel via WebSocket dengan QR Scanner, D-Pad, Dual Analog Stick, dan Red Mode.',
    liveUrl: 'https://nzadev.github.io/airpad/',
    repoUrl: 'https://github.com/nzadev/airpad',
    tech: ['WebSocket', 'Haptic Touch', 'QR Scanner', 'Gamepad API'],
    iconSvg: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="20" height="12" rx="6"/><circle cx="8" cy="12" r="2"/><circle cx="16" cy="10" r="1"/><circle cx="18" cy="12" r="1"/><circle cx="16" cy="14" r="1"/><circle cx="14" cy="12" r="1"/><line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/></svg>`
  },
  {
    id: 'nexus-pos',
    title: 'NexusPOS',
    subtitle: 'Kasir Retail & Cafe F&B',
    category: 'business',
    categoryName: 'Kasir POS',
    accent: '#10b981',
    artBg: 'linear-gradient(135deg, #092016 0%, #030e0a 100%)',
    specBadge: 'Thermal Print',
    description: 'Sistem Point of Sale modern untuk ritel dan cafe. Mendukung custom modifier pesanan (ice, sugar, size) dan cetak struk thermal.',
    liveUrl: 'https://nzadev.github.io/nexus-pos/',
    repoUrl: 'https://github.com/nzadev/nexus-pos',
    tech: ['Vanilla JS', 'Thermal Print', 'IndexedDB', 'PWA Ready'],
    iconSvg: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/><circle cx="7" cy="8" r="1"/><circle cx="12" cy="8" r="1"/><circle cx="17" cy="8" r="1"/></svg>`
  },
  {
    id: 'netdesk-tkj',
    title: 'NetDesk TKJ',
    subtitle: 'IT Helpdesk & Network Suite',
    category: 'network',
    categoryName: 'Jaringan & IT',
    accent: '#3b82f6',
    artBg: 'linear-gradient(135deg, #0a1830 0%, #040b17 100%)',
    specBadge: 'CIDR / VLSM',
    description: 'Dashboard terpadu manajemen infrastruktur lab TKJ, visual Subnet Calculator (CIDR/VLSM), peta topologi, dan tiket troubleshooting.',
    liveUrl: 'https://nzadev.github.io/netdesk-tkj/',
    repoUrl: 'https://github.com/nzadev/netdesk-tkj',
    tech: ['CIDR Subnet', 'Topology Map', 'IT Ticketing', 'Local Storage'],
    iconSvg: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/><line x1="12" y1="10" x2="12" y2="14"/></svg>`
  },
  {
    id: 'kas-tkj1',
    title: 'KAS-TKJ1',
    subtitle: 'Buku Kas & Monitoring Iuran',
    category: 'education',
    categoryName: 'Buku Kas',
    accent: '#f59e0b',
    artBg: 'linear-gradient(135deg, #241806 0%, #0f0a02 100%)',
    specBadge: 'XII TKJ 1',
    description: 'Sistem buku kas digital kelas XII TKJ 1 SMK Kartika X-1 untuk rekapitulasi iuran mingguan 36 siswa dan kalkulasi tunggakan otomatis.',
    liveUrl: 'https://nzadev.github.io/kas-tkj1/',
    repoUrl: 'https://github.com/nzadev/kas-tkj1',
    tech: ['Ledger Engine', 'Student Tracker', 'Backup JSON', 'PWA Ready'],
    iconSvg: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><line x1="9" y1="7" x2="15" y2="7"/><line x1="9" y1="11" x2="13" y2="11"/></svg>`
  },
  {
    id: 'pure-pdf',
    title: 'Pure PDF',
    subtitle: 'Private Client-Side PDF Tools',
    category: 'utility',
    categoryName: 'Utility',
    accent: '#f97316',
    artBg: 'linear-gradient(135deg, #241106 0%, #100702 100%)',
    specBadge: '100% Client-Side',
    description: 'Alat pemrosesan dan pembaca dokumen PDF yang beroperasi 100% di browser lokal tanpa pernah mengirim data ke server cloud.',
    liveUrl: 'https://nzadev.github.io/pure-pdf/',
    repoUrl: 'https://github.com/nzadev/pure-pdf',
    tech: ['Expo Web', 'Zero Server', 'Web PDF Engine', 'Privacy First'],
    iconSvg: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`
  }
];

const state = {
  activeCategory: 'all',
  searchQuery: '',
  isListView: false,
  pinnedIds: JSON.parse(localStorage.getItem('nzadev_pinned') || '[]'),
  activeApp: null,
  paletteFiltered: [],
  paletteIndex: 0
};

const dom = {
  appsGrid: document.getElementById('apps-grid'),
  emptyResults: document.getElementById('empty-results'),
  filterSegmented: document.getElementById('filter-segmented'),
  inlineSearch: document.getElementById('inline-search'),
  btnClearInput: document.getElementById('btn-clear-input'),
  btnResetFilter: document.getElementById('btn-reset-filter'),
  btnViewGrid: document.getElementById('btn-view-grid'),
  btnViewList: document.getElementById('btn-view-list'),
  pinnedBar: document.getElementById('pinned-bar'),
  pinnedTags: document.getElementById('pinned-tags'),
  btnUnpinAll: document.getElementById('btn-unpin-all'),
  btnOpenSearch: document.getElementById('btn-open-search'),
  searchModal: document.getElementById('search-modal'),
  searchOverlay: document.getElementById('search-overlay'),
  paletteSearchInput: document.getElementById('palette-search-input'),
  paletteResults: document.getElementById('palette-results'),
  paletteStats: document.getElementById('palette-stats'),
  viewerModal: document.getElementById('viewer-modal'),
  viewerOverlay: document.getElementById('viewer-overlay'),
  viewerWindow: document.querySelector('.viewer-window'),
  viewerTitle: document.getElementById('viewer-title'),
  viewerAddress: document.getElementById('viewer-address'),
  viewerIframe: document.getElementById('viewer-iframe'),
  viewerSpinner: document.getElementById('viewer-spinner'),
  btnVwReload: document.getElementById('btn-vw-reload'),
  btnVwNewtab: document.getElementById('btn-vw-newtab'),
  btnVwSource: document.getElementById('btn-vw-source'),
  btnVwFullscreen: document.getElementById('btn-vw-fullscreen'),
  btnVwClose: document.getElementById('btn-vw-close'),
  dotClose: document.getElementById('dot-close'),
  dotMax: document.getElementById('dot-max'),
  btnInstall: document.getElementById('btn-install')
};

function getFilteredApps() {
  return APPS_LIST.filter(app => {
    const matchCat = state.activeCategory === 'all' || app.category === state.activeCategory;
    if (!matchCat) return false;

    if (!state.searchQuery.trim()) return true;
    const q = state.searchQuery.toLowerCase();
    return app.title.toLowerCase().includes(q) ||
           app.subtitle.toLowerCase().includes(q) ||
           app.description.toLowerCase().includes(q) ||
           app.categoryName.toLowerCase().includes(q) ||
           app.tech.some(t => t.toLowerCase().includes(q));
  });
}

function renderGrid() {
  const filtered = getFilteredApps();
  dom.appsGrid.innerHTML = '';

  if (filtered.length === 0) {
    dom.appsGrid.classList.add('hidden');
    dom.emptyResults.classList.remove('hidden');
    return;
  }

  dom.appsGrid.classList.remove('hidden');
  dom.emptyResults.classList.add('hidden');

  filtered.forEach(app => {
    const isPinned = state.pinnedIds.includes(app.id);
    const card = document.createElement('article');
    card.className = 'app-card';
    card.style.setProperty('--card-accent', app.accent);
    card.style.setProperty('--card-art-bg', app.artBg);

    card.innerHTML = `
      <div class="card-header-art">
        <div class="art-badge-row">
          <span class="art-cat-label">${escapeHtml(app.categoryName)}</span>
          <button type="button" class="art-pin-btn ${isPinned ? 'pinned' : ''}" data-pin="${app.id}" title="${isPinned ? 'Lepas Pin' : 'Sematkan'}">
            ★
          </button>
        </div>
        <div class="art-illustration">
          <div class="art-icon-wrap">${app.iconSvg}</div>
          <span class="art-accent-spec">${escapeHtml(app.specBadge)}</span>
        </div>
      </div>

      <div class="card-body">
        <div class="card-title-row">
          <h2 class="card-title">${escapeHtml(app.title)}</h2>
          <span class="card-subtitle">${escapeHtml(app.subtitle)}</span>
        </div>

        <p class="card-desc">${escapeHtml(app.description)}</p>

        <div class="card-tech-row">
          ${app.tech.map(t => `<span class="tech-tag">${escapeHtml(t)}</span>`).join('')}
        </div>

        <div class="card-actions">
          <button type="button" class="btn-open-in-app" data-launch="${app.id}">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
            <span>Buka di Sini</span>
          </button>
          <div class="card-links-row">
            <a href="${app.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-ext-link">
              <span>Tab Baru ↗</span>
            </a>
            <a href="${app.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn-ext-link">
              <span>GitHub 🐙</span>
            </a>
          </div>
        </div>
      </div>
    `;

    dom.appsGrid.appendChild(card);
  });
}

function renderPinnedBar() {
  if (state.pinnedIds.length === 0) {
    dom.pinnedBar.classList.add('hidden');
    return;
  }

  dom.pinnedBar.classList.remove('hidden');
  dom.pinnedTags.innerHTML = '';

  state.pinnedIds.forEach(id => {
    const app = APPS_LIST.find(a => a.id === id);
    if (!app) return;

    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'pin-chip';
    chip.dataset.launch = app.id;
    chip.innerHTML = `
      <span style="color: ${app.accent}">●</span>
      <span>${escapeHtml(app.title)}</span>
    `;
    dom.pinnedTags.appendChild(chip);
  });
}

function togglePin(id) {
  if (state.pinnedIds.includes(id)) {
    state.pinnedIds = state.pinnedIds.filter(i => i !== id);
  } else {
    state.pinnedIds.push(id);
  }
  localStorage.setItem('nzadev_pinned', JSON.stringify(state.pinnedIds));
  renderPinnedBar();
  renderGrid();
}

function openViewer(appId) {
  const app = APPS_LIST.find(a => a.id === appId);
  if (!app) return;

  state.activeApp = app;

  dom.viewerTitle.textContent = app.title;
  dom.viewerAddress.textContent = app.liveUrl;
  dom.btnVwNewtab.href = app.liveUrl;
  dom.btnVwSource.href = app.repoUrl;

  dom.viewerSpinner.classList.remove('hidden');
  dom.viewerIframe.src = app.liveUrl;

  dom.viewerIframe.onload = () => {
    dom.viewerSpinner.classList.add('hidden');
  };

  dom.viewerModal.classList.add('active');
  dom.viewerModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  window.location.hash = `app=${app.id}`;
}

function closeViewer() {
  dom.viewerModal.classList.remove('active');
  dom.viewerModal.setAttribute('aria-hidden', 'true');
  dom.viewerIframe.src = 'about:blank';
  state.activeApp = null;
  document.body.style.overflow = '';
  if (window.location.hash.startsWith('#app=')) {
    history.replaceState(null, '', window.location.pathname);
  }
}

function reloadViewer() {
  if (!state.activeApp) return;
  dom.viewerSpinner.classList.remove('hidden');
  dom.viewerIframe.src = state.activeApp.liveUrl;
}

function toggleViewerFullscreen() {
  dom.viewerWindow.classList.toggle('fullscreen');
}

function openSearch() {
  dom.searchModal.classList.add('active');
  dom.searchModal.setAttribute('aria-hidden', 'false');
  dom.paletteSearchInput.value = '';
  filterPalette('');
  setTimeout(() => dom.paletteSearchInput.focus(), 50);
}

function closeSearch() {
  dom.searchModal.classList.remove('active');
  dom.searchModal.setAttribute('aria-hidden', 'true');
}

function filterPalette(q) {
  const query = q.trim().toLowerCase();
  state.paletteFiltered = APPS_LIST.filter(app => {
    if (!query) return true;
    return app.title.toLowerCase().includes(query) ||
           app.subtitle.toLowerCase().includes(query) ||
           app.description.toLowerCase().includes(query) ||
           app.categoryName.toLowerCase().includes(query) ||
           app.tech.some(t => t.toLowerCase().includes(query));
  });

  state.paletteIndex = 0;
  renderPalette();
}

function renderPalette() {
  dom.paletteResults.innerHTML = '';
  dom.paletteStats.textContent = `${state.paletteFiltered.length} Aplikasi`;

  if (state.paletteFiltered.length === 0) {
    dom.paletteResults.innerHTML = `
      <div style="padding: 1.25rem; text-align: center; color: var(--text-dim); font-size: 0.85rem;">
        Tidak ada aplikasi yang cocok
      </div>
    `;
    return;
  }

  state.paletteFiltered.forEach((app, idx) => {
    const item = document.createElement('div');
    item.className = `palette-item ${idx === state.paletteIndex ? 'selected' : ''}`;
    item.innerHTML = `
      <div>
        <div class="p-title">${escapeHtml(app.title)}</div>
        <div class="p-sub">${escapeHtml(app.subtitle)}</div>
      </div>
      <span class="p-cat">${escapeHtml(app.categoryName)}</span>
    `;

    item.addEventListener('click', () => {
      closeSearch();
      openViewer(app.id);
    });

    dom.paletteResults.appendChild(item);
  });
}

function updatePaletteSelection() {
  const items = dom.paletteResults.querySelectorAll('.palette-item');
  items.forEach((item, idx) => {
    item.classList.toggle('selected', idx === state.paletteIndex);
    if (idx === state.paletteIndex) {
      item.scrollIntoView({ block: 'nearest' });
    }
  });
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/[&<>"']/g, m => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  }[m]));
}

function attachEvents() {
  dom.filterSegmented.addEventListener('click', e => {
    const btn = e.target.closest('.segment-btn');
    if (!btn) return;
    dom.filterSegmented.querySelectorAll('.segment-btn').forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    state.activeCategory = btn.dataset.category;
    renderGrid();
  });

  dom.inlineSearch.addEventListener('input', e => {
    state.searchQuery = e.target.value;
    dom.btnClearInput.classList.toggle('hidden', !state.searchQuery);
    renderGrid();
  });

  dom.btnClearInput.addEventListener('click', () => {
    dom.inlineSearch.value = '';
    state.searchQuery = '';
    dom.btnClearInput.classList.add('hidden');
    renderGrid();
  });

  dom.btnResetFilter.addEventListener('click', () => {
    state.activeCategory = 'all';
    state.searchQuery = '';
    dom.inlineSearch.value = '';
    dom.btnClearInput.classList.add('hidden');
    dom.filterSegmented.querySelectorAll('.segment-btn').forEach(b => {
      const isAll = b.dataset.category === 'all';
      b.classList.toggle('active', isAll);
      b.setAttribute('aria-selected', isAll ? 'true' : 'false');
    });
    renderGrid();
  });

  dom.btnViewGrid.addEventListener('click', () => {
    state.isListView = false;
    dom.btnViewGrid.classList.add('active');
    dom.btnViewList.classList.remove('active');
    dom.appsGrid.classList.remove('list-view');
  });

  dom.btnViewList.addEventListener('click', () => {
    state.isListView = true;
    dom.btnViewList.classList.add('active');
    dom.btnViewGrid.classList.remove('active');
    dom.appsGrid.classList.add('list-view');
  });

  document.addEventListener('click', e => {
    const launchBtn = e.target.closest('[data-launch]');
    if (launchBtn) {
      openViewer(launchBtn.dataset.launch);
      return;
    }

    const pinBtn = e.target.closest('[data-pin]');
    if (pinBtn) {
      togglePin(pinBtn.dataset.pin);
      return;
    }
  });

  dom.btnUnpinAll.addEventListener('click', () => {
    state.pinnedIds = [];
    localStorage.removeItem('nzadev_pinned');
    renderPinnedBar();
    renderGrid();
  });

  dom.btnOpenSearch.addEventListener('click', openSearch);
  dom.searchOverlay.addEventListener('click', closeSearch);

  dom.paletteSearchInput.addEventListener('input', e => filterPalette(e.target.value));

  dom.paletteSearchInput.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (state.paletteFiltered.length > 0) {
        state.paletteIndex = (state.paletteIndex + 1) % state.paletteFiltered.length;
        updatePaletteSelection();
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (state.paletteFiltered.length > 0) {
        state.paletteIndex = (state.paletteIndex - 1 + state.paletteFiltered.length) % state.paletteFiltered.length;
        updatePaletteSelection();
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const target = state.paletteFiltered[state.paletteIndex];
      if (target) {
        closeSearch();
        openViewer(target.id);
      }
    } else if (e.key === 'Escape') {
      closeSearch();
    }
  });

  dom.btnVwClose.addEventListener('click', closeViewer);
  dom.dotClose.addEventListener('click', closeViewer);
  dom.viewerOverlay.addEventListener('click', closeViewer);
  dom.btnVwReload.addEventListener('click', reloadViewer);
  dom.btnVwFullscreen.addEventListener('click', toggleViewerFullscreen);
  dom.dotMax.addEventListener('click', toggleViewerFullscreen);

  window.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (dom.searchModal.classList.contains('active')) {
        closeSearch();
      } else {
        openSearch();
      }
      return;
    }

    if (e.key === 'Escape') {
      if (dom.searchModal.classList.contains('active')) {
        closeSearch();
      } else if (dom.viewerModal.classList.contains('active')) {
        closeViewer();
      }
      return;
    }

    if (!dom.searchModal.classList.contains('active') && !dom.viewerModal.classList.contains('active')) {
      const tag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
      if (tag !== 'input' && tag !== 'textarea') {
        const num = parseInt(e.key, 10);
        if (num >= 1 && num <= APPS_LIST.length) {
          const app = APPS_LIST[num - 1];
          if (app) openViewer(app.id);
        }
      }
    }
  });

  window.addEventListener('hashchange', checkHash);
}

function checkHash() {
  const hash = window.location.hash;
  if (hash.startsWith('#app=')) {
    const id = hash.replace('#app=', '');
    if (APPS_LIST.some(a => a.id === id)) {
      openViewer(id);
    }
  }
}

function initPwa() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }

  let promptEvent = null;
  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    promptEvent = e;
    dom.btnInstall.classList.remove('hidden');
  });

  dom.btnInstall.addEventListener('click', () => {
    if (!promptEvent) return;
    promptEvent.prompt();
    promptEvent.userChoice.then(() => {
      promptEvent = null;
      dom.btnInstall.classList.add('hidden');
    });
  });
}

function init() {
  renderGrid();
  renderPinnedBar();
  attachEvents();
  initPwa();
  checkHash();
}

document.addEventListener('DOMContentLoaded', init);
