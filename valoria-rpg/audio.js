// Audio Synthesizer for Valoria RPG
// Uses Web Audio API - Zero external assets required, 100% reliable offline/online

class RetroAudio {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this.volume = 0.5;
    this.currentBgm = null;
    this.bgmTimer = null;
    this.bgmStep = 0;
    this.tempo = 120;
    this.isPlaying = false;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    if (this.muted) {
      this.stopBgm();
    } else if (this.currentBgm) {
      this.playBgm(this.currentBgm);
    }
    return this.muted;
  }

  // --- Sound Effects Generation ---
  playSfx(type) {
    if (this.muted) return;
    this.init();
    const ctx = this.ctx;
    const now = ctx.currentTime;

    switch (type) {
      case 'click': {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(600, now);
        osc.frequency.exponentialRampToValueAtTime(300, now + 0.05);
        gain.gain.setValueAtTime(0.2 * this.volume, now);
        gain.gain.linearRampToValueAtTime(0.01, now + 0.05);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.05);
        break;
      }

      case 'attack': {
        // White noise slash effect + fast descending pitch
        const bufferSize = ctx.sampleRate * 0.12;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.3));
        }
        const noise = ctx.createBufferSource();
        noise.buffer = buffer;

        const filter = ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(1500, now);
        filter.frequency.exponentialRampToValueAtTime(300, now + 0.12);

        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0.4 * this.volume, now);
        gain.gain.linearRampToValueAtTime(0.01, now + 0.12);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);
        noise.start(now);
        break;
      }

      case 'hit': {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(180, now);
        osc.frequency.exponentialRampToValueAtTime(40, now + 0.15);
        gain.gain.setValueAtTime(0.5 * this.volume, now);
        gain.gain.linearRampToValueAtTime(0.01, now + 0.15);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.15);
        break;
      }

      case 'magic': {
        // Ascending shimmering tone
        for (let i = 0; i < 4; i++) {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          const f = 400 * Math.pow(1.3, i);
          osc.frequency.setValueAtTime(f, now + i * 0.04);
          osc.frequency.exponentialRampToValueAtTime(f * 2, now + i * 0.04 + 0.2);
          gain.gain.setValueAtTime(0.2 * this.volume, now + i * 0.04);
          gain.gain.linearRampToValueAtTime(0.01, now + i * 0.04 + 0.2);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + i * 0.04);
          osc.stop(now + i * 0.04 + 0.2);
        }
        break;
      }

      case 'thunder': {
        // Boom + Low rumble noise
        const bufferSize = ctx.sampleRate * 0.4;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.4));
        }
        const noise = ctx.createBufferSource();
        noise.buffer = buffer;
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(600, now);
        filter.frequency.linearRampToValueAtTime(80, now + 0.4);

        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0.6 * this.volume, now);
        gain.gain.linearRampToValueAtTime(0.01, now + 0.4);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);
        noise.start(now);
        break;
      }

      case 'heal': {
        const notes = [392, 523.25, 659.25, 783.99]; // G4, C5, E5, G5
        notes.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + idx * 0.08);
          gain.gain.setValueAtTime(0.25 * this.volume, now + idx * 0.08);
          gain.gain.exponentialRampToValueAtTime(0.01, now + idx * 0.08 + 0.35);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + idx * 0.08);
          osc.stop(now + idx * 0.08 + 0.35);
        });
        break;
      }

      case 'chest': {
        const notes = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99, 1046.5];
        notes.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, now + idx * 0.07);
          gain.gain.setValueAtTime(0.25 * this.volume, now + idx * 0.07);
          gain.gain.exponentialRampToValueAtTime(0.01, now + idx * 0.07 + 0.25);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + idx * 0.07);
          osc.stop(now + idx * 0.07 + 0.25);
        });
        break;
      }

      case 'levelup': {
        const fanNotes = [
          { f: 523.25, d: 0.12, t: 0.0 },  // C5
          { f: 587.33, d: 0.12, t: 0.12 }, // D5
          { f: 659.25, d: 0.12, t: 0.24 }, // E5
          { f: 783.99, d: 0.15, t: 0.36 }, // G5
          { f: 659.25, d: 0.10, t: 0.52 }, // E5
          { f: 1046.5, d: 0.40, t: 0.63 }, // C6
        ];
        fanNotes.forEach(n => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'square';
          osc.frequency.setValueAtTime(n.f, now + n.t);
          gain.gain.setValueAtTime(0.25 * this.volume, now + n.t);
          gain.gain.exponentialRampToValueAtTime(0.01, now + n.t + n.d);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + n.t);
          osc.stop(now + n.t + n.d);
        });
        break;
      }

      case 'coin': {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(987.77, now); // B5
        osc.frequency.setValueAtTime(1318.51, now + 0.07); // E6
        gain.gain.setValueAtTime(0.25 * this.volume, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.25);
        break;
      }

      case 'dialogue': {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(280 + Math.random() * 60, now);
        gain.gain.setValueAtTime(0.12 * this.volume, now);
        gain.gain.linearRampToValueAtTime(0.01, now + 0.04);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.04);
        break;
      }

      case 'error': {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(150, now);
        osc.frequency.setValueAtTime(110, now + 0.1);
        gain.gain.setValueAtTime(0.3 * this.volume, now);
        gain.gain.linearRampToValueAtTime(0.01, now + 0.22);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.22);
        break;
      }
    }
  }

  // --- Chiptune Procedural BGM Sequencer ---
  stopBgm() {
    if (this.bgmTimer) {
      clearInterval(this.bgmTimer);
      this.bgmTimer = null;
    }
    this.isPlaying = false;
  }

  playBgm(trackName) {
    this.currentBgm = trackName;
    if (this.muted) return;
    this.init();
    this.stopBgm();
    this.bgmStep = 0;
    this.isPlaying = true;

    // Track melody definitions: Note frequencies and lengths
    // 0 = rest
    const tracks = {
      town: {
        tempoMs: 190,
        melody: [
          261.63, 0, 329.63, 0, 392.00, 523.25, 392.00, 329.63,
          349.23, 0, 440.00, 0, 523.25, 440.00, 392.00, 0,
          329.63, 0, 392.00, 0, 440.00, 392.00, 329.63, 293.66,
          261.63, 293.66, 329.63, 392.00, 261.63, 0, 0, 0
        ],
        bass: [
          130.81, 130.81, 164.81, 164.81, 196.00, 196.00, 164.81, 164.81,
          174.61, 174.61, 220.00, 220.00, 174.61, 174.61, 196.00, 196.00,
          164.81, 164.81, 196.00, 196.00, 220.00, 220.00, 146.83, 146.83,
          130.81, 146.83, 164.81, 196.00, 130.81, 130.81, 130.81, 0
        ]
      },
      forest: {
        tempoMs: 160,
        melody: [
          220.00, 261.63, 293.66, 329.63, 0, 329.63, 293.66, 261.63,
          246.94, 293.66, 329.63, 392.00, 0, 392.00, 329.63, 293.66,
          220.00, 261.63, 329.63, 440.00, 493.88, 440.00, 392.00, 329.63,
          293.66, 246.94, 220.00, 196.00, 220.00, 0, 0, 0
        ],
        bass: [
          110.00, 110.00, 130.81, 130.81, 146.83, 146.83, 164.81, 164.81,
          123.47, 123.47, 146.83, 146.83, 164.81, 164.81, 196.00, 196.00,
          110.00, 110.00, 146.83, 146.83, 164.81, 164.81, 196.00, 196.00,
          146.83, 123.47, 110.00, 98.00, 110.00, 110.00, 110.00, 0
        ]
      },
      dungeon: {
        tempoMs: 220,
        melody: [
          146.83, 0, 155.56, 0, 146.83, 0, 138.59, 0,
          146.83, 0, 174.61, 0, 164.81, 155.56, 146.83, 0,
          110.00, 0, 116.54, 0, 110.00, 0, 103.83, 0,
          110.00, 130.81, 146.83, 138.59, 146.83, 0, 0, 0
        ],
        bass: [
          73.42, 73.42, 77.78, 77.78, 73.42, 73.42, 69.30, 69.30,
          73.42, 73.42, 87.31, 87.31, 82.41, 77.78, 73.42, 73.42,
          55.00, 55.00, 58.27, 58.27, 55.00, 55.00, 51.91, 51.91,
          55.00, 65.41, 73.42, 69.30, 73.42, 73.42, 73.42, 0
        ]
      },
      battle: {
        tempoMs: 130,
        melody: [
          293.66, 293.66, 329.63, 349.23, 392.00, 349.23, 329.63, 293.66,
          261.63, 261.63, 293.66, 329.63, 349.23, 329.63, 293.66, 261.63,
          349.23, 349.23, 392.00, 440.00, 523.25, 440.00, 392.00, 349.23,
          392.00, 440.00, 493.88, 523.25, 587.33, 523.25, 493.88, 440.00
        ],
        bass: [
          146.83, 146.83, 146.83, 146.83, 174.61, 174.61, 174.61, 174.61,
          130.81, 130.81, 130.81, 130.81, 164.81, 164.81, 164.81, 164.81,
          174.61, 174.61, 174.61, 174.61, 220.00, 220.00, 220.00, 220.00,
          196.00, 196.00, 196.00, 196.00, 220.00, 220.00, 146.83, 146.83
        ]
      }
    };

    const track = tracks[trackName] || tracks.town;

    this.bgmTimer = setInterval(() => {
      if (this.muted || !this.ctx) return;
      const now = this.ctx.currentTime;
      const melNote = track.melody[this.bgmStep % track.melody.length];
      const bassNote = track.bass[this.bgmStep % track.bass.length];

      // Play lead melody
      if (melNote > 0) {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = trackName === 'dungeon' ? 'sawtooth' : 'square';
        osc.frequency.setValueAtTime(melNote, now);
        gain.gain.setValueAtTime(0.09 * this.volume, now);
        gain.gain.exponentialRampToValueAtTime(0.005, now + (track.tempoMs / 1000) * 0.85);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + (track.tempoMs / 1000) * 0.9);
      }

      // Play bassline
      if (bassNote > 0) {
        const bOsc = this.ctx.createOscillator();
        const bGain = this.ctx.createGain();
        bOsc.type = 'triangle';
        bOsc.frequency.setValueAtTime(bassNote, now);
        bGain.gain.setValueAtTime(0.12 * this.volume, now);
        bGain.gain.exponentialRampToValueAtTime(0.01, now + (track.tempoMs / 1000) * 0.85);
        bOsc.connect(bGain);
        bGain.connect(this.ctx.destination);
        bOsc.start(now);
        bOsc.stop(now + (track.tempoMs / 1000) * 0.9);
      }

      this.bgmStep++;
    }, track.tempoMs);
  }
}

window.retroAudio = new RetroAudio();
