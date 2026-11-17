/**
 * DevFest Prayagraj 2026 - Main Application Logic
 * Integrates interactive components, audio synthesizers, GSAP animations, countdown timer, and modals.
 */

window.DevFestMain = {
  audioEnabled: true,

  init() {
    this.initAudioToggle();
    this.initCountdown();
    this.renderSpeakers();
    this.initFaqAccordion();
    this.initMobileMenu();
    this.initSmoothScroll();
    this.initBridgeInteractiveEffects();

    // Initialize Submodules
    if (window.DevFestBadgeGenerator && document.getElementById('badgeCanvas')) {
      window.DevFestBadgeInstance = new window.DevFestBadgeGenerator('badgeCanvas');
    }
    if (window.SangamCatcherGame && document.getElementById('gameCanvas')) {
      window.DevFestGameInstance = new window.SangamCatcherGame('gameCanvas');
    }
    if (window.DevFestStickerBoard && document.getElementById('laptopLidBoard')) {
      window.DevFestStickerInstance = new window.DevFestStickerBoard('laptopLidBoard');
    }
    if (window.DevFestSchedule && document.getElementById('scheduleContainer')) {
      window.DevFestScheduleInstance = new window.DevFestSchedule('scheduleContainer');
    }
    if (window.DevFestTickets) {
      window.DevFestTicketsInstance = new window.DevFestTickets();
    }
    if (window.PrayagrajTour) {
      window.PrayagrajTourInstance = new window.PrayagrajTour();
    }

    console.log("🚀 DevFest Prayagraj 2026 initialized successfully!");
  },

  // 1. Audio Synthesizer (Pops, Clicks, Fanfare)
  initAudioToggle() {
    const toggleBtn = document.getElementById('soundToggleBtn');
    if (!toggleBtn) return;

    toggleBtn.addEventListener('click', () => {
      this.audioEnabled = !this.audioEnabled;
      const icon = toggleBtn.querySelector('.sound-icon');
      const text = toggleBtn.querySelector('.sound-text');
      if (this.audioEnabled) {
        if (icon) icon.textContent = '🔊';
        if (text) text.textContent = 'Sound ON';
        this.playPopSound();
      } else {
        if (icon) icon.textContent = '🔇';
        if (text) text.textContent = 'Muted';
      }
    });
  },

  playPopSound(freq = 600) {
    if (!this.audioEnabled) return;
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.06, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.08);
    } catch (e) { }
  },

  // 2. Countdown Timer to Dec 12, 2026 09:00 AM IST
  initCountdown() {
    const target = new Date("2026-12-12T09:00:00+05:30").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const diff = target - now;

      if (diff <= 0) {
        const daysEl = document.getElementById('countDays');
        if (daysEl) daysEl.textContent = "00";
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((diff % (1000 * 60)) / 1000);

      const dEl = document.getElementById('countDays');
      const hEl = document.getElementById('countHours');
      const mEl = document.getElementById('countMins');
      const sEl = document.getElementById('countSecs');

      if (dEl) dEl.textContent = String(days).padStart(2, '0');
      if (hEl) hEl.textContent = String(hours).padStart(2, '0');
      if (mEl) mEl.textContent = String(mins).padStart(2, '0');
      if (sEl) sEl.textContent = String(secs).padStart(2, '0');
    };

    updateTimer();
    setInterval(updateTimer, 1000);
  },

  // 3. Speakers Grid & Modal
  renderSpeakers() {
    const container = document.getElementById('speakersContainer');
    if (!container) return;

    const speakers = window.DevFestData.speakers || [];
    container.innerHTML = '';

    speakers.forEach(s => {
      const card = document.createElement('div');
      card.className = 'speaker-card bg-white rounded-3xl border-2 border-slate-900 shadow-[4px_4px_0px_#1E1E1E] hover:shadow-[8px_8px_0px_#4285F4] hover:-translate-y-1 transition-all overflow-hidden flex flex-col justify-between group';

      card.innerHTML = `
        <div class="p-6">
          <div class="relative mb-5 flex justify-center">
            <div class="w-32 h-32 rounded-full overflow-hidden border-4 border-slate-900 shadow-[3px_3px_0px_#1E1E1E] group-hover:scale-105 transition-transform bg-slate-50">
              <img src="${s.avatar}" alt="${s.name}" class="w-full h-full object-cover">
            </div>
            <span class="absolute bottom-0 px-3 py-0.5 rounded-full text-[10px] font-mono font-bold text-white shadow-sm border border-black" style="background-color: ${s.tagColor};">
              ${s.tag}
            </span>
          </div>

          <div class="text-center">
            <h3 class="text-xl font-black text-slate-900 mb-0.5">${s.name}</h3>
            <p class="text-xs font-bold text-blue-600 mb-1">${s.role}</p>
            <p class="text-[11px] font-medium text-slate-500 mb-3">${s.company}</p>
            <div class="p-2.5 bg-slate-50 rounded-xl border border-slate-200 text-left mb-4">
              <span class="text-[10px] font-mono font-bold text-slate-400 block uppercase">SESSION TOPIC</span>
              <p class="text-xs font-bold text-slate-800 line-clamp-2 leading-snug">${s.topic}</p>
            </div>
          </div>
        </div>

        <div class="px-6 py-3.5 bg-slate-50 border-t-2 border-slate-900 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <a href="${s.socials.linkedin}" target="_blank" rel="noopener" class="w-7 h-7 rounded-lg bg-white border border-slate-900 flex items-center justify-center text-xs hover:bg-blue-500 hover:text-white transition-colors" title="LinkedIn">
              in
            </a>
            <a href="${s.socials.twitter}" target="_blank" rel="noopener" class="w-7 h-7 rounded-lg bg-white border border-slate-900 flex items-center justify-center text-xs hover:bg-black hover:text-white transition-colors" title="X/Twitter">
              𝕏
            </a>
            <a href="${s.socials.github}" target="_blank" rel="noopener" class="w-7 h-7 rounded-lg bg-white border border-slate-900 flex items-center justify-center text-xs hover:bg-slate-800 hover:text-white transition-colors" title="GitHub">
              gh
            </a>
          </div>
          <button class="speaker-detail-btn text-xs font-bold text-slate-900 hover:text-blue-600 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
            <span>Bio</span>
            <span>→</span>
          </button>
        </div>
      `;

      card.querySelector('.speaker-detail-btn').addEventListener('click', () => {
        this.openSpeakerModal(s);
      });

      container.appendChild(card);
    });

    // Speaker Modal bindings
    const modal = document.getElementById('speakerModal');
    const closeBtn = document.getElementById('closeSpeakerModalBtn');
    if (closeBtn && modal) {
      closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.add('hidden');
      });
    }
  },

  openSpeakerModal(s) {
    const modal = document.getElementById('speakerModal');
    if (!modal) return;

    document.getElementById('modalSpeakerAvatar').src = s.avatar;
    document.getElementById('modalSpeakerName').textContent = s.name;
    document.getElementById('modalSpeakerRole').textContent = `${s.role} • ${s.company}`;
    document.getElementById('modalSpeakerTag').textContent = s.tag;
    document.getElementById('modalSpeakerTag').style.backgroundColor = s.tagColor;
    document.getElementById('modalSpeakerTopic').textContent = s.topic;
    document.getElementById('modalSpeakerBio').textContent = s.bio;

    modal.classList.remove('hidden');
    this.playPopSound();
  },

  // 4. FAQ Accordion
  initFaqAccordion() {
    const container = document.getElementById('faqContainer');
    if (!container) return;

    const faqs = window.DevFestData.faqs || [];
    container.innerHTML = '';

    faqs.forEach((faq, index) => {
      const item = document.createElement('div');
      item.className = 'faq-item bg-white rounded-2xl border-2 border-slate-900 shadow-[3px_3px_0px_#1E1E1E] overflow-hidden transition-all';

      item.innerHTML = `
        <button class="faq-question-btn w-full p-5 text-left font-black text-slate-900 flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors">
          <span class="text-base md:text-lg">${faq.q}</span>
          <span class="faq-icon w-8 h-8 rounded-full border border-slate-900 bg-yellow-400 text-slate-900 flex items-center justify-center font-mono font-bold text-lg shrink-0 transition-transform">
            +
          </span>
        </button>
        <div class="faq-answer-panel hidden p-5 pt-0 text-sm md:text-base text-slate-600 leading-relaxed border-t border-slate-100">
          ${faq.a}
        </div>
      `;

      const btn = item.querySelector('.faq-question-btn');
      const panel = item.querySelector('.faq-answer-panel');
      const icon = item.querySelector('.faq-icon');

      btn.addEventListener('click', () => {
        const isOpen = !panel.classList.contains('hidden');
        // Close all
        document.querySelectorAll('.faq-answer-panel').forEach(p => p.classList.add('hidden'));
        document.querySelectorAll('.faq-icon').forEach(i => {
          i.textContent = '+';
          i.classList.remove('rotate-45', 'bg-red-400');
          i.classList.add('bg-yellow-400');
        });

        if (!isOpen) {
          panel.classList.remove('hidden');
          icon.textContent = '×';
          icon.classList.remove('bg-yellow-400');
          icon.classList.add('bg-red-400');
        }
        this.playPopSound();
      });

      container.appendChild(item);
    });
  },

  // 5. Mobile Slide Menu
  initMobileMenu() {
    const toggle = document.getElementById('mobileMenuToggle');
    const menu = document.getElementById('mobileMenu');
    const closeBtn = document.getElementById('closeMobileMenu');

    if (toggle && menu) {
      toggle.addEventListener('click', () => {
        menu.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      });

      const closeMenu = () => {
        menu.classList.add('hidden');
        document.body.style.overflow = '';
      };

      if (closeBtn) closeBtn.addEventListener('click', closeMenu);
      menu.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', closeMenu);
      });
    }
  },

  // 6. Smooth Scrolling for Navigation
  initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#' || targetId === '') return;
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          const headerOffset = 80;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      });
    });
  },

  // 7. Bridge Interactive Effects
  initBridgeInteractiveEffects() {
    const bridge = document.getElementById('heroBridgeGraphic');
    if (!bridge) return;

    bridge.addEventListener('mouseenter', () => {
      bridge.classList.add('scale-[1.01]');
    });
    bridge.addEventListener('mouseleave', () => {
      bridge.classList.remove('scale-[1.01]');
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  window.DevFestMain.init();
});
