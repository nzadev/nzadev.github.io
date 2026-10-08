# NzaDev Hub — Unified Arcade & Web App Suite

[![GitHub Pages](https://img.shields.io/badge/Hub-All--In--One-00f0ff)](https://github.com/nzadev)
[![Live Apps](https://img.shields.io/badge/Apps-6%20Active-10b981)](https://github.com/nzadev)
[![PWA](https://img.shields.io/badge/PWA-Ready-6366f1)](https://github.com/nzadev)

Portal agregator terpadu untuk mengakses seluruh game dan aplikasi web buatan **nzadev** (Nabil Zaenal Assyqin). Dibangun dengan fokus pada kecepatan, desain modern, no AI slop, dan kemampuan menjalankan aplikasi langsung di dalam satu website tanpa harus berpindah-pindah link.

---

## Daftar Proyek Terintegrasi

| Proyek | Kategori | Fitur Utama | Status Live |
|---|---|---|---|
| **Protocol Zero** | Game & Play | Action Survival, HTML5 Canvas, Dynamic Audio | [Live Demo](https://nzadev.github.io/cyber-colony/) |
| **AirPad Controller** | Game Utility | Virtual Gamepad, Low-Latency WebSocket, QR Pair | [Live Demo](https://nzadev.github.io/airpad/) |
| **NexusPOS** | Bisnis & POS | Kasir Retail & F&B, Custom Modifier, Struk Thermal | [Live Demo](https://nzadev.github.io/nexus-pos/) |
| **NetDesk TKJ** | Jaringan & IT | Subnet IP Calc (CIDR/VLSM), Visual Topology, Tiket IT | [Live Demo](https://nzadev.github.io/netdesk-tkj/) |
| **KAS-TKJ1** | Kas & Edukasi | Ledger 36 Siswa, Arrears Tracker, Backup JSON | [Live Demo](https://nzadev.github.io/kas-tkj1/) |
| **Pure PDF** | Utility | 100% Client-Side PDF Tools, Zero Server Upload | [Live Demo](https://nzadev.github.io/pure-pdf/) |

---

## Fitur Utama Portal

- **Embedded Theater Runner**: Jalankan game dan web apps langsung di dalam portal via sandboxed modal tanpa navigasi keluar.
- **Spotlight Command Palette (`Ctrl + K`)**: Cari dan jalankan aplikasi secara instan dengan navigasi keyboard.
- **Pintasan Cepat Keyboard**:
  - `Ctrl + K`: Buka Command Palette pencarian.
  - `Esc`: Menutup runner modal atau command palette.
  - `1` - `6`: Jalankan aplikasi secara langsung.
- **Sistem Favorit (Pinning)**: Simpan aplikasi yang sering dibuka ke Quick Bar teratas (tersimpan di `localStorage`).
- **Responsive & PWA Ready**: Dapat diinstal di desktop atau homescreen smartphone sebagai aplikasi mandiri.
- **Filter Multi-Kategori & Instant Search**: Filter real-time berdasarkan kategori atau kata kunci teknologi.

---

## Cara Menjalankan Lokal

Jalankan web server lokal sederhana:

```bash
cd ~/Projects/nzadev-hub
python3 -m http.server 8080
```

Buka peramban di `http://localhost:8080`.

---

## Cara Deploy ke GitHub Pages

Gunakan script deploy otomatis:

```bash
cd ~/Projects/nzadev-hub
./deploy.sh
```

Pilih opsi deployment:
1. `nzadev.github.io`: Menjadi halaman beranda utama profil GitHub lo.
2. `nzadev-hub`: Menjadi sub-path `https://nzadev.github.io/nzadev-hub/`.
