// Turn-Based Combat Engine for Valoria RPG
// RPG Maker Style Front-View Arena with Animations, Spells, Sound, and Loot

class BattleSystem {
  constructor(player, enemyKey, onFinish) {
    this.player = player;
    this.enemyData = window.GAME_DATA.enemies[enemyKey];
    this.onFinish = onFinish;

    // Clone enemy stats for battle instance
    this.enemy = {
      ...this.enemyData,
      hp: this.enemyData.maxHp,
      stunned: false
    };

    this.turn = 1;
    this.phase = 'player_select'; // 'player_select', 'animating', 'enemy_turn', 'victory', 'defeat'
    this.logs = [];
    this.floatingTexts = [];
    this.playerShieldTurns = 0;
    this.enemyShake = 0;
    this.playerShake = 0;
    this.flashColor = null;
    this.flashAlpha = 0;

    // Start battle BGM
    if (window.retroAudio) {
      window.retroAudio.playBgm('battle');
    }

    this.addLog(`Pertarungan dimulai! ${this.enemy.name} muncul!`, '#fbbf24');
  }

  addLog(msg, color = '#f8fafc') {
    this.logs.unshift({ msg, color, time: Date.now() });
    if (this.logs.length > 6) this.logs.pop();
  }

  addFloatingText(text, x, y, color = '#ef4444') {
    this.floatingTexts.push({
      text,
      x,
      y,
      color,
      alpha: 1.0,
      vy: -1.2,
      life: 45
    });
  }

  update() {
    // Update floating damage numbers
    for (let i = this.floatingTexts.length - 1; i >= 0; i--) {
      const ft = this.floatingTexts[i];
      ft.y += ft.vy;
      ft.life--;
      ft.alpha = ft.life / 45;
      if (ft.life <= 0) {
        this.floatingTexts.splice(i, 1);
      }
    }

    // Decay shakes
    if (this.enemyShake > 0) this.enemyShake *= 0.85;
    if (this.playerShake > 0) this.playerShake *= 0.85;
    if (this.flashAlpha > 0) this.flashAlpha *= 0.82;
  }

  // --- Player Combat Actions ---
  playerAttack() {
    if (this.phase !== 'player_select') return;
    this.phase = 'animating';

    // Calculate Damage: (Player ATK + Weapon ATK) - (Enemy DEF * 0.5)
    const baseAtk = this.player.atk + (this.player.equipment?.weapon?.atk || 0);
    const isCrit = Math.random() < ((this.player.crit || 5) + (this.player.equipment?.weapon?.crit || 0)) / 100;
    let dmg = Math.max(1, Math.round(baseAtk * (isCrit ? 1.8 : 1.0) - this.enemy.def * 0.4 + (Math.random() * 4 - 2)));

    if (window.retroAudio) {
      window.retroAudio.playSfx('attack');
      setTimeout(() => window.retroAudio.playSfx('hit'), 80);
    }

    this.enemyShake = 15;
    this.enemy.hp = Math.max(0, this.enemy.hp - dmg);
    this.addFloatingText(`${isCrit ? 'CRITICAL! ' : ''}-${dmg}`, 320, 140, isCrit ? '#f59e0b' : '#ef4444');
    this.addLog(`${this.player.name} menebas ${this.enemy.name} dengan ${dmg} damage!${isCrit ? ' (KRITIKAL!)' : ''}`);

    this.checkBattleStatus();
  }

  playerCastSkill(skillId) {
    if (this.phase !== 'player_select') return;
    const skill = window.GAME_DATA.skills[skillId];
    if (!skill) return;

    if (this.player.mp < skill.cost) {
      if (window.retroAudio) window.retroAudio.playSfx('error');
      this.addLog('MP tidak mencukupi untuk menggunakan sihir ini!', '#f87171');
      return;
    }

    this.phase = 'animating';
    this.player.mp -= skill.cost;

    if (skill.type === 'magic') {
      const magStat = this.player.mag + (this.player.equipment?.weapon?.mag || 0) + (this.player.equipment?.relic?.mag || 0);
      let dmg = Math.round(skill.baseDmg + magStat * 1.4 - this.enemy.def * 0.2 + (Math.random() * 6 - 3));

      if (skillId === 'thunderstrike') {
        if (window.retroAudio) window.retroAudio.playSfx('thunder');
        this.flashColor = '#fef08a';
        this.flashAlpha = 0.5;
        // 50% stun chance on non-bosses
        if (!this.enemy.isBoss && Math.random() < 0.55) {
          this.enemy.stunned = true;
          this.addLog(`${this.enemy.name} terkena efek LUMPUH!`, '#38bdf8');
        }
      } else {
        if (window.retroAudio) window.retroAudio.playSfx('magic');
        this.flashColor = '#f87171';
        this.flashAlpha = 0.4;
      }

      this.enemyShake = 18;
      this.enemy.hp = Math.max(0, this.enemy.hp - dmg);
      this.addFloatingText(`-${dmg} 🔥`, 320, 130, '#f97316');
      this.addLog(`${this.player.name} melancarkan ${skill.name}! Memberikan ${dmg} magic damage!`);
      this.checkBattleStatus();

    } else if (skill.type === 'heal') {
      if (window.retroAudio) window.retroAudio.playSfx('heal');
      const heal = Math.round(skill.baseHeal + (this.player.mag || 0) * 0.8);
      const oldHp = this.player.hp;
      this.player.hp = Math.min(this.player.maxHp, this.player.hp + heal);
      const restored = this.player.hp - oldHp;
      this.addFloatingText(`+${restored} HP`, 160, 280, '#34d399');
      this.addLog(`${this.player.name} merapal ${skill.name}! Memulihkan ${restored} HP!`, '#10b981');
      this.checkBattleStatus();

    } else if (skill.type === 'buff') {
      if (window.retroAudio) window.retroAudio.playSfx('heal');
      this.playerShieldTurns = 2;
      this.addLog(`${this.player.name} mengaktifkan ${skill.name}! Pertahanan meningkat 60%!`, '#38bdf8');
      this.checkBattleStatus();
    }
  }

  playerUseItem(itemId) {
    if (this.phase !== 'player_select') return;
    const count = this.player.inventory[itemId] || 0;
    if (count <= 0) {
      if (window.retroAudio) window.retroAudio.playSfx('error');
      this.addLog('Item tidak tersedia di kantong!', '#f87171');
      return;
    }

    const item = window.GAME_DATA.items[itemId];
    if (itemId === 'smokebomb') {
      if (this.enemy.isBoss) {
        this.addLog('Tidak dapat kabur dari Bos Naga Ignis!', '#ef4444');
        return;
      }
      this.player.inventory[itemId]--;
      if (window.retroAudio) window.retroAudio.playSfx('attack');
      this.addLog('Anda melempar Bom Asap dan berhasil melarikan diri!', '#38bdf8');
      setTimeout(() => this.finishBattle('fled'), 900);
      return;
    }

    this.player.inventory[itemId]--;
    if (item.effect) {
      const msg = item.effect(this.player);
      if (window.retroAudio) window.retroAudio.playSfx('heal');
      this.addLog(`Menggunakan ${item.name}: ${msg}`, '#10b981');
    }
    this.phase = 'animating';
    this.checkBattleStatus();
  }

  playerGuard() {
    if (this.phase !== 'player_select') return;
    this.phase = 'animating';
    this.playerShieldTurns = 1;
    // Recover a little MP when guarding
    const mpGain = Math.min(this.player.maxMp - this.player.mp, 6);
    this.player.mp += mpGain;
    if (window.retroAudio) window.retroAudio.playSfx('click');
    this.addLog(`${this.player.name} bersiap bertahan! Damage berkurang drastis & MP +${mpGain}.`, '#38bdf8');
    this.checkBattleStatus();
  }

  playerFlee() {
    if (this.phase !== 'player_select') return;
    if (this.enemy.isBoss) {
      if (window.retroAudio) window.retroAudio.playSfx('error');
      this.addLog('Tidak bisa melarikan diri dari Bos Naga!', '#ef4444');
      return;
    }

    const fleeChance = 0.55 + ((this.player.spd || 5) - this.enemy.spd) * 0.04;
    if (Math.random() < fleeChance) {
      this.phase = 'animating';
      if (window.retroAudio) window.retroAudio.playSfx('click');
      this.addLog('Berhasil melarikan diri dari pertempuran!', '#38bdf8');
      setTimeout(() => this.finishBattle('fled'), 800);
    } else {
      this.phase = 'animating';
      if (window.retroAudio) window.retroAudio.playSfx('error');
      this.addLog('Gagal melarikan diri! Musuh mengepung jalan keluar!', '#f87171');
      setTimeout(() => this.enemyTurn(), 1000);
    }
  }

  // --- Turn Flow & Enemy AI ---
  checkBattleStatus() {
    if (this.enemy.hp <= 0) {
      setTimeout(() => this.victory(), 700);
    } else {
      setTimeout(() => this.enemyTurn(), 900);
    }
  }

  enemyTurn() {
    this.phase = 'enemy_turn';

    // Check if enemy was stunned
    if (this.enemy.stunned) {
      this.enemy.stunned = false;
      this.addLog(`${this.enemy.name} masih terkejut dan kehilangan giliran!`, '#38bdf8');
      setTimeout(() => {
        this.phase = 'player_select';
        this.turn++;
        if (this.playerShieldTurns > 0) this.playerShieldTurns--;
      }, 1000);
      return;
    }

    // Enemy Attack calculation
    const playerDef = this.player.def + (this.player.equipment?.armor?.def || 0);
    let enemyAtk = this.enemy.atk;
    let isSpecial = false;

    if (this.enemy.isBoss && Math.random() < 0.4) {
      // Boss Special attack: Hellfire Breath
      isSpecial = true;
      enemyAtk = Math.round(enemyAtk * 1.4);
      this.flashColor = '#ef4444';
      this.flashAlpha = 0.6;
      if (window.retroAudio) window.retroAudio.playSfx('thunder');
      this.addLog(`IGNIS MENYEMBURKAN API NERAKA! 🔥`, '#ef4444');
    } else {
      if (window.retroAudio) window.retroAudio.playSfx('attack');
    }

    let dmg = Math.max(1, Math.round(enemyAtk - playerDef * 0.5 + (Math.random() * 4 - 2)));

    // Apply player shield / guard mitigation
    if (this.playerShieldTurns > 0) {
      dmg = Math.max(1, Math.round(dmg * 0.4));
      this.addLog(`Perisai menyerap sebagian besar benturan serangan!`, '#38bdf8');
    }

    this.playerShake = 16;
    this.player.hp = Math.max(0, this.player.hp - dmg);
    this.addFloatingText(`-${dmg}`, 160, 270, '#ef4444');
    this.addLog(`${this.enemy.name} menyerang ${this.player.name} dengan ${dmg} damage!`);

    if (this.player.hp <= 0) {
      setTimeout(() => this.defeat(), 800);
    } else {
      setTimeout(() => {
        this.phase = 'player_select';
        this.turn++;
        if (this.playerShieldTurns > 0) this.playerShieldTurns--;
      }, 800);
    }
  }

  // --- Victory & Defeat Sequences ---
  victory() {
    this.phase = 'victory';
    if (window.retroAudio) {
      window.retroAudio.stopBgm();
      window.retroAudio.playSfx('levelup');
    }

    this.addLog(`MENANG! ${this.enemy.name} berhasil ditundukkan!`, '#34d399');

    // Experience & Gold gains
    this.player.gold += this.enemy.gold;
    const leveledUp = this.player.addExp(this.enemy.exp);

    // Item drops
    let dropMsg = '';
    if (this.enemy.dropItem && Math.random() < (this.enemy.dropRate || 0.4)) {
      const drop = window.GAME_DATA.items[this.enemy.dropItem];
      if (drop) {
        this.player.inventory[drop.id] = (this.player.inventory[drop.id] || 0) + 1;
        dropMsg = `Mendapatkan rampasan: ${drop.name}!`;
        this.addLog(dropMsg, '#fbbf24');
      }
    }

    // Special boss quest completion
    if (this.enemy.isBoss) {
      if (window.GAME_DATA.quests.q4) {
        window.GAME_DATA.quests.q4.isComplete = true;
      }
    }

    this.victoryData = {
      enemyName: this.enemy.name,
      exp: this.enemy.exp,
      gold: this.enemy.gold,
      dropMsg: dropMsg,
      leveledUp: leveledUp
    };
  }

  defeat() {
    this.phase = 'defeat';
    if (window.retroAudio) {
      window.retroAudio.stopBgm();
      window.retroAudio.playSfx('error');
    }
    this.addLog('Anda telah gugur dalam pertempuran...', '#ef4444');
  }

  finishBattle(result) {
    if (this.onFinish) {
      this.onFinish(result);
    }
  }

  // --- Render Battle Screen Canvas ---
  render(ctx, width, height) {
    this.update();

    // 1. Battle Backdrop
    ctx.fillStyle = '#090d16';
    ctx.fillRect(0, 0, width, height);

    // Decorative gradient background
    const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
    if (this.enemy.isBoss) {
      bgGrad.addColorStop(0, '#450a0a');
      bgGrad.addColorStop(0.6, '#1c1917');
      bgGrad.addColorStop(1, '#0c0a09');
    } else {
      bgGrad.addColorStop(0, '#064e3b');
      bgGrad.addColorStop(0.6, '#0f172a');
      bgGrad.addColorStop(1, '#020617');
    }
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, width, height * 0.7);

    // Ground platform ellipse
    ctx.fillStyle = this.enemy.isBoss ? '#7f1d1d' : '#1e3a2f';
    ctx.beginPath();
    ctx.ellipse(320, 200, 160, 45, 0, 0, Math.PI * 2);
    ctx.fill();

    // 2. Draw Enemy Sprite with Shake
    const enemyX = 320 + (this.enemyShake ? (Math.random() - 0.5) * this.enemyShake : 0);
    const enemyY = 160;

    if (this.enemy.isBoss) {
      // Dragon Boss Rendering
      ctx.fillStyle = '#dc2626';
      ctx.beginPath();
      ctx.arc(enemyX, enemyY - 10, 50, 0, Math.PI * 2);
      ctx.fill();
      // Horns
      ctx.fillStyle = '#fbbf24';
      ctx.fillRect(enemyX - 35, enemyY - 60, 12, 30);
      ctx.fillRect(enemyX + 23, enemyY - 60, 12, 30);
      // Glowing Eyes
      ctx.fillStyle = '#fef08a';
      ctx.fillRect(enemyX - 22, enemyY - 20, 12, 10);
      ctx.fillRect(enemyX + 10, enemyY - 20, 12, 10);
      // Fangs
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(enemyX - 16, enemyY + 15, 8, 12);
      ctx.fillRect(enemyX + 8, enemyY + 15, 8, 12);
    } else {
      // Normal Monster Sprite
      ctx.fillStyle = this.enemy.color || '#10b981';
      ctx.beginPath();
      ctx.arc(enemyX, enemyY, 36, 0, Math.PI * 2);
      ctx.fill();
      // Eyes
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(enemyX - 14, enemyY - 8, 8, 8);
      ctx.fillRect(enemyX + 6, enemyY - 8, 8, 8);
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(enemyX - 12, enemyY - 6, 3, 3);
      ctx.fillRect(enemyX + 8, enemyY - 6, 3, 3);
    }

    // 3. Enemy HP Bar & Info
    ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
    ctx.fillRect(200, 35, 240, 40);
    ctx.fillStyle = '#f8fafc';
    ctx.font = 'bold 11px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(`${this.enemy.name} (Lv ${this.enemy.level})`, 212, 52);

    // HP Bar fill
    ctx.fillStyle = '#334155';
    ctx.fillRect(212, 60, 216, 8);
    const hpPct = Math.max(0, this.enemy.hp / this.enemy.maxHp);
    ctx.fillStyle = hpPct > 0.4 ? '#10b981' : (hpPct > 0.2 ? '#f59e0b' : '#ef4444');
    ctx.fillRect(212, 60, 216 * hpPct, 8);

    // 4. Player Status Box (Bottom Area)
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(10, height - 120, width - 20, 110);
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 2;
    ctx.strokeRect(10, height - 120, width - 20, 110);

    // Player Stats
    ctx.fillStyle = '#f8fafc';
    ctx.font = 'bold 12px sans-serif';
    ctx.fillText(`${this.player.name} (Lv ${this.player.level})`, 30, height - 95);

    // Player HP
    ctx.font = '10px sans-serif';
    ctx.fillStyle = '#94a3b8';
    ctx.fillText(`HP: ${this.player.hp}/${this.player.maxHp}`, 30, height - 76);
    ctx.fillStyle = '#334155';
    ctx.fillRect(30, height - 70, 140, 8);
    ctx.fillStyle = '#10b981';
    ctx.fillRect(30, height - 70, 140 * Math.max(0, this.player.hp / this.player.maxHp), 8);

    // Player MP
    ctx.fillStyle = '#94a3b8';
    ctx.fillText(`MP: ${this.player.mp}/${this.player.maxMp}`, 30, height - 48);
    ctx.fillStyle = '#334155';
    ctx.fillRect(30, height - 42, 140, 8);
    ctx.fillStyle = '#38bdf8';
    ctx.fillRect(30, height - 42, 140 * Math.max(0, this.player.mp / this.player.maxMp), 8);

    if (this.playerShieldTurns > 0) {
      ctx.fillStyle = '#38bdf8';
      ctx.font = 'bold 10px sans-serif';
      ctx.fillText(`🛡️ Perisai Aktif (${this.playerShieldTurns} giliran)`, 30, height - 18);
    }

    // 5. Draw Floating Damage Texts
    this.floatingTexts.forEach(ft => {
      ctx.fillStyle = ft.color;
      ctx.globalAlpha = ft.alpha;
      ctx.font = 'bold 16px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(ft.text, ft.x, ft.y);
    });
    ctx.globalAlpha = 1.0;

    // 6. Flash screen effect
    if (this.flashAlpha > 0 && this.flashColor) {
      ctx.fillStyle = this.flashColor;
      ctx.globalAlpha = this.flashAlpha;
      ctx.fillRect(0, 0, width, height);
      ctx.globalAlpha = 1.0;
    }
  }
}

window.BattleSystem = BattleSystem;
