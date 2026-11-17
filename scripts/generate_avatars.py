import os

os.makedirs('assets/speakers', exist_ok=True)
os.makedirs('assets/team', exist_ok=True)

speakers = [
    {"id": "nikita-gandhi", "name": "Nikita Gandhi", "role": "Google Community Lead", "bg": "#E8F0FE", "accent": "#4285F4", "hair": "#2D3748", "skin": "#F7D7B5", "glasses": False, "gender": "f"},
    {"id": "kartik-derasari", "name": "Kartik Derasari", "role": "GDE Cloud", "bg": "#E6F4EA", "accent": "#34A853", "hair": "#1A202C", "skin": "#DDA675", "glasses": True, "gender": "m"},
    {"id": "pooja-bhaumik", "name": "Pooja Bhaumik", "role": "GDE Flutter & Dart", "bg": "#FEF7E0", "accent": "#FBBC04", "hair": "#4A5568", "skin": "#F2C299", "glasses": True, "gender": "f"},
    {"id": "sayak-paul", "name": "Sayak Paul", "role": "ML & Hugging Face GDE", "bg": "#FCE8E6", "accent": "#EA4335", "hair": "#171923", "skin": "#DDA675", "glasses": True, "gender": "m"},
    {"id": "archana-iyer", "name": "Archana Iyer", "role": "AI Research Scientist", "bg": "#E8F0FE", "accent": "#4285F4", "hair": "#2C3E50", "skin": "#E9B68A", "glasses": False, "gender": "f"},
    {"id": "abhishek-doshi", "name": "Abhishek Doshi", "role": "GDE Flutter", "bg": "#E6F4EA", "accent": "#34A853", "hair": "#23272A", "skin": "#E3A857", "glasses": False, "gender": "m"},
    {"id": "dr-sonali-agarwal", "name": "Dr. Sonali Agarwal", "role": "Professor, IIIT Allahabad", "bg": "#FEF7E0", "accent": "#FBBC04", "hair": "#2D3748", "skin": "#F7D7B5", "glasses": True, "gender": "f"},
    {"id": "devendra-singh", "name": "Devendra Singh", "role": "Staff Architect", "bg": "#FCE8E6", "accent": "#EA4335", "hair": "#1A202C", "skin": "#DDA675", "glasses": False, "gender": "m"}
]

team = [
    {"id": "ankit-verma", "name": "Ankit Kumar Verma", "role": "Lead Organizer", "bg": "#E8F0FE", "accent": "#4285F4", "hair": "#1A202C", "skin": "#DDA675", "glasses": False, "gender": "m"},
    {"id": "hridyesh-gupta", "name": "Hridyesh Gupta", "role": "Co-Organizer", "bg": "#E6F4EA", "accent": "#34A853", "hair": "#2D3748", "skin": "#E3A857", "glasses": True, "gender": "m"},
    {"id": "agamya-samuel", "name": "Agamya Samuel", "role": "Web & Dev Lead", "bg": "#FEF7E0", "accent": "#FBBC04", "hair": "#1A202C", "skin": "#F7D7B5", "glasses": False, "gender": "m"},
    {"id": "aditya-kumar", "name": "Aditya Kumar", "role": "Core Team Lead", "bg": "#FCE8E6", "accent": "#EA4335", "hair": "#2C3E50", "skin": "#DDA675", "glasses": True, "gender": "m"},
    {"id": "sarthak-singh", "name": "Sarthak Singh", "role": "Operations Lead", "bg": "#E8F0FE", "accent": "#4285F4", "hair": "#171923", "skin": "#E9B68A", "glasses": False, "gender": "m"},
    {"id": "mohd-shadab", "name": "Mohd Shadab", "role": "Technical Lead", "bg": "#E6F4EA", "accent": "#34A853", "hair": "#1A202C", "skin": "#DDA675", "glasses": True, "gender": "m"},
    {"id": "anshuman-rai", "name": "Anshuman Rai", "role": "Creative Lead", "bg": "#FEF7E0", "accent": "#FBBC04", "hair": "#2D3748", "skin": "#F2C299", "glasses": False, "gender": "m"},
    {"id": "manvi-kesarwani", "name": "Manvi Kesarwani", "role": "Community Lead", "bg": "#FCE8E6", "accent": "#EA4335", "hair": "#2C3E50", "skin": "#F7D7B5", "glasses": False, "gender": "f"}
]

def make_avatar_svg(p):
    glasses_svg = f'''
    <circle cx="95" cy="115" r="14" fill="none" stroke="#1E1E1E" stroke-width="3"/>
    <circle cx="145" cy="115" r="14" fill="none" stroke="#1E1E1E" stroke-width="3"/>
    <line x1="109" y1="115" x2="131" y2="115" stroke="#1E1E1E" stroke-width="3"/>
    <line x1="81" y1="115" x2="68" y2="112" stroke="#1E1E1E" stroke-width="2.5"/>
    <line x1="159" y1="115" x2="172" y2="112" stroke="#1E1E1E" stroke-width="2.5"/>
    ''' if p['glasses'] else ''

    hair_svg = f'''
    <!-- Female hairstyle -->
    <path d="M65 110 C 65 50, 175 50, 175 110 C 185 140, 185 170, 180 185 C 170 170, 170 130, 165 110 C 150 75, 90 75, 75 110 C 70 130, 70 170, 60 185 C 55 170, 55 140, 65 110 Z" fill="{p['hair']}"/>
    <path d="M75 90 C 95 65, 145 65, 165 90 C 150 75, 90 75, 75 90 Z" fill="{p['hair']}"/>
    ''' if p['gender'] == 'f' else f'''
    <!-- Male hairstyle -->
    <path d="M68 95 C 68 55, 172 55, 172 95 C 172 80, 160 65, 120 65 C 80 65, 68 80, 68 95 Z" fill="{p['hair']}"/>
    <path d="M68 95 C 72 75, 95 68, 120 68 C 145 68, 168 75, 172 95 C 160 85, 135 80, 120 80 C 105 80, 80 85, 68 95 Z" fill="{p['hair']}"/>
    '''

    svg = f'''<svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Neo-brutalist circle with border -->
  <circle cx="120" cy="120" r="110" fill="{p['bg']}"/>
  <circle cx="120" cy="120" r="110" stroke="#1E1E1E" stroke-width="5"/>
  
  <g clip-path="url(#clip_{p['id']})">
    <!-- DevFest T-Shirt / Hoodie -->
    <path d="M40 240 C 40 180, 75 165, 120 165 C 165 165, 200 180, 200 240 Z" fill="{p['accent']}"/>
    <path d="M100 165 C 105 185, 135 185, 140 165 Z" fill="{p['skin']}"/>
    
    <!-- DevFest Lanyard -->
    <path d="M105 165 L115 220 L125 220 L135 165" stroke="#1E1E1E" stroke-width="3" fill="none"/>
    <rect x="110" y="215" width="20" height="25" rx="3" fill="#FFFFFF" stroke="#1E1E1E" stroke-width="2"/>
    <rect x="114" y="222" width="12" height="2" fill="{p['accent']}"/>
    
    <!-- Neck -->
    <rect x="105" y="140" width="30" height="30" fill="{p['skin']}"/>
    
    <!-- Face -->
    <ellipse cx="120" cy="115" rx="42" ry="48" fill="{p['skin']}"/>
    
    <!-- Ears -->
    <circle cx="78" cy="118" r="10" fill="{p['skin']}"/>
    <circle cx="162" cy="118" r="10" fill="{p['skin']}"/>
    
    <!-- Eyes -->
    <circle cx="102" cy="114" r="5" fill="#1E1E1E"/>
    <circle cx="138" cy="114" r="5" fill="#1E1E1E"/>
    <circle cx="104" cy="112" r="1.5" fill="#FFFFFF"/>
    <circle cx="140" cy="112" r="1.5" fill="#FFFFFF"/>
    
    <!-- Eyebrows -->
    <path d="M92 102 Q 102 98 112 103" stroke="{p['hair']}" stroke-width="3" stroke-linecap="round" fill="none"/>
    <path d="M128 103 Q 138 98 148 102" stroke="{p['hair']}" stroke-width="3" stroke-linecap="round" fill="none"/>
    
    <!-- Nose -->
    <path d="M120 114 L118 126 L124 126" stroke="#C88E5E" stroke-width="2.5" stroke-linecap="round" fill="none"/>
    
    <!-- Smile -->
    <path d="M108 136 Q 120 148 132 136" stroke="#A74B46" stroke-width="3" stroke-linecap="round" fill="none"/>
    
    <!-- Cheeks -->
    <circle cx="95" cy="126" r="6" fill="#EA4335" opacity="0.2"/>
    <circle cx="145" cy="126" r="6" fill="#EA4335" opacity="0.2"/>
    
    {glasses_svg}
    {hair_svg}
  </g>
  
  <!-- Outer clip boundary -->
  <defs>
    <clipPath id="clip_{p['id']}">
      <circle cx="120" cy="120" r="107"/>
    </clipPath>
  </defs>
  
  <!-- Mini badge pill at bottom-right -->
  <g transform="translate(160, 160)">
    <circle cx="20" cy="20" r="20" fill="#FFFFFF" stroke="#1E1E1E" stroke-width="3"/>
    <circle cx="20" cy="20" r="14" fill="{p['accent']}"/>
    <path d="M16 20 L19 23 L25 17" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
</svg>'''
    return svg

for s in speakers:
    with open(f'assets/speakers/{s["id"]}.svg', 'w', encoding='utf-8') as f:
        f.write(make_avatar_svg(s).strip())

for t in team:
    with open(f'assets/team/{t["id"]}.svg', 'w', encoding='utf-8') as f:
        f.write(make_avatar_svg(t).strip())

print('Speaker and team avatars created!')
