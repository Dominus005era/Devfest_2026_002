/**
 * DevFest Prayagraj 2026 - "Sangam Catcher" Interactive Mini-Game
 * A fast, fun browser mini-game celebrating the Triveni Sangam of Tech.
 * Players steer a Prayagraj Sangam boat to collect Google Tech drops while dodging software bugs!
 */

class SangamCatcherGame {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');

    // Canvas size
    this.width = 600;
    this.height = 400;
    this.canvas.width = this.width;
    this.canvas.height = this.height;

    // Game state
    this.isPlaying = false;
    this.isGameOver = false;
    this.score = 0;
    this.combo = 0;
    this.timeLeft = 45;
    this.timerInterval = null;
    this.animId = null;

    // High score from local storage
    this.highScore = parseInt(localStorage.getItem('devfest_sangam_highscore') || '0', 10);

    // Player (Sangam Boat)
    this.player = {
      x: this.width / 2 - 45,
      y: this.height - 48,
      width: 90,
      height: 32,
      speed: 8,
      dx: 0
    };

    // Falling items
    this.items = [];
    this.spawnTimer = 0;
    this.spawnInterval = 45; // frames

    this.itemTypes = [
      { name: "gemini", label: "✨ Gemini", points: 25, color: "#4285F4", isBug: false },
      { name: "android", label: "🤖 Android", points: 20, color: "#3DDC84", isBug: false },
      { name: "cloud", label: "☁️ Cloud", points: 20, color: "#4285F4", isBug: false },
      { name: "flutter", label: "💙 Flutter", points: 15, color: "#02569B", isBug: false },
      { name: "firebase", label: "🔥 Firebase", points: 15, color: "#FFA000", isBug: false },
      { name: "bug_null", label: "🐞 NullPointer", points: -15, color: "#EA4335", isBug: true },
      { name: "bug_404", label: "⚠️ 404 Error", points: -15, color: "#EA4335", isBug: true }
    ];

    this.keys = {};
    this.initEventListeners();
    this.renderStartScreen();
  }

  initEventListeners() {
    // Keyboard controls
    window.addEventListener('keydown', (e) => {
      this.keys[e.key] = true;
      if (['ArrowLeft', 'ArrowRight', 'a', 'd'].includes(e.key) && this.isPlaying) {
        e.preventDefault();
      }
    });

    window.addEventListener('keyup', (e) => {
      this.keys[e.key] = false;
    });

    // Mouse / Touch movement inside canvas
    const moveHandler = (clientX) => {
      if (!this.isPlaying) return;
      const rect = this.canvas.getBoundingClientRect();
      const scaleX = this.canvas.width / rect.width;
      const canvasX = (clientX - rect.left) * scaleX;
      this.player.x = Math.max(10, Math.min(this.width - this.player.width - 10, canvasX - this.player.width / 2));
    };

    this.canvas.addEventListener('mousemove', (e) => {
      moveHandler(e.clientX);
    });

    this.canvas.addEventListener('touchmove', (e) => {
      if (e.touches.length > 0) {
        moveHandler(e.touches[0].clientX);
      }
    }, { passive: true });

    // Buttons
    const startBtn = document.getElementById('startGameBtn');
    if (startBtn) {
      startBtn.addEventListener('click', () => this.startGame());
    }

    const restartBtn = document.getElementById('restartGameBtn');
    if (restartBtn) {
      restartBtn.addEventListener('click', () => this.startGame());
    }
  }

  startGame() {
    this.isPlaying = true;
    this.isGameOver = false;
    this.score = 0;
    this.combo = 0;
    this.timeLeft = 45;
    this.items = [];
    this.player.x = this.width / 2 - 45;

    // UI Updates
    this.updateStatsUI();
    const overlay = document.getElementById('gameOverOverlay');
    if (overlay) overlay.classList.add('hidden');

    if (this.timerInterval) clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      this.timeLeft--;
      this.updateStatsUI();
      if (this.timeLeft <= 0) {
        this.endGame();
      }
    }, 1000);

    if (this.animId) cancelAnimationFrame(this.animId);
    this.gameLoop();
  }

  updateStatsUI() {
    const scoreEl = document.getElementById('gameScoreDisplay');
    const timerEl = document.getElementById('gameTimerDisplay');
    const highEl = document.getElementById('gameHighScoreDisplay');

    if (scoreEl) scoreEl.textContent = this.score;
    if (timerEl) timerEl.textContent = `${this.timeLeft}s`;
    if (highEl) highEl.textContent = this.highScore;
  }

  gameLoop() {
    if (!this.isPlaying) return;

    this.update();
    this.draw();

    this.animId = requestAnimationFrame(() => this.gameLoop());
  }

  update() {
    // Player controls with keys
    if (this.keys['ArrowLeft'] || this.keys['a'] || this.keys['A']) {
      this.player.x -= this.player.speed;
    }
    if (this.keys['ArrowRight'] || this.keys['d'] || this.keys['D']) {
      this.player.x += this.player.speed;
    }

    // Clamping
    this.player.x = Math.max(10, Math.min(this.width - this.player.width - 10, this.player.x));

    // Spawn falling items
    this.spawnTimer++;
    if (this.spawnTimer >= this.spawnInterval) {
      this.spawnTimer = 0;
      const type = this.itemTypes[Math.floor(Math.random() * this.itemTypes.length)];
      this.items.push({
        ...type,
        x: 30 + Math.random() * (this.width - 60),
        y: -20,
        speed: 2.5 + Math.random() * 2.5,
        radius: 18,
        angle: 0,
        rotSpeed: (Math.random() - 0.5) * 0.05
      });
    }

    // Update items
    for (let i = this.items.length - 1; i >= 0; i--) {
      const item = this.items[i];
      item.y += item.speed;
      item.angle += item.rotSpeed;

      // Collision check with player boat
      if (
        item.y + item.radius >= this.player.y &&
        item.y - item.radius <= this.player.y + this.player.height &&
        item.x + item.radius >= this.player.x &&
        item.x - item.radius <= this.player.x + this.player.width
      ) {
        // Collect!
        if (item.isBug) {
          this.score = Math.max(0, this.score + item.points);
          this.combo = 0;
          this.playTone(180, 'sawtooth');
        } else {
          this.combo++;
          const comboBonus = this.combo > 3 ? 10 : 0;
          this.score += item.points + comboBonus;
          this.playTone(440 + (this.combo * 50), 'sine');
        }

        if (this.score > this.highScore) {
          this.highScore = this.score;
          localStorage.setItem('devfest_sangam_highscore', this.highScore.toString());
        }

        this.updateStatsUI();
        this.items.splice(i, 1);
        continue;
      }

      // Offscreen remove
      if (item.y > this.height + 30) {
        this.items.splice(i, 1);
      }
    }
  }

  draw() {
    const ctx = this.ctx;
    const w = this.width;
    const h = this.height;

    ctx.clearRect(0, 0, w, h);

    // 1. Water Background (Triveni Sangam confluence)
    const grad = ctx.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, '#E8F0FE');
    grad.addColorStop(0.6, '#D2E3FC');
    grad.addColorStop(1, '#AECBFA');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    // Flowing Sangam Waves at bottom
    ctx.strokeStyle = '#4285F4';
    ctx.lineWidth = 3;
    this.drawWavyWater(ctx, h - 35, '#4285F4');
    this.drawWavyWater(ctx, h - 20, '#34A853');
    this.drawWavyWater(ctx, h - 8, '#FBBC04');

    // 2. Draw Falling Items
    for (const item of this.items) {
      ctx.save();
      ctx.translate(item.x, item.y);
      ctx.rotate(item.angle);

      // Bubble background
      ctx.fillStyle = item.color;
      ctx.beginPath();
      ctx.arc(0, 0, item.radius, 0, Math.PI * 2);
      ctx.fill();

      // Bold border
      ctx.strokeStyle = '#1E1E1E';
      ctx.lineWidth = 2.5;
      ctx.stroke();

      // Text icon label
      ctx.fillStyle = '#FFFFFF';
      ctx.font = "bold 13px 'Plus Jakarta Sans', sans-serif";
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const shortIcon = item.name === 'gemini' ? '✨' :
        item.name === 'android' ? '🤖' :
        item.name === 'cloud' ? '☁️' :
        item.name === 'flutter' ? '💙' :
        item.name === 'firebase' ? '🔥' : '🐞';
      ctx.fillText(shortIcon, 0, 1);

      ctx.restore();
    }

    // 3. Draw Player: Sangam Wooden Boat
    this.drawBoat(ctx, this.player.x, this.player.y, this.player.width, this.player.height);

    // 4. Draw Score HUD on canvas
    ctx.fillStyle = '#1E1E1E';
    ctx.font = "800 16px 'Roboto Mono', monospace";
    ctx.textAlign = 'left';
    ctx.fillText(`SCORE: ${this.score}`, 18, 30);

    if (this.combo > 1) {
      ctx.fillStyle = '#EA4335';
      ctx.font = "800 14px 'Roboto Mono', monospace";
      ctx.fillText(`⚡ ${this.combo}X STREAK!`, 18, 52);
    }

    ctx.textAlign = 'right';
    ctx.fillStyle = '#1E1E1E';
    ctx.font = "800 16px 'Roboto Mono', monospace";
    ctx.fillText(`TIME: ${this.timeLeft}s`, w - 18, 30);
  }

  drawBoat(ctx, x, y, width, height) {
    ctx.save();
    // Wooden hull
    ctx.fillStyle = '#8D6E63';
    ctx.strokeStyle = '#1E1E1E';
    ctx.lineWidth = 3;

    ctx.beginPath();
    ctx.moveTo(x, y + 8);
    ctx.lineTo(x + width, y + 8);
    ctx.lineTo(x + width - 15, y + height);
    ctx.lineTo(x + 15, y + height);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Sail mast
    const mastX = x + width / 2;
    ctx.beginPath();
    ctx.moveTo(mastX, y + 8);
    ctx.lineTo(mastX, y - 24);
    ctx.stroke();

    // Google-colored triangle sail
    ctx.fillStyle = '#4285F4';
    ctx.beginPath();
    ctx.moveTo(mastX, y - 24);
    ctx.lineTo(mastX + 24, y - 6);
    ctx.lineTo(mastX, y - 6);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Little Android sailor
    ctx.fillStyle = '#3DDC84';
    ctx.beginPath();
    ctx.arc(x + 28, y + 2, 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    ctx.restore();
  }

  drawWavyWater(ctx, y, color) {
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(0, y);
    const step = 30;
    for (let x = 0; x <= this.width; x += step) {
      ctx.quadraticCurveTo(x + step / 2, y + (x % 60 === 0 ? 4 : -4), x + step, y);
    }
    ctx.stroke();
    ctx.restore();
  }

  playTone(freq, type = 'sine') {
    try {
      if (window.DevFestMain && !window.DevFestMain.audioEnabled) return;
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.15);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.15);
    } catch (e) {
      // Audio autoplay policy fallback
    }
  }

  endGame() {
    this.isPlaying = false;
    this.isGameOver = true;
    if (this.timerInterval) clearInterval(this.timerInterval);
    if (this.animId) cancelAnimationFrame(this.animId);

    // Confetti celebration
    if (window.confetti && this.score > 100) {
      window.confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#4285F4', '#EA4335', '#FBBC04', '#34A853']
      });
    }

    // Rank title calculation
    let rank = "Prayagraj Tech Enthusiast 🌊";
    if (this.score >= 350) rank = "🏆 Maha Kumbh Grand Architect";
    else if (this.score >= 250) rank = "⚡ Sangam Confluence Master";
    else if (this.score >= 150) rank = "🚀 DevFest Elite Coder";

    const overlay = document.getElementById('gameOverOverlay');
    const finalScoreEl = document.getElementById('gameFinalScore');
    const rankEl = document.getElementById('gameRankBadge');

    if (finalScoreEl) finalScoreEl.textContent = this.score;
    if (rankEl) rankEl.textContent = rank;
    if (overlay) overlay.classList.remove('hidden');
  }

  renderStartScreen() {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.width, this.height);

    ctx.fillStyle = '#E8F0FE';
    ctx.fillRect(0, 0, this.width, this.height);

    ctx.fillStyle = '#1E1E1E';
    ctx.font = "900 28px 'Plus Jakarta Sans', sans-serif";
    ctx.textAlign = 'center';
    ctx.fillText("SANGAM TECH CATCHER", this.width / 2, 130);

    ctx.font = "600 15px 'Plus Jakarta Sans', sans-serif";
    ctx.fillStyle = "#5F6368";
    ctx.fillText("Steer the Sangam Boat to catch Google AI & Cloud drops!", this.width / 2, 165);
    ctx.fillText("Dodge red bugs & errors 🐞 to keep your streak alive.", this.width / 2, 190);

    // Draw boat sample
    this.drawBoat(ctx, this.width / 2 - 45, 220, 90, 32);

    ctx.font = "700 14px 'Roboto Mono', monospace";
    ctx.fillStyle = "#4285F4";
    ctx.fillText("Click 'Start Game' below or use [A]/[D] or Arrow Keys", this.width / 2, 290);
  }
}

window.SangamCatcherGame = SangamCatcherGame;
