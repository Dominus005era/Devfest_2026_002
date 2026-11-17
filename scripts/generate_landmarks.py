import os

os.makedirs('assets/prayagraj', exist_ok=True)

landmarks = {
    'sangam-ghat': '''<svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Sky -->
  <rect width="400" height="250" fill="#E8F0FE"/>
  <!-- Sun -->
  <circle cx="320" cy="60" r="30" fill="#FBBC04" opacity="0.8"/>
  <circle cx="320" cy="60" r="38" stroke="#FBBC04" stroke-width="2" stroke-dasharray="6,4" fill="none"/>
  <!-- Flying seagulls -->
  <path d="M100 45 Q 105 40 110 45 Q 115 40 120 45" stroke="#1E1E1E" stroke-width="2" fill="none"/>
  <path d="M130 35 Q 134 31 138 35 Q 142 31 146 35" stroke="#1E1E1E" stroke-width="1.8" fill="none"/>
  <path d="M80 60 Q 84 56 88 60 Q 92 56 96 60" stroke="#1E1E1E" stroke-width="1.5" fill="none"/>
  
  <!-- Temple Spires on Ghat -->
  <polygon points="50,140 65,70 80,140" fill="#EA4335"/>
  <polygon points="62,70 68,70 65,55" fill="#FBBC04"/>
  <polygon points="90,140 105,85 120,140" fill="#F9AB00"/>
  <polygon points="102,85 108,85 105,72" fill="#EA4335"/>
  <rect x="40" y="140" width="90" height="30" fill="#D7CCC8"/>
  
  <!-- Ghat Stone Steps -->
  <rect x="0" y="160" width="400" height="8" fill="#BCAAA4"/>
  <rect x="0" y="168" width="400" height="8" fill="#A1887F"/>
  <rect x="0" y="176" width="400" height="10" fill="#8D6E63"/>
  
  <!-- Sangam Confluence Waters -->
  <rect x="0" y="186" width="400" height="64" fill="#81D4FA"/>
  <path d="M0 196 Q 100 190 200 196 T 400 196" stroke="#4285F4" stroke-width="3" fill="none"/>
  <path d="M0 212 Q 100 206 200 212 T 400 212" stroke="#34A853" stroke-width="3" stroke-dasharray="10,6" fill="none"/>
  <path d="M0 228 Q 100 222 200 228 T 400 228" stroke="#FBBC04" stroke-width="2.5" stroke-dasharray="8,6" fill="none"/>
  
  <!-- Sangam Wooden Boat with Flag -->
  <g transform="translate(220, 180)">
    <path d="M0 16 C 20 16 70 16 90 16 C 80 30 15 30 0 16 Z" fill="#6D4C41" stroke="#3E2723" stroke-width="2"/>
    <line x1="45" y1="16" x2="45" y2="-12" stroke="#3E2723" stroke-width="3"/>
    <polygon points="45,-10 75,4 45,4" fill="#4285F4"/>
    <polygon points="45,4 68,14 45,14" fill="#EA4335"/>
    <circle cx="28" cy="12" r="5" fill="#3DDC84"/>
  </g>
  <!-- Frame Border -->
  <rect x="2" y="2" width="396" height="246" stroke="#1E1E1E" stroke-width="4" rx="12" fill="none"/>
</svg>''',

    'naini-bridge': '''<svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Sky -->
  <rect width="400" height="250" fill="#E8F0FE"/>
  <!-- Bridge Tower (Single Cable Pylon) -->
  <polygon points="190,200 195,30 205,30 210,200" fill="#4285F4"/>
  <polygon points="192,30 208,30 200,12" fill="#EA4335"/>
  <circle cx="200" cy="40" r="5" fill="#FBBC04"/>
  
  <!-- Stay Cables Left -->
  <line x1="200" y1="45" x2="40" y2="185" stroke="#4285F4" stroke-width="2"/>
  <line x1="200" y1="65" x2="75" y2="185" stroke="#EA4335" stroke-width="2"/>
  <line x1="200" y1="85" x2="110" y2="185" stroke="#FBBC04" stroke-width="2"/>
  <line x1="200" y1="105" x2="145" y2="185" stroke="#34A853" stroke-width="2"/>
  
  <!-- Stay Cables Right -->
  <line x1="200" y1="45" x2="360" y2="185" stroke="#4285F4" stroke-width="2"/>
  <line x1="200" y1="65" x2="325" y2="185" stroke="#EA4335" stroke-width="2"/>
  <line x1="200" y1="85" x2="290" y2="185" stroke="#FBBC04" stroke-width="2"/>
  <line x1="200" y1="105" x2="255" y2="185" stroke="#34A853" stroke-width="2"/>
  
  <!-- Bridge Deck -->
  <rect x="0" y="180" width="400" height="14" rx="2" fill="#1E1E1E"/>
  <line x1="0" y1="187" x2="400" y2="187" stroke="#FBBC04" stroke-width="2" stroke-dasharray="12,10"/>
  
  <!-- River below -->
  <rect x="0" y="194" width="400" height="56" fill="#81D4FA"/>
  <path d="M0 210 Q 100 204 200 210 T 400 210" stroke="#4285F4" stroke-width="2.5" fill="none"/>
  <path d="M0 225 Q 100 219 200 225 T 400 225" stroke="#34A853" stroke-width="2" fill="none"/>
  <!-- Pier base -->
  <rect x="186" y="190" width="28" height="30" fill="#78909C" stroke="#1E1E1E" stroke-width="2"/>
  <!-- Frame Border -->
  <rect x="2" y="2" width="396" height="246" stroke="#1E1E1E" stroke-width="4" rx="12" fill="none"/>
</svg>''',

    'anand-bhavan': '''<svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Sky -->
  <rect width="400" height="250" fill="#E8F0FE"/>
  <!-- Lush Gardens -->
  <rect x="0" y="190" width="400" height="60" fill="#A5D6A7"/>
  <path d="M20 190 Q 30 175 40 190 M50 190 Q 60 170 70 190 M330 190 Q 340 170 350 190 M360 190 Q 370 175 380 190" stroke="#34A853" stroke-width="3" fill="none"/>
  <!-- Mansion Architecture -->
  <!-- Main building base -->
  <rect x="70" y="100" width="260" height="90" fill="#FFFFFF" stroke="#1E1E1E" stroke-width="3"/>
  <!-- Classical Pillars -->
  <rect x="90" y="120" width="12" height="70" fill="#E0E0E0" stroke="#1E1E1E" stroke-width="2"/>
  <rect x="120" y="120" width="12" height="70" fill="#E0E0E0" stroke="#1E1E1E" stroke-width="2"/>
  <rect x="268" y="120" width="12" height="70" fill="#E0E0E0" stroke="#1E1E1E" stroke-width="2"/>
  <rect x="298" y="120" width="12" height="70" fill="#E0E0E0" stroke="#1E1E1E" stroke-width="2"/>
  <!-- Entrance Arch -->
  <path d="M170 190 L170 145 C 170 130 230 130 230 145 L230 190 Z" fill="#4285F4" stroke="#1E1E1E" stroke-width="2"/>
  <!-- Second Floor / Balcony -->
  <rect x="90" y="80" width="220" height="25" fill="#F8F9FA" stroke="#1E1E1E" stroke-width="2.5"/>
  <line x1="90" y1="88" x2="310" y2="88" stroke="#EA4335" stroke-width="2"/>
  <!-- Iconic Center Dome & Clock Tower of Anand Bhavan -->
  <path d="M165 80 C 165 45 235 45 235 80 Z" fill="#FBBC04" stroke="#1E1E1E" stroke-width="3"/>
  <line x1="200" y1="45" x2="200" y2="30" stroke="#1E1E1E" stroke-width="2"/>
  <polygon points="200,30 215,35 200,40" fill="#EA4335"/>
  <!-- Windows -->
  <rect x="100" y="130" width="15" height="22" rx="7" fill="#4285F4" stroke="#1E1E1E" stroke-width="1.5"/>
  <rect x="285" y="130" width="15" height="22" rx="7" fill="#34A853" stroke="#1E1E1E" stroke-width="1.5"/>
  <!-- Frame Border -->
  <rect x="2" y="2" width="396" height="246" stroke="#1E1E1E" stroke-width="4" rx="12" fill="none"/>
</svg>''',

    'uit-auditorium': '''<svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Sky -->
  <rect width="400" height="250" fill="#E8F0FE"/>
  <!-- Modern Tech Campus Plinth -->
  <rect x="0" y="185" width="400" height="65" fill="#ECEFF1"/>
  <!-- Modern Geometric Auditorium Façade -->
  <polygon points="60,185 80,85 320,85 340,185" fill="#FFFFFF" stroke="#1E1E1E" stroke-width="3"/>
  <!-- High Glass Curtain Wall (Blue Tint) -->
  <polygon points="90,185 105,100 295,100 310,185" fill="#BBDEFB" stroke="#4285F4" stroke-width="2"/>
  <!-- Glass Mullions -->
  <line x1="145" y1="100" x2="145" y2="185" stroke="#1976D2" stroke-width="2"/>
  <line x1="200" y1="100" x2="200" y2="185" stroke="#1976D2" stroke-width="2"/>
  <line x1="255" y1="100" x2="255" y2="185" stroke="#1976D2" stroke-width="2"/>
  <line x1="100" y1="140" x2="300" y2="140" stroke="#1976D2" stroke-width="1.5"/>
  
  <!-- Grand Canopy Entrance with DevFest Google Colors -->
  <polygon points="120,185 140,150 260,150 280,185" fill="#EA4335" stroke="#1E1E1E" stroke-width="2.5"/>
  <rect x="155" y="160" width="90" height="25" fill="#FBBC04" stroke="#1E1E1E" stroke-width="2"/>
  <text x="165" y="177" font-family="'Plus Jakarta Sans', sans-serif" font-weight="900" font-size="11" fill="#1E1E1E">DEVFEST '26</text>
  
  <!-- Campus Pathway & Green Landscaping -->
  <polygon points="150,185 250,185 290,250 110,250" fill="#CFD8DC"/>
  <path d="M30 200 C 40 185 50 200 60 190" stroke="#34A853" stroke-width="4" stroke-linecap="round"/>
  <path d="M340 200 C 350 185 360 200 370 190" stroke="#34A853" stroke-width="4" stroke-linecap="round"/>
  
  <!-- Frame Border -->
  <rect x="2" y="2" width="396" height="246" stroke="#1E1E1E" stroke-width="4" rx="12" fill="none"/>
</svg>'''
}

for name, svg in landmarks.items():
    with open(f'assets/prayagraj/{name}.svg', 'w', encoding='utf-8') as f:
        f.write(svg.strip())

print('Prayagraj landmark SVGs created!')
