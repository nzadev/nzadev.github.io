const ARCADE_DATA = [
  {
    id: 'cyber-colony',
    title: 'Protocol Zero',
    subtitle: 'Cyberpunk Defense & Survival Game',
    category: 'game',
    categoryLabel: 'Arcade Survival',
    tagIcon: '🎮',
    description: 'Game aksi bertahan hidup futuristik dengan canvas rendering berkecepatan tinggi, efek audio dinamis, dan sistem update changelog langsung.',
    liveUrl: 'https://nzadev.github.io/cyber-colony/',
    repoUrl: 'https://github.com/nzadev/cyber-colony',
    accent: '#00f0ff',
    glow: 'rgba(0, 240, 255, 0.35)',
    cardBg: '#080d19',
    screenBg: 'linear-gradient(135deg, #071524 0%, #02070e 100%)',
    screenText: '> PROTOCOL_ZERO // CANVAS RUNNER\n[STATUS: INVASION ACTIVE] 04:22\nDEFENSE GRID: 100% ONLINE',
    tech: ['HTML5 Canvas', 'Web Audio API', 'Cyberpunk HUD', 'JS Native'],
    features: [
      'Canvas Action Gameplay Langsung di Browser',
      'Atmospheric Cyber Audio & SFX Dinamis',
      'Prototype APK Android Siap Unduh',
      'Live Changelog & Update Feed Terintegrasi'
    ]
  },
  {
    id: 'airpad',
    title: 'AirPad Controller',
    subtitle: 'Virtual Gamepad via WebSocket',
    category: 'game',
    categoryLabel: 'Hardware Bridge',
    tagIcon: '🕹️',
    description: 'Mengubah smartphone menjadi controller PC nirkabel ultra-low latency. Dilengkapi QR Code camera pairing, D-Pad, Dual Analog Stick, dan Red Turbo mode.',
    liveUrl: 'https://nzadev.github.io/airpad/',
    repoUrl: 'https://github.com/nzadev/airpad',
    accent: '#ff2a5f',
    glow: 'rgba(255, 42, 95, 0.35)',
    cardBg: '#13090e',
    screenBg: 'linear-gradient(135deg, #240810 0%, #0b0204 100%)',
    screenText: '[BRIDGE: 192.168.1.100:8765]\nLATENCY: 1.4ms // D-PAD: DUAL ANALOG\nTURBO RED: PERSISTENT ON',
    tech: ['WebSocket', 'Virtual Gamepad', 'Haptic Touch', 'PWA Ready'],
    features: [
      'Pairing Seketika via Kamera QR Scanner',
      'Dual Analog Stick & Turbo Buttons Responsif',
      'Haptic Touch Vibration Feedback',
      'Red Turbo Mode State Persistence'
    ]
  },
  {
    id: 'nexus-pos',
    title: 'NexusPOS',
    subtitle: 'Sistem Kasir Modern Retail & F&B',
    category: 'business',
    categoryLabel: 'Smart POS & Cafe',
    tagIcon: '💼',
    description: 'Aplikasi Point of Sale (POS) cepat berbasis native web. Manajemen katalog produk ritel & cafe, custom order modifier (ice, sugar, size), dan cetak struk thermal.',
    liveUrl: 'https://nzadev.github.io/nexus-pos/',
    repoUrl: 'https://github.com/nzadev/nexus-pos',
    accent: '#10b981',
    glow: 'rgba(16, 185, 129, 0.35)',
    cardBg: '#071510',
    screenBg: 'linear-gradient(135deg, #092015 0%, #030d08 100%)',
    screenText: 'NEXUS CAFE // ORDER #1042\n1x Iced Latte [Normal Ice/Less Sugar]\nTOTAL: Rp 32.000 [STRUK TERCETAK]',
    tech: ['Vanilla JS', 'Thermal Printing', 'IndexedDB', 'Responsive POS'],
    features: [
      'Katalog Retail & Custom Minuman F&B',
      'Custom Modifier (Ice, Sugar Level, Size)',
      'Simulasi & Cetak Struk Thermal 58/80mm',
      'Export Rekap Omzet & Laporan Penjualan'
    ]
  },
  {
    id: 'netdesk-tkj',
    title: 'NetDesk TKJ',
    subtitle: 'IT Helpdesk & Network Infrastructure Suite',
    category: 'network',
    categoryLabel: 'Network Lab Ops',
    tagIcon: '🌐',
    description: 'Dashboard manajemen infrastruktur jaringan lab TKJ dan kantor. Dilengkapi Subnet Calculator visual (CIDR/VLSM), Interactive Topology Map, dan trouble ticketing.',
    liveUrl: 'https://nzadev.github.io/netdesk-tkj/',
    repoUrl: 'https://github.com/nzadev/netdesk-tkj',
    accent: '#38bdf8',
    glow: 'rgba(56, 189, 248, 0.35)',
    cardBg: '#08121f',
    screenBg: 'linear-gradient(135deg, #0b1f33 0%, #040d17 100%)',
    screenText: '$ ping 192.168.10.1 -c 3\n64 bytes from 192.168.10.1: time=0.9ms\n[TOPOLOGY: 8 SWITCHES ONLINE]',
    tech: ['CIDR Subnetting', 'Interactive Topology', 'IT Ticketing', 'Local Storage'],
    features: [
      'Subnet Calculator IP / CIDR / VLSM Visual',
      'Visual Network Topology Map Interaktif',
      'Inventaris Hardware Rack & Perangkat Lab',
      'Kanban Board Pelacakan Trouble Ticket'
    ]
  },
  {
    id: 'kas-tkj1',
    title: 'KAS-TKJ1',
    subtitle: 'Buku Kas & Monitoring Iuran XII TKJ 1',
    category: 'education',
    categoryLabel: 'Finance & Ledger',
    tagIcon: '📊',
    description: 'Buku kas digital transparan untuk kelas XII TKJ 1 SMK Kartika X-1. Monitoring iuran mingguan 36 siswa, kalkulasi tunggakan otomatis, dan backup data JSON.',
    liveUrl: 'https://nzadev.github.io/kas-tkj1/',
    repoUrl: 'https://github.com/nzadev/kas-tkj1',
    accent: '#eab308',
    glow: 'rgba(234, 179, 8, 0.35)',
    cardBg: '#171407',
    screenBg: 'linear-gradient(135deg, #241e0a 0%, #0d0a02 100%)',
    screenText: 'SMK KARTIKA X-1 // KELAS XII TKJ 1\nSTATUS: 36 SISWA TERDATA LENGKAP\nREKAP TUNGGAKAN: OTOMATIS AKTIF',
    tech: ['Ledger Engine', 'Student Tracker', 'Financial Charts', 'PWA Ready'],
    features: [
      'Rekap Pembayaran & Kehadiran 36 Siswa',
      'Perhitungan Otomatis Tunggakan Kas',
      'Arus Kas Masuk & Pengeluaran Terperinci',
      'Fitur Cadangkan & Pulihkan Database JSON'
    ]
  },
  {
    id: 'pure-pdf',
    title: 'Pure PDF',
    subtitle: 'Client-Side Privacy-First PDF Toolkit',
    category: 'utility',
    categoryLabel: 'Client Utility',
    tagIcon: '⚡',
    description: 'Aplikasi manipulasi dan pembaca dokumen PDF tanpa pernah mengunggah data ke server luar. Dibangun dengan Expo React Native Web untuk privasi mutlak.',
    liveUrl: 'https://nzadev.github.io/pure-pdf/',
    repoUrl: 'https://github.com/nzadev/pure-pdf',
    accent: '#f97316',
    glow: 'rgba(249, 115, 22, 0.35)',
    cardBg: '#180d07',
    screenBg: 'linear-gradient(135deg, #28150a 0%, #0d0502 100%)',
    screenText: '[DOC: ENGINE READY]\n100% PRIVATE CLIENT-SIDE PROCESSING\nZERO SERVER UPLOAD GUARANTEE',
    tech: ['Expo React Native', 'Web PDF Engine', 'Zero Server Upload', 'Privacy First'],
    features: [
      '100% Pemrosesan Dokumen di Peramban Lokal',
      'Privasi Penuh Tanpa Unggah ke Server Cloud',
      'Arsitektur Expo React Native Web Ringan',
      'Antarmuka Pengguna Bersih & Fokus'
    ]
  }
];

const state = {
  activeCat: 'all',
  searchQuery: '',
  isListView: false,
  spotlightIdx: 0,
  sfxEnabled: localStorage.getItem('nzadev_sfx_enabled') !== 'false',
  pinnedIds: JSON.parse(localStorage.getItem('nzadev_pinned_apps') || '[]'),
  activeTheaterApp: null,
  paletteFiltered: [],
  paletteSelectedIdx: 0
};

const dom = {
  arcadeGrid: document.getElementById('arcade-grid'),
  emptyDeck: document.getElementById('empty-deck'),
  categoryDock: document.getElementById('category-dock'),
  deckSearchInput: document.getElementById('deck-search-input'),
  btnClearDeckSearch: document.getElementById('btn-clear-deck-search'),
  btnResetSearch: document.getElementById('btn-reset-search'),
  btnModeGrid: document.getElementById('btn-mode-grid'),
  btnModeList: document.getElementById('btn-mode-list'),
  pinnedSection: document.getElementById('pinned-section'),
  pinnedChipsRow: document.getElementById('pinned-chips-row'),
  btnResetPin: document.getElementById('btn-reset-pin'),
  marqueeTitle: document.getElementById('marquee-title'),
  marqueeDesc: document.getElementById('marquee-desc'),
  marqueeTagLabel: document.getElementById('marquee-tag-label'),
  marqueeTechRow: document.getElementById('marquee-tech-row'),
  btnPlaySpotlight: document.getElementById('btn-play-spotlight'),
  btnNewtabSpotlight: document.getElementById('btn-newtab-spotlight'),
  quickNavDots: document.getElementById('quick-nav-dots'),
  marqueePreviewScreen: document.getElementById('marquee-preview-screen'),
  marqueeSpotlight: document.getElementById('marquee-spotlight'),
  clockDisplay: document.getElementById('clock-display'),
  btnSoundToggle: document.getElementById('btn-sound-toggle'),
  soundIcon: document.getElementById('sound-icon'),
  btnSearchTrigger: document.getElementById('btn-search-trigger'),
  spotlightModal: document.getElementById('spotlight-modal'),
  spotlightBackdrop: document.getElementById('spotlight-backdrop'),
  spotlightInput: document.getElementById('spotlight-input'),
  spotlightList: document.getElementById('spotlight-list'),
  spotlightCounter: document.getElementById('spotlight-counter'),
  theaterModal: document.getElementById('theater-modal'),
  theaterBackdrop: document.getElementById('theater-backdrop'),
  theaterWindow: document.querySelector('.theater-window'),
  theaterAppBadge: document.getElementById('theater-app-badge'),
  theaterName: document.getElementById('theater-name'),
  theaterUrl: document.getElementById('theater-url'),
  theaterIframe: document.getElementById('theater-iframe'),
  theaterLoading: document.getElementById('theater-loading'),
  btnThReload: document.getElementById('btn-th-reload'),
  btnThNewtab: document.getElementById('btn-th-newtab'),
  btnThRepo: document.getElementById('btn-th-repo'),
  btnThFullscreen: document.getElementById('btn-th-fullscreen'),
  btnThClose: document.getElementById('btn-th-close'),
  btnInstallApp: document.getElementById('btn-install-app')
};

let audioCtx = null;
function playSound(freq = 440, type = 'sine', duration = 0.04) {
  if (!state.sfxEnabled) return;
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (err) {}
}

function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  const s = String(now.getSeconds()).padStart(2, '0');
  dom.clockDisplay.textContent = `${h}:${m}:${s} WIB`;
}

function updateSpotlight(index) {
  state.spotlightIdx = index % ARCADE_DATA.length;
  const app = ARCADE_DATA[state.spotlightIdx];

  dom.marqueeTitle.textContent = app.title;
  dom.marqueeDesc.textContent = app.description;
  dom.marqueeTagLabel.textContent = `${app.tagIcon} ${app.categoryLabel.toUpperCase()} • SPOTLIGHT`;
  dom.marqueeSpotlight.style.setProperty('--marquee-accent', app.accent);

  dom.marqueeTechRow.innerHTML = app.tech.map(t => `<span class="mq-chip">${escapeHtml(t)}</span>`).join('');
  dom.btnNewtabSpotlight.href = app.liveUrl;

  dom.marqueePreviewScreen.style.background = app.screenBg;
  dom.marqueePreviewScreen.style.borderColor = app.accent;
  dom.marqueePreviewScreen.innerHTML = `
    <div style="padding: 1rem; font-family: var(--font-mono); font-size: 0.8rem; color: ${app.accent}; white-space: pre-wrap; line-height: 1.6;">${escapeHtml(app.screenText)}</div>
  `;

  renderSpotlightDots();
}

function renderSpotlightDots() {
  dom.quickNavDots.innerHTML = '';
  ARCADE_DATA.forEach((app, idx) => {
    const dot = document.createElement('div');
    dot.className = `nav-dot ${idx === state.spotlightIdx ? 'active' : ''}`;
    dot.title = app.title;
    dot.addEventListener('click', () => {
      playSound(520, 'triangle', 0.03);
      updateSpotlight(idx);
    });
    dom.quickNavDots.appendChild(dot);
  });
}

function getFilteredData() {
  return ARCADE_DATA.filter(app => {
    const matchCat = state.activeCat === 'all' || app.category === state.activeCat;
    if (!matchCat) return false;

    if (!state.searchQuery.trim()) return true;
    const q = state.searchQuery.toLowerCase();
    return app.title.toLowerCase().includes(q) ||
           app.subtitle.toLowerCase().includes(q) ||
           app.description.toLowerCase().includes(q) ||
           app.categoryLabel.toLowerCase().includes(q) ||
           app.tech.some(t => t.toLowerCase().includes(q)) ||
           app.features.some(f => f.toLowerCase().includes(q));
  });
}

function renderGrid() {
  const filtered = getFilteredData();
  dom.arcadeGrid.innerHTML = '';

  if (filtered.length === 0) {
    dom.arcadeGrid.classList.add('hidden');
    dom.emptyDeck.classList.remove('hidden');
    return;
  }

  dom.arcadeGrid.classList.remove('hidden');
  dom.emptyDeck.classList.add('hidden');

  filtered.forEach(app => {
    const isPinned = state.pinnedIds.includes(app.id);
    const card = document.createElement('article');
    card.className = 'arcade-card';
    card.style.setProperty('--card-accent', app.accent);
    card.style.setProperty('--card-glow', app.glow);
    card.style.setProperty('--card-bg', app.cardBg);
    card.style.setProperty('--card-border', `rgba(${hexToRgb(app.accent)}, 0.3)`);

    card.innerHTML = `
      <div class="card-mini-screen" style="background: ${app.screenBg};">
        <div class="screen-badge-row">
          <span class="screen-cat-tag">${app.tagIcon} ${escapeHtml(app.categoryLabel)}</span>
          <span class="screen-status-badge">● LIVE GITHUB</span>
        </div>
        <div class="screen-visual-deco" style="color: ${app.accent}; white-space: pre-wrap; font-size: 0.75rem;">${escapeHtml(app.screenText)}</div>
      </div>

      <div class="card-main-header">
        <div class="card-title-wrap">
          <h3>${escapeHtml(app.title)}</h3>
          <div class="card-subline">${escapeHtml(app.subtitle)}</div>
        </div>
        <button type="button" class="card-pin-toggle ${isPinned ? 'pinned' : ''}" data-pin-id="${app.id}" title="${isPinned ? 'Lepas Pin' : 'Sematkan ke Dock'}">
          ★
        </button>
      </div>

      <p class="card-description">${escapeHtml(app.description)}</p>

      <ul class="card-feature-list">
        ${app.features.map(f => `
          <li class="card-feature-item">
            <span class="card-feature-bullet">▸</span>
            <span>${escapeHtml(f)}</span>
          </li>
        `).join('')}
      </ul>

      <div class="card-tech-chips">
        ${app.tech.map(t => `<span class="card-tech-pill">${escapeHtml(t)}</span>`).join('')}
      </div>

      <div class="card-bottom-actions">
        <button type="button" class="btn-launch-arcade" data-launch-id="${app.id}">
          <span>▶ JALANKAN DI WEB</span>
        </button>
        <div class="card-secondary-links">
          <a href="${app.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-ext-link">
            <span>Tab Baru ↗</span>
          </a>
          <a href="${app.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn-ext-link">
            <span>Source Code 🐙</span>
          </a>
        </div>
      </div>
    `;

    dom.arcadeGrid.appendChild(card);
  });
}

function renderPinnedSection() {
  if (state.pinnedIds.length === 0) {
    dom.pinnedSection.classList.add('hidden');
    return;
  }

  dom.pinnedSection.classList.remove('hidden');
  dom.pinnedChipsRow.innerHTML = '';

  state.pinnedIds.forEach(id => {
    const app = ARCADE_DATA.find(a => a.id === id);
    if (!app) return;

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'pinned-btn';
    btn.dataset.launchId = app.id;
    btn.style.borderColor = app.accent;
    btn.innerHTML = `
      <span style="color: ${app.accent}">●</span>
      <span>${escapeHtml(app.title)}</span>
    `;
    dom.pinnedChipsRow.appendChild(btn);
  });
}

function togglePin(id) {
  playSound(600, 'square', 0.03);
  if (state.pinnedIds.includes(id)) {
    state.pinnedIds = state.pinnedIds.filter(i => i !== id);
  } else {
    state.pinnedIds.push(id);
  }
  localStorage.setItem('nzadev_pinned_apps', JSON.stringify(state.pinnedIds));
  renderPinnedSection();
  renderGrid();
}

function openTheater(appId) {
  const app = ARCADE_DATA.find(a => a.id === appId);
  if (!app) return;

  playSound(660, 'sine', 0.06);
  setTimeout(() => playSound(880, 'sine', 0.08), 50);

  state.activeTheaterApp = app;

  dom.theaterName.textContent = app.title;
  dom.theaterUrl.textContent = app.liveUrl;
  dom.theaterAppBadge.textContent = app.categoryLabel.toUpperCase();
  dom.theaterAppBadge.style.color = app.accent;
  dom.theaterAppBadge.style.borderColor = app.accent;

  dom.btnThNewtab.href = app.liveUrl;
  dom.btnThRepo.href = app.repoUrl;

  dom.theaterLoading.classList.remove('hidden');
  dom.theaterIframe.src = app.liveUrl;

  dom.theaterIframe.onload = () => {
    dom.theaterLoading.classList.add('hidden');
  };

  dom.theaterModal.classList.add('active');
  dom.theaterModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  window.location.hash = `app=${app.id}`;
}

function closeTheater() {
  playSound(320, 'sine', 0.04);
  dom.theaterModal.classList.remove('active');
  dom.theaterModal.setAttribute('aria-hidden', 'true');
  dom.theaterIframe.src = 'about:blank';
  state.activeTheaterApp = null;
  document.body.style.overflow = '';
  if (window.location.hash.startsWith('#app=')) {
    history.replaceState(null, '', window.location.pathname);
  }
}

function reloadTheater() {
  if (!state.activeTheaterApp) return;
  playSound(480, 'triangle', 0.04);
  dom.theaterLoading.classList.remove('hidden');
  dom.theaterIframe.src = state.activeTheaterApp.liveUrl;
}

function toggleTheaterFullscreen() {
  playSound(500, 'triangle', 0.04);
  dom.theaterWindow.classList.toggle('fullscreen');
}

function openSpotlight() {
  playSound(540, 'triangle', 0.04);
  dom.spotlightModal.classList.add('active');
  dom.spotlightModal.setAttribute('aria-hidden', 'false');
  dom.spotlightInput.value = '';
  filterSpotlight('');
  setTimeout(() => dom.spotlightInput.focus(), 50);
}

function closeSpotlight() {
  dom.spotlightModal.classList.remove('active');
  dom.spotlightModal.setAttribute('aria-hidden', 'true');
}

function filterSpotlight(q) {
  const query = q.trim().toLowerCase();
  state.paletteFiltered = ARCADE_DATA.filter(app => {
    if (!query) return true;
    return app.title.toLowerCase().includes(query) ||
           app.subtitle.toLowerCase().includes(query) ||
           app.description.toLowerCase().includes(query) ||
           app.categoryLabel.toLowerCase().includes(query) ||
           app.tech.some(t => t.toLowerCase().includes(query));
  });

  state.paletteSelectedIdx = 0;
  renderSpotlightRows();
}

function renderSpotlightRows() {
  dom.spotlightList.innerHTML = '';
  dom.spotlightCounter.textContent = `${state.paletteFiltered.length} Aplikasi`;

  if (state.paletteFiltered.length === 0) {
    dom.spotlightList.innerHTML = `
      <div style="padding: 1.5rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
        Tidak ada aplikasi yang cocok
      </div>
    `;
    return;
  }

  state.paletteFiltered.forEach((app, idx) => {
    const row = document.createElement('div');
    row.className = `spotlight-row ${idx === state.paletteSelectedIdx ? 'selected' : ''}`;
    row.style.setProperty('--sp-accent', app.accent);
    row.innerHTML = `
      <div>
        <div class="sp-title">${escapeHtml(app.title)}</div>
        <div class="sp-sub">${escapeHtml(app.subtitle)}</div>
      </div>
      <div class="sp-badge">${app.tagIcon} ${escapeHtml(app.categoryLabel)}</div>
    `;

    row.addEventListener('click', () => {
      closeSpotlight();
      openTheater(app.id);
    });

    dom.spotlightList.appendChild(row);
  });
}

function updateSpotlightSelection() {
  const rows = dom.spotlightList.querySelectorAll('.spotlight-row');
  rows.forEach((r, idx) => {
    r.classList.toggle('selected', idx === state.paletteSelectedIdx);
    if (idx === state.paletteSelectedIdx) {
      r.scrollIntoView({ block: 'nearest' });
    }
  });
}

function hexToRgb(hex) {
  const c = hex.replace('#', '');
  if (c.length === 3) {
    return `${parseInt(c[0]+c[0], 16)}, ${parseInt(c[1]+c[1], 16)}, ${parseInt(c[2]+c[2], 16)}`;
  }
  return `${parseInt(c.substring(0, 2), 16)}, ${parseInt(c.substring(2, 4), 16)}, ${parseInt(c.substring(4, 6), 16)}`;
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
  dom.categoryDock.addEventListener('click', e => {
    const tab = e.target.closest('.dock-tab');
    if (!tab) return;
    playSound(420, 'triangle', 0.03);
    dom.categoryDock.querySelectorAll('.dock-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    state.activeCat = tab.dataset.cat;
    renderGrid();
  });

  dom.deckSearchInput.addEventListener('input', e => {
    state.searchQuery = e.target.value;
    dom.btnClearDeckSearch.classList.toggle('hidden', !state.searchQuery);
    renderGrid();
  });

  dom.btnClearDeckSearch.addEventListener('click', () => {
    playSound(380, 'sine', 0.03);
    dom.deckSearchInput.value = '';
    state.searchQuery = '';
    dom.btnClearDeckSearch.classList.add('hidden');
    renderGrid();
  });

  dom.btnResetSearch.addEventListener('click', () => {
    playSound(380, 'sine', 0.03);
    state.activeCat = 'all';
    state.searchQuery = '';
    dom.deckSearchInput.value = '';
    dom.btnClearDeckSearch.classList.add('hidden');
    dom.categoryDock.querySelectorAll('.dock-tab').forEach(t => {
      t.classList.toggle('active', t.dataset.cat === 'all');
    });
    renderGrid();
  });

  dom.btnModeGrid.addEventListener('click', () => {
    playSound(400, 'square', 0.02);
    state.isListView = false;
    dom.btnModeGrid.classList.add('active');
    dom.btnModeList.classList.remove('active');
    dom.arcadeGrid.classList.remove('list-view');
  });

  dom.btnModeList.addEventListener('click', () => {
    playSound(400, 'square', 0.02);
    state.isListView = true;
    dom.btnModeList.classList.add('active');
    dom.btnModeGrid.classList.remove('active');
    dom.arcadeGrid.classList.add('list-view');
  });

  document.addEventListener('click', e => {
    const launchBtn = e.target.closest('[data-launch-id]');
    if (launchBtn) {
      openTheater(launchBtn.dataset.launchId);
      return;
    }

    const pinBtn = e.target.closest('[data-pin-id]');
    if (pinBtn) {
      togglePin(pinBtn.dataset.pinId);
      return;
    }
  });

  dom.btnPlaySpotlight.addEventListener('click', () => {
    const cur = ARCADE_DATA[state.spotlightIdx];
    if (cur) openTheater(cur.id);
  });

  dom.btnResetPin.addEventListener('click', () => {
    playSound(300, 'sine', 0.04);
    state.pinnedIds = [];
    localStorage.removeItem('nzadev_pinned_apps');
    renderPinnedSection();
    renderGrid();
  });

  dom.btnSoundToggle.addEventListener('click', () => {
    state.sfxEnabled = !state.sfxEnabled;
    localStorage.setItem('nzadev_sfx_enabled', state.sfxEnabled);
    dom.soundIcon.textContent = state.sfxEnabled ? '🔊' : '🔇';
    dom.btnSoundToggle.querySelector('.btn-text').textContent = state.sfxEnabled ? 'SFX ON' : 'MUTE';
    if (state.sfxEnabled) playSound(550, 'sine', 0.05);
  });

  dom.btnSearchTrigger.addEventListener('click', openSpotlight);
  dom.spotlightBackdrop.addEventListener('click', closeSpotlight);
  dom.spotlightInput.addEventListener('input', e => filterSpotlight(e.target.value));

  dom.spotlightInput.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (state.paletteFiltered.length > 0) {
        playSound(440, 'triangle', 0.02);
        state.paletteSelectedIdx = (state.paletteSelectedIdx + 1) % state.paletteFiltered.length;
        updateSpotlightSelection();
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (state.paletteFiltered.length > 0) {
        playSound(440, 'triangle', 0.02);
        state.paletteSelectedIdx = (state.paletteSelectedIdx - 1 + state.paletteFiltered.length) % state.paletteFiltered.length;
        updateSpotlightSelection();
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const target = state.paletteFiltered[state.paletteSelectedIdx];
      if (target) {
        closeSpotlight();
        openTheater(target.id);
      }
    } else if (e.key === 'Escape') {
      closeSpotlight();
    }
  });

  dom.btnThClose.addEventListener('click', closeTheater);
  dom.theaterBackdrop.addEventListener('click', closeTheater);
  dom.btnThReload.addEventListener('click', reloadTheater);
  dom.btnThFullscreen.addEventListener('click', toggleTheaterFullscreen);

  window.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (dom.spotlightModal.classList.contains('active')) {
        closeSpotlight();
      } else {
        openSpotlight();
      }
      return;
    }

    if (e.key === 'Escape') {
      if (dom.spotlightModal.classList.contains('active')) {
        closeSpotlight();
      } else if (dom.theaterModal.classList.contains('active')) {
        closeTheater();
      }
      return;
    }

    if (!dom.spotlightModal.classList.contains('active') && !dom.theaterModal.classList.contains('active')) {
      const tag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
      if (tag !== 'input' && tag !== 'textarea') {
        const num = parseInt(e.key, 10);
        if (num >= 1 && num <= ARCADE_DATA.length) {
          const app = ARCADE_DATA[num - 1];
          if (app) openTheater(app.id);
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
    if (ARCADE_DATA.some(a => a.id === id)) {
      openTheater(id);
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
    dom.btnInstallApp.classList.remove('hidden');
  });

  dom.btnInstallApp.addEventListener('click', () => {
    if (!promptEvent) return;
    promptEvent.prompt();
    promptEvent.userChoice.then(() => {
      promptEvent = null;
      dom.btnInstallApp.classList.add('hidden');
    });
  });
}

function init() {
  updateClock();
  setInterval(updateClock, 1000);

  updateSpotlight(0);
  renderGrid();
  renderPinnedSection();
  attachEvents();
  initPwa();
  checkHash();

  setInterval(() => {
    if (!document.hidden && !dom.theaterModal.classList.contains('active')) {
      state.spotlightIdx = (state.spotlightIdx + 1) % ARCADE_DATA.length;
      updateSpotlight(state.spotlightIdx);
    }
  }, 8000);
}

document.addEventListener('DOMContentLoaded', init);
