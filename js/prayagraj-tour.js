/**
 * DevFest Prayagraj 2026 - Interactive Prayagraj Confluence & Heritage Guide
 */

class PrayagrajTour {
  constructor() {
    this.currentTab = 'venue';
    this.initTabs();
    this.renderTabContent('venue');
  }

  initTabs() {
    const tabs = document.querySelectorAll('.prayagraj-nav-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => {
          t.classList.remove('bg-black', 'text-white', 'shadow-[3px_3px_0px_#4285F4]');
          t.classList.add('bg-white', 'text-slate-700');
        });
        tab.classList.remove('bg-white', 'text-slate-700');
        tab.classList.add('bg-black', 'text-white', 'shadow-[3px_3px_0px_#4285F4]');

        const tabKey = tab.getAttribute('data-tour');
        this.currentTab = tabKey;
        this.renderTabContent(tabKey);
      });
    });
  }

  renderTabContent(tabKey) {
    const container = document.getElementById('prayagrajTourContent');
    if (!container) return;
    const guide = window.DevFestData.prayagrajGuide;

    if (tabKey === 'venue') {
      container.innerHTML = `
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div class="lg:col-span-7 bg-white p-6 md:p-8 rounded-3xl border-2 border-slate-900 shadow-[6px_6px_0px_#1E1E1E]">
            <div class="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 border border-blue-400 rounded-full text-xs font-mono font-bold mb-3">
              📍 EVENT VENUE
            </div>
            <h3 class="text-2xl md:text-3xl font-black text-slate-900 mb-2">
              ${guide.venueInfo.name}
            </h3>
            <p class="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
              ${guide.venueInfo.description}
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              ${guide.venueInfo.highlights.map(h => `
                <div class="flex items-center gap-2 text-xs md:text-sm font-bold text-slate-800 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                  <span class="text-green-600">✓</span>
                  <span>${h}</span>
                </div>
              `).join('')}
            </div>
            <div class="flex flex-wrap gap-3">
              <a href="https://maps.google.com/?q=Motilal+Nehru+National+Institute+of+Technology+Allahabad" target="_blank" rel="noopener" class="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl border-2 border-slate-900 shadow-[3px_3px_0px_#1E1E1E] transition-all text-sm inline-flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Open in Google Maps
              </a>
              <a href="#schedule" class="px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-900 font-bold rounded-xl border-2 border-slate-900 shadow-[3px_3px_0px_#1E1E1E] transition-all text-sm">
                View Stage Agendas
              </a>
            </div>
          </div>

          <div class="lg:col-span-5 flex flex-col gap-4">
            <div class="bg-white p-3 rounded-3xl border-2 border-slate-900 shadow-[6px_6px_0px_#1E1E1E] overflow-hidden">
              <img src="assets/prayagraj/mnnit-campus.svg" alt="MNNIT Prayagraj Campus Grand Auditorium" class="w-full h-56 object-cover rounded-2xl border border-slate-200">
              <div class="p-3 text-xs font-mono font-bold text-slate-700 flex justify-between items-center">
                <span>MNNIT MP HALL AUDITORIUM (1,500 SEATS)</span>
                <span class="text-blue-600">TELIARGANJ, PRAYAGRAJ</span>
              </div>
            </div>
            <div class="bg-amber-50 p-5 rounded-2xl border-2 border-slate-900 shadow-[4px_4px_0px_#1E1E1E]">
              <h4 class="font-bold text-sm text-slate-900 mb-1 flex items-center gap-1.5">
                <span>💡</span> Helpful Venue Tip for Attendees
              </h4>
              <p class="text-xs text-slate-700 leading-relaxed">
                Registration desks open at 08:30 AM at the Main Entrance Foyer. Please have your digital or printed QR pass ready on your phone along with a valid ID proof.
              </p>
            </div>
          </div>
        </div>
      `;
    } else if (tabKey === 'transit') {
      container.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          ${guide.transit.map(t => `
            <div class="bg-white p-6 rounded-2xl border-2 border-slate-900 shadow-[4px_4px_0px_#1E1E1E] hover:shadow-[6px_6px_0px_#4285F4] transition-all">
              <div class="flex items-start justify-between mb-3">
                <span class="px-3 py-1 bg-slate-100 text-slate-900 border border-slate-900 rounded-lg text-xs font-mono font-bold">
                  ${t.distance}
                </span>
                <span class="text-2xl">${t.icon === 'train' ? '🚆' : t.icon === 'plane' ? '✈️' : '🚌'}</span>
              </div>
              <h4 class="text-lg font-black text-slate-900 mb-2">${t.title}</h4>
              <p class="text-slate-600 text-sm leading-relaxed">${t.desc}</p>
            </div>
          `).join('')}
        </div>
      `;
    } else if (tabKey === 'landmarks') {
      container.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          ${guide.landmarks.map(l => `
            <div class="bg-white rounded-2xl border-2 border-slate-900 shadow-[4px_4px_0px_#1E1E1E] overflow-hidden flex flex-col hover:-translate-y-1 transition-transform">
              <div class="h-44 bg-slate-100 overflow-hidden border-b-2 border-slate-900">
                <img src="${l.image}" alt="${l.title}" class="w-full h-full object-cover">
              </div>
              <div class="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span class="inline-block px-2 py-0.5 bg-yellow-100 text-yellow-800 border border-yellow-400 rounded text-[10px] font-mono font-bold mb-2">
                    ${l.tag}
                  </span>
                  <h4 class="font-black text-base text-slate-900 mb-0.5">${l.title}</h4>
                  <div class="text-xs font-bold text-blue-600 mb-2">${l.subtitle}</div>
                  <p class="text-xs text-slate-600 leading-relaxed">${l.desc}</p>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    } else if (tabKey === 'food') {
      container.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          ${guide.foodTrail.map(f => `
            <div class="bg-white p-6 rounded-2xl border-2 border-slate-900 shadow-[4px_4px_0px_#1E1E1E] flex gap-4 items-start">
              <div class="w-12 h-12 rounded-xl bg-orange-100 border-2 border-slate-900 flex items-center justify-center text-2xl shrink-0">
                ${f.icon === 'utensils' ? '🍲' : f.icon === 'coffee' ? '☕' : f.icon === 'apple' ? '🍏' : '🍯'}
              </div>
              <div>
                <span class="text-[10px] font-mono font-bold text-slate-400 uppercase">${f.location}</span>
                <h4 class="text-lg font-black text-slate-900 mb-1">${f.name}</h4>
                <p class="text-xs md:text-sm text-slate-600 leading-relaxed">${f.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }
  }
}

window.PrayagrajTour = PrayagrajTour;
