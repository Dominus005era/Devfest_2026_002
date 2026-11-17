/**
 * DevFest Prayagraj 2026 - Interactive Tickets & Registration Controller
 */

class DevFestTickets {
  constructor() {
    this.selectedTier = 'developer';
    this.activeDiscount = 0;
    this.discountType = 'percent';
    this.couponCode = '';

    this.initTierCards();
    this.initCouponValidator();
    this.initCheckoutModal();
  }

  initTierCards() {
    const cards = document.querySelectorAll('.ticket-tier-card');
    cards.forEach(card => {
      card.addEventListener('click', () => {
        cards.forEach(c => c.classList.remove('ring-4', 'ring-blue-600', 'scale-[1.02]'));
        card.classList.add('ring-4', 'ring-blue-600', 'scale-[1.02]');
        this.selectedTier = card.getAttribute('data-tier');
        this.updatePricing();
      });

      const selectBtn = card.querySelector('.select-ticket-btn');
      if (selectBtn) {
        selectBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          this.selectedTier = card.getAttribute('data-tier');
          this.openCheckoutModal();
        });
      }
    });
  }

  initCouponValidator() {
    const couponInput = document.getElementById('couponCodeInput');
    const applyBtn = document.getElementById('applyCouponBtn');
    const messageEl = document.getElementById('couponFeedbackMsg');

    if (applyBtn && couponInput) {
      applyBtn.addEventListener('click', () => {
        const code = couponInput.value.trim().toUpperCase();
        const coupons = window.DevFestData.coupons;

        if (coupons[code]) {
          const promo = coupons[code];
          this.couponCode = code;
          this.activeDiscount = promo.discount;
          this.discountType = promo.type;

          if (messageEl) {
            messageEl.className = 'text-xs font-bold text-green-700 bg-green-50 p-2 rounded-lg border border-green-300 mt-2 block animate-bounce';
            messageEl.textContent = promo.message;
          }

          if (window.confetti) {
            window.confetti({ particleCount: 60, spread: 60, origin: { y: 0.8 } });
          }
          if (window.DevFestMain && window.DevFestMain.playPopSound) {
            window.DevFestMain.playPopSound();
          }
        } else {
          this.activeDiscount = 0;
          this.couponCode = '';
          if (messageEl) {
            messageEl.className = 'text-xs font-bold text-red-600 bg-red-50 p-2 rounded-lg border border-red-300 mt-2 block';
            messageEl.textContent = "❌ Invalid promo code. Try PRAYAGRAJ26, DEVFEST26, or SANGAM!";
          }
        }

        this.updatePricing();
      });
    }
  }

  calculateFinalPrice(basePrice) {
    if (!this.activeDiscount) return basePrice;
    if (this.discountType === 'percent') {
      const discounted = basePrice - (basePrice * (this.activeDiscount / 100));
      return Math.max(0, Math.round(discounted));
    } else {
      return Math.max(0, basePrice - this.activeDiscount);
    }
  }

  updatePricing() {
    const tiers = window.DevFestData.tickets || [];
    tiers.forEach(tier => {
      const priceEl = document.getElementById(`price-${tier.id}`);
      if (priceEl) {
        const finalPrice = this.calculateFinalPrice(tier.price);
        if (this.activeDiscount > 0) {
          priceEl.innerHTML = `
            <span class="line-through text-slate-400 text-sm font-semibold mr-1">₹${tier.price}</span>
            <span>₹${finalPrice}</span>
          `;
        } else {
          priceEl.textContent = `₹${tier.price}`;
        }
      }
    });
  }

  initCheckoutModal() {
    const modal = document.getElementById('checkoutModal');
    const closeBtn = document.getElementById('closeCheckoutModalBtn');
    const form = document.getElementById('checkoutForm');

    if (closeBtn && modal) {
      closeBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
      });
    }

    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.add('hidden');
      });
    }

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleCheckoutSubmit();
      });
    }
  }

  openCheckoutModal() {
    const modal = document.getElementById('checkoutModal');
    const tierData = (window.DevFestData.tickets || []).find(t => t.id === this.selectedTier);
    if (!modal || !tierData) return;

    const modalTitle = document.getElementById('modalTierTitle');
    const modalPrice = document.getElementById('modalTierPrice');
    const finalPrice = this.calculateFinalPrice(tierData.price);

    if (modalTitle) modalTitle.textContent = tierData.title;
    if (modalPrice) modalPrice.textContent = `Total: ₹${finalPrice}`;

    // Hide confirmation screen if previously shown
    const stepForm = document.getElementById('checkoutFormStep');
    const stepSuccess = document.getElementById('checkoutSuccessStep');
    if (stepForm) stepForm.classList.remove('hidden');
    if (stepSuccess) stepSuccess.classList.add('hidden');

    modal.classList.remove('hidden');
  }

  handleCheckoutSubmit() {
    const name = document.getElementById('checkoutName').value.trim();
    const email = document.getElementById('checkoutEmail').value.trim();
    const college = document.getElementById('checkoutOrg').value.trim();
    const tshirt = document.getElementById('checkoutTshirt').value;

    const tierData = (window.DevFestData.tickets || []).find(t => t.id === this.selectedTier);
    const passId = "DF26-PRYJ-" + Math.floor(100000 + Math.random() * 900000);

    // Switch to success confirmation screen
    const stepForm = document.getElementById('checkoutFormStep');
    const stepSuccess = document.getElementById('checkoutSuccessStep');

    if (stepForm) stepForm.classList.add('hidden');
    if (stepSuccess) {
      stepSuccess.classList.remove('hidden');
      stepSuccess.innerHTML = `
        <div class="p-6 md:p-8 text-center">
          <div class="w-16 h-16 bg-green-100 border-2 border-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl animate-bounce">
            🎉
          </div>
          <span class="inline-block px-3 py-1 bg-blue-100 text-blue-800 border border-blue-400 rounded-full text-xs font-mono font-bold mb-2">
            REGISTRATION CONFIRMED
          </span>
          <h3 class="text-2xl font-black text-slate-900 mb-1">See you at Sangam, ${name}!</h3>
          <p class="text-slate-600 text-sm mb-6">
            Your official pass for <strong>DevFest Prayagraj 2026</strong> has been reserved. A confirmation email with QR gate pass has been sent to <strong>${email}</strong>.
          </p>

          <!-- Digital Pass Ticket Preview -->
          <div class="bg-slate-50 border-2 border-dashed border-slate-900 p-5 rounded-2xl max-w-sm mx-auto text-left mb-6 shadow-[3px_3px_0px_#1E1E1E]">
            <div class="flex justify-between items-start mb-3">
              <div>
                <span class="text-[10px] font-mono font-bold text-slate-400 uppercase">PASS CATEGORY</span>
                <div class="font-extrabold text-sm text-slate-900">${tierData.title}</div>
              </div>
              <span class="px-2 py-0.5 bg-yellow-400 text-slate-900 border border-black rounded text-[10px] font-mono font-bold">
                CONFIRMED
              </span>
            </div>
            <div class="grid grid-cols-2 gap-2 text-xs mb-3">
              <div>
                <span class="text-[10px] text-slate-400">DELEGATE</span>
                <div class="font-bold text-slate-800">${name}</div>
              </div>
              <div>
                <span class="text-[10px] text-slate-400">INSTITUTION</span>
                <div class="font-bold text-slate-800">${college || 'Innovator'}</div>
              </div>
              <div>
                <span class="text-[10px] text-slate-400">DATE</span>
                <div class="font-bold text-slate-800">Dec 12, 2026</div>
              </div>
              <div>
                <span class="text-[10px] text-slate-400">PASS ID</span>
                <div class="font-bold font-mono text-blue-600">${passId}</div>
              </div>
            </div>
            <div class="text-[11px] font-medium text-slate-500 pt-2 border-t border-slate-200">
              📍 MNNIT MP Hall Auditorium • Teliarganj, Prayagraj (211004)
            </div>
          </div>

          <div class="flex flex-col sm:flex-row gap-3 justify-center">
            <button onclick="window.DevFestTicketsInstance.downloadTicketPass('${name}', '${passId}', '${tierData.title}')" class="px-5 py-2.5 bg-black hover:bg-slate-800 text-white font-bold rounded-xl border-2 border-black shadow-[3px_3px_0px_#4285F4] transition-all text-sm flex items-center justify-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download Pass (PDF)
            </button>
            <button onclick="document.getElementById('checkoutModal').classList.add('hidden')" class="px-5 py-2.5 bg-white hover:bg-slate-100 text-slate-800 font-bold rounded-xl border-2 border-black text-sm">
              Close
            </button>
          </div>
        </div>
      `;
    }

    // Mega Confetti explosion!
    if (window.confetti) {
      window.confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.5 },
        colors: ['#4285F4', '#EA4335', '#FBBC04', '#34A853']
      });
    }

    if (window.DevFestMain && window.DevFestMain.playPopSound) {
      window.DevFestMain.playPopSound();
    }
  }

  downloadTicketPass(name, passId, tierTitle) {
    alert(`🎟️ Downloading DevFest Prayagraj Pass for ${name} [${passId}]... Have your QR code ready at MNNIT Registration Desk on Dec 12!`);
  }
}

window.DevFestTickets = DevFestTickets;
