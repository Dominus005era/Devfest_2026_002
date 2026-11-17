/**
 * DevFest Prayagraj 2026 - Interactive Badge Generator Studio
 * Inspired by the acclaimed badge studios of DevFest Kolkata & Ahmedabad.
 * Renders high-resolution custom badges directly via HTML5 Canvas with instant download.
 */

class DevFestBadgeGenerator {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');

    // Canvas internal render resolution (Retina / print crispness)
    this.width = 800;
    this.height = 1000;
    this.canvas.width = this.width;
    this.canvas.height = this.height;

    // State
    this.state = {
      name: "Rahul Sharma",
      role: "Attendee",
      track: "ai",
      org: "MNNIT Prayagraj",
      frameStyle: "sangam", // sangam | official | modern
      photo: null,
      photoScale: 1.0,
      photoX: 0,
      photoY: 0,
      badgeId: "DF26-PRYJ-" + Math.floor(1000 + Math.random() * 9000)
    };

    // Preload default avatar
    this.loadDefaultAvatar();
    this.initEventListeners();
  }

  loadDefaultAvatar() {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = "assets/speakers/nikita-gandhi.svg";
    img.onload = () => {
      this.state.photo = img;
      this.render();
    };
  }

  initEventListeners() {
    // Input binders
    const bindInput = (id, prop, isNumber = false) => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener('input', (e) => {
          this.state[prop] = isNumber ? parseFloat(e.target.value) : e.target.value;
          this.render();
        });
      }
    };

    bindInput('badgeNameInput', 'name');
    bindInput('badgeRoleSelect', 'role');
    bindInput('badgeTrackSelect', 'track');
    bindInput('badgeOrgInput', 'org');
    bindInput('badgeFrameSelect', 'frameStyle');
    bindInput('badgeScaleSlider', 'photoScale', true);

    // File upload
    const uploadInput = document.getElementById('badgePhotoUpload');
    if (uploadInput) {
      uploadInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (event) => {
            const userImg = new Image();
            userImg.onload = () => {
              this.state.photo = userImg;
              this.state.photoScale = 1.0;
              const scaleSlider = document.getElementById('badgeScaleSlider');
              if (scaleSlider) scaleSlider.value = 1.0;
              this.render();
            };
            userImg.src = event.target.result;
          };
          reader.readAsDataURL(file);
        }
      });
    }

    // Avatar presets click handler
    document.querySelectorAll('.avatar-preset-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const src = btn.getAttribute('data-src');
        if (src) {
          const img = new Image();
          img.onload = () => {
            this.state.photo = img;
            this.state.photoScale = 1.0;
            const scaleSlider = document.getElementById('badgeScaleSlider');
            if (scaleSlider) scaleSlider.value = 1.0;
            this.render();
          };
          img.src = src;
        }
      });
    });

    // Download button
    const downloadBtn = document.getElementById('downloadBadgeBtn');
    if (downloadBtn) {
      downloadBtn.addEventListener('click', () => {
        this.downloadBadge();
      });
    }

    // Share button
    const shareBtn = document.getElementById('shareBadgeBtn');
    if (shareBtn) {
      shareBtn.addEventListener('click', () => {
        this.shareBadge();
      });
    }
  }

  getTrackColor(track) {
    switch (track) {
      case 'ai': return '#4285F4'; // Blue
      case 'cloud': return '#34A853'; // Green
      case 'mobile': return '#FBBC04'; // Yellow
      case 'web': return '#EA4335'; // Red
      default: return '#4285F4';
    }
  }

  getTrackName(track) {
    switch (track) {
      case 'ai': return 'AI & Machine Learning';
      case 'cloud': return 'Cloud & Infrastructure';
      case 'mobile': return 'Mobile & Android 15';
      case 'web': return 'Modern Web & Chrome';
      default: return 'General Developer';
    }
  }

  render() {
    const ctx = this.ctx;
    const w = this.width;
    const h = this.height;
    const trackColor = this.getTrackColor(this.state.track);

    ctx.clearRect(0, 0, w, h);

    // 1. Draw Badge Base Card with Neo-Brutalist Border
    ctx.save();
    ctx.fillStyle = "#FFFFFF";
    this.roundRect(ctx, 20, 20, w - 40, h - 40, 24);
    ctx.fill();

    // Bold border
    ctx.lineWidth = 6;
    ctx.strokeStyle = "#1E1E1E";
    this.roundRect(ctx, 20, 20, w - 40, h - 40, 24);
    ctx.stroke();

    // Lanyard Punch Hole at top
    ctx.fillStyle = "#E0E0E0";
    ctx.strokeStyle = "#1E1E1E";
    ctx.lineWidth = 3;
    this.roundRect(ctx, w / 2 - 40, 36, 80, 16, 8);
    ctx.fill();
    ctx.stroke();

    // 2. Top Header with Google DevFest Styling
    // Google color bars across top
    const barW = (w - 80) / 4;
    const colors = ["#4285F4", "#EA4335", "#FBBC04", "#34A853"];
    colors.forEach((c, i) => {
      ctx.fillStyle = c;
      ctx.fillRect(40 + (i * barW), 70, barW, 8);
    });

    // 3. DevFest Prayagraj 2026 Header Branding
    ctx.fillStyle = "#1E1E1E";
    ctx.font = "900 36px 'Plus Jakarta Sans', sans-serif";
    ctx.fillText("DevFest", 50, 125);

    ctx.fillStyle = trackColor;
    ctx.fillText("Prayagraj '26", 205, 125);

    // Tagline / Subtitle
    ctx.fillStyle = "#5F6368";
    ctx.font = "600 15px 'Roboto Mono', monospace";
    ctx.fillText("THE TRIVENI SANGAM OF TECH", 50, 150);

    // Location / Venue Tag
    ctx.font = "500 13px 'Plus Jakarta Sans', sans-serif";
    ctx.fillText("📍 MNNIT MP Hall • Prayagraj, UP", 50, 172);

    // Top Right Chapter Badge
    ctx.save();
    ctx.fillStyle = "#F1F3F4";
    ctx.strokeStyle = "#1E1E1E";
    ctx.lineWidth = 2;
    this.roundRect(ctx, w - 190, 105, 140, 48, 12);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#1E1E1E";
    ctx.font = "700 13px 'Plus Jakarta Sans', sans-serif";
    ctx.fillText("GDG Prayagraj", w - 180, 126);
    ctx.fillStyle = "#5F6368";
    ctx.font = "600 11px 'Roboto Mono', monospace";
    ctx.fillText("OFFICIAL PASS", w - 180, 142);
    ctx.restore();

    // 4. Central Photo Frame
    const photoCenterX = w / 2;
    const photoCenterY = 360;
    const photoRadius = 140;

    // Background circle
    ctx.save();
    ctx.beginPath();
    ctx.arc(photoCenterX, photoCenterY, photoRadius + 10, 0, Math.PI * 2);
    ctx.fillStyle = trackColor;
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = "#1E1E1E";
    ctx.stroke();
    ctx.restore();

    // Clip and draw image
    ctx.save();
    ctx.beginPath();
    ctx.arc(photoCenterX, photoCenterY, photoRadius, 0, Math.PI * 2);
    ctx.clip();
    ctx.fillStyle = "#F8F9FA";
    ctx.fill();

    if (this.state.photo) {
      const p = this.state.photo;
      const scale = this.state.photoScale;
      const drawW = (photoRadius * 2) * scale;
      const drawH = (photoRadius * 2) * scale;
      const drawX = photoCenterX - (drawW / 2) + this.state.photoX;
      const drawY = photoCenterY - (drawH / 2) + this.state.photoY;
      ctx.drawImage(p, drawX, drawY, drawW, drawH);
    }
    ctx.restore();

    // Photo Ring Border
    ctx.save();
    ctx.beginPath();
    ctx.arc(photoCenterX, photoCenterY, photoRadius, 0, Math.PI * 2);
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#1E1E1E";
    ctx.stroke();
    ctx.restore();

    // 5. Prayagraj Sangam Heritage Elements (if frameStyle === 'sangam')
    if (this.state.frameStyle === 'sangam') {
      // Wave lines beneath photo
      ctx.save();
      ctx.lineWidth = 3;
      ctx.strokeStyle = "#4285F4"; // Yamuna blue
      this.drawWave(ctx, 60, 520, w - 120, 8);
      ctx.strokeStyle = "#34A853"; // Ganga green
      this.drawWave(ctx, 60, 528, w - 120, 8);
      ctx.strokeStyle = "#FBBC04"; // Saraswati gold
      this.drawWave(ctx, 60, 536, w - 120, 8);
      ctx.restore();
    }

    // 6. Name and Role Typography
    ctx.fillStyle = "#1E1E1E";
    ctx.font = "900 40px 'Plus Jakarta Sans', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(this.state.name || "Developer Name", photoCenterX, 590);

    // Organization / College
    ctx.font = "600 18px 'Plus Jakarta Sans', sans-serif";
    ctx.fillStyle = "#5F6368";
    ctx.fillText(this.state.org || "Community Builder", photoCenterX, 622);

    // 7. Interactive Role Pill
    ctx.save();
    const roleText = (this.state.role || "ATTENDEE").toUpperCase();
    ctx.font = "800 16px 'Roboto Mono', monospace";
    const roleWidth = ctx.measureText(roleText).width + 48;
    const roleBoxX = photoCenterX - (roleWidth / 2);
    const roleBoxY = 645;

    ctx.fillStyle = trackColor;
    ctx.strokeStyle = "#1E1E1E";
    ctx.lineWidth = 3;
    this.roundRect(ctx, roleBoxX, roleBoxY, roleWidth, 36, 18);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#FFFFFF";
    ctx.fillText(roleText, photoCenterX, roleBoxY + 24);
    ctx.restore();

    // 8. Track Badge Pill
    ctx.save();
    const trackText = `TRACK: ${this.getTrackName(this.state.track).toUpperCase()}`;
    ctx.font = "700 13px 'Roboto Mono', monospace";
    ctx.fillStyle = "#1E1E1E";
    ctx.fillText(trackText, photoCenterX, 715);
    ctx.restore();

    // 9. Bottom Ticket Security Details (QR Code, ID & Barcode)
    // Separation line
    ctx.save();
    ctx.strokeStyle = "#E0E0E0";
    ctx.lineWidth = 2;
    ctx.setLineDash([8, 8]);
    ctx.beginPath();
    ctx.moveTo(40, 745);
    ctx.lineTo(w - 40, 745);
    ctx.stroke();
    ctx.restore();

    // Draw Mock QR Code Block
    const qrX = 50;
    const qrY = 765;
    const qrSize = 100;

    ctx.fillStyle = "#1E1E1E";
    ctx.fillRect(qrX, qrY, qrSize, qrSize);
    // Draw white QR cutout patterns
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(qrX + 6, qrY + 6, 28, 28);
    ctx.fillRect(qrX + qrSize - 34, qrY + 6, 28, 28);
    ctx.fillRect(qrX + 6, qrY + qrSize - 34, 28, 28);

    ctx.fillStyle = "#1E1E1E";
    ctx.fillRect(qrX + 12, qrY + 12, 16, 16);
    ctx.fillRect(qrX + qrSize - 28, qrY + 12, 16, 16);
    ctx.fillRect(qrX + 12, qrY + qrSize - 28, 16, 16);

    // Random QR modules
    ctx.fillStyle = "#FFFFFF";
    for (let row = 0; row < 6; row++) {
      for (let col = 0; col < 6; col++) {
        if ((row + col) % 2 === 0) {
          ctx.fillRect(qrX + 42 + (col * 8), qrY + 42 + (row * 8), 5, 5);
        }
      }
    }

    // Badge ID & Event Meta on right of QR
    ctx.textAlign = "left";
    ctx.fillStyle = "#1E1E1E";
    ctx.font = "800 16px 'Roboto Mono', monospace";
    ctx.fillText(`ID: ${this.state.badgeId}`, qrX + qrSize + 25, qrY + 28);

    ctx.font = "600 13px 'Plus Jakarta Sans', sans-serif";
    ctx.fillStyle = "#5F6368";
    ctx.fillText("DATE: DEC 12, 2026 • 09:00 AM IST", qrX + qrSize + 25, qrY + 54);
    ctx.fillText("VENUE: MNNIT MP Hall, Teliarganj", qrX + qrSize + 25, qrY + 74);
    ctx.fillText("GEO: 25.4925° N, 81.8639° E (MNNIT PRAYAGRAJ)", qrX + qrSize + 25, qrY + 94);

    // 10. Bottom Footer strip
    ctx.fillStyle = "#1E1E1E";
    ctx.fillRect(20, h - 85, w - 40, 65);

    ctx.fillStyle = "#FFFFFF";
    ctx.font = "700 14px 'Plus Jakarta Sans', sans-serif";
    ctx.fillText("GOOGLE DEVELOPER GROUP PRAYAGRAJ", 50, h - 45);

    ctx.textAlign = "right";
    ctx.font = "600 12px 'Roboto Mono', monospace";
    ctx.fillStyle = "#FBBC04";
    ctx.fillText("#DevFestPrayagraj #DevFest2026", w - 50, h - 45);

    ctx.restore();
  }

  drawWave(ctx, startX, y, length, amplitude) {
    ctx.beginPath();
    ctx.moveTo(startX, y);
    const step = 40;
    let up = true;
    for (let x = startX; x <= startX + length; x += step) {
      const cy = up ? y - amplitude : y + amplitude;
      ctx.quadraticCurveTo(x + step / 2, cy, x + step, y);
      up = !up;
    }
    ctx.stroke();
  }

  roundRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
  }

  downloadBadge() {
    const link = document.createElement('a');
    link.download = `DevFest-Prayagraj-2026-Badge-${this.state.name.replace(/\s+/g, '-')}.png`;
    link.href = this.canvas.toDataURL('image/png');
    link.click();

    // Trigger celebration confetti
    if (window.confetti) {
      window.confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#4285F4', '#EA4335', '#FBBC04', '#34A853']
      });
    }

    if (window.DevFestMain && window.DevFestMain.playPopSound) {
      window.DevFestMain.playPopSound();
    }
  }

  shareBadge() {
    const text = `I'm attending DevFest Prayagraj 2026 at MNNIT Grand Auditorium! 🚀 Join 1,200+ developers at the Triveni Sangam of Tech. Create your badge at: https://gdgprayagraj.com #DevFestPrayagraj #DevFest2026 #GDG`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(twitterUrl, '_blank');
  }
}

window.DevFestBadgeGenerator = DevFestBadgeGenerator;
