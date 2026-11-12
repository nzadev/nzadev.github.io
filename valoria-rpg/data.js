// Game Data & Config for Valoria RPG
// Items, Equipment, Enemies, Quests, NPCs, and Level Tables

window.GAME_DATA = {
  // Experience curve per level
  expTable: [0, 50, 120, 220, 360, 550, 800, 1150, 1600, 2200, 3000],

  // Stat growth per level
  levelUpStats: {
    hp: 25,
    mp: 12,
    atk: 5,
    def: 4,
    mag: 6,
    spd: 2
  },

  // Items Database
  items: {
    potion: {
      id: 'potion',
      name: 'Ramuan Penyembuh (Potion)',
      type: 'consumable',
      icon: '🧪',
      desc: 'Memulihkan 60 poin HP seketika.',
      price: 25,
      sell: 12,
      effect: (p) => {
        const heal = 60;
        const old = p.hp;
        p.hp = Math.min(p.maxHp, p.hp + heal);
        return `Memulihkan ${p.hp - old} HP!`;
      }
    },
    ether: {
      id: 'ether',
      name: 'Ether Mana',
      type: 'consumable',
      icon: '🔹',
      desc: 'Memulihkan 40 poin MP energi sihir.',
      price: 35,
      sell: 17,
      effect: (p) => {
        const heal = 40;
        const old = p.mp;
        p.mp = Math.min(p.maxMp, p.mp + heal);
        return `Memulihkan ${p.mp - old} MP!`;
      }
    },
    elixir: {
      id: 'elixir',
      name: 'Elixir Kehidupan',
      type: 'consumable',
      icon: '✨',
      desc: 'Memulihkan HP & MP secara penuh (100%).',
      price: 120,
      sell: 60,
      effect: (p) => {
        p.hp = p.maxHp;
        p.mp = p.maxMp;
        return `HP dan MP pulih maksimal!`;
      }
    },
    smokebomb: {
      id: 'smokebomb',
      name: 'Bom Asap (Smoke Bomb)',
      type: 'battle_item',
      icon: '💨',
      desc: 'Memungkinkan kabur seketika dari pertempuran biasa.',
      price: 40,
      sell: 20
    },

    // Weapons
    rusty_sword: {
      id: 'rusty_sword',
      name: 'Pedang Karat',
      type: 'weapon',
      icon: '🗡️',
      atk: 4,
      desc: 'Pedang tua peninggalan kakek. Stat: ATK +4.',
      price: 0,
      sell: 5
    },
    iron_sword: {
      id: 'iron_sword',
      name: 'Pedang Besi Tempa',
      type: 'weapon',
      icon: '⚔️',
      atk: 12,
      desc: 'Pedang tajam tempaan pandai besi Eldoria. Stat: ATK +12.',
      price: 80,
      sell: 40
    },
    luminous_blade: {
      id: 'luminous_blade',
      name: 'Pedang Cahaya (Luminous Blade)',
      type: 'weapon',
      icon: '✨⚔️',
      atk: 24,
      mag: 8,
      desc: 'Pusaka kuil yang memancarkan energi suci. Stat: ATK +24, MAG +8.',
      price: 250,
      sell: 125
    },
    dragon_slayer: {
      id: 'dragon_slayer',
      name: 'Pedang Pembantai Naga',
      type: 'weapon',
      icon: '🔥⚔️',
      atk: 42,
      crit: 15,
      desc: 'Pedang legendaris berbalut api abadi. Stat: ATK +42, CRIT +15%.',
      price: 500,
      sell: 250
    },

    // Armors
    cloth_tunic: {
      id: 'cloth_tunic',
      name: 'Tunik Kain Petualang',
      type: 'armor',
      icon: '🥋',
      def: 2,
      desc: 'Pakaian sederhana yang nyaman dipakai. Stat: DEF +2.',
      price: 0,
      sell: 4
    },
    chainmail: {
      id: 'chainmail',
      name: 'Baju Zirah Rantai Besi',
      type: 'armor',
      icon: '🛡️',
      def: 10,
      hp: 20,
      desc: 'Zirah kokoh perlindungan prajurit desa. Stat: DEF +10, HP +20.',
      price: 90,
      sell: 45
    },
    aegis_plate: {
      id: 'aegis_plate',
      name: 'Zirah Pelindung Aegis',
      type: 'armor',
      icon: '💠',
      def: 22,
      hp: 50,
      desc: 'Zirah berukir mantra kuno pemantul sihir. Stat: DEF +22, HP +50.',
      price: 280,
      sell: 140
    },

    // Relics / Accessories
    silver_ring: {
      id: 'silver_ring',
      name: 'Cincin Perak Vitalitas',
      type: 'relic',
      icon: '💍',
      hp: 30,
      spd: 3,
      desc: 'Meningkatkan sirkulasi darah. Stat: Max HP +30, SPD +3.',
      price: 75,
      sell: 35
    },
    mystic_amulet: {
      id: 'mystic_amulet',
      name: 'Amulet Arkana',
      type: 'relic',
      icon: '🔮',
      mag: 15,
      mp: 25,
      desc: 'Meningkatkan fokus dan daya magis. Stat: MAG +15, MP +25.',
      price: 150,
      sell: 75
    },

    // Key Quest Items
    dragon_key: {
      id: 'dragon_key',
      name: 'Kunci Gerbang Kuno',
      type: 'key',
      icon: '🗝️',
      desc: 'Kunci perunggu berukir naga untuk membuka pintu Kawah Api.',
      price: 0,
      sell: 0
    }
  },

  // Skills / Spells
  skills: {
    fireball: {
      id: 'fireball',
      name: 'Bola Api (Fireball)',
      cost: 8,
      desc: 'Melontarkan bola api pekat membakar musuh.',
      type: 'magic',
      baseDmg: 35,
      icon: '🔥'
    },
    thunderstrike: {
      id: 'thunderstrike',
      name: 'Petir Badai (Thunderstrike)',
      cost: 14,
      desc: 'Menyambar petir dari langit, berpeluang melumpuhkan musuh.',
      type: 'magic',
      baseDmg: 55,
      icon: '⚡'
    },
    holy_heal: {
      id: 'holy_heal',
      name: 'Penyembuhan Suci (Holy Heal)',
      cost: 10,
      desc: 'Memanggil berkah kristal untuk memulihkan 75 HP.',
      type: 'heal',
      baseHeal: 75,
      icon: '✨'
    },
    aegis_shield: {
      id: 'aegis_shield',
      name: 'Perisai Cahaya (Aegis Shield)',
      cost: 6,
      desc: 'Membentuk dinding energi penahan 60% damage selama 2 giliran.',
      type: 'buff',
      icon: '🛡️'
    }
  },

  // Enemies Database
  enemies: {
    slime: {
      name: 'Slime Hutan',
      level: 1,
      maxHp: 42,
      atk: 10,
      def: 3,
      spd: 4,
      exp: 18,
      gold: 14,
      color: '#10b981',
      dropItem: 'potion',
      dropRate: 0.45,
      desc: 'Makhluk gelatin hijau kenyal penunggu rumput liar.'
    },
    wolf: {
      name: 'Serigala Rimba',
      level: 2,
      maxHp: 65,
      atk: 16,
      def: 6,
      spd: 8,
      exp: 30,
      gold: 22,
      color: '#64748b',
      dropItem: 'ether',
      dropRate: 0.4,
      desc: 'Pemangsa gesit dengan taring tajam dan lolongan mencekam.'
    },
    skeleton: {
      name: 'Prajurit Tengkorak',
      level: 3,
      maxHp: 110,
      atk: 22,
      def: 12,
      spd: 5,
      exp: 55,
      gold: 40,
      color: '#e2e8f0',
      dropItem: 'smokebomb',
      dropRate: 0.35,
      desc: 'Sisa pejuang kuno yang bangkit di dalam katakombe gelap.'
    },
    sorcerer: {
      name: 'Penyihir Bayangan',
      level: 4,
      maxHp: 145,
      atk: 28,
      def: 10,
      spd: 9,
      exp: 85,
      gold: 65,
      color: '#8b5cf6',
      dropItem: 'ether',
      dropRate: 0.5,
      desc: 'Pemuja kegelapan yang menguasai sihir kutukan hitam.'
    },
    boss_dragon: {
      name: 'IGNIS: Sang Naga Api Merah',
      level: 6,
      maxHp: 520,
      atk: 40,
      def: 18,
      spd: 10,
      exp: 350,
      gold: 300,
      color: '#ef4444',
      isBoss: true,
      dropItem: 'dragon_slayer',
      dropRate: 1.0,
      desc: 'Penguasa api purba pemusnah kerajaan Valoria!'
    }
  },

  // Main & Side Quests
  quests: {
    q1: {
      id: 'q1',
      title: 'Panggilan Takdir Eldoria',
      desc: 'Bicaralah dengan Tetua Rowan di dekat Monumen Desa untuk mengetahui ancaman naga.',
      target: 'Bicara dengan Tetua Rowan',
      reward: { exp: 25, gold: 30 },
      isComplete: false
    },
    q2: {
      id: 'q2',
      title: 'Pusaka Tersembunyi di Hutan Kabut',
      desc: 'Jelajahi Hutan Kabut di timur desa, cari peti rahasia berisi Pedang Cahaya.',
      target: 'Temukan Pedang Cahaya di Hutan',
      reward: { exp: 60, gold: 50 },
      isComplete: false
    },
    q3: {
      id: 'q3',
      title: 'Misteri Katakombe Gelap',
      desc: 'Masuki Katakombe di utara hutan, kalahkan monster dan temukan Kunci Gerbang Kuno.',
      target: 'Dapatkan Kunci Gerbang Kuno',
      reward: { exp: 120, gold: 100 },
      isComplete: false
    },
    q4: {
      id: 'q4',
      title: 'Pertarungan Puncak: Taklukkan Ignis',
      desc: 'Buka Gerbang Kawah Api dengan kunci kuno, hadapi Ignis dan selamatkan Valoria!',
      target: 'Kalahkan Bos Naga Ignis',
      reward: { exp: 400, gold: 500 },
      isComplete: false
    }
  },

  // NPCs Configuration
  npcs: {
    elder: {
      id: 'elder',
      name: 'Tetua Rowan',
      map: 'town',
      tileX: 14,
      tileY: 8,
      color: '#f59e0b',
      title: 'Tetua Desa Eldoria',
      avatar: '🧙‍♂️',
      dialogue: [
        'Salam petualang muda! Aku Tetua Rowan penjaga desa Eldoria.',
        'Kabar buruk datang dari puncak utara... Ignis Sang Naga Merah telah membuka matanya dari tidur seribu tahun!',
        'Jika segelnya hancur, desa kita akan hangus terbakar.',
        'Pergilah ke Hutan Kabut di timur. Cari Peti Pusaka Kuil untuk memperkuat senjatamu, lalu cari Kunci Gerbang di Katakombe Kuno!',
        'Semoga berkah Kristal Suci selalu melindungimu dalam perjalanan!'
      ]
    },
    blacksmith: {
      id: 'blacksmith',
      name: 'Borin si Pandai Besi',
      map: 'town',
      tileX: 7,
      tileY: 13,
      color: '#b45309',
      title: 'Pandai Besi Terhebat',
      avatar: '⚒️',
      dialogue: [
        'Klang! Klang! Butuh pedang yang tajam atau zirah tebal anak muda?',
        'Baja buatanku sudah menahan cakar goblin selama 20 tahun. Silakan lihat barang daganganku!'
      ],
      shop: ['iron_sword', 'chainmail', 'silver_ring']
    },
    alchemist: {
      id: 'alchemist',
      name: 'Alkemis Lyra',
      map: 'town',
      tileX: 21,
      tileY: 13,
      color: '#06b6d4',
      title: 'Ahli Ramuan Herbal',
      avatar: '🧪',
      dialogue: [
        'Selamat datang di toko ramuan herbal Eldoria!',
        'Jangan pernah memasuki hutan lebat tanpa bekal Ramuan Penyembuh dan Ether. Hati-hati dengan monster liar!'
      ],
      shop: ['potion', 'ether', 'elixir', 'smokebomb', 'mystic_amulet']
    },
    guard: {
      id: 'guard',
      name: 'Ksatria Garrett',
      map: 'town',
      tileX: 28,
      tileY: 10,
      color: '#3b82f6',
      title: 'Penjaga Gerbang Timur',
      avatar: '🛡️',
      dialogue: [
        'Perhatian petualang! Melewati gerbang ini adalah Hutan Kabut liar.',
        'Rumput yang tinggi di hutan sarang monster buas. Siapkan senjatamu sebelum melangkah ke timur!'
      ]
    },
    catacomb_spirit: {
      id: 'catacomb_spirit',
      name: 'Arwah Arkana',
      map: 'dungeon',
      tileX: 15,
      tileY: 4,
      color: '#a855f7',
      title: 'Penjaga Segel Kuno',
      avatar: '👻',
      dialogue: [
        'Wahai jiwa yang berani... Kunci Gerbang Naga tersimpan di peti ruang terdalam.',
        'Kalahkan para penjaga tengkorak, ambil kuncinya, dan bawalah harapan negeri ini ke Kawah Api!'
      ]
    }
  }
};
