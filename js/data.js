/**
 * DevFest Prayagraj 2026 - Central Data Store
 * Authentic information tailored for GDG Prayagraj, MNNIT Prayagraj Venue, and Regional Heritage.
 */

window.DevFestData = {
  event: {
    name: "DevFest Prayagraj 2026",
    tagline: "The Triveni Sangam of Tech: Where Code, Community & Intelligence Converge",
    date: "Saturday, December 12, 2026",
    targetDate: "2026-12-12T09:00:00+05:30",
    time: "09:00 AM – 06:30 PM IST",
    venue: {
      name: "Motilal Nehru National Institute of Technology (MNNIT) Prayagraj",
      campus: "Multi-Purpose Hall (MP Hall) Auditorium, MNNIT Campus, Teliarganj",
      city: "Prayagraj",
      state: "Uttar Pradesh",
      pincode: "211004",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.3789370125586!2d81.86134817604812!3d25.492476520448154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399aca789e928509%3A0x6b107e3713028682!2sMotilal%20Nehru%20National%20Institute%20of%20Technology%2C%20Allahabad!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
      mapLink: "https://maps.google.com/?q=Motilal+Nehru+National+Institute+of+Technology+Allahabad"
    },
    stats: [
      { label: "Community Builders", value: "1,200+", icon: "users", color: "#4285F4" },
      { label: "Rockstar Speakers", value: "25+", icon: "mic", color: "#EA4335" },
      { label: "Technical Sessions", value: "18+", icon: "sparkles", color: "#FBBC04" },
      { label: "Hands-on Codelabs", value: "4 Tracks", icon: "code-2", color: "#34A853" }
    ]
  },

  tracks: [
    {
      id: "ai",
      title: "AI & Machine Learning",
      subtitle: "Gemini 2.0, Vertex AI & Agents",
      color: "#4285F4",
      bgLight: "#E8F0FE",
      borderColor: "#4285F4",
      icon: "bot",
      description: "Dive deep into multimodal foundation models, agentic workflows with Google AI Studio, edge inference with MediaPipe, and production LLMOps.",
      topics: ["Google Gemini 2.0", "Vertex AI Search", "Function Calling & Tools", "LangChain & LiteLLM", "On-Device Gemma Models"]
    },
    {
      id: "cloud",
      title: "Google Cloud & DevOps",
      subtitle: "Serverless, Kubernetes & Scale",
      color: "#34A853",
      bgLight: "#E6F4EA",
      borderColor: "#34A853",
      icon: "cloud",
      description: "Master modern microservices, Kubernetes on GKE, zero-trust cloud security, event-driven architectures, and cost-effective serverless pipelines.",
      topics: ["Google Kubernetes Engine (GKE)", "Cloud Run & Serverless", "Firebase Gen 2", "FinOps & Cloud Cost Optimization", "Distributed Tracing"]
    },
    {
      id: "mobile",
      title: "Mobile & Multiplatform",
      subtitle: "Android 15, Flutter & Compose",
      color: "#FBBC04",
      bgLight: "#FEF7E0",
      borderColor: "#FBBC04",
      icon: "smartphone",
      description: "Craft performant, fluid cross-platform applications with Flutter 3.x Impeller engine, Jetpack Compose, and Android 15 predictive back animations.",
      topics: ["Flutter Multiplatform", "Jetpack Compose", "Android 15 APIs", "Material You Theming", "Kotlin Multiplatform (KMP)"]
    },
    {
      id: "web",
      title: "Web & Open Source",
      subtitle: "Chrome, Web AI & Frameworks",
      color: "#EA4335",
      bgLight: "#FCE8E6",
      borderColor: "#EA4335",
      icon: "globe",
      description: "Explore the next generation of client-side AI in Chrome, WebAssembly performance breakthroughs, Core Web Vitals optimization, and open-source mastery.",
      topics: ["WebGPU & Web AI", "Chrome DevTools Innovations", "Island Architecture", "Progressive Web Apps", "Git & Open Source Impact"]
    }
  ],

  speakers: [
    {
      id: "nikita-gandhi",
      name: "Nikita Gandhi",
      role: "Google Community Lead & AI Advocate",
      company: "Google",
      track: "ai",
      topic: "Empowering Next-Gen Builders with Gemini & Vertex AI",
      avatar: "assets/speakers/nikita-gandhi.svg",
      tag: "Keynote Speaker",
      tagColor: "#4285F4",
      bio: "Nikita has championed developer ecosystems across India and APAC. She specializes in bridging community talent with Google's state-of-the-art AI infrastructure and developer platforms.",
      socials: { linkedin: "https://linkedin.com", twitter: "https://x.com", github: "https://github.com" }
    },
    {
      id: "kartik-derasari",
      name: "Kartik Derasari",
      role: "Google Developer Expert (Cloud)",
      company: "Cloud Architect Lead",
      track: "cloud",
      topic: "Serverless at Hyperscale with Cloud Run & Eventarc",
      avatar: "assets/speakers/kartik-derasari.svg",
      tag: "Google Developer Expert",
      tagColor: "#34A853",
      bio: "Cloud architect with over a decade of experience designing resilient distributed systems. Frequent speaker across international Google Cloud summits and mentor to emerging founders.",
      socials: { linkedin: "https://linkedin.com", twitter: "https://x.com", github: "https://github.com" }
    },
    {
      id: "pooja-bhaumik",
      name: "Pooja Bhaumik",
      role: "Senior Developer Advocate & GDE",
      company: "Flutter Community Champion",
      track: "mobile",
      topic: "Crafting Fluid 120FPS Apps with Flutter & Impeller",
      avatar: "assets/speakers/pooja-bhaumik.svg",
      tag: "GDE Flutter & Dart",
      tagColor: "#FBBC04",
      bio: "Pooja is a globally recognized Flutter GDE who has mentored tens of thousands of developers in crafting delightful, buttery-smooth mobile and desktop interfaces.",
      socials: { linkedin: "https://linkedin.com", twitter: "https://x.com", github: "https://github.com" }
    },
    {
      id: "sayak-paul",
      name: "Sayak Paul",
      role: "Machine Learning Engineer & GDE",
      company: "Hugging Face / Open Source",
      track: "ai",
      topic: "Fine-Tuning Open Foundation Models for Real-World Edge",
      avatar: "assets/speakers/sayak-paul.svg",
      tag: "GDE Machine Learning",
      tagColor: "#EA4335",
      bio: "Sayak contributes actively to diffusion models, transformers, and efficient training pipelines. His work focuses on democratizing cutting-edge AI for developers worldwide.",
      socials: { linkedin: "https://linkedin.com", twitter: "https://x.com", github: "https://github.com" }
    },
    {
      id: "archana-iyer",
      name: "Archana Iyer",
      role: "Staff AI Research Scientist",
      company: "Enterprise AI Labs",
      track: "ai",
      topic: "Building Multimodal Agents with Google AI Studio & Gemini 2.0",
      avatar: "assets/speakers/archana-iyer.svg",
      tag: "Featured Speaker",
      tagColor: "#4285F4",
      bio: "Archana leads research in multimodal agentic reasoning, tool use, and structured outputs with large language and visual models.",
      socials: { linkedin: "https://linkedin.com", twitter: "https://x.com", github: "https://github.com" }
    },
    {
      id: "abhishek-doshi",
      name: "Abhishek Doshi",
      role: "Founder & GDE Flutter/Dart",
      company: "Tech Lead",
      track: "mobile",
      topic: "Full-Stack Dart: Unifying Backend & Frontend Architectures",
      avatar: "assets/speakers/abhishek-doshi.svg",
      tag: "GDE Flutter",
      tagColor: "#34A853",
      bio: "Abhishek has architected cross-platform enterprise systems handling millions of users. Passionate community leader and educator across developer communities.",
      socials: { linkedin: "https://linkedin.com", twitter: "https://x.com", github: "https://github.com" }
    },
    {
      id: "dr-sonali-agarwal",
      name: "Dr. Sonali Agarwal",
      role: "Professor & Head of Big Data / AI Lab",
      company: "IIIT Allahabad",
      track: "ai",
      topic: "From Academic Research to Production GenAI Systems",
      avatar: "assets/speakers/dr-sonali-agarwal.svg",
      tag: "Distinguished Academic",
      tagColor: "#FBBC04",
      bio: "Dr. Agarwal is an esteemed professor at the Indian Institute of Information Technology (IIIT) Allahabad, supervising pioneering research in data mining, neural reasoning, and analytics.",
      socials: { linkedin: "https://linkedin.com", twitter: "https://x.com", github: "https://github.com" }
    },
    {
      id: "devendra-singh",
      name: "Devendra Singh",
      role: "Principal Web Architect",
      company: "Open Web Collective",
      track: "web",
      topic: "Sub-Second Web: Leveraging WebGPU & WASM in Chrome",
      avatar: "assets/speakers/devendra-singh.svg",
      tag: "Web Champion",
      tagColor: "#EA4335",
      bio: "Devendra has engineered high-throughput web frontends and microfrontends, leading frontend performance transformations for global e-commerce platforms.",
      socials: { linkedin: "https://linkedin.com", twitter: "https://x.com", github: "https://github.com" }
    }
  ],

  schedule: [
    {
      time: "08:30 AM – 09:30 AM",
      title: "Badge Check-In, Morning High Tea & Swag Distribution",
      speaker: "DevFest Prayagraj Hospitality Team",
      hall: "MNNIT MP Hall Registration Foyer",
      track: "all",
      badge: "Networking",
      color: "#5F6368",
      description: "Pick up your official DevFest 2026 RFID badge, exclusive DevFest T-Shirt, sticker sheet, and enjoy warm chai and breakfast on the MNNIT campus lawns."
    },
    {
      time: "09:30 AM – 10:15 AM",
      title: "Opening Keynote: The Triveni Sangam of Tech & Innovation",
      speaker: "Ankit Kumar Verma (Lead GDG) & Dignitaries from MNNIT Prayagraj",
      hall: "Hall A – MNNIT MP Hall Grand Auditorium",
      track: "all",
      badge: "Keynote",
      color: "#4285F4",
      description: "Welcome address celebrating the convergence of Eastern Uttar Pradesh's brightest developer minds at MNNIT Prayagraj, and the unveiling of DevFest 2026 initiatives."
    },
    {
      time: "10:15 AM – 11:00 AM",
      title: "Google AI Keynote: Unleashing Gemini 2.0 & Multimodal Workflows",
      speaker: "Nikita Gandhi (Google)",
      hall: "Hall A – MNNIT MP Hall Grand Auditorium",
      track: "ai",
      badge: "AI Keynote",
      color: "#4285F4",
      description: "Discover Google's latest multimodal breakthroughs, live coding with Gemini 2.0 Flash in Google AI Studio, and how developers can build transformative autonomous agents."
    },
    {
      time: "11:00 AM – 11:15 AM",
      title: "⚡ Quick Networking Break & Sangam Group Photo",
      speaker: "All Attendees",
      hall: "MNNIT Central Lawns & MP Hall Portico",
      track: "all",
      badge: "Community",
      color: "#34A853",
      description: "Assemble for the official DevFest Prayagraj 2026 panoramic aerial photo on the lush green MNNIT central lawns and connect with campus leads."
    },
    {
      time: "11:15 AM – 12:15 PM",
      title: "Building Scalable Cloud Infrastructure with Cloud Run & GKE",
      speaker: "Kartik Derasari (GDE Cloud)",
      hall: "Hall A – MNNIT MP Hall Grand Auditorium",
      track: "cloud",
      badge: "Cloud Talk",
      color: "#34A853",
      description: "Deep dive into production container orchestration, autoscaling from 0 to 100k requests/sec, and zero-downtime deployment patterns on Google Cloud."
    },
    {
      time: "11:15 AM – 12:15 PM",
      title: "Hands-on Codelab: Fine-Tuning Open Source LLMs on Colab Enterprise",
      speaker: "Sayak Paul (Hugging Face / GDE)",
      hall: "Hall C – MNNIT Saraswati Computing Center",
      track: "ai",
      badge: "Interactive Codelab",
      color: "#EA4335",
      description: "Bring your laptop! Walk away with your custom fine-tuned LoRA weights deployed to an endpoint using Gemma and Hugging Face tools."
    },
    {
      time: "12:15 PM – 01:00 PM",
      title: "Next-Gen Mobile Experiences with Flutter 3.x & Android 15",
      speaker: "Pooja Bhaumik & Abhishek Doshi (GDEs)",
      hall: "Hall A – MNNIT MP Hall Grand Auditorium",
      track: "mobile",
      badge: "Mobile Deep Dive",
      color: "#FBBC04",
      description: "Unlock hardware-accelerated 120Hz UI rendering with Impeller, adaptive layouts for foldables, and cross-platform Dart code architectures."
    },
    {
      time: "01:00 PM – 02:00 PM",
      title: "🍱 Prayagraj Confluence Lunch & Sponsor Exhibition Zone",
      speaker: "Networking & Food Pavilion",
      hall: "MNNIT Central Lawn & Dining Pavilion",
      track: "all",
      badge: "Networking Lunch",
      color: "#FBBC04",
      description: "Delight in authentic Awadhi & Prayagraj buffet cuisine, try interactive demos at Google Cloud and GitHub booths, and collect sponsor swag!"
    },
    {
      time: "02:00 PM – 02:45 PM",
      title: "Client-Side Intelligence: Running Gemma & WebGPU Directly in Chrome",
      speaker: "Devendra Singh (Web Architect)",
      hall: "Hall A – MNNIT MP Hall Grand Auditorium",
      track: "web",
      badge: "Web AI",
      color: "#EA4335",
      description: "Learn how the Built-in AI APIs in Chrome allow offline summarization, translation, and neural graphics without pinging external server endpoints."
    },
    {
      time: "02:45 PM – 03:30 PM",
      title: "Academic Spotlight: Generative Data Systems & Frontier Research",
      speaker: "Dr. Sonali Agarwal (IIIT Allahabad)",
      hall: "Hall A – MNNIT MP Hall Grand Auditorium",
      track: "ai",
      badge: "Frontier Research",
      color: "#4285F4",
      description: "Exploring state-of-the-art neuro-symbolic algorithms, knowledge distillation, and research opportunities for college students in Uttar Pradesh."
    },
    {
      time: "03:30 PM – 04:30 PM",
      title: "Interactive Codelab: Building Full-Stack Cross-Platform Apps with Flutter & Firebase",
      speaker: "Abhishek Doshi (GDE Flutter)",
      hall: "Hall C – MNNIT Saraswati Computing Center",
      track: "mobile",
      badge: "Hands-on Lab",
      color: "#FBBC04",
      description: "Live step-by-step app development: real-time syncing, Firebase Gen 2 cloud functions, and instant app store distribution."
    },
    {
      time: "04:30 PM – 05:15 PM",
      title: "Women Techmakers & Founders Panel: Building Tech from Tier-2 Cities to the World",
      speaker: "Pooja Bhaumik, Nikita Gandhi, Manvi Kesarwani & Local Women Leaders",
      hall: "Hall A – MNNIT MP Hall Grand Auditorium",
      track: "all",
      badge: "WTM Panel",
      color: "#EA4335",
      description: "Inspiring discussion on breaking barriers, securing remote engineering roles, scaling startups from Uttar Pradesh, and fostering inclusive tech culture."
    },
    {
      time: "05:15 PM – 06:15 PM",
      title: "🏆 DevFest Sangam Finale, Hackathon Awards, Swag Mega-Draw & Closing Ceremony",
      speaker: "GDG Prayagraj Core Leadership Team",
      hall: "Hall A – MNNIT MP Hall Grand Auditorium",
      track: "all",
      badge: "Grand Finale",
      color: "#4285F4",
      description: "Announcing hackathon and community project winners, prize giveaways (Google Nest devices, cert vouchers, mechanical keyboards), and closing fireworks!"
    }
  ],

  tickets: [
    {
      id: "student",
      title: "Student Innovator Pass",
      subtitle: "For Students & Campus Builders",
      badge: "College ID Required",
      originalPrice: 499,
      price: 199,
      currency: "₹",
      color: "#4285F4",
      bgLight: "#E8F0FE",
      borderColor: "#4285F4",
      popular: false,
      perks: [
        "Full day access to all 4 Tracks & Keynotes",
        "Hands-on Codelabs & Workshop access",
        "Official DevFest Prayagraj 2026 T-Shirt & Swag Kit",
        "Lavish Buffet Lunch & High Tea included",
        "Verified Digital Participation Certificate",
        "Access to Student-Recruiter Connect Lounge"
      ]
    },
    {
      id: "developer",
      title: "Standard Developer Pass",
      subtitle: "For Software Engineers & Tech Pros",
      badge: "Most Popular",
      originalPrice: 799,
      price: 399,
      currency: "₹",
      color: "#34A853",
      bgLight: "#E6F4EA",
      borderColor: "#34A853",
      popular: true,
      perks: [
        "All Student Innovator Pass benefits",
        "Priority check-in lane at registration desk",
        "Complete DevFest 2026 Deluxe Swag Bag & Badges",
        "Access to Sponsor Booths & Enterprise Hiring Desk",
        "Networking Zone access with GDEs and Speakers",
        "Exclusive access to post-event recorded talk decks"
      ]
    },
    {
      id: "pro",
      title: "Pro Builder Pass",
      subtitle: "For Tech Leads, Architects & Founders",
      badge: "Fast Track",
      originalPrice: 1299,
      price: 699,
      currency: "₹",
      color: "#FBBC04",
      bgLight: "#FEF7E0",
      borderColor: "#FBBC04",
      popular: false,
      perks: [
        "All Standard Developer Pass benefits",
        "Reserved front-row seating in MNNIT MP Hall Grand Auditorium",
        "Speaker & VIP Lounge access for 1-on-1 discussions",
        "DevFest Prayagraj Premium Commemorative Hoodie",
        "1-month complimentary Google Cloud Skill Boost subscription",
        "Invitation to private Founders & Leads Round Table"
      ]
    },
    {
      id: "vip",
      title: "Community VIP Patron",
      subtitle: "Support Local Developer Ecosystem",
      badge: "Exclusive (Only 30 Seats)",
      originalPrice: 2499,
      price: 1299,
      currency: "₹",
      color: "#EA4335",
      bgLight: "#FCE8E6",
      borderColor: "#EA4335",
      popular: false,
      perks: [
        "All Pro Builder Pass perks",
        "VIP Dinner invitation with Speakers, GDEs & Google Leads",
        "Commemorative Brass DevFest Trophy & Memento",
        "Special recognition in Opening Keynote slide roll",
        "Lifetime alumni membership in GDG Prayagraj Elite Club",
        "Dedicated VIP concierge assistance throughout the event"
      ]
    }
  ],

  coupons: {
    "PRAYAGRAJ26": { discount: 20, type: "percent", message: "🎉 20% Prayagraj Confluence Special Discount applied!" },
    "DEVFEST26": { discount: 15, type: "percent", message: "🚀 15% Official DevFest 2026 Discount applied!" },
    "SANGAM": { discount: 100, type: "flat", message: "🌊 ₹100 Sacred Sangam Blessing applied!" },
    "MNNIT2026": { discount: 50, type: "percent", message: "🎓 50% MNNIT Campus Host Special applied!" },
    "MNNITSTUDENT": { discount: 50, type: "percent", message: "🎓 50% MNNIT Student Special applied!" },
    "UITSTUDENT": { discount: 40, type: "percent", message: "🎓 40% Campus Partner Discount applied!" }
  },

  prayagrajGuide: {
    venueInfo: {
      name: "MNNIT Prayagraj Multi-Purpose Hall (MP Hall) Grand Auditorium",
      description: "Spread over 222 acres of prestigious green campus along the Ganga corridor in Teliarganj, MNNIT Prayagraj (Institute of National Importance) features a grand air-conditioned auditorium with 1,500+ seating capacity, high-speed NKN Gigabit campus fiber Wi-Fi, professional acoustics, and state-of-the-art audiovisual infrastructure.",
      highlights: [
        "1,500+ Tiered Luxury Seating Capacity",
        "Dual 4K Laser Projection Screens & Line-Array Acoustic Surround",
        "Advanced Saraswati Computing Labs with High-Speed NKN Fiber",
        "Spacious Dining & Lawn Networking Pavilions on Central Lawns",
        "Ample Free Parking for 4-wheelers & 2-wheelers at Main Gate",
        "Full Wheelchair & Elevator Ramp Accessibility"
      ]
    },
    transit: [
      {
        title: "From Prayagraj Junction (PRYJ)",
        distance: "7 km (~15-20 mins)",
        icon: "train",
        desc: "Take an auto-rickshaw or cab via Stanley Road directly to MNNIT Main Gate in Teliarganj. App cabs (Ola/Uber) operate 24/7."
      },
      {
        title: "From Prayag Station (PRG)",
        distance: "2.5 km (~7 mins)",
        icon: "train",
        desc: "The closest railway station to MNNIT campus. Direct e-rickshaws reach the campus gate in under 10 minutes."
      },
      {
        title: "From Prayagraj Airport (IXD)",
        distance: "17 km (~35 mins)",
        icon: "plane",
        desc: "Direct flights from Delhi, Mumbai, Bengaluru, and Lucknow. Airport taxis reach MNNIT campus via Airport Road and Teliarganj."
      },
      {
        title: "From Civil Lines Bus Station",
        distance: "6 km (~15 mins)",
        icon: "bus",
        desc: "Continuous city buses, shared tempos, and e-rickshaws connect Civil Lines to Teliarganj along the main arterial corridor."
      }
    ],
    landmarks: [
      {
        id: "triveni-sangam",
        title: "Triveni Sangam",
        subtitle: "The Sacred Confluence of 3 Rivers",
        desc: "The sacred confluence where the Ganga, Yamuna, and mystical Saraswati meet. Famous for wooden boat rides, Siberian migratory seagulls, and the Maha Kumbh gathering.",
        image: "assets/prayagraj/sangam-ghat.svg",
        tag: "Spiritual & Iconic"
      },
      {
        id: "naini-bridge",
        title: "New Yamuna Cable Bridge",
        subtitle: "Modern Engineering Marvel",
        desc: "One of India's longest cable-stayed bridges spanning the mighty Yamuna River, illuminated brilliantly at night and symbolizing the bridge to tomorrow's technology.",
        image: "assets/prayagraj/naini-bridge.svg",
        tag: "Architectural Icon"
      },
      {
        id: "anand-bhavan",
        title: "Anand Bhavan",
        subtitle: "Cradle of Indian Heritage",
        desc: "The historic ancestral residence of the Nehru-Gandhi family, now preserved as a national memorial museum with lush colonial gardens and a planetarium.",
        image: "assets/prayagraj/anand-bhavan.svg",
        tag: "Historical Monument"
      },
      {
        id: "mnnit-campus",
        title: "MNNIT Prayagraj Campus",
        subtitle: "The DevFest 2026 Venue",
        desc: "Established in 1961 as an Institute of National Importance, featuring premier computing infrastructure, lush lawns, and the flagship 1,500-seat MP Hall.",
        image: "assets/prayagraj/mnnit-campus.svg",
        tag: "Host & Venue"
      }
    ],
    foodTrail: [
      {
        name: "Loknath Ki Chaat",
        location: "Old Katra & Chowk",
        desc: "Iconic spicy Dahi Bhalla, Tamatar Chaat, and crispy Papdi served on earthen leaf plates since 1948.",
        icon: "utensils"
      },
      {
        name: "Netram Moolchand Kachori",
        location: "Katara Market",
        desc: "Flaky desi-ghee kachoris served with spiced pumpkin subzi and hot jalebis fresh from the kadhai.",
        icon: "coffee"
      },
      {
        name: "Allahabadi Surkha Guava",
        location: "Sangam & Local Bazaars",
        desc: "World-famous GI-tagged sweet apple-red guavas of Prayagraj, sprinkled with local rock salt and chaat masala.",
        icon: "apple"
      },
      {
        name: "Dehati Ke Gulab Jamun",
        location: "Civil Lines & Teliarganj",
        desc: "Mouth-melting soft dark gulab jamuns and Chena sweets that Prayagraj locals revere.",
        icon: "cake"
      }
    ]
  },

  team: [
    {
      id: "ankit-verma",
      name: "Ankit Kumar Verma",
      role: "Lead Organizer",
      chapter: "GDG Prayagraj",
      avatar: "assets/team/ankit-verma.svg",
      color: "#4285F4",
      socials: { linkedin: "https://linkedin.com", twitter: "https://x.com", github: "https://github.com" }
    },
    {
      id: "hridyesh-gupta",
      name: "Hridyesh Gupta",
      role: "Co-Organizer",
      chapter: "GDG Prayagraj",
      avatar: "assets/team/hridyesh-gupta.svg",
      color: "#34A853",
      socials: { linkedin: "https://linkedin.com", twitter: "https://x.com", github: "https://github.com" }
    },
    {
      id: "agamya-samuel",
      name: "Agamya Samuel",
      role: "Web & Dev Lead",
      chapter: "GDG Prayagraj",
      avatar: "assets/team/agamya-samuel.svg",
      color: "#FBBC04",
      socials: { linkedin: "https://linkedin.com", twitter: "https://x.com", github: "https://github.com" }
    },
    {
      id: "aditya-kumar",
      name: "Aditya Kumar",
      role: "Core Team Lead",
      chapter: "GDG Prayagraj",
      avatar: "assets/team/aditya-kumar.svg",
      color: "#EA4335",
      socials: { linkedin: "https://linkedin.com", twitter: "https://x.com", github: "https://github.com" }
    },
    {
      id: "sarthak-singh",
      name: "Sarthak Singh",
      role: "Operations & Logistics Lead",
      chapter: "GDG Prayagraj",
      avatar: "assets/team/sarthak-singh.svg",
      color: "#4285F4",
      socials: { linkedin: "https://linkedin.com", twitter: "https://x.com", github: "https://github.com" }
    },
    {
      id: "mohd-shadab",
      name: "Mohd Shadab",
      role: "Technical Lead",
      chapter: "GDG Prayagraj",
      avatar: "assets/team/mohd-shadab.svg",
      color: "#34A853",
      socials: { linkedin: "https://linkedin.com", twitter: "https://x.com", github: "https://github.com" }
    },
    {
      id: "anshuman-rai",
      name: "Anshuman Rai",
      role: "Creative & Design Lead",
      chapter: "GDG Prayagraj",
      avatar: "assets/team/anshuman-rai.svg",
      color: "#FBBC04",
      socials: { linkedin: "https://linkedin.com", twitter: "https://x.com", github: "https://github.com" }
    },
    {
      id: "manvi-kesarwani",
      name: "Manvi Kesarwani",
      role: "Community & WTM Lead",
      chapter: "GDG Prayagraj",
      avatar: "assets/team/manvi-kesarwani.svg",
      color: "#EA4335",
      socials: { linkedin: "https://linkedin.com", twitter: "https://x.com", github: "https://github.com" }
    }
  ],

  swag: [
    {
      name: "Official DevFest 2026 T-Shirt",
      desc: "100% bio-washed cotton T-shirt featuring exclusive Prayagraj Confluence artwork.",
      tag: "Guaranteed for All Passes",
      icon: "shirt"
    },
    {
      name: "Die-Cut Sticker Sheet & Role Stickers",
      desc: "Waterproof vinyl stickers including Builder, Developer, Designer, AI Champion, and Sangam motifs.",
      tag: "All Passes",
      icon: "tag"
    },
    {
      name: "Custom DevFest Lanyard & NFC Pass",
      desc: "High-density woven lanyard with dual safety buckle and digital badge pass.",
      tag: "All Passes",
      icon: "id-card"
    },
    {
      name: "Canvas Developer Laptop Tote Bag",
      desc: "Durable multi-pocket tote bag suited for 16-inch laptops, notebooks, and accessories.",
      tag: "Pro & VIP Passes",
      icon: "briefcase"
    },
    {
      name: "Stainless Steel Water Flask",
      desc: "Vacuum insulated 750ml flask keeping your beverage chilled through long codelabs.",
      tag: "Pro & VIP Passes",
      icon: "glass-water"
    },
    {
      name: "Verified Certificate of Attendance",
      desc: "Cryptographically signed digital certificate to boost your resume and LinkedIn profile.",
      tag: "All Attendees",
      icon: "award"
    }
  ],

  faqs: [
    {
      q: "What is DevFest Prayagraj 2026?",
      a: "DevFest is the annual flagship developer conference hosted by Google Developer Group (GDG) Prayagraj. It brings together over 1,200 developers, students, researchers, and tech enthusiasts to explore Google AI (Gemini), Cloud, Android, Flutter, and Web technologies."
    },
    {
      q: "Where is the event being held?",
      a: "DevFest Prayagraj 2026 will take place in-person at the prestigious Motilal Nehru National Institute of Technology (MNNIT) Prayagraj, hosted at the Grand Multi-Purpose Hall (MP Hall) Auditorium, situated in Teliarganj, Prayagraj, UP (Pincode: 211004)."
    },
    {
      q: "Who can attend DevFest Prayagraj?",
      a: "Everyone! Whether you are a college student beginning your coding journey, a professional software architect, a UI/UX designer, an academic researcher, or a tech founder, DevFest offers tracks tailored for your level."
    },
    {
      q: "What is included with my ticket?",
      a: "All passes grant full-day access to all keynote stages, technical breakout tracks, hands-on codelabs, an authentic Awadhi/Prayagraj lunch buffet, high-tea snacks, an official DevFest 2026 T-shirt, collectible sticker pack, and participation certificates."
    },
    {
      q: "How do I participate in hands-on Codelabs?",
      a: "For hands-on workshops in Hall C (MNNIT Saraswati Lab), please bring your fully charged laptop with a modern web browser (Chrome recommended) and Wi-Fi capability. Codelab seats are allocated on a first-come, first-seated basis."
    },
    {
      q: "Can I get a student discount?",
      a: "Yes! Students with a valid college ID from MNNIT, IIIT Allahabad, University of Allahabad, UIT, or any recognized institution can select the 'Student Innovator Pass' at a subsidized rate of only ₹199. You can also use code 'MNNIT2026' or 'MNNITSTUDENT' for campus discounts."
    },
    {
      q: "How can I apply as a speaker or volunteer?",
      a: "Our Call for Papers (CFP) and volunteer registration drives are announced via GDG Prayagraj's official community portal and social channels. You can also contact the organizers directly through the website footer."
    },
    {
      q: "What is the refund and transfer policy?",
      a: "Tickets are non-refundable once issued, but you can transfer your ticket to a friend or colleague up to 72 hours before the event by updating attendee details through our support desk."
    }
  ]
};
