import os

mnnit_svg = '''<svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Sky -->
  <rect width="400" height="250" fill="#E8F0FE"/>
  <!-- Morning Sun -->
  <circle cx="340" cy="50" r="26" fill="#FBBC04" opacity="0.8"/>
  <circle cx="340" cy="50" r="34" stroke="#FBBC04" stroke-width="2" stroke-dasharray="6,4" fill="none"/>
  
  <!-- MNNIT Lush Green Campus Lawns -->
  <rect x="0" y="180" width="400" height="70" fill="#A5D6A7"/>
  <path d="M10 180 Q 25 165 40 180 M60 180 Q 75 160 90 180 M310 180 Q 325 165 340 180 M360 180 Q 375 160 390 180" stroke="#2E7D32" stroke-width="3" fill="none"/>
  
  <!-- MNNIT Multi-Purpose Hall & Academic Grand Facade (Iconic Red-Brick & Cream Architecture) -->
  <!-- Main Hall Body -->
  <rect x="50" y="90" width="300" height="95" fill="#C62828" stroke="#1E1E1E" stroke-width="3"/>
  
  <!-- Architectural Cream Horizontal Bands & Columns -->
  <rect x="50" y="82" width="300" height="12" fill="#FFF9C4" stroke="#1E1E1E" stroke-width="2.5"/>
  <rect x="50" y="135" width="300" height="6" fill="#FFF9C4"/>
  
  <!-- Grand Auditorium Portico Entrance -->
  <polygon points="130,90 270,90 280,185 120,185" fill="#B71C1C" stroke="#1E1E1E" stroke-width="2.5"/>
  <polygon points="120,82 280,82 200,45" fill="#FBBC04" stroke="#1E1E1E" stroke-width="3"/>
  <text x="175" y="70" font-family="'Plus Jakarta Sans', sans-serif" font-weight="900" font-size="10" fill="#1E1E1E">MNNIT</text>
  
  <!-- Entrance Archway -->
  <path d="M170 185 L170 140 C 170 125 230 125 230 140 L230 185 Z" fill="#1E1E1E"/>
  <rect x="180" y="150" width="40" height="35" fill="#4285F4"/>
  
  <!-- Auditorium Window Louvers -->
  <rect x="65" y="105" width="20" height="40" rx="3" fill="#BBDEFB" stroke="#1E1E1E" stroke-width="1.5"/>
  <rect x="95" y="105" width="20" height="40" rx="3" fill="#BBDEFB" stroke="#1E1E1E" stroke-width="1.5"/>
  <rect x="285" y="105" width="20" height="40" rx="3" fill="#BBDEFB" stroke="#1E1E1E" stroke-width="1.5"/>
  <rect x="315" y="105" width="20" height="40" rx="3" fill="#BBDEFB" stroke="#1E1E1E" stroke-width="1.5"/>
  
  <!-- DevFest 2026 Welcome Banner on MNNIT Portico -->
  <rect x="145" y="100" width="110" height="24" rx="4" fill="#FFFFFF" stroke="#1E1E1E" stroke-width="2"/>
  <text x="153" y="116" font-family="'Plus Jakarta Sans', sans-serif" font-weight="900" font-size="10" fill="#1E1E1E">DEVFEST '26</text>
  <circle cx="240" cy="112" r="4" fill="#34A853"/>
  
  <!-- Google Flags on Rooftop -->
  <line x1="80" y1="82" x2="80" y2="60" stroke="#1E1E1E" stroke-width="2"/>
  <polygon points="80,60 98,66 80,72" fill="#4285F4"/>
  
  <line x1="320" y1="82" x2="320" y2="60" stroke="#1E1E1E" stroke-width="2"/>
  <polygon points="320,60 338,66 320,72" fill="#EA4335"/>
  
  <!-- Paved Walkway to MP Hall -->
  <polygon points="160,185 240,185 280,250 120,250" fill="#E0E0E0" stroke="#1E1E1E" stroke-width="2"/>
  
  <!-- Border -->
  <rect x="2" y="2" width="396" height="246" stroke="#1E1E1E" stroke-width="4" rx="12" fill="none"/>
</svg>'''

with open('assets/prayagraj/mnnit-campus.svg', 'w', encoding='utf-8') as f:
    f.write(mnnit_svg.strip())

print('MNNIT Campus SVG generated!')
