// src/data/tieredProducts.js
// Tiered product recommendations for the Getting Started guide

export const gettingStartedSteps = [
  {
    step: 1,
    title: "Start with Quality Miniatures",
    icon: "🏰",
    description: "Choose miniatures that inspire you and match your skill level. Beginners should start with larger models with less intricate details.",
    tips: [
      "Start with 28mm scale for easier painting",
      "Choose models with clear, defined details",
      "Avoid multi-part kits for your first models"
    ],
    levels: {
      entry: {
        title: "Entry Level - Perfect for Beginners",
        description: "Simple, affordable miniatures to learn the basics",
        amazonLinks: [
          {
            name: "D&D Nolzur's Unpainted Miniatures",
            price: "$8.00",
            link: "https://amzn.to/4n6l99V",
            description: "Pre-primed fantasy miniatures, great for practice",
            category: "Fantasy Miniatures",
            rating: 4.7,
          },
          {
            name: "Reaper Bones Miniatures (Basic Heroes)",
            price: "$9.98",
            link: "https://amzn.to/46ZqFGv",
            description: "Durable plastic miniatures, very forgiving",
            category: "Fantasy Miniatures",
            rating: 4.1,
            reviewCount: 456
          },
          {
            name: "Wildspire Unpainted D&D Miniatures",
            price: "$15.99",
            link: "https://amzn.to/45ltRuH",
            description: "15 Unique Fantasy Miniatures for Dungeons and Dragons. These figurines for DND are crafted for your creative tabletop RPG. 28-32mm scale. ",
            category: "Starter Sets",
            rating: 4.5,
          }
        ]
      },
      mid: {
        title: "Mid Level - Building Skills",
        description: "Higher detail miniatures for developing techniques",
        amazonLinks: [
          {
            name: "GAMES WORKSHOP Warhammer 40K: Space Marines Set",
            price: "$35.00",
            originalPrice: "$42.50",
            link: "https://amzn.to/4oFPXzM",
            description: "Iconic miniatures with excellent detail and quality",
            category: "Warhammer 40K",
            rating: 4.8,
            reviewCount: 1247
          },
          {
            name: "Privateer Press Warmachine Miniatures",
            price: "$30.95",
            link: "https://amzn.to/45DTqGe",
            description: "Metal miniatures with crisp detail",
            category: "Steampunk",
            rating: 5.0,
          },
          {
            name: "Infinity CodeOne Starter Miniatures",
            price: "$38.93",
            link: "https://amzn.to/4fL8vdY",
            description: "High-tech aesthetic with fine details",
            category: "Sci-Fi",
            // rating: 4.7,
          }
        ]
      },
      professional: {
        title: "Professional Level - Display Quality",
        description: "Premium miniatures for competition and display",
        amazonLinks: [
          {
            name: "Warhammer 40,000 Combat Patrol: Necrons",
            price: "$160.00",
            link: "https://amzn.to/3HEDPyf",
            description: "A complete Combat Patrol force of 19 multipart plastic miniatures in one box",
            category: "Warhammer 40K",
            rating: 4.7,
          },
          {
            name: "Warhammer 40,000: Ultimate Starter Set",
            price: "$210.00",
            link: "https://amzn.to/4lzd505",
            description: "This box gives you a complete introductory experience, with loads of incredible models, a battlefield to fight over, helpful guides, and all the dice, tools, and rules you need to play your first games.",
            category: "Warhammer 40K",
            rating: 4.4,
          },
          {
            name: "WizKids D&D Icons of The Realms: Bigby Presents: Glory of The Giants",
            price: "$38.95",
            link: "https://amzn.to/415CQh9",
            description: "WizKids, the industry leader in quality pre-painted plastic miniatures, is pleased to bring the heroes, villains, and monsters of the world of Dungeons & Dragons to life in this series of fantasy miniatures!",
            category: "Fantasy Miniatures",
            rating: 4.3,
          }
        ]
      }
    }
  },
  {
    step: 2,
    title: "Essential Tools & Brushes",
    icon: "🔧",
    description: "Quality tools make painting easier and more enjoyable. Start with a few essential brushes and basic tools.",
    tips: [
      "Get brushes in sizes 0, 2, and 6 to start",
      "Natural hair holds more paint than synthetic",
      "A good cutting mat protects your surfaces"
    ],
    levels: {
      entry: {
        title: "Entry Level - Basic Tool Kit",
        description: "Essential tools to get started without breaking the bank",
        amazonLinks: [
          {
            name: "Golden Maple Miniature Paint Brushes 10pcs",
            price: "$16.99",
            link: "https://amzn.to/3Jjo7sX",
            description: "Decent synthetic brushes for beginners",
            category: "Brushes",
            rating: 4.7,
          },
          {
            name: "Professional 9 PCS Model Tools Kit",
            price: "$9.59",
            link: "https://amzn.to/4mgX7sv",
            description: "Full Range Of Tools: The package includes side pliers, tweezers, pen knife, blades, double-sided polished bar, file, separator, and plastic box. ",
            category: "Tools",
            rating: 4.7,
          },
          {
            name: "Self-Healing Cutting Mat (Small)",
            price: "$5.99",
            link: "https://amzn.to/45zvTX0",
            description: "9x12 cutting surface for hobby work",
            category: "Tools",
            rating: 4.8,
          }
        ]
      },
      mid: {
        title: "Mid Level - Quality Tools",
        description: "Better tools that will last longer and improve your results",
        amazonLinks: [
          {
            name: "Winsor & Newton Series 7 Kolinsky Sable Brush",
            price: "$32.57",
            link: "https://amzn.to/45lZsMY",
            description: "Professional sable brushe, excellent point retention",
            category: "Brushes",
            rating: 4.0,
          },
          {
            name: "X-Acto Precision Knife Kit",
            price: "$36.37",
            link: "https://amzn.to/4lvgr3Y",
            description: "Multiple blade types and ergonomic handles",
            category: "Tools",
            rating: 4.7,
          },
          {
            name: "Cutting Mat with Grid (Large)",
            price: "$36.98",
            link: "https://amzn.to/4mPSWUG",
            description: "24x36 mat with measurement guides",
            category: "Tools",
            rating: 4.7,
          },
          {
            name: "Magnifying Desk Lamp",
            price: "$35.99",
            link: "https://amzn.to/3UsYqsh",
            description: "LED lighting with 10x magnification",
            category: "Lighting",
            rating: 4.5,
          }
        ]
      },
      professional: {
        title: "Professional Level - Premium Tools",
        description: "Top-tier tools for serious hobbyists and professionals",
        amazonLinks: [
          {
            name: "Raphael 8404 Kolinsky Sable Brush",
            price: "$62.58",
            link: "https://amzn.to/4lsaXHh",
            description: "The gold standard for miniature painting brushes",
            category: "Brushes",
            rating: 4.3,
          },
          {
            name: "Professional Cutting Station",
            price: "$60.48",
            link: "https://amzn.to/4ovl8h0",
            description: "24x36 Self healing rotary mat",
            category: "Tools",
            rating: 4.8,
          },
          {
            name: "Daylight Company Halo Lamp",
            price: "$139.99",
            link: "https://amzn.to/3Hui6ZW", 
            description: "Color-correct LED light for painting",
            category: "Lighting",
            rating: 4.2,
          }
        ]
      }
    }
  },
  {
    step: 3,
    title: "Prime Your Models",
    icon: "🎯",
    description: "Primer creates a surface for paint to adhere to and provides a uniform base color. Never skip this crucial step!",
    tips: [
      "Clean models before priming",
      "Use thin, even coats",
      "White primer for bright colors, black for dark themes"
    ],
    levels: {
      entry: {
        title: "Entry Level - Basic Primers",
        description: "Affordable primers that get the job done",
        amazonLinks: [
          {
            name: "Rust-Oleum Universal Primer",
            price: "$12.99",
            link: "https://amzn.to/3V5TUA0",
            description: "Hardware store primer that works for miniatures",
            category: "Primers",
            rating: 4.6,
          },
          {
            name: "Army Painter Colour Primer Spray",
            price: "$16.19",
            link: "https://amzn.to/4mPTl9E",
            description: "Hobby-specific primer in various colors",
            category: "Primers",
            rating: 4.5,
          }
        ]
      },
      mid: {
        title: "Mid Level - Hobby Primers",
        description: "Purpose-built primers for miniature painting",
        amazonLinks: [
          {
            name: "Citadel Chaos Black Primer Spray",
            price: "$22.99",
            link: "https://amzn.to/4oTpnmW",
            description: "Professional quality primer spray",
            category: "Primers",
            rating: 4.8,
          },
          {
            name: "Vallejo Black Hobby Primer Spray",
            price: "$17.86",
            link: "https://amzn.to/4mgXYtd",
            description: "Our preferred spray primer",
            category: "Primers",
            rating: 4.4,
          }
        ]
      },
      professional: {
        title: "Professional Level - Premium Primers",
        description: "High-end primers for competition and display pieces",
        amazonLinks: [
          {
            name: "Mr. Surfacer 1500 Primer",
            price: "$19.98",
            link: "https://amzn.to/3JgZLA5",
            description: "Japanese lacquer primer, museum quality",
            category: "Primers",
            rating: 4.8,
          },
          {
            name: "AK Interactive Black Primer",
            price: "$16.44",
            link: "https://amzn.to/45IuVI7", 
            description: "High-quality hobby primer",
            category: "Primers",
            rating: 3.8,
          }
        ]
      }
    }
  },
  {
    step: 4,
    title: "Essential Paints",
    icon: "🎨",
    description: "Quality paints are the foundation of great miniatures. Choose your paint system based on your goals and budget.",
    tips: [
      "Start with primary colors and mix your own",
      "Thin your paints for better coverage",
      "Consider paint consistency for your chosen techniques"
    ],
    levels: {
      entry: {
        title: "Entry Level - Budget Paint Sets",
        description: "Affordable paint sets to learn color theory and techniques",
        amazonLinks: [
          {
            name: "Apple Barrel Acrylic Paint Set (18 colors)",
            price: "$24.11",
            link: "https://amzn.to/41EOZtA",
            description: "Craft paints that work for practice miniatures",
            category: "Paints",
            rating: 4.8,
          },
          {
            name: "Army Painter Warpaints Starter Set",
            price: "$39.99",
            link: "https://amzn.to/3HsauXQ",
            description: "Basic hobby paints with dropper bottles. Includes a brush and miniature.",
            category: "Paints",
            rating: 4.8,
          },
          {
            name: "Vallejo Game Color Basic Set (16 colors)",
            price: "$40.00",
            link: "https://amzn.to/3HCQce7",
            description: "Good coverage and color selection for beginners",
            category: "Paints",
            rating: 4.6,
          }
        ]
      },
      mid: {
        title: "Mid Level - Quality Paint Systems",
        description: "Professional hobby paints with excellent coverage and mixing",
        amazonLinks: [
          {
            name: "Vallejo Model Color Set (16 colors)",
            price: "$59.90",
            link: "https://amzn.to/47iKbhp",
            description: "Comprehensive set with excellent color range",
            category: "Paints",
            rating: 4.3,
          },
          {
            name: "Citadel Paint Starter Set (with tool set)",
            price: "$45.00",
            link: "https://amzn.to/3VaFezz", // Replace with your affiliate link
            description: "High-quality Games Workshop paint system",
            category: "Paints",
            rating: 4.6,
          },
          {
            name: "AK Interactive 3Gen AK11780 HIGH Pigmentation Set (14 colors) ",
            price: "$47.40",
            link: "https://amzn.to/3UzcaSf", 
            description: "Artist-quality paints with superior pigmentation",
            category: "Paints",
            // rating: 4.6,
          }
        ]
      },
      professional: {
        title: "Professional Level - Artist Quality Paints",
        description: "Premium paints for competition and display painting",
        amazonLinks: [
          {
            name: "Vallejo Model Color Range (80 colors)",
            price: "$239.57",
            link: "https://amzn.to/3UteMkD",
            description: "Artist-quality paints with maximum pigment load",
            category: "Paints",
            rating: 4.3,
          },
          {
            name: "The Army Painter, Warpaints Fanatic Mega Set Combo (50 colors)",
            price: "$204.99",
            link: "https://amzn.to/4ml477X",
            description: "Complete army painter set",
            category: "Paints",
            rating: 4.8,
          }
        ]
      }
    }
  },
  {
    step: 5,
    title: "Washes & Shades",
    icon: "💧",
    description: "Washes flow into recesses to create natural-looking shadows and definition. They're magic in a bottle for beginners!",
    tips: [
      "Apply over base colors for instant depth",
      "Use sparingly - you can always add more",
      "Clean brush immediately after use"
    ],
    levels: {
      entry: {
        title: "Entry Level - Basic Shading",
        description: "Simple wash techniques for immediate improvement",
        amazonLinks: [
          {
            name: "Army Painter Wash - Strong Tone",
            price: "$5.50",
            link: "https://amzn.to/3UwL3Hr",
            description: "Universal brown wash for most miniatures",
            category: "Washes",
            rating: 4.9,
          },
          {
            name: "Citadel Nuln Oil Shade",
            price: "$9.99",
            link: "https://amzn.to/419VR25",
            description: "The most popular wash in miniature painting",
            category: "Washes",
            rating: 4.8,
          }
        ]
      },
      mid: {
        title: "Mid Level - Complete Wash Set",
        description: "Full range of washes for different materials and colors",
        amazonLinks: [
          {
            name: "Army Painter, Warpaints Fanatic Washes Paint Set",
            price: "$37.40",
            link: "https://amzn.to/45sTFUo",
            description: "Strong, dark, and light tones for versatility",
            category: "Washes",
            rating: 4.7,
          },
          {
            name: "Vallejo Game Color Wash set",
            price: "$25.99",
            link: "https://amzn.to/45DlzNA",
            description: "Matte finish washes with good flow properties",
            category: "Washes",
            rating: 4.6,
          }
        ]
      },
      professional: {
        title: "Professional Level - Advanced Shading",
        description: "Specialized washes and inks for advanced techniques",
        amazonLinks: [
          {
            name: "Scale75 Inktensity Set 2",
            price: "$35.99",
            link: "https://amzn.to/3VaFM8B",
            description: "High-intensity inks for professional shading",
            category: "Inks",
            rating: 3.7,
          },
          {
            name: "Vallejo Game Color Range Inks Colors",
            price: "$25.07",
            link: "https://amzn.to/4luaW5K",
            description: "Quick-Drying, Low-Odor Formula: Water-based acrylic inks",
            category: "Inks",
            rating: 4.5,
          },
          {
            name: "Daler Rowney FW Acrylic Inks",
            price: "$53.70",
            link: "https://amzn.to/4mEhyzi",
            description: "Artist-quality inks for custom wash mixing",
            category: "Inks",
            rating: 4.5,
          }
        ]
      }
    }
  },
  {
    step: 6,
    title: "Basing Materials",
    icon: "🌿",
    description: "A great base completes your miniature and tells a story. Start simple and build complexity as you improve.",
    tips: [
      "Match base to your miniature's theme",
      "Use texture paints for easy results",
      "Add small details like grass or stones"
    ],
    levels: {
      entry: {
        title: "Entry Level - Simple Basing",
        description: "Basic materials for clean, effective bases",
        amazonLinks: [
          {
            name: "Huge Miniatures Basing Materials, Medium Grit ",
            price: "$6.99",
            link: "https://amzn.to/41CcyDm",
            description: "This material is an easy way to layer natural ground elements on your miniature base or terrain.",
            category: "Materials",
            rating: 5.0,
          },
          {
            name: "Army Painter Battlefield Grass",
            price: "$13.89",
            link: "https://amzn.to/45S86mp",
            description: "Static grass for quick, effective basing",
            category: "Materials",
            rating: 4.7,
          },
          {
            name: "Titebond PVA Glue (White Glue)",
            price: "$7.02",
            link: "https://amzn.to/4fBF8uk",
            description: "Essential adhesive for basing materials",
            category: "Adhesives",
            rating: 4.6,
          }
        ]
      },
      mid: {
        title: "Mid Level - Themed Basing",
        description: "Complete basing kits for specific environments",
        amazonLinks: [
          {
            name: "Citadel Texture Paint Set (6 colors)",
            price: "$44.99",
            originalPrice: "$54.99",
            link: "https://amazon.com/dp/example-texture-set", // Replace with your affiliate link
            description: "Ready-to-use textured base paints",
            category: "Texture Paints",
            rating: 4.6,
            reviewCount: 1234
          },
          {
            name: "Army Painter Battlefield Basing Set",
            price: "$27.99",
            originalPrice: "$34.99",
            link: "https://amazon.com/dp/example-battlefield-set", // Replace with your affiliate link
            description: "Complete materials for various terrains",
            category: "Basing Sets",
            rating: 4.4,
            reviewCount: 876
          },
          {
            name: "Woodland Scenics Realistic Grass Assortment",
            price: "$19.99",
            originalPrice: "$24.99",
            link: "https://amazon.com/dp/example-woodland", // Replace with your affiliate link
            description: "Multiple grass colors and textures",
            category: "Scenic Materials",
            rating: 4.5,
            reviewCount: 654
          }
        ]
      },
      professional: {
        title: "Professional Level - Display Bases",
        description: "Premium materials for competition and display pieces",
        amazonLinks: [
          {
            name: "Green Stuff World Rolling Pins Set",
            price: "$39.99",
            originalPrice: "$49.99",
            link: "https://amazon.com/dp/example-rolling-pins", // Replace with your affiliate link
            description: "Create custom textured bases with putty",
            category: "Sculpting Tools",
            rating: 4.8,
            reviewCount: 345
          },
          {
            name: "AK Interactive Diorama Series Complete Set",
            price: "$149.99",
            originalPrice: "$179.99",
            link: "https://amazon.com/dp/example-ak-diorama", // Replace with your affiliate link
            description: "Professional weathering and terrain materials",
            category: "Diorama Supplies",
            rating: 4.7,
            reviewCount: 234
          },
          {
            name: "Scale75 Instant Scenery Complete Collection",
            price: "$89.99",
            originalPrice: "$109.99",
            link: "https://amazon.com/dp/example-instant-scenery", // Replace with your affiliate link
            description: "Laser-cut scenic elements and details",
            category: "Premium Scenery",
            rating: 4.9,
            reviewCount: 567
          }
        ]
      }
    }
  },
  {
    step: 7,
    title: "Advanced Supplies",
    icon: "⚡",
    description: "Once you've mastered the basics, these tools will elevate your painting to professional levels.",
    tips: [
      "Invest in quality as your skills improve",
      "Wet palettes extend paint working time",
      "Proper lighting prevents eye strain and color errors"
    ],
    levels: {
      entry: {
        title: "Entry Level - Helpful Additions",
        description: "Useful tools that make painting more comfortable",
        amazonLinks: [
          {
            name: "DIY Wet Palette Kit",
            price: "$12.99",
            originalPrice: "$16.99",
            link: "https://amazon.com/dp/example-diy-palette", // Replace with your affiliate link
            description: "Make your own wet palette with parchment paper",
            category: "Basic Tools",
            rating: 4.2,
            reviewCount: 765
          },
          {
            name: "Basic Desk Lamp with Daylight Bulb",
            price: "$24.99",
            originalPrice: "$32.99",
            link: "https://amazon.com/dp/example-basic-lamp", // Replace with your affiliate link
            description: "Improve your lighting without breaking the bank",
            category: "Lighting",
            rating: 4.0,
            reviewCount: 543
          }
        ]
      },
      mid: {
        title: "Mid Level - Quality Upgrades",
        description: "Professional accessories that improve your painting experience",
        amazonLinks: [
          {
            name: "Redgrass Games Wet Palette",
            price: "$34.99",
            originalPrice: "$42.99",
            link: "https://amazon.com/dp/example-redgrass", // Replace with your affiliate link
            description: "Professional wet palette keeps paints fresh for days",
            category: "Professional Tools",
            rating: 4.8,
            reviewCount: 1876
          },
          {
            name: "Daylight LED Desk Lamp",
            price: "$49.99",
            originalPrice: "$62.99",
            link: "https://amazon.com/dp/example-led-lamp", // Replace with your affiliate link
            description: "Color-accurate lighting for true color representation",
            category: "Professional Lighting",
            rating: 4.6,
            reviewCount: 1234
          },
          {
            name: "Vallejo Airbrush Thinner Medium",
            price: "$8.99",
            originalPrice: "$11.99",
            link: "https://amazon.com/dp/example-thinner", // Replace with your affiliate link
            description: "For advanced blending and smooth finishes",
            category: "Paint Mediums",
            rating: 4.5,
            reviewCount: 876
          }
        ]
      },
      professional: {
        title: "Professional Level - Studio Setup",
        description: "Complete professional painting station equipment",
        amazonLinks: [
          {
            name: "Harder & Steenbeck Airbrush Set",
            price: "$199.99",
            originalPrice: "$249.99",
            link: "https://amazon.com/dp/example-airbrush", // Replace with your affiliate link
            description: "Professional airbrush for smooth gradients",
            category: "Airbrush Systems",
            rating: 4.9,
            reviewCount: 567
          },
          {
            name: "Professional Paint Station with Storage",
            price: "$149.99",
            originalPrice: "$189.99",
            link: "https://amazon.com/dp/example-paint-station", // Replace with your affiliate link
            description: "Organized workspace with integrated lighting",
            category: "Workspace",
            rating: 4.7,
            reviewCount: 345
          },
          {
            name: "Color Temperature Adjustable Ring Light",
            price: "$89.99",
            originalPrice: "$119.99",
            link: "https://amazon.com/dp/example-ring-light", // Replace with your affiliate link
            description: "Professional photography-grade lighting",
            category: "Professional Lighting",
            rating: 4.8,
            reviewCount: 234
          },
          {
            name: "Ultrasonic Cleaner for Brushes",
            price: "$59.99",
            originalPrice: "$79.99",
            link: "https://amazon.com/dp/example-ultrasonic", // Replace with your affiliate link
            description: "Extend brush life with deep cleaning",
            category: "Maintenance Tools",
            rating: 4.6,
            reviewCount: 432
          }
        ]
      }
    }
  }
];

// Budget calculations for each level
export const levelBudgets = {
  entry: { min: 80, max: 120 },
  mid: { min: 200, max: 350 },
  professional: { min: 500, max: 1000 }
};

// Level configuration
export const levelConfig = {
  entry: {
    icon: '🌱',
    color: 'success',
    title: 'Entry Level',
    description: 'Perfect for beginners - Budget: $80-120',
    badge: 'Perfect starting point - upgrade individual items as your skills develop!'
  },
  mid: {
    icon: '🔥',
    color: 'warning',
    title: 'Mid Level',
    description: 'Quality tools for serious hobbyists - Budget: $200-350',
    badge: 'Quality tools that will serve you well for years of painting!'
  },
  professional: {
    icon: '👑',
    color: 'danger',
    title: 'Professional',
    description: 'Premium equipment for competition - Budget: $500-1000',
    badge: 'Competition-ready equipment for serious miniature artists!'
  }
};

// Quick start checklist items
export const quickStartChecklist = {
  essential: [
    { id: 'miniatures', label: 'Starter miniatures' },
    { id: 'brushes', label: 'Basic brush set' },
    { id: 'primer', label: 'Primer (spray or brush-on)' },
    { id: 'paints', label: 'Essential paint colors' },
    { id: 'washes', label: 'Basic wash/shade' }
  ],
  setup: [
    { id: 'workspace', label: 'Dedicated workspace' },
    { id: 'lighting', label: 'Good lighting' },
    { id: 'water', label: 'Water containers' },
    { id: 'palette', label: 'Palette or mixing surface' },
    { id: 'cleaning', label: 'Paper towels/tissue' }
  ]
};

// Comparison table data
export const levelComparison = [
  {
    feature: 'Budget Range',
    entry: '$80 - $120',
    mid: '$200 - $350',
    professional: '$500 - $1000+'
  },
  {
    feature: 'Best For',
    entry: 'Complete beginners, testing the hobby',
    mid: 'Committed hobbyists, regular painting',
    professional: 'Competition painters, display pieces'
  },
  {
    feature: 'Paint Quality',
    entry: 'Basic acrylics, good for learning',
    mid: 'Professional hobby paints',
    professional: 'Artist-quality pigments'
  },
  {
    feature: 'Brush Quality',
    entry: 'Synthetic bristles, basic set',
    mid: 'Natural/synthetic blend',
    professional: 'Premium Kolinsky sable'
  },
  {
    feature: 'Tool Durability',
    entry: '1-2 years with care',
    mid: '3-5 years of regular use',
    professional: 'Professional lifetime tools'
  },
  {
    feature: 'Results Expectation',
    entry: 'Tabletop quality, learning fundamentals',
    mid: 'Display quality, refined techniques',
    professional: 'Competition level, museum pieces'
  }
];

// Helper functions
export const getLevelBadgeColor = (level) => {
  return levelConfig[level]?.color || 'primary';
};

export const getLevelIcon = (level) => {
  return levelConfig[level]?.icon || '⭐';
};

export const calculateBudget = (level) => {
  return levelBudgets[level] || { min: 0, max: 0 };
};

// Filter products by price range for each level
export const filterProductsByLevel = (products, level) => {
  return products.filter(product => {
    // Handle both string prices like "$29.99" and number prices like 29.99
    const priceValue = typeof product.price === 'string' 
      ? parseFloat(product.price.replace(', ')) 
      : parseFloat(product.price);
    
    if (level === 'entry') return priceValue <= 30;
    if (level === 'mid') return priceValue > 30 && priceValue <= 80;
    return priceValue > 80;
  });
};