/**
 * DevFest Prayagraj 2026 - Interactive Laptop Sticker Board
 * Enables users to decorate a virtual laptop with authentic DevFest 2026 stickers!
 */

class DevFestStickerBoard {
  constructor(boardId) {
    this.board = document.getElementById(boardId);
    if (!this.board) return;

    this.stickersOnLid = [];
    this.activeDrag = null;
    this.offsetX = 0;
    this.offsetY = 0;

    this.initStickerPalette();
    this.initLidDropZone();
  }

  initStickerPalette() {
    const palette = document.getElementById('stickerPalette');
    if (!palette) return;

    const availableStickers = [
      { name: "Developer", src: "assets/stickers/DF-RoleSticker-developer.png" },
      { name: "Builder", src: "assets/stickers/DF-RoleSticker-builder.png" },
      { name: "Designer", src: "assets/stickers/DF-RoleSticker-designer.png" },
      { name: "Researcher", src: "assets/stickers/DF-RoleSticker-researcher.png" },
      { name: "Student", src: "assets/stickers/DF-RoleSticker-student.png" },
      { name: "Product Manager", src: "assets/stickers/DF-RoleSticker-product-manager.png" },
      { name: "Gemini AI", src: "assets/icons/gemini.svg" },
      { name: "Android 15", src: "assets/icons/android.svg" },
      { name: "Google Cloud", src: "assets/icons/cloud.svg" },
      { name: "Flutter", src: "assets/icons/flutter.svg" }
    ];

    palette.innerHTML = '';
    availableStickers.forEach(s => {
      const item = document.createElement('div');
      item.className = 'sticker-palette-item p-2 bg-white rounded-xl border-2 border-slate-900 shadow-sm cursor-grab hover:-translate-y-1 transition-transform flex flex-col items-center justify-center';
      item.innerHTML = `
        <img src="${s.src}" alt="${s.name}" class="w-12 h-12 object-contain pointer-events-none select-none">
        <span class="text-[10px] font-bold font-mono text-slate-700 mt-1">${s.name}</span>
      `;

      item.addEventListener('click', () => {
        this.addStickerToLid(s.src, s.name);
      });

      palette.appendChild(item);
    });

    // Clear and preset buttons
    const clearBtn = document.getElementById('clearStickersBtn');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        this.clearLid();
      });
    }

    const resetBtn = document.getElementById('presetStickersBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        this.loadDefaultSetup();
      });
    }
  }

  initLidDropZone() {
    this.board.addEventListener('mousemove', (e) => this.onDrag(e));
    this.board.addEventListener('mouseup', () => this.stopDrag());
    this.board.addEventListener('mouseleave', () => this.stopDrag());

    // Touch support
    this.board.addEventListener('touchmove', (e) => {
      if (e.touches.length > 0) this.onDrag(e.touches[0]);
    }, { passive: false });
    this.board.addEventListener('touchend', () => this.stopDrag());

    // Pre-populate with a few stickers
    this.loadDefaultSetup();
  }

  loadDefaultSetup() {
    this.clearLid();
    this.addStickerToLid("assets/stickers/DF-RoleSticker-developer.png", "Developer", 70, 60, -8);
    this.addStickerToLid("assets/icons/gemini.svg", "Gemini", 290, 80, 12);
    this.addStickerToLid("assets/stickers/DF-RoleSticker-builder.png", "Builder", 140, 180, 5);
    this.addStickerToLid("assets/icons/android.svg", "Android", 280, 190, -10);
  }

  addStickerToLid(src, name, initX = null, initY = null, initRot = null) {
    const rect = this.board.getBoundingClientRect();
    const x = initX !== null ? initX : 60 + Math.random() * (rect.width - 160);
    const y = initY !== null ? initY : 40 + Math.random() * (rect.height - 140);
    const rot = initRot !== null ? initRot : (Math.random() * 24 - 12);

    const el = document.createElement('div');
    el.className = 'absolute cursor-move select-none p-1.5 transition-shadow hover:ring-2 hover:ring-blue-500 rounded-lg group';
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    el.style.transform = `rotate(${rot}deg)`;
    el.style.zIndex = (this.stickersOnLid.length + 10).toString();

    el.innerHTML = `
      <img src="${src}" alt="${name}" class="w-16 h-16 object-contain pointer-events-none drop-shadow-md">
      <button class="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white rounded-full text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center border border-black shadow">×</button>
    `;

    // Delete handler
    el.querySelector('button').addEventListener('click', (e) => {
      e.stopPropagation();
      el.remove();
      this.stickersOnLid = this.stickersOnLid.filter(s => s.element !== el);
    });

    // Start drag
    const startDragHandler = (clientX, clientY) => {
      this.activeDrag = el;
      const bRect = this.board.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      this.offsetX = clientX - elRect.left;
      this.offsetY = clientY - elRect.top;
      // Bring to front
      el.style.zIndex = (parseInt(el.style.zIndex || '10', 10) + 15).toString();
    };

    el.addEventListener('mousedown', (e) => {
      if (e.target.tagName.toLowerCase() === 'button') return;
      startDragHandler(e.clientX, e.clientY);
    });

    el.addEventListener('touchstart', (e) => {
      if (e.touches.length > 0) {
        startDragHandler(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });

    this.board.appendChild(el);
    this.stickersOnLid.push({ element: el, src, name, x, y, rot });

    if (window.DevFestMain && window.DevFestMain.playPopSound) {
      window.DevFestMain.playPopSound();
    }
  }

  onDrag(e) {
    if (!this.activeDrag) return;
    const bRect = this.board.getBoundingClientRect();
    const x = e.clientX - bRect.left - this.offsetX;
    const y = e.clientY - bRect.top - this.offsetY;

    // Constrain to laptop lid area
    const clampedX = Math.max(10, Math.min(bRect.width - 80, x));
    const clampedY = Math.max(10, Math.min(bRect.height - 80, y));

    this.activeDrag.style.left = `${clampedX}px`;
    this.activeDrag.style.top = `${clampedY}px`;
  }

  stopDrag() {
    this.activeDrag = null;
  }

  clearLid() {
    this.stickersOnLid.forEach(s => s.element.remove());
    this.stickersOnLid = [];
  }
}

window.DevFestStickerBoard = DevFestStickerBoard;
