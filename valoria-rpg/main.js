// Main Game Controller & State Machine for Valoria RPG
// Handles Player lifecycle, Input, Interactions, UI overlays, Quests, Shops, and Persistence

class Player {
  constructor(name = 'Arion') {
    this.name = name;
    this.level = 1;
    this.exp = 0;
    this.gold = 50;

    // Base Combat Stats
    this.maxHp = 100;
    this.hp = 100;
    this.maxMp = 40;
    this.mp = 40;
    this.atk = 14;
    this.def = 8;
    this.mag = 12;
    this.spd = 6;
    this.crit = 5;

    // Equipment Slots
    this.equipment = {
      weapon: window.GAME_DATA.items.rusty_sword,
      armor: window.GAME_DATA.items.cloth_tunic,
      relic: null
    };

    // Inventory counts: itemId -> count
    this.inventory = {
      potion: 3,
      ether: 2
    };

    // Skills unlocked
    this.skills = ['fireball', 'holy_heal'];

    // World Coordinates
    this.x = 14 * 32;
    this.y = 10 * 32;
    this.facing = 'down';
    this.walkFrame = 0;
    this.isMoving = false;
  }

  addExp(amount) {
    this.exp += amount;
    const nextExp = window.GAME_DATA.expTable[this.level] || 9999;
    if (this.exp >= nextExp && this.level < 10) {
      this.level++;
      const growth = window.GAME_DATA.levelUpStats;
      this.maxHp += growth.hp;
      this.hp = this.maxHp;
      this.maxMp += growth.mp;
      this.mp = this.maxMp;
      this.atk += growth.atk;
      this.def += growth.def;
      this.mag += growth.mag;
      this.spd += growth.spd;

      // Unlock higher tier spells
      if (this.level >= 3 && !this.skills.includes('thunderstrike')) {
        this.skills.push('thunderstrike');
      }
      if (this.level >= 4 && !this.skills.includes('aegis_shield')) {
        this.skills.push('aegis_shield');
      }
      return true;
    }
    return false;
  }

  equip(item) {
    if (!item) return;
    if (item.type === 'weapon') {
      this.equipment.weapon = item;
    } else if (item.type === 'armor') {
      this.equipment.armor = item;
    } else if (item.type === 'relic') {
      this.equipment.relic = item;
    }
  }

  serialize() {
    return {
      name: this.name,
      level: this.level,
      exp: this.exp,
      gold: this.gold,
      hp: this.hp,
      maxHp: this.maxHp,
      mp: this.mp,
      maxMp: this.maxMp,
      atk: this.atk,
      def: this.def,
      mag: this.mag,
      spd: this.spd,
      crit: this.crit,
      equipment: {
        weapon: this.equipment.weapon?.id || null,
        armor: this.equipment.armor?.id || null,
        relic: this.equipment.relic?.id || null
      },
      inventory: this.inventory,
      skills: this.skills,
      x: this.x,
      y: this.y,
      facing: this.facing
    };
  }

  deserialize(data) {
    Object.assign(this, data);
    this.equipment = {
      weapon: data.equipment?.weapon ? window.GAME_DATA.items[data.equipment.weapon] : null,
      armor: data.equipment?.armor ? window.GAME_DATA.items[data.equipment.armor] : null,
      relic: data.equipment?.relic ? window.GAME_DATA.items[data.equipment.relic] : null
    };
  }
}

class GameApp {
  constructor() {
    this.canvas = document.getElementById('game-canvas');
    this.engine = new GameEngine(this.canvas);
    this.player = new Player();
    this.state = 'TITLE'; // TITLE, WORLD, BATTLE, DIALOGUE, SHOP, INVENTORY, FISHING
    this.keys = {};
    this.moveTimer = 0;
    this.battle = null;
    this.currentDialogue = null;
    this.dialogueIndex = 0;
    this.typewriterTimer = null;
    this.currentShopNpc = null;
    this.activeToast = null;
    this.wildSteps = 0;

    // Fishing minigame state
    this.fishing = {
      active: false,
      barPos: 0,
      targetPos: 50,
      direction: 1,
      speed: 2,
      score: 0
    };

    this.initEventListeners();
    this.setupTouchControls();
    this.checkAutoLogin();
    this.startGameLoop();
  }

  // --- Input & Controls ---
  initEventListeners() {
    window.addEventListener('keydown', (e) => {
      // Prevent default scrolling on arrow keys & space
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) {
        e.preventDefault();
      }
      this.keys[e.key] = true;

      // Universal hotkeys
      if (e.key === 'Escape' || e.key === 'x' || e.key === 'X') {
        this.toggleMenu();
      }
      if (e.key === 'Tab' || e.key === 'i' || e.key === 'I') {
        e.preventDefault();
        this.openInventory();
      }
      if (e.key === ' ' || e.key === 'Enter' || e.key === 'z' || e.key === 'Z') {
        this.handleActionKey();
      }
    });

    window.addEventListener('keyup', (e) => {
      this.keys[e.key] = false;
    });

    // Sound toggle button
    document.getElementById('btn-sound')?.addEventListener('click', () => {
      const isMuted = window.retroAudio.toggleMute();
      const btn = document.getElementById('btn-sound');
      if (btn) btn.innerHTML = isMuted ? '🔇 Audio: MATI' : '🔊 Audio: AKTIF';
    });
  }

  setupTouchControls() {
    const bindTouch = (id, keyName) => {
      const el = document.getElementById(id);
      if (!el) return;
      const start = (e) => {
        e.preventDefault();
        this.keys[keyName] = true;
        if ([' ', 'Enter', 'z'].includes(keyName)) {
          this.handleActionKey();
        }
      };
      const end = (e) => {
        e.preventDefault();
        this.keys[keyName] = false;
      };
      el.addEventListener('touchstart', start, { passive: false });
      el.addEventListener('touchend', end, { passive: false });
      el.addEventListener('mousedown', start);
      el.addEventListener('mouseup', end);
    };

    bindTouch('btn-dpad-up', 'ArrowUp');
    bindTouch('btn-dpad-down', 'ArrowDown');
    bindTouch('btn-dpad-left', 'ArrowLeft');
    bindTouch('btn-dpad-right', 'ArrowRight');
    bindTouch('btn-touch-a', ' ');
    bindTouch('btn-touch-b', 'Escape');
    bindTouch('btn-touch-menu', 'Tab');
  }

  // --- Movement & Encounter Handling ---
  updateMovement() {
    if (this.state !== 'WORLD') return;

    let dx = 0, dy = 0;
    if (this.keys['ArrowUp'] || this.keys['w'] || this.keys['W']) {
      dy -= 1;
      this.player.facing = 'up';
    } else if (this.keys['ArrowDown'] || this.keys['s'] || this.keys['S']) {
      dy += 1;
      this.player.facing = 'down';
    } else if (this.keys['ArrowLeft'] || this.keys['a'] || this.keys['A']) {
      dx -= 1;
      this.player.facing = 'left';
    } else if (this.keys['ArrowRight'] || this.keys['d'] || this.keys['D']) {
      dx += 1;
      this.player.facing = 'right';
    }

    if (dx !== 0 || dy !== 0) {
      const speed = 2.4;
      const newX = this.player.x + dx * speed;
      const newY = this.player.y + dy * speed;

      // Check collision box: player footprint (offset 6..26)
      const ts = this.engine.tileSize;
      const leftTile = Math.floor((newX + 8) / ts);
      const rightTile = Math.floor((newX + 24) / ts);
      const topTile = Math.floor((newY + 16) / ts);
      const bottomTile = Math.floor((newY + 28) / ts);

      if (this.engine.isWalkable(leftTile, topTile) &&
          this.engine.isWalkable(rightTile, topTile) &&
          this.engine.isWalkable(leftTile, bottomTile) &&
          this.engine.isWalkable(rightTile, bottomTile)) {
        this.player.x = newX;
        this.player.y = newY;
        this.player.isMoving = true;

        // Animate walking frames
        this.moveTimer++;
        if (this.moveTimer % 8 === 0) {
          this.player.walkFrame = (this.player.walkFrame + 1) % 4;
        }

        // Check map portals
        this.checkPortals();

        // Check wild monster encounters in tall grass
        const centerTileX = Math.floor((this.player.x + 16) / ts);
        const centerTileY = Math.floor((this.player.y + 20) / ts);
        if (this.engine.isEncounterZone(centerTileX, centerTileY)) {
          this.wildSteps++;
          if (this.wildSteps > 40 && Math.random() < 0.035) {
            this.wildSteps = 0;
            this.triggerRandomEncounter();
          }
        }
      }
    } else {
      this.player.isMoving = false;
      this.player.walkFrame = 0;
    }
  }

  // --- Interaction (Space / Enter / Z) ---
  handleActionKey() {
    if (this.state === 'TITLE') {
      this.startNewGame();
      return;
    }

    if (this.state === 'DIALOGUE') {
      this.advanceDialogue();
      return;
    }

    if (this.state === 'WORLD') {
      // Calculate target tile directly in front of the player
      const ts = this.engine.tileSize;
      const curTileX = Math.floor((this.player.x + 16) / ts);
      const curTileY = Math.floor((this.player.y + 20) / ts);
      let targetX = curTileX;
      let targetY = curTileY;

      if (this.player.facing === 'up') targetY -= 1;
      if (this.player.facing === 'down') targetY += 1;
      if (this.player.facing === 'left') targetX -= 1;
      if (this.player.facing === 'right') targetX += 1;

      // 1. Check NPC interaction
      const mapNpcs = Object.values(window.GAME_DATA.npcs).filter(n => n.map === this.engine.currentMapId);
      const hitNpc = mapNpcs.find(n => (n.tileX === targetX && n.tileY === targetY) ||
                                       (Math.abs(n.tileX - curTileX) <= 1 && Math.abs(n.tileY - curTileY) <= 1 && n.tileX === targetX));
      if (hitNpc) {
        this.startDialogue(hitNpc);
        return;
      }

      // 2. Check Chest interaction
      const map = this.engine.getCurrentMap();
      if (map.chests) {
        const hitChest = map.chests.find(c => c.x === targetX && c.y === targetY);
        if (hitChest) {
          this.openChest(hitChest);
          return;
        }
      }

      // 3. Check Sacred Shrine interaction
      if (map.shrine && map.shrine.x === targetX && map.shrine.y === targetY) {
        this.activateShrine();
        return;
      }

      // 4. Check Fishing dock interaction
      if (map.fishingDock && Math.abs(map.fishingDock.x - curTileX) <= 1 && Math.abs(map.fishingDock.y - curTileY) <= 1) {
        this.startFishing();
        return;
      }

      // 5. Check Boss interaction in Dragon Lair
      if (map.bossSpawn && !map.bossSpawn.defeated) {
        if (Math.abs(map.bossSpawn.x - curTileX) <= 2 && Math.abs(map.bossSpawn.y - curTileY) <= 2) {
          this.startBossBattle();
          return;
        }
      }
    }
  }

  // --- Dialogue System ---
  startDialogue(npc) {
    this.state = 'DIALOGUE';
    this.currentDialogue = npc;
    this.dialogueIndex = 0;

    const modal = document.getElementById('dialogue-modal');
    if (!modal) return;
    modal.classList.remove('hidden');

    document.getElementById('dialogue-name').innerText = npc.name;
    document.getElementById('dialogue-title').innerText = npc.title;
    document.getElementById('dialogue-avatar').innerText = npc.avatar;

    this.renderDialogueLine();
  }

  renderDialogueLine() {
    const textEl = document.getElementById('dialogue-text');
    const npc = this.currentDialogue;
    if (!textEl || !npc) return;

    const line = npc.dialogue[this.dialogueIndex] || '';
    textEl.innerText = '';
    let charIdx = 0;

    if (this.typewriterTimer) clearInterval(this.typewriterTimer);

    this.typewriterTimer = setInterval(() => {
      if (charIdx < line.length) {
        textEl.innerText += line[charIdx];
        if (charIdx % 3 === 0 && window.retroAudio) {
          window.retroAudio.playSfx('dialogue');
        }
        charIdx++;
      } else {
        clearInterval(this.typewriterTimer);
      }
    }, 25);
  }

  advanceDialogue() {
    const npc = this.currentDialogue;
    if (!npc) return;

    this.dialogueIndex++;
    if (this.dialogueIndex < npc.dialogue.length) {
      this.renderDialogueLine();
    } else {
      // Finished speaking
      const modal = document.getElementById('dialogue-modal');
      modal?.classList.add('hidden');

      // Check quest advancement on elder talk
      if (npc.id === 'elder' && !window.GAME_DATA.quests.q1.isComplete) {
        window.GAME_DATA.quests.q1.isComplete = true;
        this.player.gold += window.GAME_DATA.quests.q1.reward.gold;
        this.player.addExp(window.GAME_DATA.quests.q1.reward.exp);
        this.showToast('Quest Selesai: Panggilan Takdir Eldoria! (+30 Gold, +25 EXP)');
      }

      // Check if NPC has a shop
      if (npc.shop) {
        this.openShop(npc);
      } else {
        this.state = 'WORLD';
      }
    }
  }

  // --- World Objects & Interactions ---
  openChest(chest) {
    if (chest.opened) {
      this.showToast('Peti ini sudah kosong.');
      return;
    }

    chest.opened = true;
    if (window.retroAudio) window.retroAudio.playSfx('chest');

    this.player.gold += chest.reward.gold;
    chest.reward.items.forEach(itemId => {
      const it = window.GAME_DATA.items[itemId];
      if (it) {
        this.player.inventory[itemId] = (this.player.inventory[itemId] || 0) + 1;
      }
    });

    if (chest.reward.questId && window.GAME_DATA.quests[chest.reward.questId]) {
      window.GAME_DATA.quests[chest.reward.questId].isComplete = true;
      this.showToast(`Peti Terbuka! Misi "${window.GAME_DATA.quests[chest.reward.questId].title}" Selesai! (+${chest.reward.gold} Gold)`);
    } else {
      this.showToast(`Peti Terbuka! Mendapatkan ${chest.reward.gold} Gold & Harta Karun!`);
    }
    this.updateHud();
  }

  activateShrine() {
    if (window.retroAudio) window.retroAudio.playSfx('heal');
    this.player.hp = this.player.maxHp;
    this.player.mp = this.player.maxMp;
    this.showToast('Kristal Suci memancarkan cahaya! Seluruh HP & MP telah pulih sepenuhnya!');
    this.updateHud();
  }

  checkPortals() {
    const map = this.engine.getCurrentMap();
    const ts = this.engine.tileSize;
    const curTileX = Math.floor((this.player.x + 16) / ts);
    const curTileY = Math.floor((this.player.y + 20) / ts);

    if (map.portals) {
      const portal = map.portals.find(p => p.x === curTileX && p.y === curTileY);
      if (portal) {
        // Check key requirement
        if (portal.requiresKey && (!this.player.inventory[portal.requiresKey] || this.player.inventory[portal.requiresKey] <= 0)) {
          if (window.retroAudio) window.retroAudio.playSfx('error');
          this.showToast('Gerbang terkunci rapat! Anda membutuhkan Kunci Gerbang Kuno dari Katakombe!');
          // Push player back
          this.player.y += 12;
          return;
        }

        // Change Map
        this.engine.currentMapId = portal.targetMap;
        this.player.x = portal.targetX * ts;
        this.player.y = portal.targetY * ts;
        this.showToast(`Memasuki: ${this.engine.getCurrentMap().name}`);

        if (window.retroAudio) {
          window.retroAudio.playBgm(this.engine.getCurrentMap().bgm);
        }
        this.updateHud();
      }
    }
  }

  // --- Battle Management ---
  triggerRandomEncounter() {
    const mapId = this.engine.currentMapId;
    let enemyPool = ['slime'];
    if (mapId === 'forest') enemyPool = ['slime', 'wolf'];
    if (mapId === 'dungeon') enemyPool = ['skeleton', 'sorcerer'];

    const chosen = enemyPool[Math.floor(Math.random() * enemyPool.length)];
    this.startBattle(chosen);
  }

  startBossBattle() {
    this.startBattle('boss_dragon');
  }

  startBattle(enemyKey) {
    this.state = 'BATTLE';
    const battleModal = document.getElementById('battle-screen');
    battleModal?.classList.remove('hidden');

    this.battle = new BattleSystem(this.player, enemyKey, (result) => {
      this.endBattle(result);
    });

    this.renderBattleUI();
  }

  renderBattleUI() {
    const logsEl = document.getElementById('battle-logs');
    if (logsEl && this.battle) {
      logsEl.innerHTML = this.battle.logs.map(l => `<div style="color: ${l.color}">${l.msg}</div>`).join('');
    }

    // Refresh battle action buttons based on phase
    const actionsBox = document.getElementById('battle-actions');
    if (actionsBox && this.battle) {
      if (this.battle.phase === 'victory') {
        actionsBox.innerHTML = `
          <button class="btn btn-primary btn-full" onclick="window.gameApp.confirmVictory()">🏆 Kemenangan! Lanjutkan Petualangan</button>
        `;
      } else if (this.battle.phase === 'defeat') {
        actionsBox.innerHTML = `
          <button class="btn btn-danger btn-full" onclick="window.gameApp.reviveAtShrine()">🕊️ Hidup Kembali di Kuil Suci</button>
        `;
      } else {
        actionsBox.innerHTML = `
          <button class="btn btn-retro" onclick="window.gameApp.battle.playerAttack()">⚔️ Serang (Fisik)</button>
          <button class="btn btn-retro" onclick="window.gameApp.openSkillMenu()">🔮 Sihir & Keterampilan</button>
          <button class="btn btn-retro" onclick="window.gameApp.openBattleItemMenu()">🎒 Barang (Item)</button>
          <button class="btn btn-retro" onclick="window.gameApp.battle.playerGuard()">🛡️ Bertahan</button>
          <button class="btn btn-outline" onclick="window.gameApp.battle.playerFlee()">🏃 Kabur</button>
        `;
      }
    }
  }

  openSkillMenu() {
    const actionsBox = document.getElementById('battle-actions');
    if (!actionsBox) return;

    actionsBox.innerHTML = `
      <div class="skill-menu-grid">
        ${this.player.skills.map(sid => {
          const sk = window.GAME_DATA.skills[sid];
          return `
            <button class="btn btn-skill" onclick="window.gameApp.battle.playerCastSkill('${sid}'); window.gameApp.renderBattleUI();">
              ${sk.icon} ${sk.name} <small>(${sk.cost} MP)</small>
            </button>
          `;
        }).join('')}
        <button class="btn btn-outline" onclick="window.gameApp.renderBattleUI()">Batal</button>
      </div>
    `;
  }

  openBattleItemMenu() {
    const actionsBox = document.getElementById('battle-actions');
    if (!actionsBox) return;

    const items = Object.entries(this.player.inventory).filter(([id, cnt]) => cnt > 0);
    if (items.length === 0) {
      this.showToast('Kantong item kosong!');
      return;
    }

    actionsBox.innerHTML = `
      <div class="item-menu-grid">
        ${items.map(([id, cnt]) => {
          const it = window.GAME_DATA.items[id];
          return `
            <button class="btn btn-skill" onclick="window.gameApp.battle.playerUseItem('${id}'); window.gameApp.renderBattleUI();">
              ${it.icon} ${it.name} x${cnt}
            </button>
          `;
        }).join('')}
        <button class="btn btn-outline" onclick="window.gameApp.renderBattleUI()">Batal</button>
      </div>
    `;
  }

  confirmVictory() {
    const map = this.engine.getCurrentMap();
    if (this.battle?.enemy?.isBoss && map.bossSpawn) {
      map.bossSpawn.defeated = true;
      this.showToast('SELAMAT! Anda telah mengalahkan Naga Ignis dan menamatkan petualangan!');
    }
    this.endBattle('victory');
  }

  reviveAtShrine() {
    this.engine.currentMapId = 'town';
    this.player.x = 14 * 32;
    this.player.y = 8 * 32;
    this.player.hp = this.player.maxHp;
    this.player.mp = this.player.maxMp;
    this.endBattle('revived');
    this.showToast('Jiwa Anda dibangkitkan kembali di Kuil Kristal Eldoria.');
  }

  endBattle(result) {
    document.getElementById('battle-screen')?.classList.add('hidden');
    this.battle = null;
    this.state = 'WORLD';
    if (window.retroAudio) {
      window.retroAudio.playBgm(this.engine.getCurrentMap().bgm);
    }
    this.updateHud();
  }

  // --- Shop System ---
  openShop(npc) {
    this.state = 'SHOP';
    this.currentShopNpc = npc;
    const modal = document.getElementById('shop-modal');
    modal?.classList.remove('hidden');

    document.getElementById('shop-title').innerText = `Toko: ${npc.name}`;
    this.renderShopItems();
  }

  renderShopItems() {
    const listEl = document.getElementById('shop-items-list');
    const goldEl = document.getElementById('shop-player-gold');
    if (!listEl || !this.currentShopNpc) return;

    if (goldEl) goldEl.innerText = this.player.gold;

    listEl.innerHTML = this.currentShopNpc.shop.map(itemId => {
      const it = window.GAME_DATA.items[itemId];
      const canAfford = this.player.gold >= it.price;
      return `
        <div class="shop-item-card">
          <div class="shop-item-icon">${it.icon}</div>
          <div class="shop-item-info">
            <div class="shop-item-name">${it.name}</div>
            <div class="shop-item-desc">${it.desc}</div>
          </div>
          <div class="shop-item-buy">
            <div class="shop-item-price">💰 ${it.price} Gold</div>
            <button class="btn btn-primary ${canAfford ? '' : 'disabled'}" onclick="window.gameApp.buyItem('${itemId}')">
              Beli
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  buyItem(itemId) {
    const item = window.GAME_DATA.items[itemId];
    if (!item) return;

    if (this.player.gold < item.price) {
      if (window.retroAudio) window.retroAudio.playSfx('error');
      this.showToast('Emas tidak cukup untuk membeli barang ini!');
      return;
    }

    this.player.gold -= item.price;
    if (['weapon', 'armor', 'relic'].includes(item.type)) {
      this.player.equip(item);
      this.showToast(`Berhasil membeli & mengenakan ${item.name}!`);
    } else {
      this.player.inventory[itemId] = (this.player.inventory[itemId] || 0) + 1;
      this.showToast(`Membeli 1x ${item.name}!`);
    }

    if (window.retroAudio) window.retroAudio.playSfx('coin');
    this.renderShopItems();
    this.updateHud();
  }

  closeShop() {
    document.getElementById('shop-modal')?.classList.add('hidden');
    this.currentShopNpc = null;
    this.state = 'WORLD';
  }

  // --- Inventory & Equipment System ---
  openInventory() {
    this.state = 'INVENTORY';
    const modal = document.getElementById('inventory-modal');
    modal?.classList.remove('hidden');
    this.renderInventoryUI();
  }

  renderInventoryUI() {
    // 1. Stats view
    document.getElementById('inv-stat-level').innerText = this.player.level;
    document.getElementById('inv-stat-hp').innerText = `${this.player.hp}/${this.player.maxHp}`;
    document.getElementById('inv-stat-mp').innerText = `${this.player.mp}/${this.player.maxMp}`;
    document.getElementById('inv-stat-atk').innerText = this.player.atk + (this.player.equipment.weapon?.atk || 0);
    document.getElementById('inv-stat-def').innerText = this.player.def + (this.player.equipment.armor?.def || 0);
    document.getElementById('inv-stat-gold').innerText = this.player.gold;

    // 2. Equipment slots
    document.getElementById('eq-weapon-name').innerText = this.player.equipment.weapon?.name || 'Tidak ada';
    document.getElementById('eq-armor-name').innerText = this.player.equipment.armor?.name || 'Tidak ada';
    document.getElementById('eq-relic-name').innerText = this.player.equipment.relic?.name || 'Tidak ada';

    // 3. Item List
    const itemsListEl = document.getElementById('inv-items-list');
    const items = Object.entries(this.player.inventory).filter(([id, cnt]) => cnt > 0);

    if (items.length === 0) {
      itemsListEl.innerHTML = '<div class="empty-text">Kantong inventaris kosong.</div>';
    } else {
      itemsListEl.innerHTML = items.map(([id, cnt]) => {
        const it = window.GAME_DATA.items[id];
        return `
          <div class="inv-item-card">
            <span class="inv-item-icon">${it.icon}</span>
            <div class="inv-item-details">
              <strong>${it.name} (x${cnt})</strong>
              <small>${it.desc}</small>
            </div>
            ${it.type === 'consumable' ? `
              <button class="btn btn-sm btn-primary" onclick="window.gameApp.useItemFromInventory('${id}')">Pakai</button>
            ` : ''}
          </div>
        `;
      }).join('');
    }
  }

  useItemFromInventory(itemId) {
    const it = window.GAME_DATA.items[itemId];
    if (!it || !it.effect) return;

    if (this.player.inventory[itemId] > 0) {
      this.player.inventory[itemId]--;
      const msg = it.effect(this.player);
      if (window.retroAudio) window.retroAudio.playSfx('heal');
      this.showToast(`Menggunakan ${it.name}: ${msg}`);
      this.renderInventoryUI();
      this.updateHud();
    }
  }

  closeInventory() {
    document.getElementById('inventory-modal')?.classList.add('hidden');
    this.state = 'WORLD';
  }

  toggleMenu() {
    const invModal = document.getElementById('inventory-modal');
    const questModal = document.getElementById('quest-modal');
    const rulesModal = document.getElementById('rules-modal');

    if (!invModal?.classList.contains('hidden')) {
      this.closeInventory();
    } else if (!questModal?.classList.contains('hidden')) {
      this.closeQuests();
    } else if (!rulesModal?.classList.contains('hidden')) {
      this.closeRules();
    } else if (this.state === 'WORLD') {
      this.openInventory();
    }
  }

  // --- Quest Log Modal ---
  openQuests() {
    const modal = document.getElementById('quest-modal');
    modal?.classList.remove('hidden');

    const listEl = document.getElementById('quest-list');
    if (!listEl) return;

    listEl.innerHTML = Object.values(window.GAME_DATA.quests).map(q => `
      <div class="quest-card ${q.isComplete ? 'completed' : 'active'}">
        <div class="quest-title-row">
          <strong>${q.title}</strong>
          <span class="badge ${q.isComplete ? 'badge-success' : 'badge-warning'}">
            ${q.isComplete ? '✓ SELESAI' : 'BERLANGSUNG'}
          </span>
        </div>
        <p class="quest-desc">${q.desc}</p>
        <div class="quest-reward">Hadiah: 💰 ${q.reward.gold} Gold | 🌟 ${q.reward.exp} EXP</div>
      </div>
    `).join('');
  }

  closeQuests() {
    document.getElementById('quest-modal')?.classList.add('hidden');
  }

  // --- Fishing Mini-Game ---
  startFishing() {
    this.state = 'FISHING';
    this.fishing.active = true;
    this.fishing.barPos = 10;
    this.fishing.targetPos = 40 + Math.random() * 30;
    this.fishing.speed = 3;

    const modal = document.getElementById('fishing-modal');
    modal?.classList.remove('hidden');

    if (window.retroAudio) window.retroAudio.playSfx('click');
  }

  hookFish() {
    if (!this.fishing.active) return;
    const diff = Math.abs(this.fishing.barPos - this.fishing.targetPos);
    this.fishing.active = false;

    if (diff < 15) {
      // Success catch!
      const rewards = [
        { name: 'Ikan Mas Eldoria', gold: 35, exp: 20 },
        { name: 'Ikan Trout Kristal', gold: 50, exp: 35 },
        { name: 'Koin Emas Kuno di Dasar Danau', gold: 100, exp: 50 }
      ];
      const catchItem = rewards[Math.floor(Math.random() * rewards.length)];
      this.player.gold += catchItem.gold;
      this.player.addExp(catchItem.exp);
      if (window.retroAudio) window.retroAudio.playSfx('coin');
      this.showToast(`TARIKAN SEMPURNA! Berhasil menangkap: ${catchItem.name}! (+${catchItem.gold} Gold)`);
    } else {
      if (window.retroAudio) window.retroAudio.playSfx('error');
      this.showToast('Umpan terlepas! Ikan melompat kembali ke dalam danau.');
    }

    setTimeout(() => {
      document.getElementById('fishing-modal')?.classList.add('hidden');
      this.state = 'WORLD';
      this.updateHud();
    }, 900);
  }

  updateFishing() {
    if (this.state !== 'FISHING' || !this.fishing.active) return;
    this.fishing.barPos += this.fishing.speed * this.fishing.direction;
    if (this.fishing.barPos >= 90) {
      this.fishing.barPos = 90;
      this.fishing.direction = -1;
    } else if (this.fishing.barPos <= 5) {
      this.fishing.barPos = 5;
      this.fishing.direction = 1;
    }

    const barEl = document.getElementById('fishing-bar-slider');
    const targetEl = document.getElementById('fishing-target-zone');
    if (barEl) barEl.style.left = `${this.fishing.barPos}%`;
    if (targetEl) targetEl.style.left = `${this.fishing.targetPos}%`;
  }

  // --- Save / Load System (3 Slots + JSON Export/Import) ---
  saveGame(slot = 1) {
    const saveData = {
      player: this.player.serialize(),
      mapId: this.engine.currentMapId,
      quests: window.GAME_DATA.quests,
      timestamp: Date.now()
    };
    localStorage.setItem(`valoria_save_slot_${slot}`, JSON.stringify(saveData));
    if (window.retroAudio) window.retroAudio.playSfx('coin');
    this.showToast(`Permainan berhasil disimpan di Slot ${slot}!`);
  }

  loadGame(slot = 1) {
    const raw = localStorage.getItem(`valoria_save_slot_${slot}`);
    if (!raw) {
      this.showToast(`Slot ${slot} masih kosong.`);
      return;
    }
    try {
      const data = JSON.parse(raw);
      this.player.deserialize(data.player);
      this.engine.currentMapId = data.mapId || 'town';
      window.GAME_DATA.quests = data.quests || window.GAME_DATA.quests;
      this.state = 'WORLD';
      document.getElementById('title-screen')?.classList.add('hidden');
      if (window.retroAudio) {
        window.retroAudio.playSfx('heal');
        window.retroAudio.playBgm(this.engine.getCurrentMap().bgm);
      }
      this.showToast(`Data Slot ${slot} berhasil dimuat!`);
      this.updateHud();
    } catch (e) {
      this.showToast('Gagal memuat save file.');
    }
  }

  exportSaveFile() {
    const saveData = {
      player: this.player.serialize(),
      mapId: this.engine.currentMapId,
      quests: window.GAME_DATA.quests,
      timestamp: Date.now()
    };
    const blob = new Blob([JSON.stringify(saveData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `valoria_rpg_save_${this.player.name}.json`;
    a.click();
    URL.revokeObjectURL(url);
    this.showToast('File save JSON berhasil diekspor!');
  }

  // --- Auth & Demo Account Integration ---
  checkAutoLogin() {
    const user = localStorage.getItem('valoria_logged_user');
    if (user) {
      this.player.name = user;
    }
  }

  fillDemoLogin() {
    const u = document.getElementById('auth-username');
    const p = document.getElementById('auth-password');
    if (u) u.value = 'demo_hero';
    if (p) p.value = 'quest2026';
    this.showToast('Kredensial Demo berhasil diisi otomatis!');
  }

  submitAuth() {
    const u = document.getElementById('auth-username')?.value.trim() || 'demo_hero';
    localStorage.setItem('valoria_logged_user', u);
    this.player.name = u;
    document.getElementById('auth-modal')?.classList.add('hidden');
    this.startNewGame();
    this.showToast(`Selamat datang pahlawan, ${u}!`);
  }

  startNewGame() {
    this.state = 'WORLD';
    document.getElementById('title-screen')?.classList.add('hidden');
    document.getElementById('auth-modal')?.classList.add('hidden');
    if (window.retroAudio) {
      window.retroAudio.playBgm('town');
      window.retroAudio.playSfx('click');
    }
    this.showToast('Petualangan di Valoria dimulai! Tekan Spasi/Enter untuk berinteraksi.');
    this.updateHud();
  }

  // --- UI Toast & HUD ---
  showToast(msg) {
    const toast = document.getElementById('game-toast');
    if (!toast) return;
    toast.innerText = msg;
    toast.classList.remove('hidden');
    if (this.activeToast) clearTimeout(this.activeToast);
    this.activeToast = setTimeout(() => {
      toast.classList.add('hidden');
    }, 3200);
  }

  updateHud() {
    document.getElementById('hud-player-name').innerText = this.player.name;
    document.getElementById('hud-player-level').innerText = `Lv.${this.player.level}`;
    document.getElementById('hud-player-gold').innerText = `💰 ${this.player.gold}`;

    // HP & MP Bars
    const hpPct = Math.max(0, Math.min(100, (this.player.hp / this.player.maxHp) * 100));
    const mpPct = Math.max(0, Math.min(100, (this.player.mp / this.player.maxMp) * 100));
    document.getElementById('hud-hp-bar').style.width = `${hpPct}%`;
    document.getElementById('hud-hp-text').innerText = `${this.player.hp}/${this.player.maxHp}`;
    document.getElementById('hud-mp-bar').style.width = `${mpPct}%`;
    document.getElementById('hud-mp-text').innerText = `${this.player.mp}/${this.player.maxMp}`;

    // Active Quest Tracker
    const activeQuest = Object.values(window.GAME_DATA.quests).find(q => !q.isComplete);
    document.getElementById('hud-quest-tracker').innerText = activeQuest ? `📜 Misi: ${activeQuest.target}` : '✨ Semua Misi Kerajaan Telah Tuntas!';
  }

  openRules() {
    document.getElementById('rules-modal')?.classList.remove('hidden');
  }

  closeRules() {
    document.getElementById('rules-modal')?.classList.add('hidden');
  }

  // --- Main Engine 60 FPS Loop ---
  startGameLoop() {
    const loop = () => {
      if (this.state === 'WORLD') {
        this.updateMovement();
        this.engine.render(this.player, window.GAME_DATA.npcs);
      } else if (this.state === 'BATTLE' && this.battle) {
        this.battle.render(this.engine.ctx, this.engine.width, this.engine.height);
      } else if (this.state === 'FISHING') {
        this.updateFishing();
        this.engine.render(this.player, window.GAME_DATA.npcs);
      }

      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }
}

// Bootstrap once DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
  window.gameApp = new GameApp();
});
