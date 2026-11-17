/**
 * DevFest Prayagraj 2026 - Interactive Multi-Track Agenda & Schedule
 */

class DevFestSchedule {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;

    this.currentTrack = 'all';
    this.searchQuery = '';
    this.starredSessions = JSON.parse(localStorage.getItem('devfest_starred_sessions') || '[]');

    this.initFilters();
    this.render();
  }

  initFilters() {
    const filterButtons = document.querySelectorAll('.schedule-track-btn');
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => {
          b.classList.remove('bg-black', 'text-white', 'shadow-[3px_3px_0px_#4285F4]');
          b.classList.add('bg-white', 'text-slate-700');
        });
        btn.classList.remove('bg-white', 'text-slate-700');
        btn.classList.add('bg-black', 'text-white', 'shadow-[3px_3px_0px_#4285F4]');

        this.currentTrack = btn.getAttribute('data-track');
        this.render();
      });
    });

    const searchInput = document.getElementById('scheduleSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.toLowerCase().trim();
        this.render();
      });
    }

    const starredFilter = document.getElementById('starredFilterBtn');
    if (starredFilter) {
      starredFilter.addEventListener('click', () => {
        this.currentTrack = this.currentTrack === 'starred' ? 'all' : 'starred';
        starredFilter.classList.toggle('bg-yellow-400');
        this.render();
      });
    }
  }

  toggleStar(index) {
    const session = window.DevFestData.schedule[index];
    if (!session) return;

    const id = `${session.time}-${session.title}`;
    const idx = this.starredSessions.indexOf(id);
    if (idx > -1) {
      this.starredSessions.splice(idx, 1);
    } else {
      this.starredSessions.push(id);
    }

    localStorage.setItem('devfest_starred_sessions', JSON.stringify(this.starredSessions));
    this.render();
    if (window.DevFestMain && window.DevFestMain.playPopSound) {
      window.DevFestMain.playPopSound();
    }
  }

  addToGoogleCalendar(session) {
    const title = encodeURIComponent(`[DevFest Prayagraj] ${session.title}`);
    const details = encodeURIComponent(`${session.description}\n\nSpeaker: ${session.speaker}\nHall: ${session.hall}\nEvent: DevFest Prayagraj 2026`);
    const location = encodeURIComponent("Motilal Nehru National Institute of Technology (MNNIT), Teliarganj, Prayagraj, UP");
    // Date: Dec 12, 2026
    const gCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=20261212T033000Z/20261212T123000Z`;
    window.open(gCalUrl, '_blank');
  }

  downloadICS(session) {
    const icsData = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//GDG Prayagraj//DevFest 2026//EN',
      'BEGIN:VEVENT',
      `SUMMARY:[DevFest Prayagraj] ${session.title}`,
      `DESCRIPTION:${session.description.replace(/\n/g, ' ')}`,
      'LOCATION:Motilal Nehru National Institute of Technology (MNNIT), Teliarganj, Prayagraj, UP',
      'DTSTART:20261212T033000Z',
      'DTEND:20261212T123000Z',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `DevFest-Prayagraj-${session.title.substring(0, 20).replace(/\s+/g, '-')}.ics`;
    link.click();
  }

  render() {
    const schedule = window.DevFestData.schedule || [];
    let filtered = schedule.filter((s, idx) => {
      const sessionId = `${s.time}-${s.title}`;
      if (this.currentTrack === 'starred') {
        if (!this.starredSessions.includes(sessionId)) return false;
      } else if (this.currentTrack !== 'all' && s.track !== this.currentTrack && s.track !== 'all') {
        return false;
      }

      if (this.searchQuery) {
        const text = `${s.title} ${s.speaker} ${s.hall} ${s.description} ${s.badge}`.toLowerCase();
        if (!text.includes(this.searchQuery)) return false;
      }

      return true;
    });

    if (filtered.length === 0) {
      this.container.innerHTML = `
        <div class="p-12 text-center bg-white rounded-2xl border-2 border-slate-900 shadow-[4px_4px_0px_#1E1E1E]">
          <div class="text-4xl mb-3">🔍</div>
          <h3 class="font-extrabold text-xl text-slate-900 mb-1">No sessions match your filter</h3>
          <p class="text-slate-600 text-sm">Try resetting the track filters or clearing the search keyword.</p>
        </div>
      `;
      return;
    }

    this.container.innerHTML = '';
    filtered.forEach((session) => {
      const originalIdx = schedule.indexOf(session);
      const isStarred = this.starredSessions.includes(`${session.time}-${session.title}`);

      // Track tag style
      let tagBg = 'bg-blue-100 text-blue-800 border-blue-400';
      if (session.track === 'cloud') tagBg = 'bg-green-100 text-green-800 border-green-400';
      if (session.track === 'mobile') tagBg = 'bg-amber-100 text-amber-800 border-amber-400';
      if (session.track === 'web') tagBg = 'bg-red-100 text-red-800 border-red-400';

      const card = document.createElement('div');
      card.className = 'session-card bg-white p-5 md:p-6 rounded-2xl border-2 border-slate-900 shadow-[4px_4px_0px_#1E1E1E] hover:shadow-[6px_6px_0px_#4285F4] hover:-translate-y-0.5 transition-all mb-4 relative';

      card.innerHTML = `
        <div class="flex flex-col md:flex-row md:items-start justify-between gap-4">
          <!-- Left: Time & Hall -->
          <div class="md:w-56 shrink-0">
            <div class="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 border border-slate-900 rounded-lg text-xs font-mono font-bold text-slate-800 mb-2">
              <svg class="w-3.5 h-3.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              ${session.time}
            </div>
            <div class="text-xs font-bold text-slate-600 flex items-center gap-1.5">
              <svg class="w-3.5 h-3.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              ${session.hall}
            </div>
          </div>

          <!-- Center: Title, Speaker & Abstract -->
          <div class="flex-1">
            <div class="flex flex-wrap items-center gap-2 mb-2">
              <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold font-mono border ${tagBg}">
                ${session.badge}
              </span>
              ${session.track !== 'all' ? `
                <span class="text-[10px] uppercase font-bold text-slate-400">
                  Track: ${session.track.toUpperCase()}
                </span>
              ` : ''}
            </div>
            <h3 class="text-lg md:text-xl font-black text-slate-900 mb-1 leading-snug">
              ${session.title}
            </h3>
            <p class="text-xs md:text-sm font-semibold text-blue-600 mb-2 flex items-center gap-1">
              <span>🎤</span> ${session.speaker}
            </p>
            <p class="text-slate-600 text-xs md:text-sm leading-relaxed">
              ${session.description}
            </p>
          </div>

          <!-- Right: Star & Calendar Actions -->
          <div class="flex md:flex-col items-center justify-end gap-2 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100">
            <button class="star-btn p-2 rounded-xl border border-slate-900 ${isStarred ? 'bg-amber-400 text-slate-900' : 'bg-slate-50 text-slate-400 hover:text-amber-500'} transition-colors" title="${isStarred ? 'Bookmarked' : 'Bookmark Session'}">
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </button>
            <button class="cal-btn px-3 py-1.5 bg-blue-50 hover:bg-blue-600 hover:text-white border border-blue-600 text-blue-700 rounded-xl text-xs font-bold transition-all flex items-center gap-1" title="Add to Calendar">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              <span>+Cal</span>
            </button>
          </div>
        </div>
      `;

      // Event listeners
      card.querySelector('.star-btn').addEventListener('click', () => {
        this.toggleStar(originalIdx);
      });

      card.querySelector('.cal-btn').addEventListener('click', () => {
        this.addToGoogleCalendar(session);
      });

      this.container.appendChild(card);
    });
  }
}

window.DevFestSchedule = DevFestSchedule;
