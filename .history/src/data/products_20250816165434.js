// src/data/products.js
// Complete product database with all tiered products consolidated

// Main product data combining all tiers
export const allProducts = [
  // MINIATURES CATEGORY
  {
    id: 1,
    name: "D&D Nolzur's Unpainted Miniatures",
    price: 8.00,
    category: "Miniatures",
    rating: 4.7,
    reviewCount: 892,
    amazonLink: "https://amzn.to/4n6l99V",
    imageUrl: "https://m.media-amazon.com/images/I/81AOyZBgxqL._AC_SX522_.jpg",
    features: [
      "Pre-primed fantasy miniatures",
      "Great for practice painting",
      "28mm scale figures"
    ],
    isRecommended: true,
    experienceLevel: "entry"
  },
  {
    id: 2,
    name: "Reaper Bones Miniatures (Basic Heroes)",
    price: 9.98,
    category: "Miniatures",
    rating: 4.1,
    reviewCount: 456,
    amazonLink: "https://amzn.to/46ZqFGv",
    features: [
      "Durable plastic miniatures",
      "Very forgiving for beginners",
      "Fantasy character selection"
    ],
    isRecommended: false,
    experienceLevel: "entry"
  },
  {
    id: 3,
    name: "Wildspire Unpainted D&D Miniatures",
    price: 15.99,
    category: "Miniatures",
    rating: 4.5,
    reviewCount: 234,
    amazonLink: "https://amzn.to/45ltRuH",
    features: [
      "15 unique fantasy miniatures",
      "28-32mm scale figures",
      "Perfect for tabletop RPG"
    ],
    isRecommended: true,
    experienceLevel: "entry"
  },
  {
    id: 4,
    name: "GAMES WORKSHOP Warhammer 40K: Space Marines Set",
    price: 35.00,
    category: "Miniatures",
    rating: 4.8,
    reviewCount: 1247,
    amazonLink: "https://amzn.to/4oFPXzM",
    features: [
      "Iconic miniatures with excellent detail",
      "High-quality plastic construction",
      "Perfect for skill development"
    ],
    isRecommended: true,
    experienceLevel: "mid"
  },
  {
    id: 5,
    name: "Privateer Press Warmachine Miniatures",
    price: 30.95,
    category: "Miniatures",
    rating: 5.0,
    reviewCount: 342,
    amazonLink: "https://amzn.to/45DTqGe",
    features: [
      "Metal miniatures with crisp detail",
      "Steampunk aesthetic",
      "Professional quality sculpts"
    ],
    isRecommended: false,
    experienceLevel: "mid"
  },
  {
    id: 6,
    name: "Infinity CodeOne Starter Miniatures",
    price: 38.93,
    category: "Miniatures",
    rating: 4.7,
    reviewCount: 189,
    amazonLink: "https://amzn.to/4fL8vdY",
    features: [
      "High-tech sci-fi aesthetic",
      "Fine detail work",
      "Modern miniature design"
    ],
    isRecommended: false,
    experienceLevel: "mid"
  },
  {
    id: 7,
    name: "Warhammer 40,000 Combat Patrol: Necrons",
    price: 160.00,
    category: "Miniatures",
    rating: 4.7,
    reviewCount: 567,
    amazonLink: "https://amzn.to/3HEDPyf",
    features: [
      "Complete Combat Patrol force",
      "19 multipart plastic miniatures",
      "Professional display quality"
    ],
    isRecommended: true,
    experienceLevel: "professional"
  },
  {
    id: 8,
    name: "Warhammer 40,000: Ultimate Starter Set",
    price: 210.00,
    category: "Miniatures",
    rating: 4.4,
    reviewCount: 234,
    amazonLink: "https://amzn.to/4lzd505",
    features: [
      "Complete introductory experience",
      "Includes battlefield and guides",
      "All tools and rules included"
    ],
    isRecommended: false,
    experienceLevel: "professional"
  },
  {
    id: 9,
    name: "WizKids D&D Icons of The Realms: Bigby Presents",
    price: 38.95,
    category: "Miniatures",
    rating: 4.3,
    reviewCount: 423,
    amazonLink: "https://amzn.to/415CQh9",
    features: [
      "Pre-painted fantasy miniatures",
      "High-quality sculpts",
      "Ready for immediate use"
    ],
    isRecommended: false,
    experienceLevel: "professional"
  },

  // BRUSHES CATEGORY
  {
    id: 10,
    name: "Golden Maple Miniature Paint Brushes 10pcs",
    price: 16.99,
    category: "Brushes",
    rating: 4.7,
    reviewCount: 1876,
    amazonLink: "https://amzn.to/3Jjo7sX",
    features: [
      "10-piece synthetic brush set",
      "Multiple sizes included",
      "Great for beginners"
    ],
    isRecommended: true,
    experienceLevel: "entry"
  },
  {
    id: 11,
    name: "Winsor & Newton Series 7 Kolinsky Sable Brush",
    price: 32.57,
    category: "Brushes",
    rating: 4.0,
    reviewCount: 2341,
    amazonLink: "https://amzn.to/45lZsMY",
    features: [
      "Professional sable brush",
      "Excellent point retention",
      "Superior paint holding capacity"
    ],
    isRecommended: true,
    experienceLevel: "mid"
  },
  {
    id: 12,
    name: "Raphael 8404 Kolinsky Sable Brush",
    price: 62.58,
    category: "Brushes",
    rating: 4.3,
    reviewCount: 1234,
    amazonLink: "https://amzn.to/4lsaXHh",
    features: [
      "Gold standard for miniature painting",
      "Premium Kolinsky sable hair",
      "Professional artist quality"
    ],
    isRecommended: true,
    experienceLevel: "professional"
  },

  // TOOLS CATEGORY
  {
    id: 13,
    name: "Professional 9 PCS Model Tools Kit",
    price: 9.59,
    category: "Tools",
    rating: 4.7,
    reviewCount: 654,
    amazonLink: "https://amzn.to/4mgX7sv",
    features: [
      "Complete tool set",
      "Includes pliers, tweezers, knife",
      "Organized plastic storage box"
    ],
    isRecommended: true,
    experienceLevel: "entry"
  },
  {
    id: 14,
    name: "Self-Healing Cutting Mat (Small)",
    price: 5.99,
    category: "Tools",
    rating: 4.8,
    reviewCount: 432,
    amazonLink: "https://amzn.to/45zvTX0",
    features: [
      "9x12 cutting surface",
      "Self-healing material",
      "Essential for hobby work"
    ],
    isRecommended: true,
    experienceLevel: "entry"
  },
  {
    id: 15,
    name: "X-Acto Precision Knife Kit",
    price: 36.37,
    category: "Tools",
    rating: 4.7,
    reviewCount: 876,
    amazonLink: "https://amzn.to/4lvgr3Y",
    features: [
      "Multiple blade types",
      "Ergonomic handles",
      "Professional precision cutting"
    ],
    isRecommended: false,
    experienceLevel: "mid"
  },
  {
    id: 16,
    name: "Cutting Mat with Grid (Large)",
    price: 36.98,
    category: "Tools",
    rating: 4.7,
    reviewCount: 543,
    amazonLink: "https://amzn.to/4mPSWUG",
    features: [
      "24x36 cutting surface",
      "Measurement guides included",
      "Professional workspace solution"
    ],
    isRecommended: false,
    experienceLevel: "mid"
  },
  {
    id: 17,
    name: "Professional Cutting Station",
    price: 60.48,
    category: "Tools",
    rating: 4.8,
    reviewCount: 234,
    amazonLink: "https://amzn.to/4ovl8h0",
    features: [
      "24x36 self-healing rotary mat",
      "Professional workspace",
      "Built-in measurement system"
    ],
    isRecommended: false,
    experienceLevel: "professional"
  },
  {
    id: 18,
    name: "Basic Wet Palette",
    price: 9.90,
    category: "Tools",
    rating: 4.5,
    reviewCount: 765,
    amazonLink: "https://amzn.to/4oDMpxZ",
    features: [
      "Essential paint preservation",
      "Keeps paints workable longer",
      "Must-have for any painter"
    ],
    isRecommended: true,
    experienceLevel: "entry"
  },
  {
    id: 19,
    name: "Redgrass Games Wet Palette",
    price: 29.99,
    category: "Tools",
    rating: 4.8,
    reviewCount: 1876,
    amazonLink: "https://amzn.to/4oC6pkm",
    features: [
      "Professional wet palette",
      "Keeps paints fresh for days",
      "Premium quality construction"
    ],
    isRecommended: true,
    experienceLevel: "mid"
  },
  {
    id: 20,
    name: "Professional Paint Organizer",
    price: 56.95,
    category: "Tools",
    rating: 4.6,
    reviewCount: 345,
    amazonLink: "https://amzn.to/45m806z",
    features: [
      "Organize your workspace",
      "Multiple storage compartments",
      "Professional studio setup"
    ],
    isRecommended: false,
    experienceLevel: "professional"
  },
  {
    id: 21,
    name: "Ultrasonic Cleaner for Brushes",
    price: 132.99,
    category: "Tools",
    rating: 4.3,
    reviewCount: 432,
    amazonLink: "https://amzn.to/3HELrAP",
    features: [
      "Extend brush life",
      "Deep cleaning technology",
      "Professional maintenance tool"
    ],
    isRecommended: false,
    experienceLevel: "professional"
  },

  // LIGHTING CATEGORY
  {
    id: 22,
    name: "Basic Desk Lamp with Daylight Bulb",
    price: 24.49,
    category: "Lighting",
    rating: 4.5,
    reviewCount: 543,
    amazonLink: "https://amzn.to/45oSqak",
    features: [
      "Daylight color temperature",
      "Affordable lighting upgrade",
      "Reduces eye strain"
    ],
    isRecommended: true,
    experienceLevel: "entry"
  },
  {
    id: 23,
    name: "Magnifying Desk Lamp",
    price: 35.99,
    category: "Lighting",
    rating: 4.5,
    reviewCount: 765,
    amazonLink: "https://amzn.to/3UsYqsh",
    features: [
      "LED lighting with 10x magnification",
      "Perfect for detail work",
      "Adjustable positioning"
    ],
    isRecommended: true,
    experienceLevel: "mid"
  },
  {
    id: 24,
    name: "Daylight LED Desk Lamp",
    price: 49.99,
    category: "Lighting",
    rating: 4.6,
    reviewCount: 1234,
    amazonLink: "https://amzn.to/46Vu3C8",
    features: [
      "Color-accurate lighting",
      "True color representation",
      "Professional quality illumination"
    ],
    isRecommended: true,
    experienceLevel: "mid"
  },
  {
    id: 25,
    name: "Daylight Company Halo Lamp",
    price: 139.99,
    category: "Lighting",
    rating: 4.2,
    reviewCount: 890,
    amazonLink: "https://amzn.to/3Hui6ZW",
    features: [
      "Color-correct LED light",
      "Professional painting setup",
      "Superior color accuracy"
    ],
    isRecommended: true,
    experienceLevel: "professional"
  },
  {
    id: 26,
    name: "Elgato Temperature Controlled Professional Studio Light",
    price: 179.99,
    category: "Lighting",
    rating: 4.5,
    reviewCount: 234,
    amazonLink: "https://amzn.to/45jIFKo",
    features: [
      "Professional photography-grade lighting",
      "Temperature control",
      "Studio-quality illumination"
    ],
    isRecommended: false,
    experienceLevel: "professional"
  },

  // PRIMERS CATEGORY
  {
    id: 27,
    name: "Rust-Oleum Universal Primer",
    price: 12.99,
    category: "Primers",
    rating: 4.6,
    reviewCount: 2345,
    amazonLink: "https://amzn.to/3V5TUA0",
    features: [
      "Hardware store primer",
      "Works well for miniatures",
      "Budget-friendly option"
    ],
    isRecommended: false,
    experienceLevel: "entry"
  },
  {
    id: 28,
    name: "Army Painter Colour Primer Spray",
    price: 16.19,
    category: "Primers",
    rating: 4.5,
    reviewCount: 876,
    amazonLink: "https://amzn.to/4mPTl9E",
    features: [
      "Hobby-specific primer",
      "Various colors available",
      "Designed for miniatures"
    ],
    isRecommended: true,
    experienceLevel: "entry"
  },
  {
    id: 29,
    name: "Citadel Chaos Black Primer Spray",
    price: 22.99,
    category: "Primers",
    rating: 4.8,
    reviewCount: 1543,
    amazonLink: "https://amzn.to/4oTpnmW",
    features: [
      "Professional quality primer",
      "Superior adhesion",
      "Games Workshop quality"
    ],
    isRecommended: true,
    experienceLevel: "mid"
  },
  {
    id: 30,
    name: "Vallejo Black Hobby Primer Spray",
    price: 17.86,
    category: "Primers",
    rating: 4.4,
    reviewCount: 654,
    amazonLink: "https://amzn.to/4mgXYtd",
    features: [
      "Our preferred spray primer",
      "Excellent coverage",
      "Professional results"
    ],
    isRecommended: true,
    experienceLevel: "mid"
  },
  {
    id: 31,
    name: "Mr. Surfacer 1500 Primer",
    price: 19.98,
    category: "Primers",
    rating: 4.8,
    reviewCount: 567,
    amazonLink: "https://amzn.to/3JgZLA5",
    features: [
      "Japanese lacquer primer",
      "Museum quality finish",
      "Ultra-smooth application"
    ],
    isRecommended: true,
    experienceLevel: "professional"
  },
  {
    id: 32,
    name: "AK Interactive Black Primer",
    price: 16.44,
    category: "Primers",
    rating: 3.8,
    reviewCount: 234,
    amazonLink: "https://amzn.to/45IuVI7",
    features: [
      "High-quality hobby primer",
      "Professional formulation",
      "Reliable coverage"
    ],
    isRecommended: false,
    experienceLevel: "professional"
  },

  // PAINTS CATEGORY
  {
    id: 33,
    name: "Apple Barrel Acrylic Paint Set (18 colors)",
    price: 24.11,
    category: "Paints",
    rating: 4.8,
    reviewCount: 3456,
    amazonLink: "https://amzn.to/41EOZtA",
    features: [
      "Craft paints for practice",
      "18 essential colors",
      "Budget-friendly option"
    ],
    isRecommended: false,
    experienceLevel: "entry"
  },
  {
    id: 34,
    name: "Army Painter Warpaints Starter Set",
    price: 39.99,
    category: "Paints",
    rating: 4.8,
    reviewCount: 1234,
    amazonLink: "https://amzn.to/3HsauXQ",
    features: [
      "Basic hobby paints",
      "Dropper bottles included",
      "Includes brush and miniature"
    ],
    isRecommended: true,
    experienceLevel: "entry"
  },
  {
    id: 35,
    name: "Vallejo Game Color Basic Set (16 colors)",
    price: 40.00,
    category: "Paints",
    rating: 4.6,
    reviewCount: 876,
    amazonLink: "https://amzn.to/3HCQce7",
    features: [
      "Good coverage and color selection",
      "Perfect for beginners",
      "Quality hobby paints"
    ],
    isRecommended: true,
    experienceLevel: "entry"
  },
  {
    id: 36,
    name: "Vallejo Model Color Set (16 colors)",
    price: 59.90,
    category: "Paints",
    rating: 4.3,
    reviewCount: 2341,
    amazonLink: "https://amzn.to/47iKbhp",
    features: [
      "Comprehensive color range",
      "Excellent mixing properties",
      "Professional quality"
    ],
    isRecommended: true,
    experienceLevel: "mid"
  },
  {
    id: 37,
    name: "Citadel Paint Starter Set (with tool set)",
    price: 45.00,
    category: "Paints",
    rating: 4.6,
    reviewCount: 1876,
    amazonLink: "https://amzn.to/3VaFezz",
    features: [
      "High-quality Games Workshop paints",
      "Tools included",
      "Complete starter system"
    ],
    isRecommended: true,
    experienceLevel: "mid"
  },
  {
    id: 38,
    name: "AK Interactive 3Gen AK11780 HIGH Pigmentation Set (14 colors)",
    price: 47.40,
    category: "Paints",
    rating: 4.6,
    reviewCount: 654,
    amazonLink: "https://amzn.to/3UzcaSf",
    features: [
      "Artist-quality paints",
      "Superior pigmentation",
      "Professional results"
    ],
    isRecommended: false,
    experienceLevel: "mid"
  },
  {
    id: 39,
    name: "Vallejo Model Color Range (80 colors)",
    price: 239.57,
    category: "Paints",
    rating: 4.3,
    reviewCount: 1234,
    amazonLink: "https://amzn.to/3UteMkD",
    features: [
      "Artist-quality paints",
      "Maximum pigment load",
      "Complete color range"
    ],
    isRecommended: true,
    experienceLevel: "professional"
  },
  {
    id: 40,
    name: "The Army Painter, Warpaints Fanatic Mega Set Combo (50 colors)",
    price: 204.99,
    category: "Paints",
    rating: 4.8,
    reviewCount: 567,
    amazonLink: "https://amzn.to/4ml477X",
    features: [
      "Complete Army Painter set",
      "50 professional colors",
      "Comprehensive paint system"
    ],
    isRecommended: true,
    experienceLevel: "professional"
  },

  // WASHES CATEGORY
  {
    id: 41,
    name: "Army Painter Wash - Strong Tone",
    price: 5.50,
    category: "Washes",
    rating: 4.9,
    reviewCount: 1234,
    amazonLink: "https://amzn.to/3UwL3Hr",
    features: [
      "Universal brown wash",
      "Works on most miniatures",
      "Instant depth and shading"
    ],
    isRecommended: true,
    experienceLevel: "entry"
  },
  {
    id: 42,
    name: "Citadel Nuln Oil Shade",
    price: 9.99,
    category: "Washes",
    rating: 4.8,
    reviewCount: 3456,
    amazonLink: "https://amzn.to/419VR25",
    features: [
      "Most popular wash",
      "Essential for any painter",
      "Professional results"
    ],
    isRecommended: true,
    experienceLevel: "entry"
  },
  {
    id: 43,
    name: "Army Painter, Warpaints Fanatic Washes Paint Set",
    price: 37.40,
    category: "Washes",
    rating: 4.7,
    reviewCount: 876,
    amazonLink: "https://amzn.to/45sTFUo",
    features: [
      "Strong, dark, and light tones",
      "Complete wash system",
      "Versatile applications"
    ],
    isRecommended: true,
    experienceLevel: "mid"
  },
  {
    id: 44,
    name: "Vallejo Game Color Wash set",
    price: 25.99,
    category: "Washes",
    rating: 4.6,
    reviewCount: 654,
    amazonLink: "https://amzn.to/45DlzNA",
    features: [
      "Matte finish washes",
      "Good flow properties",
      "Professional quality"
    ],
    isRecommended: false,
    experienceLevel: "mid"
  },
  {
    id: 45,
    name: "Scale75 Inktensity Set 2",
    price: 35.99,
    category: "Washes",
    rating: 3.7,
    reviewCount: 456,
    amazonLink: "https://amzn.to/3VaFM8B",
    features: [
      "High-intensity inks",
      "Professional shading",
      "Advanced techniques"
    ],
    isRecommended: false,
    experienceLevel: "professional"
  },
  {
    id: 46,
    name: "Vallejo Game Color Range Inks Colors",
    price: 25.07,
    category: "Washes",
    rating: 4.5,
    reviewCount: 567,
    amazonLink: "https://amzn.to/4luaW5K",
    features: [
      "Quick-drying formula",
      "Low-odor water-based",
      "Professional inks"
    ],
    isRecommended: true,
    experienceLevel: "professional"
  },
  {
    id: 47,
    name: "Daler Rowney FW Acrylic Inks",
    price: 53.70,
    category: "Washes",
    rating: 4.5,
    reviewCount: 345,
    amazonLink: "https://amzn.to/4mEhyzi",
    features: [
      "Artist-quality inks",
      "Custom wash mixing",
      "Professional results"
    ],
    isRecommended: false,
    experienceLevel: "professional"
  },

  // BASING CATEGORY
  {
    id: 48,
    name: "Huge Miniatures Basing Materials, Medium Grit",
    price: 6.99,
    category: "Basing",
    rating: 5.0,
    reviewCount: 876,
    amazonLink: "https://amzn.to/41CcyDm",
    features: [
      "Natural ground elements",
      "Easy base layering",
      "Realistic texture"
    ],
    isRecommended: true,
    experienceLevel: "entry"
  },
  {
    id: 49,
    name: "Army Painter Battlefield Grass",
    price: 13.89,
    category: "Basing",
    rating: 4.7,
    reviewCount: 543,
    amazonLink: "https://amzn.to/45S86mp",
    features: [
      "Static grass for basing",
      "Quick and effective",
      "Professional appearance"
    ],
    isRecommended: true,
    experienceLevel: "entry"
  },
  {
    id: 50,
    name: "Titebond PVA Glue (White Glue)",
    price: 7.02,
    category: "Basing",
    rating: 4.6,
    reviewCount: 1234,
    amazonLink: "https://amzn.to/4fBF8uk",
    features: [
      "Essential adhesive",
      "Perfect for basing materials",
      "Strong, clear bond"
    ],
    isRecommended: true,
    experienceLevel: "entry"
  },
  {
    id: 51,
    name: "Army Painter Battlefield Basing Set",
    price: 21.09,
    category: "Basing",
    rating: 4.6,
    reviewCount: 876,
    amazonLink: "https://amzn.to/4mOZlPS",
    features: [
      "Complete terrain materials",
      "Various environment options",
      "Professional basing system"
    ],
    isRecommended: true,
    experienceLevel: "mid"
  },
  {
    id: 52,
    name: "Warmtree Grass Assortment",
    price: 16.99,
    category: "Basing",
    rating: 4.4,
    reviewCount: 654,
    amazonLink: "https://amzn.to/4mnIoMC",
    features: [
      "Multiple grass colors",
      "Various textures included",
      "Realistic appearance"
    ],
    isRecommended: false,
    experienceLevel: "mid"
  },
  {
    id: 53,
    name: "Green Stuff World Rolling Pins Set",
    price: 39.99,
    category: "Basing",
    rating: 4.5,
    reviewCount: 345,
    amazonLink: "https://amzn.to/45EoTZ0",
    features: [
      "Create custom textures",
      "Works with putty and clay",
      "Professional sculpting tools"
    ],
    isRecommended: true,
    experienceLevel: "professional"
  },
  {
    id: 54,
    name: "The Army Painter Green Stuff",
    price: 19.99,
    category: "Basing",
    rating: 4.7,
    reviewCount: 234,
    amazonLink: "https://amzn.to/41Je9ao",
    features: [
      "2-part modeling clay",
      "Perfect for conversions",
      "Sculpting and filling"
    ],
    isRecommended: true,
    experienceLevel: "professional"
  },
  {
    id: 55,
    name: "AK Interactive Dark Earth Terrain",
    price: 17.73,
    category: "Basing",
    rating: 4.6,
    reviewCount: 567,
    amazonLink: "https://amzn.to/4fIwnyT",
    features: [
      "Professional weathering materials",
      "Realistic terrain effects",
      "High-quality texture"
    ],
    isRecommended: false,
    experienceLevel: "professional"
  },
  {
    id: 56,
    name: "Vallejo Pigment FX Mud & Sand Effect",
    price: 21.45,
    category: "Basing",
    rating: 4.8,
    reviewCount: 432,
    amazonLink: "https://amzn.to/4mQqIJn",
    features: [
      "Natural earth pigments",
      "Excellent light fastness",
      "Fine particle milling"
    ],
    isRecommended: false,
    experienceLevel: "professional"
  },

  // AIRBRUSH CATEGORY
  {
    id: 57,
    name: "Badger 105 Patriot Airbrush",
    price: 77.52,
    category: "Airbrush",
    rating: 4.5,
    reviewCount: 1234,
    amazonLink: "https://amzn.to/4lGHtpu",
    features: [
      "Solid starter airbrush",
      "Reliable performance",
      "Good value for money"
    ],
    isRecommended: true,
    experienceLevel: "mid"
  },
  {
    id: 58,
    name: "Basic Mini Airbrush Air Compressor",
    price: 49.99,
    category: "Airbrush",
    rating: 4.2,
    reviewCount: 876,
    amazonLink: "https://amzn.to/4lCfEhT",
    features: [
      "Essential for airbrush use",
      "Compact design",
      "Affordable entry option"
    ],
    isRecommended: true,
    experienceLevel: "mid"
  },
  {
    id: 59,
    name: "Vallejo Airbrush Thinner Medium",
    price: 16.23,
    category: "Airbrush",
    rating: 4.8,
    reviewCount: 876,
    amazonLink: "https://amzn.to/46Vo0NZ",
    features: [
      "Advanced blending medium",
      "Smooth finish results",
      "Essential airbrush accessory"
    ],
    isRecommended: true,
    experienceLevel: "mid"
  },
  {
    id: 60,
    name: "Harder & Steenbeck Airbrush Set",
    price: 176.90,
    category: "Airbrush",
    rating: 4.7,
    reviewCount: 567,
    amazonLink: "https://amzn.to/4lBH0or",
    features: [
      "Professional airbrush system",
      "Smooth gradient capability",
      "German engineering quality"
    ],
    isRecommended: true,
    experienceLevel: "professional"
  }
];

// Legacy starting products for backwards compatibility
export const startingProducts = allProducts.filter(product => product.isRecommended);

// Comprehensive category system
export const productCategories = [
  "Miniatures",
  "Brushes", 
  "Tools",
  "Lighting",
  "Primers",
  "Paints",
  "Washes",
  "Basing",
  "Airbrush"
];

// Experience level categories
export const experienceLevels = [
  "entry",
  "mid", 
  "professional"
];

// Helper function to get products by category
export const getProductsByCategory = (category) => {
  return allProducts.filter(product => product.category === category);
};

// Helper function to get products by experience level
export const getProductsByExperienceLevel = (level) => {
  return allProducts.filter(product => product.experienceLevel === level);
};

// Helper function to get products by category and experience level
export const getProductsByCategoryAndLevel = (category, level) => {
  return allProducts.filter(product => 
    product.category === category && product.experienceLevel === level
  );
};

// Helper function to get recommended products
export const getRecommendedProducts = () => {
  return allProducts.filter(product => product.isRecommended);
};

// Helper function to get recommended products by experience level
export const getRecommendedProductsByLevel = (level) => {
  return allProducts.filter(product => 
    product.isRecommended && product.experienceLevel === level
  );
};

// Helper function to sort products by price (ascending)
export const sortProductsByPriceAsc = (products) => {
  return [...products].sort((a, b) => a.price - b.price);
};

// Helper function to sort products by price (descending)
export const sortProductsByPriceDesc = (products) => {
  return [...products].sort((a, b) => b.price - a.price);
};

// Helper function to sort products by rating
export const sortProductsByRating = (products) => {
  return [...products].sort((a, b) => b.rating - a.rating);
};

// Helper function to get products within price range
export const getProductsByPriceRange = (minPrice, maxPrice) => {
  return allProducts.filter(product => 
    product.price >= minPrice && product.price <= maxPrice
  );
};

// Helper function to search products by name or features
export const searchProducts = (searchTerm) => {
  const term = searchTerm.toLowerCase();
  return allProducts.filter(product =>
    product.name.toLowerCase().includes(term) ||
    product.features.some(feature => feature.toLowerCase().includes(term)) ||
    product.category.toLowerCase().includes(term)
  );
};

// Get featured products for homepage (highly rated recommended products)
export const getFeaturedProducts = () => {
  return allProducts
    .filter(product => product.isRecommended && product.rating >= 4.5)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);
};

// Get budget starter kit (entry level recommended products under $30)
export const getBudgetStarterKit = () => {
  return allProducts
    .filter(product => 
      product.experienceLevel === 'entry' && 
      product.isRecommended && 
      product.price <= 30
    )
    .sort((a, b) => a.price - b.price);
};

// Get professional showcase products (high-end recommended items)
export const getProfessionalShowcase = () => {
  return allProducts
    .filter(product => 
      product.experienceLevel === 'professional' && 
      product.isRecommended
    )
    .sort((a, b) => b.price - a.price);
};