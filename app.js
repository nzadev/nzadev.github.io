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
    specBadge: 'Stream & Bluetooth',
    description: 'Gamepad HP nirkabel + Layar Game PC (Stardew Valley Split-Crop). Dilengkapi Mode Bluetooth HID khusus TV Coocaa, QR Scanner, dan latency 0ms.',
    liveUrl: 'https://nzadev.github.io/airpad/',
    repoUrl: 'https://github.com/nzadev/airpad',
    apkUrl: 'https://nzadev.github.io/airpad/AirPad.apk',
    tech: ['Screen Streamer', 'Stardew Split-Crop', 'Bluetooth TV HID', 'WebSocket', 'APK HP'],
    iconSvg: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="20" height="12" rx="6"/><circle cx="8" cy="12" r="2"/><circle cx="16" cy="10" r="1"/><circle cx="18" cy="12" r="1"/><circle cx="16" cy="14" r="1"/><circle cx="14" cy="12" r="1"/><line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/></svg>`
  },
  {
    id: 'airpad-tv',
    title: 'AirPad TV Edition',
    subtitle: 'Layar Mabar & QR Dashboard TV',
    category: 'game',
    categoryName: 'Game & TV',
    accent: '#38bdf8',
    artBg: 'linear-gradient(135deg, #081d2c 0%, #030d14 100%)',
    specBadge: 'Android TV / Web',
    description: 'Dashboard TV & Control Center layar lebar untuk TV Coocaa & Android TV. Menampilkan QR Code pairing instan, kode 4-digit, dan status 8 player gamepad real-time.',
    liveUrl: 'https://nzadev.github.io/airpad/dashboard',
    repoUrl: 'https://github.com/nzadev/airpad',
    apkUrl: 'https://nzadev.github.io/airpad/AirPad-TV.apk',
    tech: ['Android TV', 'Leanback', 'Remote D-Pad', 'QR Pairing', 'APK TV'],
    iconSvg: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="15" rx="2"/><polyline points="17 2 12 7 7 2"/><line x1="12" y1="17" x2="12" y2="17.01"/></svg>`
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
  },
  {
    id: 'otakuverse',
    title: 'OtakuVerse',
    subtitle: 'Aniyomi Web Edition',
    category: 'utility',
    categoryName: 'Anime & Media',
    accent: '#7c3aed',
    artBg: 'linear-gradient(135deg, #130a24 0%, #060312 100%)',
    specBadge: 'Aniyomi Web v3.0',
    description: 'Platform streaming anime bebas iklan dengan multi-source scraper (Samehadaku, Otakudesu, AniList), cinema player MPV HUD, library watchlist, dan extensions manager Keiyoushi.',
    liveUrl: 'https://nzadev.github.io/otakuverse/',
    repoUrl: 'https://github.com/nzadev/otakuverse',
    tech: ['Multi-Repo Scraper', 'Cinema Player', 'AniList API', 'Zero Ads'],
    iconSvg: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/></svg>`
  }
];

const state = {
  activeCategory: 'all',
  searchQuery: '',
  isListView: false,
  spotlightIdx: 0,
  sfxEnabled: localStorage.getItem('nzadev_sfx') === 'true',
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
  btnInstall: document.getElementById('btn-install'),
  btnSound: document.getElementById('btn-sound'),
  soundIcon: document.getElementById('sound-icon'),
  spotlightBanner: document.getElementById('spotlight-banner'),
  spotlightHeading: document.getElementById('spotlight-heading'),
  spotlightSummary: document.getElementById('spotlight-summary'),
  spotlightBadgeText: document.getElementById('spotlight-badge-text'),
  spotlightTechRow: document.getElementById('spotlight-tech-row'),
  btnSpotlightLaunch: document.getElementById('btn-spotlight-launch'),
  btnSpotlightLink: document.getElementById('btn-spotlight-link'),
  spotlightIndicators: document.getElementById('spotlight-indicators'),
  spotlightFrame: document.getElementById('spotlight-frame')
};

let audioContext = null;
function playSfx(freq = 440, type = 'sine', duration = 0.04) {
  if (!state.sfxEnabled) return;
  try {
    if (!audioContext) audioContext = new (window.AudioContext || window.webkitAudioContext)();
    if (audioContext.state === 'suspended') audioContext.resume();
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioContext.currentTime);
    gain.gain.setValueAtTime(0.06, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration);
    osc.connect(gain);
    gain.connect(audioContext.destination);
    osc.start();
    osc.stop(audioContext.currentTime + duration);
  } catch (e) {}
}

function hexToRgb(hex) {
  const c = hex.replace('#', '');
  if (c.length === 3) {
    return `${parseInt(c[0]+c[0], 16)}, ${parseInt(c[1]+c[1], 16)}, ${parseInt(c[2]+c[2], 16)}`;
  }
  return `${parseInt(c.substring(0, 2), 16)}, ${parseInt(c.substring(2, 4), 16)}, ${parseInt(c.substring(4, 6), 16)}`;
}

function updateSpotlight(index) {
  state.spotlightIdx = index % APPS_LIST.length;
  const app = APPS_LIST[state.spotlightIdx];
  if (!app || !dom.spotlightBanner) return;

  dom.spotlightHeading.textContent = app.title;
  dom.spotlightSummary.textContent = app.description;
  dom.spotlightBadgeText.textContent = `${app.categoryName.toUpperCase()} • UNGGULAN`;
  dom.spotlightBanner.style.setProperty('--spotlight-accent', app.accent);
  dom.spotlightBanner.style.setProperty('--spotlight-border', `rgba(${hexToRgb(app.accent)}, 0.4)`);

  dom.spotlightTechRow.innerHTML = app.tech.map(t => `<span class="spotlight-pill">${escapeHtml(t)}</span>`).join('');
  dom.btnSpotlightLink.href = app.liveUrl;

  dom.spotlightFrame.style.background = app.artBg;
  dom.spotlightFrame.style.borderColor = app.accent;
  dom.spotlightFrame.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center;">
      <span style="font-family:var(--font-mono); font-size:0.75rem; color:${app.accent}; font-weight:700;">${escapeHtml(app.specBadge)}</span>
      <span style="display:inline-block; width:8px; height:8px; border-radius:50%; background:#10b981; box-shadow:0 0 6px #10b981;"></span>
    </div>
    <div style="display:flex; align-items:center; gap:0.75rem; color:#ffffff;">
      <div style="width:40px; height:40px; border-radius:8px; background:rgba(0,0,0,0.5); border:1px solid rgba(255,255,255,0.15); display:flex; align-items:center; justify-content:center; color:${app.accent};">${app.iconSvg}</div>
      <div>
        <div style="font-weight:700; font-size:1.05rem;">${escapeHtml(app.title)}</div>
        <div style="font-size:0.8rem; color:var(--text-dim);">${escapeHtml(app.subtitle)}</div>
      </div>
    </div>
  `;

  renderSpotlightDots();
}

function renderSpotlightDots() {
  if (!dom.spotlightIndicators) return;
  dom.spotlightIndicators.innerHTML = '';
  APPS_LIST.forEach((app, idx) => {
    const dot = document.createElement('div');
    dot.className = `spotlight-dot-item ${idx === state.spotlightIdx ? 'active' : ''}`;
    dot.title = app.title;
    dot.addEventListener('click', () => {
      playSfx(520, 'triangle', 0.03);
      updateSpotlight(idx);
    });
    dom.spotlightIndicators.appendChild(dot);
  });
}

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
            ${app.apkUrl ? `
            <a href="${app.apkUrl}" download class="btn-ext-link" style="color:#38bdf8; border-color:rgba(56,189,248,0.35);" title="Unduh File APK Langsung">
              <span>📥 APK</span>
            </a>` : ''}
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

  if (dom.btnSound) {
    dom.btnSound.addEventListener('click', () => {
      state.sfxEnabled = !state.sfxEnabled;
      localStorage.setItem('nzadev_sfx', state.sfxEnabled);
      dom.soundIcon.textContent = state.sfxEnabled ? '🔊' : '🔇';
      if (state.sfxEnabled) playSfx(550, 'sine', 0.05);
    });
  }

  if (dom.btnSpotlightLaunch) {
    dom.btnSpotlightLaunch.addEventListener('click', () => {
      const cur = APPS_LIST[state.spotlightIdx];
      if (cur) {
        playSfx(580, 'sine', 0.04);
        openViewer(cur.id);
      }
    });
  }

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
  if (dom.soundIcon) {
    dom.soundIcon.textContent = state.sfxEnabled ? '🔊' : '🔇';
  }
  updateSpotlight(0);
  renderGrid();
  renderPinnedBar();
  attachEvents();
  initPwa();
  checkHash();

  setInterval(() => {
    if (!document.hidden && !dom.viewerModal.classList.contains('active')) {
      state.spotlightIdx = (state.spotlightIdx + 1) % APPS_LIST.length;
      updateSpotlight(state.spotlightIdx);
    }
  }, 9000);
}

document.addEventListener('DOMContentLoaded', init);
