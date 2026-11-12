// 2D World & Tilemap Engine for Valoria RPG
// Handles multi-map geometry, tile rendering, camera, sprite animation, lighting, and collision

class GameEngine {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.tileSize = 32;

    // Viewport resolution: 640x480 (retro 4:3 16-bit aspect)
    this.width = 640;
    this.height = 480;
    this.canvas.width = this.width;
    this.canvas.height = this.height;

    this.camera = { x: 0, y: 0 };
    this.currentMapId = 'town';
    this.time = 0;
    this.stepCounter = 0;

    // Particles system
    this.particles = [];

    // Initialize all map templates
    this.maps = this.buildMaps();
  }

  buildMaps() {
    return {
      town: this.createTownMap(),
      forest: this.createForestMap(),
      dungeon: this.createDungeonMap(),
      dragon_lair: this.createDragonLairMap()
    };
  }

  // --- Map 1: Village of Eldoria (32x24 tiles) ---
  createTownMap() {
    const w = 32, h = 24;
    const tiles = [];
    for (let y = 0; y < h; y++) {
      const row = [];
      for (let x = 0; x < w; x++) {
        // Border boundary
        if (x === 0 || y === 0 || y === h - 1 || (x === w - 1 && (y < 9 || y > 12))) {
          row.push(5); // dense tree border
        } else if (y >= 9 && y <= 12 && x >= 10 && x <= 31) {
          row.push(2); // main cobblestone road to eastern forest
        } else if (x >= 13 && x <= 16 && y >= 6 && y <= 16) {
          row.push(2); // vertical town square road
        } else if (x >= 6 && x <= 10 && y >= 18 && y <= 22) {
          row.push(3); // town pond / lake for fishing
        } else if ((x >= 5 && x <= 9 && y >= 3 && y <= 6) ||
                   (x >= 19 && x <= 23 && y >= 3 && y <= 6) ||
                   (x >= 4 && x <= 8 && y >= 11 && y <= 14) ||
                   (x >= 20 && x <= 24 && y >= 11 && y <= 14)) {
          row.push(1); // cozy cottages & blacksmith shops (solid stone house)
        } else {
          row.push(0); // vibrant grass
        }
      }
      tiles.push(row);
    }

    return {
      id: 'town',
      name: 'Desa Eldoria',
      bgm: 'town',
      width: w,
      height: h,
      tiles: tiles,
      ambient: 'rgba(255, 245, 220, 0.08)',
      chests: [
        { id: 'town_chest_1', x: 3, y: 3, opened: false, reward: { gold: 60, items: ['potion', 'potion'] } },
        { id: 'town_chest_2', x: 26, y: 4, opened: false, reward: { gold: 40, items: ['ether'] } }
      ],
      shrine: { x: 14, y: 6, active: true },
      fishingDock: { x: 10, y: 19 },
      portals: [
        { x: 31, y: 10, targetMap: 'forest', targetX: 2, targetY: 10, label: 'Ke Hutan Kabut' },
        { x: 31, y: 11, targetMap: 'forest', targetX: 2, targetY: 11, label: 'Ke Hutan Kabut' }
      ]
    };
  }

  // --- Map 2: Mistwood Forest (32x24 tiles) ---
  createForestMap() {
    const w = 32, h = 24;
    const tiles = [];
    for (let y = 0; y < h; y++) {
      const row = [];
      for (let x = 0; x < w; x++) {
        // Border trees
        if (x === 0 && (y < 9 || y > 12) || y === 0 && (x < 14 || x > 17) || y === h - 1 || x === w - 1) {
          row.push(5);
        } else if (y >= 9 && y <= 12 && x >= 0 && x <= 16) {
          row.push(2); // west path
        } else if (x >= 14 && x <= 17 && y >= 1 && y <= 12) {
          row.push(2); // path going north toward ancient catacombs
        } else if (x >= 19 && x <= 22 && y >= 0 && y <= 23) {
          // River crossing
          if (y >= 10 && y <= 11) {
            row.push(6); // Wooden bridge over river
          } else {
            row.push(3); // deep river water
          }
        } else if ((x >= 4 && x <= 12 && y >= 2 && y <= 7) ||
                   (x >= 3 && x <= 12 && y >= 14 && y <= 21) ||
                   (x >= 23 && x <= 30 && y >= 5 && y <= 20)) {
          // Tall wild grass zones with random monster encounters!
          row.push(4);
        } else {
          row.push(0);
        }
      }
      tiles.push(row);
    }

    return {
      id: 'forest',
      name: 'Hutan Kabut (Mistwood)',
      bgm: 'forest',
      width: w,
      height: h,
      tiles: tiles,
      ambient: 'rgba(20, 60, 40, 0.12)',
      chests: [
        { id: 'forest_chest_1', x: 28, y: 3, opened: false, reward: { gold: 120, items: ['luminous_blade', 'elixir'], questId: 'q2' } },
        { id: 'forest_chest_2', x: 6, y: 19, opened: false, reward: { gold: 75, items: ['ether', 'smokebomb'] } }
      ],
      portals: [
        { x: 0, y: 10, targetMap: 'town', targetX: 30, targetY: 10, label: 'Kembali ke Desa Eldoria' },
        { x: 0, y: 11, targetMap: 'town', targetX: 30, targetY: 11, label: 'Kembali ke Desa Eldoria' },
        { x: 15, y: 0, targetMap: 'dungeon', targetX: 15, targetY: 22, label: 'Masuk Katakombe Kuno' },
        { x: 16, y: 0, targetMap: 'dungeon', targetX: 16, targetY: 22, label: 'Masuk Katakombe Kuno' }
      ]
    };
  }

  // --- Map 3: Ancient Catacombs (32x24 tiles) ---
  createDungeonMap() {
    const w = 32, h = 24;
    const tiles = [];
    for (let y = 0; y < h; y++) {
      const row = [];
      for (let x = 0; x < w; x++) {
        // Outer stone dungeon walls
        if (x === 0 || y === 0 && (x < 14 || x > 17) || x === w - 1 || y === h - 1 && (x < 14 || x > 17)) {
          row.push(7); // solid dungeon masonry
        } else if ((x >= 8 && x <= 23 && y === 8 && (x < 14 || x > 17)) ||
                   (x >= 8 && x <= 23 && y === 16 && (x < 14 || x > 17)) ||
                   (x === 10 && y >= 3 && y <= 6) ||
                   (x === 21 && y >= 3 && y <= 6)) {
          row.push(7); // internal chamber walls
        } else {
          row.push(8); // dungeon stone floor
        }
      }
      tiles.push(row);
    }

    return {
      id: 'dungeon',
      name: 'Katakombe Kuno',
      bgm: 'dungeon',
      width: w,
      height: h,
      tiles: tiles,
      ambient: 'rgba(10, 10, 25, 0.65)', // Dark atmospheric dungeon
      isDark: true,
      torches: [
        { x: 12, y: 7 }, { x: 19, y: 7 },
        { x: 12, y: 15 }, { x: 19, y: 15 },
        { x: 5, y: 3 }, { x: 26, y: 3 },
        { x: 14, y: 1 }, { x: 17, y: 1 }
      ],
      chests: [
        { id: 'dungeon_deep_chest', x: 5, y: 4, opened: false, reward: { gold: 200, items: ['dragon_key', 'aegis_plate'], questId: 'q3' } },
        { id: 'dungeon_chest_side', x: 26, y: 4, opened: false, reward: { gold: 100, items: ['mystic_amulet', 'elixir'] } }
      ],
      portals: [
        { x: 15, y: 23, targetMap: 'forest', targetX: 15, targetY: 2, label: 'Keluar ke Hutan' },
        { x: 16, y: 23, targetMap: 'forest', targetX: 16, targetY: 2, label: 'Keluar ke Hutan' },
        { x: 15, y: 0, targetMap: 'dragon_lair', targetX: 12, targetY: 16, requiresKey: 'dragon_key', label: 'Gerbang Kawah Naga' },
        { x: 16, y: 0, targetMap: 'dragon_lair', targetX: 13, targetY: 16, requiresKey: 'dragon_key', label: 'Gerbang Kawah Naga' }
      ]
    };
  }

  // --- Map 4: Dragon's Lair / Throne of Ignis (26x20 tiles) ---
  createDragonLairMap() {
    const w = 26, h = 20;
    const tiles = [];
    for (let y = 0; y < h; y++) {
      const row = [];
      for (let x = 0; x < w; x++) {
        if (x === 0 || y === 0 || x === w - 1 || y === h - 1 && (x < 11 || x > 14)) {
          row.push(7); // obsidian wall
        } else if ((x >= 2 && x <= 5 && y >= 3 && y <= 14) ||
                   (x >= 20 && x <= 23 && y >= 3 && y <= 14)) {
          row.push(9); // molten lava rivers
        } else {
          row.push(10); // scorched obsidian boss floor
        }
      }
      tiles.push(row);
    }

    return {
      id: 'dragon_lair',
      name: 'Kawah Naga: Sarang Ignis',
      bgm: 'battle',
      width: w,
      height: h,
      tiles: tiles,
      ambient: 'rgba(180, 40, 10, 0.22)',
      bossSpawn: { x: 12, y: 6, defeated: false },
      portals: [
        { x: 12, y: 19, targetMap: 'dungeon', targetX: 15, targetY: 2, label: 'Kembali ke Katakombe' },
        { x: 13, y: 19, targetMap: 'dungeon', targetX: 16, targetY: 2, label: 'Kembali ke Katakombe' }
      ]
    };
  }

  getCurrentMap() {
    return this.maps[this.currentMapId];
  }

  // --- Collision & Tile checks ---
  isWalkable(tileX, tileY) {
    const map = this.getCurrentMap();
    if (tileX < 0 || tileX >= map.width || tileY < 0 || tileY >= map.height) {
      return false;
    }
    const tile = map.tiles[tileY][tileX];
    // Solid tiles: 1 (house), 3 (water), 5 (tree/mountain), 7 (dungeon wall), 9 (lava)
    if (tile === 1 || tile === 3 || tile === 5 || tile === 7 || tile === 9) {
      return false;
    }
    // Check if chest is blocking
    if (map.chests && map.chests.some(c => c.x === tileX && c.y === tileY && !c.opened)) {
      return false;
    }
    // Check if shrine is blocking
    if (map.shrine && map.shrine.x === tileX && map.shrine.y === tileY) {
      return false;
    }
    return true;
  }

  isEncounterZone(tileX, tileY) {
    const map = this.getCurrentMap();
    if (tileX < 0 || tileX >= map.width || tileY < 0 || tileY >= map.height) return false;
    return map.tiles[tileY][tileX] === 4; // Tall grass
  }

  // --- Particle Effects Management ---
  spawnSparkle(x, y, color = '#fbbf24') {
    this.particles.push({
      x: x + (Math.random() * 20 - 10),
      y: y + (Math.random() * 20 - 10),
      vx: (Math.random() - 0.5) * 1.5,
      vy: -Math.random() * 2 - 0.5,
      color: color,
      size: Math.random() * 3 + 2,
      alpha: 1,
      decay: 0.03
    });
  }

  updateParticles() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.alpha -= p.decay;
      if (p.alpha <= 0) {
        this.particles.splice(i, 1);
      }
    }
  }

  // --- Tile Rendering Functions (Authentic Pixel Style) ---
  renderTile(ctx, tileType, screenX, screenY, time) {
    const ts = this.tileSize;

    switch (tileType) {
      case 0: // Grass
        ctx.fillStyle = '#2d8a4e';
        ctx.fillRect(screenX, screenY, ts, ts);
        // Grass blades detail
        ctx.fillStyle = '#34a853';
        ctx.fillRect(screenX + 6, screenY + 8, 2, 4);
        ctx.fillRect(screenX + 20, screenY + 18, 2, 4);
        ctx.fillRect(screenX + 14, screenY + 24, 2, 3);
        break;

      case 1: // House / Stone Wall
        ctx.fillStyle = '#78350f';
        ctx.fillRect(screenX, screenY, ts, ts);
        ctx.fillStyle = '#92400e';
        ctx.fillRect(screenX + 2, screenY + 2, ts - 4, ts - 4);
        // Brick lines
        ctx.fillStyle = '#451a03';
        ctx.fillRect(screenX, screenY + 10, ts, 2);
        ctx.fillRect(screenX, screenY + 21, ts, 2);
        ctx.fillRect(screenX + 16, screenY, 2, 10);
        ctx.fillRect(screenX + 8, screenY + 11, 2, 10);
        ctx.fillRect(screenX + 24, screenY + 11, 2, 10);
        break;

      case 2: // Cobblestone Path
        ctx.fillStyle = '#854d0e';
        ctx.fillRect(screenX, screenY, ts, ts);
        ctx.fillStyle = '#a16207';
        ctx.fillRect(screenX + 2, screenY + 2, 12, 10);
        ctx.fillRect(screenX + 16, screenY + 4, 12, 10);
        ctx.fillRect(screenX + 4, screenY + 16, 12, 10);
        ctx.fillRect(screenX + 18, screenY + 18, 11, 10);
        break;

      case 3: // Water (Animated gentle waves)
        const wave = Math.sin(time * 0.05 + screenX * 0.1) * 3;
        ctx.fillStyle = '#0284c7';
        ctx.fillRect(screenX, screenY, ts, ts);
        ctx.fillStyle = '#38bdf8';
        ctx.fillRect(screenX + 4, screenY + 10 + wave, 12, 3);
        ctx.fillRect(screenX + 14, screenY + 22 - wave, 14, 3);
        break;

      case 4: // Tall Grass (Wild encounter)
        ctx.fillStyle = '#1e723d';
        ctx.fillRect(screenX, screenY, ts, ts);
        ctx.fillStyle = '#10b981';
        // Tufts of wild grass
        ctx.fillRect(screenX + 4, screenY + 6, 4, 18);
        ctx.fillRect(screenX + 12, screenY + 3, 4, 24);
        ctx.fillRect(screenX + 20, screenY + 8, 4, 18);
        ctx.fillStyle = '#34d399';
        ctx.fillRect(screenX + 5, screenY + 4, 2, 6);
        ctx.fillRect(screenX + 13, screenY + 2, 2, 8);
        ctx.fillRect(screenX + 21, screenY + 6, 2, 6);
        break;

      case 5: // Tree
        // Grass base
        ctx.fillStyle = '#2d8a4e';
        ctx.fillRect(screenX, screenY, ts, ts);
        // Tree foliage canopy
        ctx.fillStyle = '#14532d';
        ctx.beginPath();
        ctx.arc(screenX + ts / 2, screenY + ts / 2 - 2, 14, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#166534';
        ctx.beginPath();
        ctx.arc(screenX + ts / 2 - 2, screenY + ts / 2 - 4, 10, 0, Math.PI * 2);
        ctx.fill();
        // Trunk base
        ctx.fillStyle = '#78350f';
        ctx.fillRect(screenX + 13, screenY + 22, 6, 8);
        break;

      case 6: // Wood Bridge
        ctx.fillStyle = '#0284c7';
        ctx.fillRect(screenX, screenY, ts, ts);
        ctx.fillStyle = '#78350f';
        ctx.fillRect(screenX, screenY + 4, ts, ts - 8);
        ctx.fillStyle = '#92400e';
        for (let i = 2; i < ts; i += 6) {
          ctx.fillRect(screenX + i, screenY + 6, 4, ts - 12);
        }
        break;

      case 7: // Dungeon Wall
        ctx.fillStyle = '#1e293b';
        ctx.fillRect(screenX, screenY, ts, ts);
        ctx.fillStyle = '#334155';
        ctx.fillRect(screenX + 2, screenY + 2, 12, 12);
        ctx.fillRect(screenX + 16, screenY + 2, 14, 12);
        ctx.fillRect(screenX + 2, screenY + 16, 26, 14);
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(screenX, screenY + 14, ts, 2);
        break;

      case 8: // Dungeon Floor
        ctx.fillStyle = '#475569';
        ctx.fillRect(screenX, screenY, ts, ts);
        ctx.fillStyle = '#334155';
        ctx.fillRect(screenX + 1, screenY + 1, ts - 2, ts - 2);
        ctx.fillStyle = '#1e293b';
        ctx.fillRect(screenX + 6, screenY + 8, 3, 3);
        ctx.fillRect(screenX + 22, screenY + 20, 2, 2);
        break;

      case 9: // Molten Lava
        const lavaGlow = Math.sin(time * 0.08 + screenY * 0.1) * 20;
        ctx.fillStyle = `rgb(${230 + lavaGlow}, ${60 + lavaGlow}, 15)`;
        ctx.fillRect(screenX, screenY, ts, ts);
        ctx.fillStyle = '#fbbf24';
        ctx.fillRect(screenX + 6, screenY + 8, 8, 4);
        ctx.fillRect(screenX + 16, screenY + 18, 10, 4);
        break;

      case 10: // Obsidian Boss Floor
        ctx.fillStyle = '#18181b';
        ctx.fillRect(screenX, screenY, ts, ts);
        ctx.fillStyle = '#27272a';
        ctx.fillRect(screenX + 2, screenY + 2, ts - 4, ts - 4);
        // Crimson rune cracks
        ctx.fillStyle = '#7f1d1d';
        ctx.fillRect(screenX + 8, screenY + 4, 2, 12);
        ctx.fillRect(screenX + 8, screenY + 14, 14, 2);
        break;
    }
  }

  // --- Draw Hero Character Sprite ---
  drawPlayer(player) {
    const ctx = this.ctx;
    const px = Math.round(player.x - this.camera.x);
    const py = Math.round(player.y - this.camera.y);
    const dir = player.facing || 'down';
    const frame = player.walkFrame || 0;

    // Shadow
    ctx.fillStyle = 'rgba(0, 0, 0, 0.35)';
    ctx.beginPath();
    ctx.ellipse(px + 16, py + 29, 10, 5, 0, 0, Math.PI * 2);
    ctx.fill();

    // Body armor (blue tunic / chainmail)
    ctx.fillStyle = player.equipment?.armor?.id === 'aegis_plate' ? '#0284c7' : '#2563eb';
    ctx.fillRect(px + 10, py + 14, 12, 12);

    // Legs / Boots with walk cycle
    ctx.fillStyle = '#1e293b';
    if (frame === 1) {
      ctx.fillRect(px + 9, py + 24, 5, 6);
      ctx.fillRect(px + 18, py + 25, 5, 5);
    } else if (frame === 2) {
      ctx.fillRect(px + 9, py + 25, 5, 5);
      ctx.fillRect(px + 18, py + 24, 5, 6);
    } else {
      ctx.fillRect(px + 10, py + 25, 4, 5);
      ctx.fillRect(px + 18, py + 25, 4, 5);
    }

    // Head / Face
    ctx.fillStyle = '#fde047'; // Golden hair
    ctx.fillRect(px + 9, py + 4, 14, 7);
    ctx.fillStyle = '#fbcfe8'; // Skin tone
    ctx.fillRect(px + 10, py + 7, 12, 8);

    // Eyes according to direction
    ctx.fillStyle = '#0f172a';
    if (dir === 'down') {
      ctx.fillRect(px + 12, py + 10, 2, 3);
      ctx.fillRect(px + 18, py + 10, 2, 3);
    } else if (dir === 'left') {
      ctx.fillRect(px + 10, py + 10, 2, 3);
    } else if (dir === 'right') {
      ctx.fillRect(px + 20, py + 10, 2, 3);
    }

    // Sword in hand
    ctx.fillStyle = player.equipment?.weapon?.id === 'luminous_blade' ? '#38bdf8' : '#e2e8f0';
    if (dir === 'right') {
      ctx.fillRect(px + 23, py + 12, 8, 3);
      ctx.fillRect(px + 22, py + 11, 2, 5);
    } else if (dir === 'left') {
      ctx.fillRect(px + 1, py + 12, 8, 3);
      ctx.fillRect(px + 8, py + 11, 2, 5);
    } else {
      ctx.fillRect(px + 22, py + 16, 3, 9);
      ctx.fillRect(px + 20, py + 16, 7, 2);
    }
  }

  // --- Draw NPC Sprites ---
  drawNPC(npc) {
    const ctx = this.ctx;
    const nx = Math.round(npc.tileX * this.tileSize - this.camera.x);
    const ny = Math.round(npc.tileY * this.tileSize - this.camera.y);

    // Shadow
    ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
    ctx.beginPath();
    ctx.ellipse(nx + 16, ny + 29, 9, 4, 0, 0, Math.PI * 2);
    ctx.fill();

    // Body
    ctx.fillStyle = npc.color || '#f59e0b';
    ctx.fillRect(nx + 10, ny + 13, 12, 13);

    // Head
    ctx.fillStyle = '#fed7aa';
    ctx.fillRect(nx + 11, ny + 6, 10, 8);

    // Face / Beard / Hat
    if (npc.id === 'elder') {
      ctx.fillStyle = '#e2e8f0'; // Elder white beard
      ctx.fillRect(nx + 11, ny + 11, 10, 6);
      ctx.fillStyle = '#9333ea'; // Mage hat
      ctx.fillRect(nx + 8, ny + 2, 16, 4);
      ctx.fillRect(nx + 12, ny - 2, 8, 4);
    } else if (npc.id === 'blacksmith') {
      ctx.fillStyle = '#451a03'; // Apron
      ctx.fillRect(nx + 12, ny + 14, 8, 12);
      ctx.fillStyle = '#94a3b8'; // Hammer in hand
      ctx.fillRect(nx + 23, ny + 15, 6, 3);
      ctx.fillRect(nx + 25, ny + 12, 3, 8);
    } else if (npc.id === 'alchemist') {
      ctx.fillStyle = '#06b6d4'; // Robe
      ctx.fillRect(nx + 10, ny + 13, 12, 13);
      ctx.fillStyle = '#10b981'; // Green potion vial
      ctx.fillRect(nx + 22, ny + 18, 5, 7);
    }

    // Name badge overhead
    ctx.fillStyle = 'rgba(15, 23, 42, 0.75)';
    ctx.fillRect(nx - 4, ny - 10, 40, 10);
    ctx.fillStyle = '#f8fafc';
    ctx.font = '7px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(npc.name.split(' ')[0], nx + 16, ny - 2);
  }

  // --- Draw World Objects (Chests, Shrines, Torches, Boss) ---
  drawObjects(map) {
    const ctx = this.ctx;
    const ts = this.tileSize;

    // Draw Chests
    if (map.chests) {
      map.chests.forEach(chest => {
        const cx = Math.round(chest.x * ts - this.camera.x);
        const cy = Math.round(chest.y * ts - this.camera.y);

        if (chest.opened) {
          // Open wooden chest
          ctx.fillStyle = '#78350f';
          ctx.fillRect(cx + 6, cy + 12, 20, 14);
          ctx.fillStyle = '#d97706';
          ctx.fillRect(cx + 4, cy + 6, 24, 6); // open lid tilted
          ctx.fillStyle = '#1e293b';
          ctx.fillRect(cx + 8, cy + 12, 16, 4);
        } else {
          // Closed treasure chest
          ctx.fillStyle = '#b45309';
          ctx.fillRect(cx + 5, cy + 10, 22, 16);
          ctx.fillStyle = '#fbbf24'; // Gold trims
          ctx.fillRect(cx + 5, cy + 8, 22, 4);
          ctx.fillRect(cx + 14, cy + 14, 4, 5); // Golden keyhole
          // Shimmer sparkle
          if (Math.random() < 0.1) {
            this.spawnSparkle(cx + 16, cy + 12, '#fbbf24');
          }
        }
      });
    }

    // Draw Sacred Crystal Shrine in Town
    if (map.shrine) {
      const sx = Math.round(map.shrine.x * ts - this.camera.x);
      const sy = Math.round(map.shrine.y * ts - this.camera.y);

      // Stone altar base
      ctx.fillStyle = '#475569';
      ctx.fillRect(sx + 4, sy + 18, 24, 12);
      ctx.fillStyle = '#64748b';
      ctx.fillRect(sx + 6, sy + 16, 20, 4);

      // Floating Sacred Crystal (levitating gently)
      const floatY = Math.sin(this.time * 0.06) * 4;
      ctx.fillStyle = '#38bdf8';
      ctx.beginPath();
      ctx.moveTo(sx + 16, sy + 4 + floatY);
      ctx.lineTo(sx + 24, sy + 12 + floatY);
      ctx.lineTo(sx + 16, sy + 20 + floatY);
      ctx.lineTo(sx + 8, sy + 12 + floatY);
      ctx.closePath();
      ctx.fill();

      // Crystal highlight
      ctx.fillStyle = '#e0f2fe';
      ctx.beginPath();
      ctx.moveTo(sx + 16, sy + 6 + floatY);
      ctx.lineTo(sx + 20, sy + 12 + floatY);
      ctx.lineTo(sx + 16, sy + 18 + floatY);
      ctx.closePath();
      ctx.fill();

      if (Math.random() < 0.25) {
        this.spawnSparkle(sx + 16, sy + 12 + floatY, '#38bdf8');
      }
    }

    // Draw Torches in Dungeon
    if (map.torches) {
      map.torches.forEach(t => {
        const tx = Math.round(t.x * ts - this.camera.x);
        const ty = Math.round(t.y * ts - this.camera.y);

        // Torch handle
        ctx.fillStyle = '#78350f';
        ctx.fillRect(tx + 14, ty + 12, 4, 12);

        // Animated flame
        const flameOffset = (Math.random() - 0.5) * 3;
        ctx.fillStyle = '#ea580c';
        ctx.beginPath();
        ctx.arc(tx + 16 + flameOffset, ty + 10, 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#fde047';
        ctx.beginPath();
        ctx.arc(tx + 16 + flameOffset * 0.5, ty + 10, 3, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    // Draw Boss Dragon in Dragon Lair
    if (map.bossSpawn && !map.bossSpawn.defeated) {
      const bx = Math.round(map.bossSpawn.x * ts - this.camera.x);
      const by = Math.round(map.bossSpawn.y * ts - this.camera.y);

      // Large menacing boss sprite
      const breath = Math.sin(this.time * 0.05) * 3;
      // Dragon wings
      ctx.fillStyle = '#7f1d1d';
      ctx.beginPath();
      ctx.moveTo(bx + 16, by + 10);
      ctx.lineTo(bx - 20, by - 12 + breath);
      ctx.lineTo(bx - 10, by + 26);
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(bx + 16, by + 10);
      ctx.lineTo(bx + 52, by - 12 + breath);
      ctx.lineTo(bx + 42, by + 26);
      ctx.fill();

      // Dragon body
      ctx.fillStyle = '#dc2626';
      ctx.fillRect(bx - 2, by + 4, 36, 32);

      // Dragon Head & Horns
      ctx.fillStyle = '#991b1b';
      ctx.fillRect(bx + 6, by - 10 + breath, 20, 16);
      ctx.fillStyle = '#fbbf24'; // Horns & Glowing eyes
      ctx.fillRect(bx + 4, by - 14 + breath, 4, 8);
      ctx.fillRect(bx + 24, by - 14 + breath, 4, 8);
      ctx.fillRect(bx + 10, by - 4 + breath, 3, 4);
      ctx.fillRect(bx + 19, by - 4 + breath, 3, 4);

      // Boss Label overhead
      ctx.fillStyle = '#ef4444';
      ctx.font = 'bold 9px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('IGNIS (BOSS)', bx + 16, by - 20);
    }
  }

  // --- Main Render Cycle ---
  render(player, npcs) {
    this.time++;
    const ctx = this.ctx;
    const map = this.getCurrentMap();
    const ts = this.tileSize;

    // Smooth camera target: Center on player, clamp to map boundaries
    const targetCamX = player.x + 16 - this.width / 2;
    const targetCamY = player.y + 16 - this.height / 2;
    const maxCamX = Math.max(0, map.width * ts - this.width);
    const maxCamY = Math.max(0, map.height * ts - this.height);

    this.camera.x = Math.max(0, Math.min(targetCamX, maxCamX));
    this.camera.y = Math.max(0, Math.min(targetCamY, maxCamY));

    // Clear Screen
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, this.width, this.height);

    // Calculate visible tile range
    const startCol = Math.floor(this.camera.x / ts);
    const endCol = Math.min(map.width, Math.ceil((this.camera.x + this.width) / ts) + 1);
    const startRow = Math.floor(this.camera.y / ts);
    const endRow = Math.min(map.height, Math.ceil((this.camera.y + this.height) / ts) + 1);

    // 1. Draw Map Tiles
    for (let r = startRow; r < endRow; r++) {
      for (let c = startCol; c < endCol; c++) {
        const tileType = map.tiles[r][c];
        const screenX = Math.round(c * ts - this.camera.x);
        const screenY = Math.round(r * ts - this.camera.y);
        this.renderTile(ctx, tileType, screenX, screenY, this.time);
      }
    }

    // 2. Draw Interactive Objects (Chests, Shrines, Boss)
    this.drawObjects(map);

    // 3. Draw NPCs belonging to current map
    if (npcs) {
      Object.values(npcs).forEach(npc => {
        if (npc.map === this.currentMapId) {
          this.drawNPC(npc);
        }
      });
    }

    // 4. Draw Player
    this.drawPlayer(player);

    // 5. Update & Draw Particles
    this.updateParticles();
    this.particles.forEach(p => {
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.fillRect(p.x, p.y, p.size, p.size);
    });
    ctx.globalAlpha = 1.0;

    // 6. Dynamic Radial Lighting (for Dungeon / Darkness)
    if (map.isDark) {
      const px = player.x + 16 - this.camera.x;
      const py = player.y + 16 - this.camera.y;

      const grad = ctx.createRadialGradient(px, py, 30, px, py, 140);
      grad.addColorStop(0, 'rgba(0, 0, 0, 0)');
      grad.addColorStop(0.5, 'rgba(10, 10, 25, 0.4)');
      grad.addColorStop(1, 'rgba(5, 5, 15, 0.88)');

      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, this.width, this.height);
    } else if (map.ambient) {
      // Ambient atmospheric color tint
      ctx.fillStyle = map.ambient;
      ctx.fillRect(0, 0, this.width, this.height);
    }
  }
}

window.GameEngine = GameEngine;
