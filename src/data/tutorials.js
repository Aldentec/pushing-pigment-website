// Sample tutorial data - replace with your actual content
export const tutorialData = [
  {
    id: 1,
    title: "Your First Miniature: Complete Beginner's Guide",
    description: "Learn the absolute basics of miniature painting with this comprehensive step-by-step guide. Perfect for those who have never painted a miniature before.",
    category: "Basics",
    difficulty: "Beginner",
    duration: "45 min",
    instructor: "Sarah Chen",
    rating: 4.9,
    reviews: 1247,
    icon: "🎯",
    skills: [
      "Holding a brush properly",
      "Basic paint thinning",
      "Simple base coating",
      "Cleaning and maintenance"
    ],
    link: "#tutorial-1" // Replace with actual tutorial link
  },
  {
    id: 2,
    title: "Mastering Dry Brushing Techniques",
    description: "Discover the power of dry brushing to add texture and highlights to your miniatures. Learn when and how to use this essential technique.",
    category: "Techniques",
    difficulty: "Beginner",
    duration: "30 min",
    instructor: "Mike Rodriguez",
    rating: 4.7,
    reviews: 892,
    icon: "🖌️",
    skills: [
      "Proper brush loading",
      "Texture enhancement",
      "Highlight placement",
      "Edge highlighting"
    ],
    link: "#tutorial-2"
  },
  {
    id: 3,
    title: "Painting Space Marines Like a Pro",
    description: "Step-by-step guide to painting Warhammer 40K Space Marines with crisp details and professional-looking results.",
    category: "Miniature Types",
    difficulty: "Intermediate",
    duration: "2 hours",
    instructor: "David Thompson",
    rating: 4.8,
    reviews: 654,
    icon: "⚔️",
    skills: [
      "Power armor painting",
      "Weapon detailing",
      "Chapter markings",
      "Battle damage effects"
    ],
    link: "#tutorial-3"
  },
  {
    id: 4,
    title: "Advanced Wet Blending for Smooth Gradients",
    description: "Master the challenging technique of wet blending to create seamless color transitions and professional gradients.",
    category: "Techniques",
    difficulty: "Advanced",
    duration: "1.5 hours",
    instructor: "Elena Kowalski",
    rating: 4.6,
    reviews: 423,
    icon: "🌈",
    skills: [
      "Paint consistency control",
      "Timing and speed",
      "Color theory application",
      "Gradient smoothing"
    ],
    link: "#tutorial-4"
  },
  {
    id: 5,
    title: "Creating Realistic Skin Tones",
    description: "Learn to paint lifelike skin with proper shading, highlighting, and color mixing for various skin tones and fantasy races.",
    category: "Techniques",
    difficulty: "Intermediate",
    duration: "1 hour",
    instructor: "James Wilson",
    rating: 4.5,
    reviews: 567,
    icon: "👤",
    skills: [
      "Color mixing for skin",
      "Shading techniques",
      "Highlight placement",
      "Fantasy skin variations"
    ],
    link: "#tutorial-5"
  },
  {
    id: 6,
    title: "Base Building: From Simple to Spectacular",
    description: "Transform your miniature bases from plain to amazing with various materials and techniques for different environments.",
    category: "Basics",
    difficulty: "Beginner",
    duration: "40 min",
    instructor: "Lisa Park",
    rating: 4.4,
    reviews: 334,
    icon: "🏔️",
    skills: [
      "Base preparation",
      "Texture application",
      "Environmental effects",
      "Color coordination"
    ],
    link: "#tutorial-6"
  },
  {
    id: 7,
    title: "Non-Metallic Metal (NMM) Masterclass",
    description: "Advanced technique for painting metallic surfaces without metallic paints. Create stunning sword blades and armor.",
    category: "Advanced",
    difficulty: "Advanced",
    duration: "3 hours",
    instructor: "Roberto Silva",
    rating: 4.9,
    reviews: 289,
    icon: "⚡",
    skills: [
      "Light source understanding",
      "Reflection painting",
      "Value control",
      "Edge definition"
    ],
    link: "#tutorial-7"
  },
  {
    id: 8,
    title: "Speed Painting: Army in a Weekend",
    description: "Efficient techniques to paint entire armies quickly while maintaining good quality. Perfect for tabletop gaming.",
    category: "Techniques",
    difficulty: "Intermediate",
    duration: "1 hour",
    instructor: "Chris Anderson",
    rating: 4.3,
    reviews: 445,
    icon: "⚡",
    skills: [
      "Efficient workflow",
      "Batch painting",
      "Quick highlighting",
      "Time management"
    ],
    link: "#tutorial-8"
  },
  {
    id: 9,
    title: "Painting Dragons and Large Creatures",
    description: "Special techniques for painting large miniatures including scales, wings, and creating impressive centerpiece models.",
    category: "Miniature Types",
    difficulty: "Intermediate",
    duration: "2.5 hours",
    instructor: "Alexandra Hunt",
    rating: 4.7,
    reviews: 356,
    icon: "🐉",
    skills: [
      "Scale painting techniques",
      "Large surface management",
      "Wing membrane effects",
      "Dramatic highlighting"
    ],
    link: "#tutorial-9"
  },
  {
    id: 10,
    title: "Object Source Lighting (OSL) Effects",
    description: "Create magical glowing effects and realistic lighting on your miniatures with this advanced lighting technique.",
    category: "Advanced",
    difficulty: "Advanced",
    duration: "2 hours",
    instructor: "Marcus Webb",
    rating: 4.8,
    reviews: 234,
    icon: "💡",
    skills: [
      "Light physics understanding",
      "Glow effects",
      "Color temperature",
      "Reflection painting"
    ],
    link: "#tutorial-10"
  },
  {
    id: 11,
    title: "Weathering and Battle Damage",
    description: "Add realistic wear, rust, and battle damage to make your miniatures look like they've seen real combat.",
    category: "Techniques",
    difficulty: "Intermediate",
    duration: "1.25 hours",
    instructor: "Tom Mitchell",
    rating: 4.6,
    reviews: 478,
    icon: "💥",
    skills: [
      "Rust effects",
      "Chipping techniques",
      "Dirt and grime",
      "Selective weathering"
    ],
    link: "#tutorial-11"
  },
  {
    id: 12,
    title: "Contrast Paints: Modern Speed Techniques",
    description: "Master the new generation of contrast paints for quick, effective results with minimal effort.",
    category: "Basics",
    difficulty: "Beginner",
    duration: "35 min",
    instructor: "Sophie Martin",
    rating: 4.2,
    reviews: 567,
    icon: "🎨",
    skills: [
      "Contrast paint application",
      "Primer selection",
      "Quick shading",
      "Highlight addition"
    ],
    link: "#tutorial-12"
  }
];

// Helper functions for filtering
export const getTutorialsByDifficulty = (difficulty) => {
  return tutorialData.filter(tutorial => tutorial.difficulty === difficulty);
};

export const getTutorialsByCategory = (category) => {
  return tutorialData.filter(tutorial => tutorial.category === category);
};

export const getPopularTutorials = () => {
  return tutorialData.filter(tutorial => tutorial.rating >= 4.5).sort((a, b) => b.rating - a.rating);
};

export const getBeginnerTutorials = () => {
  return getTutorialsByDifficulty('Beginner');
};