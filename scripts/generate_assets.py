import os
from PIL import Image, ImageDraw, ImageFont

os.makedirs('assets/icons', exist_ok=True)
os.makedirs('assets/prayagraj', exist_ok=True)
os.makedirs('assets/speakers', exist_ok=True)
os.makedirs('assets/team', exist_ok=True)

# 1. Tech icons
icons = {
    'gemini': '''<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" fill="url(#gemini_grad)"/>
<defs>
<linearGradient id="gemini_grad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
<stop stop-color="#4285F4"/>
<stop offset="0.5" stop-color="#9B72CB"/>
<stop offset="1" stop-color="#D96570"/>
</linearGradient>
</defs>
</svg>''',

    'android': '''<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v6c0 .83.67 1.5 1.5 1.5S5 16.33 5 15.5v-6C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-6c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.72 1.24 12.88 1 12 1c-.88 0-1.72.24-2.64.63L7.88.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.3 1.3C6.75 3.26 5.5 5.22 5.5 7.5h13c0-2.28-1.25-4.24-2.97-5.34zM9 5.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" fill="#3DDC84"/>
</svg>''',

    'cloud': '''<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z" fill="#4285F4"/>
</svg>''',

    'flutter': '''<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.314 0L2.3 12 6.5 16.2 22.7 0h-8.386zm0 13.714L8.7 19.328 13.386 24H21.7l-7.386-7.371 4.7-2.915h-4.7z" fill="#02569B"/>
<path d="M14.314 13.714L10.3 17.728 14.314 21.743 18.328 17.728l-4.014-4.014z" fill="#29B6F6"/>
<path d="M14.314 21.743L13.386 24H21.7l-3.372-3.371-4.014 1.114z" fill="#01579B"/>
</svg>''',

    'firebase': '''<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.06 17.43L6.15 4.38c.07-.45.54-.7.91-.48l3.19 1.89-6.19 11.64zm14.73-.24L16.28 2.45c-.09-.54-.75-.75-1.12-.35L3.6 15.68l8.52 4.79c.5.28 1.11.28 1.61 0l5.06-2.84v-.44zm-7.66-8.2l-2.02-3.83c-.22-.42-.82-.42-1.04 0L2.14 16.14l8.99-7.15z" fill="#FFCA28"/>
<path d="M13.88 9.07l-2.75-5.22c-.22-.42-.82-.42-1.04 0L7.96 8.99l3.17 6.01 2.75-5.93z" fill="#FFA000"/>
<path d="M3.6 15.68l.46 1.75 8.06 4.54c.5.28 1.11.28 1.61 0l5.06-2.84-.11-.44L3.6 15.68z" fill="#F57C00"/>
</svg>''',

    'gdg': '''<svg viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.8 19.3c-2.4 2.5-6.2 2.5-8.6 0L1.7 10.8c-2.3-2.3-2.3-6.1 0-8.4 2.3-2.3 6.1-2.3 8.4 0l8.7 8.5c2.4 2.4 2.4 6.2 0 8.4z" fill="#4285F4"/>
<path d="M37.8 19.3c2.4 2.5 6.2 2.5 8.6 0l8.5-8.5c2.3-2.3 2.3-6.1 0-8.4-2.3-2.3-6.1-2.3-8.4 0l-8.7 8.5c-2.4 2.4-2.4 6.2 0 8.4z" fill="#EA4335"/>
<path d="M28.3 4.7c-2.4-2.4-6.2-2.4-8.6 0l-8.5 8.5c-2.3 2.3-2.3 6.1 0 8.4 2.3 2.3 6.1 2.3 8.4 0l8.7-8.5c2.4-2.4 2.4-6.2 0-8.4z" fill="#FBBC04"/>
<path d="M19.7 19.3c2.4 2.4 6.2 2.4 8.6 0l8.5-8.5c2.3-2.3 2.3-6.1 0-8.4-2.3-2.3-6.1-2.3-8.4 0l-8.7 8.5c-2.4 2.4-2.4 6.2 0 8.4z" fill="#34A853"/>
</svg>''',

    'chrome': '''<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10" stroke="#1E1E1E" stroke-width="1.5" fill="#FFFFFF"/>
<circle cx="12" cy="12" r="4.5" fill="#4285F4"/>
<path d="M12 2a10 10 0 0 1 8.66 5H12" stroke="#EA4335" stroke-width="2.5" stroke-linecap="round"/>
<path d="M20.66 7a10 10 0 0 1-5 13.66L12 12" stroke="#FBBC04" stroke-width="2.5" stroke-linecap="round"/>
<path d="M15.66 20.66A10 10 0 0 1 3.34 12H12" stroke="#34A853" stroke-width="2.5" stroke-linecap="round"/>
</svg>'''
}

for name, svg in icons.items():
    with open(f'assets/icons/{name}.svg', 'w', encoding='utf-8') as f:
        f.write(svg.strip())

# 2. Prayagraj Bridge SVG (New Yamuna Bridge - Naini Cable Stayed Bridge with Google Colors)
bridge_svg = '''<svg viewBox="0 0 800 240" fill="none" xmlns="http://www.w3.org/2000/svg">
<!-- River water background gradient -->
<rect y="170" width="800" height="70" fill="url(#river_grad)"/>
<!-- Sangam wave ripples -->
<path d="M0 178 Q 100 174 200 178 T 400 178 T 600 178 T 800 178" stroke="#57CAFF" stroke-width="2.5" stroke-dasharray="6,6" fill="none"/>
<path d="M0 195 Q 120 190 240 195 T 480 195 T 720 195 T 800 195" stroke="#5CDB6D" stroke-width="2" stroke-dasharray="8,8" fill="none"/>
<path d="M0 215 Q 80 210 160 215 T 320 215 T 480 215 T 640 215 T 800 215" stroke="#FFD427" stroke-width="2" stroke-dasharray="4,6" fill="none"/>

<!-- Bridge Deck -->
<rect x="0" y="160" width="800" height="12" rx="3" fill="#1E1E1E"/>
<rect x="0" y="163" width="800" height="3" fill="#F9AB00" stroke-dasharray="20,15"/>

<!-- Bridge Piers / Pillars -->
<rect x="180" y="165" width="28" height="35" rx="2" fill="#5F6368"/>
<rect x="580" y="165" width="28" height="35" rx="2" fill="#5F6368"/>

<!-- Main Suspension Pylons (Naini Cable Stayed Bridge) -->
<!-- Pylon 1 (Left Pylon) -->
<polygon points="190,165 194,25 200,25 204,165" fill="#4285F4"/>
<polygon points="191,25 203,25 197,10" fill="#EA4335"/>
<circle cx="197" cy="30" r="4" fill="#FBBC04"/>

<!-- Pylon 2 (Right Pylon) -->
<polygon points="590,165 594,25 600,25 604,165" fill="#34A853"/>
<polygon points="591,25 603,25 597,10" fill="#EA4335"/>
<circle cx="597" cy="30" r="4" fill="#4285F4"/>

<!-- Cable Stays Left Pylon (Google Blue / Red / Yellow / Green Cables) -->
<!-- Left side cables of Pylon 1 -->
<line x1="197" y1="40" x2="60" y2="160" stroke="#4285F4" stroke-width="2" opacity="0.85"/>
<line x1="197" y1="55" x2="90" y2="160" stroke="#EA4335" stroke-width="2" opacity="0.85"/>
<line x1="197" y1="75" x2="120" y2="160" stroke="#FBBC04" stroke-width="2" opacity="0.85"/>
<line x1="197" y1="95" x2="150" y2="160" stroke="#34A853" stroke-width="2" opacity="0.85"/>
<!-- Right side cables of Pylon 1 -->
<line x1="197" y1="40" x2="330" y2="160" stroke="#4285F4" stroke-width="2" opacity="0.85"/>
<line x1="197" y1="55" x2="300" y2="160" stroke="#EA4335" stroke-width="2" opacity="0.85"/>
<line x1="197" y1="75" x2="270" y2="160" stroke="#FBBC04" stroke-width="2" opacity="0.85"/>
<line x1="197" y1="95" x2="240" y2="160" stroke="#34A853" stroke-width="2" opacity="0.85"/>

<!-- Cable Stays Right Pylon -->
<!-- Left side cables of Pylon 2 -->
<line x1="597" y1="40" x2="460" y2="160" stroke="#34A853" stroke-width="2" opacity="0.85"/>
<line x1="597" y1="55" x2="490" y2="160" stroke="#FBBC04" stroke-width="2" opacity="0.85"/>
<line x1="597" y1="75" x2="520" y2="160" stroke="#EA4335" stroke-width="2" opacity="0.85"/>
<line x1="597" y1="95" x2="550" y2="160" stroke="#4285F4" stroke-width="2" opacity="0.85"/>
<!-- Right side cables of Pylon 2 -->
<line x1="597" y1="40" x2="730" y2="160" stroke="#34A853" stroke-width="2" opacity="0.85"/>
<line x1="597" y1="55" x2="700" y2="160" stroke="#FBBC04" stroke-width="2" opacity="0.85"/>
<line x1="597" y1="75" x2="670" y2="160" stroke="#EA4335" stroke-width="2" opacity="0.85"/>
<line x1="597" y1="95" x2="640" y2="160" stroke="#4285F4" stroke-width="2" opacity="0.85"/>

<!-- Sangam Wooden Boat with Google Sail -->
<g transform="translate(365, 182)">
  <path d="M0 14 C 15 14 55 14 70 14 C 64 24 10 24 0 14 Z" fill="#8D6E63" stroke="#5D4037" stroke-width="2"/>
  <line x1="35" y1="14" x2="35" y2="-12" stroke="#4E342E" stroke-width="2.5"/>
  <polygon points="35,-10 60,4 35,4" fill="#4285F4"/>
  <polygon points="35,4 54,12 35,12" fill="#EA4335"/>
  <circle cx="20" cy="11" r="3.5" fill="#3DDC84"/> <!-- Little Android head -->
  <line x1="18" y1="7" x2="16" y2="4" stroke="#3DDC84" stroke-width="1.5"/>
  <line x1="22" y1="7" x2="24" y2="4" stroke="#3DDC84" stroke-width="1.5"/>
</g>

<!-- Siberian Gulls flying over Sangam -->
<path d="M120 40 Q 125 35 130 40 Q 135 35 140 40" stroke="#1E1E1E" stroke-width="2" fill="none" stroke-linecap="round"/>
<path d="M145 28 Q 150 24 155 28 Q 160 24 165 28" stroke="#1E1E1E" stroke-width="1.8" fill="none" stroke-linecap="round"/>
<path d="M680 50 Q 685 45 690 50 Q 695 45 700 50" stroke="#1E1E1E" stroke-width="2" fill="none" stroke-linecap="round"/>

<defs>
<linearGradient id="river_grad" x1="0" y1="170" x2="0" y2="240" gradientUnits="userSpaceOnUse">
<stop stop-color="#E8F0FE"/>
<stop offset="0.5" stop-color="#D2E3FC"/>
<stop offset="1" stop-color="#AECBFA"/>
</linearGradient>
</defs>
</svg>'''

with open('assets/prayagraj/bridge.svg', 'w', encoding='utf-8') as f:
    f.write(bridge_svg.strip())

# 3. Prayagraj Sangam Confluence Flow Illustration SVG
sangam_svg = '''<svg viewBox="0 0 600 300" fill="none" xmlns="http://www.w3.org/2000/svg">
<!-- Three Sacred Rivers Merging into Innovation -->
<defs>
  <linearGradient id="ganga" x1="0" y1="0" x2="300" y2="150" gradientUnits="userSpaceOnUse">
    <stop stop-color="#34A853"/>
    <stop offset="1" stop-color="#5CDB6D"/>
  </linearGradient>
  <linearGradient id="yamuna" x1="0" y1="300" x2="300" y2="150" gradientUnits="userSpaceOnUse">
    <stop stop-color="#4285F4"/>
    <stop offset="1" stop-color="#57CAFF"/>
  </linearGradient>
  <linearGradient id="saraswati" x1="0" y1="150" x2="300" y2="150" gradientUnits="userSpaceOnUse">
    <stop stop-color="#FBBC04"/>
    <stop offset="1" stop-color="#FFE7A5"/>
  </linearGradient>
  <linearGradient id="confluence" x1="300" y1="150" x2="600" y2="150" gradientUnits="userSpaceOnUse">
    <stop stop-color="#4285F4"/>
    <stop offset="0.33" stop-color="#34A853"/>
    <stop offset="0.66" stop-color="#FBBC04"/>
    <stop offset="1" stop-color="#EA4335"/>
  </linearGradient>
</defs>

<!-- River Stream 1: Ganga (Sacred Green / Community) -->
<path d="M0 40 C 150 40, 200 120, 300 135" stroke="url(#ganga)" stroke-width="26" stroke-linecap="round" fill="none"/>
<text x="30" y="30" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="14" fill="#137333">🌊 GANGA (COMMUNITY)</text>

<!-- River Stream 2: Saraswati (Golden Light / Knowledge & AI) -->
<path d="M0 150 C 150 150, 220 150, 300 150" stroke="url(#saraswati)" stroke-width="18" stroke-linecap="round" fill="none" stroke-dasharray="10 6"/>
<text x="30" y="140" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="14" fill="#B06000">✨ SARASWATI (INTELLIGENCE & AI)</text>

<!-- River Stream 3: Yamuna (Deep Blue / Code & Cloud) -->
<path d="M0 260 C 150 260, 200 180, 300 165" stroke="url(#yamuna)" stroke-width="26" stroke-linecap="round" fill="none"/>
<text x="30" y="285" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="14" fill="#1A73E8">⚡ YAMUNA (CODE & CLOUD)</text>

<!-- Confluence Swirl (Triveni Sangam) -->
<circle cx="300" cy="150" r="32" fill="#FFFFFF" stroke="#1E1E1E" stroke-width="3"/>
<circle cx="300" cy="150" r="26" fill="#F8F9FA"/>
<!-- Rotary Sangam Glyphs -->
<path d="M290 142 L310 142 L300 158 Z" fill="#EA4335"/>
<circle cx="300" cy="150" r="8" fill="#4285F4"/>

<!-- Unified DevFest River: Outflow into Future Innovation -->
<path d="M300 150 C 400 150, 450 110, 600 110" stroke="url(#confluence)" stroke-width="32" stroke-linecap="round" fill="none"/>
<path d="M300 150 C 400 150, 450 190, 600 190" stroke="url(#confluence)" stroke-width="24" stroke-linecap="round" fill="none"/>

<text x="370" y="100" font-family="'Plus Jakarta Sans', sans-serif" font-weight="900" font-size="16" fill="#1E1E1E">🚀 DEVFEST PRAYAGRAJ 2026</text>
<text x="390" y="225" font-family="'Roboto Mono', monospace" font-weight="700" font-size="13" fill="#5F6368">&lt;CONFLUENCE_OF_CODE /&gt;</text>
</svg>'''

with open('assets/prayagraj/sangam-confluence.svg', 'w', encoding='utf-8') as f:
    f.write(sangam_svg.strip())

print('Prayagraj SVGs created!')
