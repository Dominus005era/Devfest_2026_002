import os

os.makedirs('assets/sponsors', exist_ok=True)

sponsors = {
    'google-developers': '''<svg viewBox="0 0 240 60" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M22 30c-2.4 2.5-6.2 2.5-8.6 0L4.9 21.5c-2.3-2.3-2.3-6.1 0-8.4 2.3-2.3 6.1-2.3 8.4 0l8.7 8.5c2.4 2.4 2.4 6.2 0 8.4z" fill="#4285F4"/>
  <path d="M41 30c2.4 2.5 6.2 2.5 8.6 0l8.5-8.5c2.3-2.3 2.3-6.1 0-8.4-2.3-2.3-6.1-2.3-8.4 0l-8.7 8.5c-2.4 2.4-2.4 6.2 0 8.4z" fill="#EA4335"/>
  <path d="M31.5 15.4c-2.4-2.4-6.2-2.4-8.6 0l-8.5 8.5c-2.3 2.3-2.3 6.1 0 8.4 2.3 2.3 6.1 2.3 8.4 0l8.7-8.5c2.4-2.4 2.4-6.2 0-8.4z" fill="#FBBC04"/>
  <path d="M22.9 30c2.4 2.4 6.2 2.4 8.6 0l8.5-8.5c2.3-2.3 2.3-6.1 0-8.4-2.3-2.3-6.1-2.3-8.4 0l-8.7 8.5c-2.4 2.4-2.4 6.2 0 8.4z" fill="#34A853"/>
  <text x="68" y="32" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="16" fill="#1E1E1E">Google</text>
  <text x="68" y="46" font-family="'Plus Jakarta Sans', sans-serif" font-weight="500" font-size="12" fill="#5F6368">Developers</text>
</svg>''',

    'google-cloud': '''<svg viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(15, 14)">
    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" fill="#4285F4"/>
  </g>
  <text x="52" y="32" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="15" fill="#1E1E1E">Google Cloud</text>
  <text x="52" y="46" font-family="'Roboto Mono', monospace" font-weight="500" font-size="10" fill="#5F6368">Cloud Partner</text>
</svg>''',

    'github': '''<svg viewBox="0 0 180 60" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M28 14C19.16 14 12 21.16 12 30c0 7.08 4.58 13.06 10.94 15.18.8.14 1.1-.34 1.1-.76 0-.38-.02-1.62-.02-2.98-4.44.96-5.38-1.88-5.38-1.88-.72-1.84-1.78-2.34-1.78-2.34-1.46-.98.12-.96.12-.96 1.6.12 2.46 1.64 2.46 1.64 1.42 2.44 3.74 1.74 4.66 1.32.14-1.04.56-1.74 1.02-2.14-3.54-.4-7.26-1.78-7.26-7.9 0-1.74.62-3.16 1.64-4.28-.16-.4-.72-2.04.16-4.24 0 0 1.34-.42 4.4 1.64 1.28-.36 2.64-.54 4-.54s2.72.18 4 .54c3.06-2.06 4.4-1.64 4.4-1.64.88 2.2.32 3.84.16 4.24 1.02 1.12 1.64 2.54 1.64 4.28 0 6.14-3.74 7.48-7.3 7.88.58.5 1.1 1.48 1.1 3 0 2.16-.02 3.9-.02 4.44 0 .44.28.92 1.1.76C43.42 43.04 48 37.08 48 30c0-8.84-7.16-16-16-16z" fill="#24292E"/>
  <text x="56" y="34" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="16" fill="#1E1E1E">GitHub</text>
  <text x="56" y="47" font-family="'Roboto Mono', monospace" font-weight="500" font-size="9" fill="#5F6368">Dev Tool Partner</text>
</svg>''',

    'jetbrains': '''<svg viewBox="0 0 190 60" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="14" y="14" width="32" height="32" rx="4" fill="#000000"/>
  <path d="M19 41h10v3H19z" fill="#FE2857"/>
  <text x="18" y="27" font-family="'Roboto Mono', monospace" font-weight="800" font-size="11" fill="#FFFFFF">JB</text>
  <text x="54" y="33" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="15" fill="#1E1E1E">JetBrains</text>
  <text x="54" y="46" font-family="'Roboto Mono', monospace" font-weight="500" font-size="9" fill="#5F6368">IDE Partner</text>
</svg>''',

    'mnnit': '''<svg viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="28" cy="30" r="16" fill="#E8F0FE" stroke="#4285F4" stroke-width="2"/>
  <text x="21" y="34" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="11" fill="#1A73E8">MN</text>
  <text x="52" y="31" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="13" fill="#1E1E1E">GDG MNNIT</text>
  <text x="52" y="44" font-family="'Roboto Mono', monospace" font-weight="500" font-size="9" fill="#5F6368">Campus Partner</text>
</svg>''',

    'iiit-allahabad': '''<svg viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="28" cy="30" r="16" fill="#E6F4EA" stroke="#34A853" stroke-width="2"/>
  <text x="21" y="34" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="11" fill="#137333">IIIT</text>
  <text x="52" y="31" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="13" fill="#1E1E1E">GDG IIIT-A</text>
  <text x="52" y="44" font-family="'Roboto Mono', monospace" font-weight="500" font-size="9" fill="#5F6368">Campus Partner</text>
</svg>''',

    'uit-prayagraj': '''<svg viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="28" cy="30" r="16" fill="#FEF7E0" stroke="#FBBC04" stroke-width="2"/>
  <text x="22" y="34" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="11" fill="#B06000">UIT</text>
  <text x="52" y="31" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="13" fill="#1E1E1E">GDG UIT Prayagraj</text>
  <text x="52" y="44" font-family="'Roboto Mono', monospace" font-weight="500" font-size="9" fill="#5F6368">Host & Venue Partner</text>
</svg>'''
}

for name, svg in sponsors.items():
    with open(f'assets/sponsors/{name}.svg', 'w', encoding='utf-8') as f:
        f.write(svg.strip())

print('Sponsor SVGs created!')
