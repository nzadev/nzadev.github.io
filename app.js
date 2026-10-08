const APPS_DATA = [
  {
    id: 'cyber-colony',
    title: 'Protocol Zero',
    subtitle: 'Cyberpunk Defense & Survival Game',
    category: 'game',
    categoryLabel: 'Games & Play',
    description: 'Game aksi bertahan hidup futuristik dengan canvas rendering, audio efek dinamis, changelog langsung, dan prototype APK download.',
    liveUrl: 'https://nzadev.github.io/cyber-colony/',
    repoUrl: 'https://github.com/nzadev/cyber-colony',
    isLive: true,
    accent: '#00f0ff',
    tech: ['HTML5 Canvas', 'Web Audio API', 'Cyberpunk UI', 'JS Native'],
    features: [
      'Interactive Canvas Game Rendering',
      'Atmospheric Audio & Sound Effects',
      'Downloadable Android Prototype APK',
      'Live Changelog & Update Feed'
    ],
    iconSvg: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m14 12-4-4v8z"/><circle cx="12" cy="12" r="3"/></svg>`
  },
  {
    id: 'airpad',
    title: 'AirPad Controller',
    subtitle: 'Virtual Gamepad via WebSocket',
    category: 'game',
    categoryLabel: 'Game Utility',
    description: 'Mengubah smartphone menjadi controller PC nirkabel ultra-low latency. Dilengkapi QR Code scanner, D-Pad, Dual Analog Stick, Haptic Feedback, dan Red Turbo mode.',
    liveUrl: 'https://nzadev.github.io/airpad/',
    repoUrl: 'https://github.com/nzadev/airpad',
    isLive: true,
    accent: '#ff2a5f',
    tech: ['WebSocket', 'Virtual Gamepad', 'Haptic Touch', 'PWA Ready'],
    features: [
      'Pairing Cepat via Kamera QR Scanner',
      'Dual Analog Stick & Turbo Button',
      'Haptic Vibration Feedback Responsif',
      'Red Turbo Mode Persistence'
    ],
    iconSvg: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="20" height="12" rx="6"/><circle cx="8" cy="12" r="2"/><circle cx="16" cy="10" r="1"/><circle cx="18" cy="12" r="1"/><circle cx="16" cy="14" r="1"/><circle cx="14" cy="12" r="1"/><line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/></svg>`
  },
  {
    id: 'nexus-pos',
    title: 'NexusPOS',
    subtitle: 'Sistem Kasir Modern Retail & F&B',
    category: 'business',
    categoryLabel: 'Kasir & POS',
    description: 'Aplikasi Point of Sale (POS) cepat berbasis native web. Manajemen katalog retail & cafe, custom modifier pesanan (ice, sugar, size), cetak struk thermal 58/80mm, dan rekap keuangan.',
    liveUrl: 'https://nzadev.github.io/nexus-pos/',
    repoUrl: 'https://github.com/nzadev/nexus-pos',
    isLive: true,
    accent: '#10b981',
    tech: ['Vanilla JS', 'Thermal Printing', 'IndexedDB', 'Responsive POS'],
    features: [
      'Multi-Category Retail & Cafe Order',
      'Custom Modifier (Ice Level, Sugar, Size)',
      'Simulasi & Cetak Struk Thermal',
      'Export Rekap Omzet Laba Rugi'
    ],
    iconSvg: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/><circle cx="7" cy="8" r="1"/><circle cx="12" cy="8" r="1"/><circle cx="17" cy="8" r="1"/></svg>`
  },
  {
    id: 'netdesk-tkj',
    title: 'NetDesk TKJ',
    subtitle: 'IT Helpdesk & Network Infrastructure Suite',
    category: 'network',
    categoryLabel: 'Jaringan & IT',
    description: 'Sistem terpadu manajemen infrastruktur lab TKJ dan kantor. Dilengkapi Subnet Calculator visual (CIDR/VLSM), Interactive Topology Map, inventaris perangkat keras, dan tiket troubleshooting.',
    liveUrl: 'https://nzadev.github.io/netdesk-tkj/',
    repoUrl: 'https://github.com/nzadev/netdesk-tkj',
    isLive: true,
    accent: '#6366f1',
    tech: ['CIDR Subnetting', 'Interactive Topology', 'IT Ticketing', 'Local Storage'],
    features: [
      'Subnet Calculator IP / CIDR / VLSM',
      'Visual Network Topology Map',
      'Manajemen Inventaris Rack & Hardware',
      'Kanban Board Trouble Ticket'
    ],
    iconSvg: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/><line x1="12" y1="10" x2="12" y2="14"/></svg>`
  },
  {
    id: 'kas-tkj1',
    title: 'KAS-TKJ1',
    subtitle: 'Buku Kas & Monitoring Iuran XII TKJ 1',
    category: 'education',
    categoryLabel: 'Kas & Edukasi',
    description: 'Buku kas digital transparan untuk kelas XII TKJ 1 SMK Kartika X-1. Monitoring iuran mingguan siswa, rekap status tunggakan otomatis, pencatatan transaksi masuk/keluar, dan backup/restore JSON.',
    liveUrl: 'https://nzadev.github.io/kas-tkj1/',
    repoUrl: 'https://github.com/nzadev/kas-tkj1',
    isLive: true,
    accent: '#3b82f6',
    tech: ['Ledger Engine', 'Student Tracker', 'Financial Charts', 'PWA Ready'],
    features: [
      'Monitoring Pembayaran 36 Siswa',
      'Perhitungan Otomatis Tunggakan Kas',
      'Laporan Arus Kas Masuk & Pengeluaran',
      'Export & Import Backup Data JSON'
    ],
    iconSvg: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><line x1="9" y1="7" x2="15" y2="7"/><line x1="9" y1="11" x2="13" y2="11"/></svg>`
  },
  {
    id: 'pure-pdf',
    title: 'Pure PDF',
    subtitle: 'Client-Side Privacy-First PDF Toolkit',
    category: 'utility',
    categoryLabel: 'Tools & Utility',
    description: 'Pemrosesan dokumen PDF tanpa kirim data ke server luar. Dibangun dengan Expo React Native Web untuk performa ringan dan perlindungan privasi penuh langsung di peramban.',
    liveUrl: 'https://nzadev.github.io/pure-pdf/',
    repoUrl: 'https://github.com/nzadev/pure-pdf',
    isLive: true,
    accent: '#f59e0b',
    tech: ['Expo React Native', 'Web PDF Engine', 'Zero Server Upload', 'Privacy First'],
    features: [
      '100% Pemrosesan Lokal di Browser',
      'Privasi Terjamin Tanpa Upload Cloud',
      'Cross-Platform Web Architecture',
      'Antarmuka Bersih & Responsif'
    ],
    iconSvg: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`
  }
];

const state = {
  activeCategory: 'all',
  searchQuery: '',
  isListView: false,
  pinnedIds: JSON.parse(localStorage.getItem('nzadev_pinned_apps') || '[]'),
  activeRunnerApp: null,
  paletteSelectedIndex: 0,
  paletteFilteredApps: []
};

const dom = {
  catalogGrid: document.getElementById('catalog-grid'),
  emptyState: document.getElementById('empty-state'),
  resultCount: document.getElementById('result-count'),
  filterTabs: document.getElementById('filter-tabs'),
  inlineSearchInput: document.getElementById('inline-search-input'),
  btnClearSearch: document.getElementById('btn-clear-search'),
  btnResetFilters: document.getElementById('btn-reset-filters'),
  btnViewToggle: document.getElementById('btn-view-toggle'),
  pinnedBarWrapper: document.getElementById('pinned-bar-wrapper'),
  pinnedBarItems: document.getElementById('pinned-bar-items'),
  btnClearPinned: document.getElementById('btn-clear-pinned'),
  searchTrigger: document.getElementById('search-trigger'),
  paletteModal: document.getElementById('palette-modal'),
  paletteBackdrop: document.getElementById('palette-backdrop'),
  paletteInput: document.getElementById('palette-input'),
  paletteResults: document.getElementById('palette-results'),
  paletteCount: document.getElementById('palette-count'),
  runnerModal: document.getElementById('runner-modal'),
  runnerBackdrop: document.getElementById('runner-backdrop'),
  runnerContainer: document.querySelector('.runner-container'),
  runnerIconWrapper: document.getElementById('runner-icon-wrapper'),
  runnerTitle: document.getElementById('runner-title'),
  runnerCategory: document.getElementById('runner-category'),
  runnerUrl: document.getElementById('runner-url'),
  runnerIframe: document.getElementById('runner-iframe'),
  runnerLoader: document.getElementById('runner-loader'),
  btnRunnerReload: document.getElementById('btn-runner-reload'),
  btnRunnerNewtab: document.getElementById('btn-runner-newtab'),
  btnRunnerRepo: document.getElementById('btn-runner-repo'),
  btnRunnerFullscreen: document.getElementById('btn-runner-fullscreen'),
  btnRunnerClose: document.getElementById('btn-runner-close'),
  btnInstallPwa: document.getElementById('btn-install-pwa'),
  ambientCanvas: document.getElementById('ambient-canvas')
};

function getFilteredApps() {
  return APPS_DATA.filter((app) => {
    const matchesCategory = state.activeCategory === 'all' || app.category === state.activeCategory;
    if (!matchesCategory) return false;

    if (!state.searchQuery.trim()) return true;
    const q = state.searchQuery.toLowerCase();
    const matchTitle = app.title.toLowerCase().includes(q);
    const matchSub = app.subtitle.toLowerCase().includes(q);
    const matchDesc = app.description.toLowerCase().includes(q);
    const matchTech = app.tech.some(t => t.toLowerCase().includes(q));
    const matchFeat = app.features.some(f => f.toLowerCase().includes(q));

    return matchTitle || matchSub || matchDesc || matchTech || matchFeat;
  });
}

function renderCatalog() {
  const filtered = getFilteredApps();
  dom.catalogGrid.innerHTML = '';

  if (filtered.length === 0) {
    dom.catalogGrid.classList.add('hidden');
    dom.emptyState.classList.remove('hidden');
    dom.resultCount.textContent = '0 proyek ditemukan';
    return;
  }

  dom.catalogGrid.classList.remove('hidden');
  dom.emptyState.classList.add('hidden');
  dom.resultCount.textContent = `Menampilkan ${filtered.length} proyek`;

  filtered.forEach((app, index) => {
    const isPinned = state.pinnedIds.includes(app.id);
    const card = document.createElement('article');
    card.className = 'app-card';
    card.style.setProperty('--card-accent', app.accent);
    card.dataset.id = app.id;

    card.innerHTML = `
      <div class="card-topbar">
        <div class="card-icon-group">
          <div class="card-icon">${app.iconSvg}</div>
          <div class="card-badge-row">
            <span class="category-tag">${escapeHtml(app.categoryLabel)}</span>
            <span class="status-badge live">GitHub Pages</span>
          </div>
        </div>
        <button type="button" class="card-pin-btn ${isPinned ? 'pinned' : ''}" data-pin-id="${app.id}" title="${isPinned ? 'Lepas Pin' : 'Sematkan ke Favorit'}">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="${isPinned ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        </button>
      </div>

      <div class="card-title-group">
        <h3 class="card-title">${escapeHtml(app.title)}</h3>
        <p class="card-subtitle">${escapeHtml(app.subtitle)}</p>
      </div>

      <p class="card-desc">${escapeHtml(app.description)}</p>

      <ul class="card-features">
        ${app.features.map(f => `
          <li class="card-feature-item">
            <span class="feature-check">✓</span>
            <span>${escapeHtml(f)}</span>
          </li>
        `).join('')}
      </ul>

      <div class="card-tech-pills">
        ${app.tech.map(t => `<span class="tech-pill">${escapeHtml(t)}</span>`).join('')}
      </div>

      <div class="card-actions">
        <button type="button" class="btn-launch-primary" data-launch-id="${app.id}">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
          <span>Jalankan di Web</span>
        </button>
        <div class="card-sub-actions">
          <a href="${app.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-sub-action">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            <span>Tab Baru</span>
          </a>
          <a href="${app.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn-sub-action">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
            <span>Source</span>
          </a>
        </div>
      </div>
    `;

    dom.catalogGrid.appendChild(card);
  });
}

function renderPinnedBar() {
  if (state.pinnedIds.length === 0) {
    dom.pinnedBarWrapper.classList.add('hidden');
    return;
  }

  dom.pinnedBarWrapper.classList.remove('hidden');
  dom.pinnedBarItems.innerHTML = '';

  state.pinnedIds.forEach((id) => {
    const app = APPS_DATA.find(a => a.id === id);
    if (!app) return;

    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'pinned-chip';
    chip.dataset.launchId = app.id;
    chip.innerHTML = `
      <span style="color: ${app.accent}">●</span>
      <span>${escapeHtml(app.title)}</span>
    `;
    dom.pinnedBarItems.appendChild(chip);
  });
}

function togglePin(id) {
  if (state.pinnedIds.includes(id)) {
    state.pinnedIds = state.pinnedIds.filter(item => item !== id);
  } else {
    state.pinnedIds.push(id);
  }
  localStorage.setItem('nzadev_pinned_apps', JSON.stringify(state.pinnedIds));
  renderPinnedBar();
  renderCatalog();
}

function openRunner(appId) {
  const app = APPS_DATA.find(a => a.id === appId);
  if (!app) return;

  state.activeRunnerApp = app;

  dom.runnerTitle.textContent = app.title;
  dom.runnerCategory.textContent = app.categoryLabel;
  dom.runnerCategory.style.color = app.accent;
  dom.runnerUrl.textContent = app.liveUrl;
  dom.runnerIconWrapper.innerHTML = app.iconSvg;
  dom.runnerIconWrapper.style.color = app.accent;

  dom.btnRunnerNewtab.href = app.liveUrl;
  dom.btnRunnerRepo.href = app.repoUrl;

  dom.runnerLoader.classList.remove('hidden');
  dom.runnerIframe.src = app.liveUrl;

  dom.runnerIframe.onload = () => {
    dom.runnerLoader.classList.add('hidden');
  };

  dom.runnerModal.classList.add('active');
  dom.runnerModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  window.location.hash = `app=${app.id}`;
}

function closeRunner() {
  dom.runnerModal.classList.remove('active');
  dom.runnerModal.setAttribute('aria-hidden', 'true');
  dom.runnerIframe.src = 'about:blank';
  state.activeRunnerApp = null;
  document.body.style.overflow = '';
  if (window.location.hash.startsWith('#app=')) {
    history.replaceState(null, '', window.location.pathname);
  }
}

function reloadRunner() {
  if (!state.activeRunnerApp) return;
  dom.runnerLoader.classList.remove('hidden');
  dom.runnerIframe.src = state.activeRunnerApp.liveUrl;
}

function toggleRunnerFullscreen() {
  dom.runnerContainer.classList.toggle('fullscreen');
}

function openPalette() {
  dom.paletteModal.classList.add('active');
  dom.paletteModal.setAttribute('aria-hidden', 'false');
  dom.paletteInput.value = '';
  state.paletteSelectedIndex = 0;
  filterPalette('');
  setTimeout(() => dom.paletteInput.focus(), 50);
}

function closePalette() {
  dom.paletteModal.classList.remove('active');
  dom.paletteModal.setAttribute('aria-hidden', 'true');
}

function filterPalette(query) {
  const q = query.trim().toLowerCase();
  state.paletteFilteredApps = APPS_DATA.filter((app) => {
    if (!q) return true;
    return app.title.toLowerCase().includes(q) ||
           app.subtitle.toLowerCase().includes(q) ||
           app.description.toLowerCase().includes(q) ||
           app.categoryLabel.toLowerCase().includes(q) ||
           app.tech.some(t => t.toLowerCase().includes(q));
  });

  state.paletteSelectedIndex = 0;
  renderPaletteResults();
}

function renderPaletteResults() {
  dom.paletteResults.innerHTML = '';
  dom.paletteCount.textContent = `${state.paletteFilteredApps.length} Proyek`;

  if (state.paletteFilteredApps.length === 0) {
    dom.paletteResults.innerHTML = `
      <div style="padding: 1.5rem; text-align: center; color: var(--text-dim); font-size: 0.9rem;">
        Tidak ada aplikasi yang cocok dengan kata kunci
      </div>
    `;
    return;
  }

  state.paletteFilteredApps.forEach((app, idx) => {
    const item = document.createElement('div');
    item.className = `palette-item ${idx === state.paletteSelectedIndex ? 'selected' : ''}`;
    item.style.setProperty('--palette-accent', app.accent);
    item.dataset.appId = app.id;

    item.innerHTML = `
      <div class="palette-item-left">
        <div class="palette-item-icon">${app.iconSvg}</div>
        <div class="palette-item-titles">
          <div class="palette-item-name">${escapeHtml(app.title)}</div>
          <div class="palette-item-sub">${escapeHtml(app.subtitle)}</div>
        </div>
      </div>
      <div class="palette-item-right">
        <span class="palette-category-badge">${escapeHtml(app.categoryLabel)}</span>
      </div>
    `;

    item.addEventListener('click', () => {
      closePalette();
      openRunner(app.id);
    });

    dom.paletteResults.appendChild(item);
  });
}

function updatePaletteSelection() {
  const items = dom.paletteResults.querySelectorAll('.palette-item');
  items.forEach((item, idx) => {
    item.classList.toggle('selected', idx === state.paletteSelectedIndex);
    if (idx === state.paletteSelectedIndex) {
      item.scrollIntoView({ block: 'nearest' });
    }
  });
}

function initAmbientCanvas() {
  const canvas = dom.ambientCanvas;
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  const particles = [];
  const count = Math.min(35, Math.floor(width / 35));

  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 1,
      color: i % 2 === 0 ? 'rgba(0, 240, 255, ' : 'rgba(99, 102, 241, '
    });
  }

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);

  function draw() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color + '0.5)';
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(99, 102, 241, ${0.15 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  draw();
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/[&<>"']/g, (m) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  }[m]));
}

function attachEvents() {
  dom.filterTabs.addEventListener('click', (e) => {
    const btn = e.target.closest('.tab-btn');
    if (!btn) return;
    dom.filterTabs.querySelectorAll('.tab-btn').forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    state.activeCategory = btn.dataset.category;
    renderCatalog();
  });

  dom.inlineSearchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    dom.btnClearSearch.classList.toggle('hidden', !state.searchQuery);
    renderCatalog();
  });

  dom.btnClearSearch.addEventListener('click', () => {
    dom.inlineSearchInput.value = '';
    state.searchQuery = '';
    dom.btnClearSearch.classList.add('hidden');
    renderCatalog();
  });

  dom.btnResetFilters.addEventListener('click', () => {
    state.activeCategory = 'all';
    state.searchQuery = '';
    dom.inlineSearchInput.value = '';
    dom.btnClearSearch.classList.add('hidden');
    dom.filterTabs.querySelectorAll('.tab-btn').forEach(b => {
      const isAll = b.dataset.category === 'all';
      b.classList.toggle('active', isAll);
      b.setAttribute('aria-selected', isAll ? 'true' : 'false');
    });
    renderCatalog();
  });

  dom.btnViewToggle.addEventListener('click', () => {
    state.isListView = !state.isListView;
    dom.catalogGrid.classList.toggle('list-view', state.isListView);
  });

  document.addEventListener('click', (e) => {
    const launchBtn = e.target.closest('[data-launch-id]');
    if (launchBtn) {
      openRunner(launchBtn.dataset.launchId);
      return;
    }

    const pinBtn = e.target.closest('[data-pin-id]');
    if (pinBtn) {
      togglePin(pinBtn.dataset.pinId);
      return;
    }
  });

  dom.btnClearPinned.addEventListener('click', () => {
    state.pinnedIds = [];
    localStorage.removeItem('nzadev_pinned_apps');
    renderPinnedBar();
    renderCatalog();
  });

  dom.searchTrigger.addEventListener('click', openPalette);
  dom.paletteBackdrop.addEventListener('click', closePalette);

  dom.paletteInput.addEventListener('input', (e) => {
    filterPalette(e.target.value);
  });

  dom.paletteInput.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (state.paletteFilteredApps.length > 0) {
        state.paletteSelectedIndex = (state.paletteSelectedIndex + 1) % state.paletteFilteredApps.length;
        updatePaletteSelection();
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (state.paletteFilteredApps.length > 0) {
        state.paletteSelectedIndex = (state.paletteSelectedIndex - 1 + state.paletteFilteredApps.length) % state.paletteFilteredApps.length;
        updatePaletteSelection();
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const target = state.paletteFilteredApps[state.paletteSelectedIndex];
      if (target) {
        closePalette();
        openRunner(target.id);
      }
    } else if (e.key === 'Escape') {
      closePalette();
    }
  });

  dom.btnRunnerClose.addEventListener('click', closeRunner);
  dom.runnerBackdrop.addEventListener('click', closeRunner);
  dom.btnRunnerReload.addEventListener('click', reloadRunner);
  dom.btnRunnerFullscreen.addEventListener('click', toggleRunnerFullscreen);

  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (dom.paletteModal.classList.contains('active')) {
        closePalette();
      } else {
        openPalette();
      }
      return;
    }

    if (e.key === 'Escape') {
      if (dom.paletteModal.classList.contains('active')) {
        closePalette();
      } else if (dom.runnerModal.classList.contains('active')) {
        closeRunner();
      }
      return;
    }

    if (!dom.paletteModal.classList.contains('active') && !dom.runnerModal.classList.contains('active')) {
      const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
      if (activeTag !== 'input' && activeTag !== 'textarea') {
        const num = parseInt(e.key, 10);
        if (num >= 1 && num <= APPS_DATA.length) {
          const app = APPS_DATA[num - 1];
          if (app) openRunner(app.id);
        }
      }
    }
  });

  window.addEventListener('hashchange', checkInitialHash);
}

function checkInitialHash() {
  const hash = window.location.hash;
  if (hash.startsWith('#app=')) {
    const id = hash.replace('#app=', '');
    if (APPS_DATA.some(a => a.id === id)) {
      openRunner(id);
    }
  }
}

function initPwa() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }

  let deferredPrompt = null;
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    dom.btnInstallPwa.classList.remove('hidden');
  });

  dom.btnInstallPwa.addEventListener('click', () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(() => {
      deferredPrompt = null;
      dom.btnInstallPwa.classList.add('hidden');
    });
  });
}

function init() {
  renderCatalog();
  renderPinnedBar();
  attachEvents();
  initAmbientCanvas();
  initPwa();
  checkInitialHash();
}

document.addEventListener('DOMContentLoaded', init);
