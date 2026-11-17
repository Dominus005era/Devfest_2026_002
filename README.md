# 🌊 DevFest Prayagraj 2026

> **"The Triveni Sangam of Tech: Where Code, Community & Intelligence Converge"**  
> Official Flagship Developer Conference organized by **Google Developer Group (GDG) Prayagraj**  
> 📍 **Venue:** Motilal Nehru National Institute of Technology (MNNIT) Prayagraj, MP Hall Auditorium, Teliarganj, Prayagraj, UP 211004  
> 📅 **Date:** Saturday, December 12, 2026 | 09:00 AM – 06:30 PM IST

---

## 🌟 Highlights & Creative Fusion

Inspired by the dynamic interactivity and movement of **DevFest Kolkata** and **DevFest Ahmedabad**, this website is built to provide an engaging user experience honoring **Prayagraj's heritage**:

- **Triveni Sangam of Tech Theme**: The sacred confluence of Ganga (Open Community), Yamuna (Code & Cloud), and Saraswati (AI & Deep Learning) represented as the 3 streams powering developer innovation.
- **Iconic Prayagraj Landmarks**:
  - Animated vector illustration of the **New Yamuna Cable-Stayed Bridge** with illuminated cable stays in Google Blue, Green, Yellow, and Red.
  - Sangam wooden river boats, flowing water waves, and soaring Siberian seagulls.
  - Interactive guides to **Anand Bhavan**, **Allahabad Fort & Ashoka Pillar**, and the **MNNIT Prayagraj Campus (MP Hall)** venue.
  - Prayagraj **Food Trail** highlighting *Loknath Ki Chaat*, *Netram Kachori & Jalebi*, *Surkha Amrood (Guava)*, and *Dehati Gulab Jamun*.
- **Interactive Badge Studio (The Kolkata & Ahmedabad Favorite)**:
  - Real-time HTML5 Canvas badge creator.
  - Attendees can upload their photo or choose instant developer avatars, select their role (Attendee, Speaker, Organizer, AI Champion, Student Innovator), track, and institution.
  - Instant high-resolution PNG download with confetti celebration and 1-click sharing to 𝕏 / LinkedIn.
- **Interactive Arcade Mini-Game ("Sangam Tech Catcher")**:
  - Browser-based game where players steer a Sangam boat to catch falling Google AI (Gemini), Android, Flutter, and Cloud badges while dodging bugs (`NullPointerException`, `404 Not Found`).
  - Score counter, combo multipliers, Web Audio synthesizer effects, and rank badges.
- **Interactive Laptop Sticker Board**:
  - Virtual laptop lid where attendees can drag, drop, and place authentic DevFest 2026 role stickers (*Developer, Builder, Designer, Researcher, Student, Product Manager*).
- **Filterable Multi-Track Agenda & Schedule**:
  - Filter across 4 tracks: **🤖 AI & Gemini**, **☁️ Google Cloud & DevOps**, **📱 Android & Flutter**, **🌐 Modern Web & Chrome**.
  - Real-time keyword search, session bookmarking (saved in `localStorage`), and **Add-to-Calendar** integration (.ics & Google Calendar).
- **Interactive Passes & Registration Checkout Simulator**:
  - 4 Tiers: *Student Innovator Pass (₹199)*, *Standard Developer Pass (₹399)*, *Pro Builder Pass (₹699)*, and *Community VIP Patron (₹1,299)*.
  - Live Coupon Code Validator (`PRAYAGRAJ26`, `DEVFEST26`, `SANGAM`, `MNNIT2026`, `MNNITSTUDENT`) with real-time recalculation and discount feedback.
  - Registration checkout modal that generates a digital pass ticket with QR code.
- **Light Theme & DevFest 2026 Brand Standard**:
  - Built with the official Google DevFest 2026 color palette (Blue `#4285F4`, Green `#34A853`, Yellow `#FBBC04`, Red `#EA4335`), Halftones, Pastels, and crisp Neo-Brutalist 2px/3px borders with offset drop shadows.

---

## ⚡ Tech Stack

As requested, the website avoids heavy, demanding server-side frameworks (like Next.js) while delivering animations, high interactivity, and cross-browser performance:

- **HTML5 & Modern Semantic Web Elements**
- **Tailwind CSS (via CDN)** with custom Google DevFest color palette extensions
- **Vanilla JavaScript (ES6+ Modules)** for performant state handling and zero build lag
- **HTML5 Canvas API** for real-time Badge Generation & 60FPS Arcade Game rendering
- **Web Audio API** for synthesized interactive sound effects (with mute/unmute control)
- **Canvas-Confetti** for celebratory particle effects

---

## 🚀 Running the Website Locally

### Method 1: Using the provided Python server (Recommended)
Run the following command from the workspace directory:
```bash
python serve.py
```
Then open your browser and navigate to:
```
http://localhost:8080/
```

### Method 2: Standard Python HTTP Server
```bash
python -m http.server 8080
```

### Method 3: Direct File Opening
You can also directly open `index.html` in Chrome, Edge, Safari, or Firefox without any server required!

---

## 📁 Project Directory Structure

```
DEVFEST 2026 Antigravity/
├── index.html                  # Main responsive single-page DevFest website
├── serve.py                    # Lightweight Python HTTP server launcher
├── README.md                   # Complete documentation
├── css/
│   └── styles.css              # Custom Neo-Brutalist styles, animations & typography
├── js/
│   ├── data.js                 # Central store: Sessions, Speakers, Team, FAQs, Guide
│   ├── main.js                 # Core controller, Countdown timer, Modals & Audio
│   ├── badge-generator.js      # Canvas-based DevFest Badge Studio with PNG export
│   ├── mini-game.js            # "Sangam Tech Catcher" interactive arcade game
│   ├── stickers.js             # Drag-and-drop laptop sticker board
│   ├── schedule.js             # Filterable agenda, search & calendar generator
│   ├── tickets.js              # Pass selector, coupon validator & checkout modal
│   └── prayagraj-tour.js       # 4-tab Prayagraj venue, transit & heritage explorer
├── assets/
│   ├── brand/                  # Official DevFest 2026 wordmarks, lockups & Key Art
│   ├── badges/                 # Official Attendee, Speaker & Organizer badges
│   ├── stickers/               # Official DevFest role stickers (Developer, Builder, etc.)
│   ├── gifs/                   # Official DevFest 2026 animated motion graphics
│   ├── icons/                  # Google Tech SVGs (Gemini, Android, Cloud, Flutter, Firebase)
│   ├── prayagraj/              # New Yamuna Cable Bridge, Sangam Confluence & landmarks
│   ├── speakers/               # Speaker profile portraits
│   ├── team/                   # GDG Prayagraj leadership & core team portraits
│   └── sponsors/               # Google Developers, Cloud, GitHub & Campus chapters
└── Deliverables/               # Original source assets, brand guide & templates
```

---

## 👥 GDG Prayagraj Core Leadership

- **Ankit Kumar Verma** – Lead Organizer
- **Hridyesh Gupta** – Co-Organizer
- **Agamya Samuel** – Web & Development Lead
- **Aditya Kumar** – Core Team Lead
- **Sarthak Singh** – Operations & Logistics Lead
- **Mohd Shadab** – Technical Lead
- **Anshuman Rai** – Creative & Design Lead
- **Manvi Kesarwani** – Community & Women Techmakers (WTM) Lead

---
*Built with ❤️ for the developer community by GDG Prayagraj.*
