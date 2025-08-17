// src/data/tutorials.js
// Tutorial data with YouTube integration - replace URLs with your actual videos

export const tutorialData = [
  {
    id: 1,
    title: "Ultimate guide to painting your first miniature - everything you need to know ",
    description: "This is the ultimate video to get started with miniatures, no matter if its Warhammer, Dungeons and Dragons or any other miniature based hobby like 3D printing. We go through everything from picking the right miniature, building your first miniature as well as the three most common ways of painting miniatures.",
    category: "Basics",
    difficulty: "Beginner",
    duration: "43 min",
    instructor: "Squidmar",
    icon: "🎯",
    skills: [
      "Holding a brush properly",
      "Basic paint thinning",
      "Simple base coating",
      "Washes"
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=S7-At4qVC84&t=2429s", // Replace with your actual YouTube video
    link: "#tutorial-1" // Fallback link if YouTube URL doesn't work
  },
  {
    id: 2,
    title: "Mastering Dry Brushing Techniques",
    description: "Discover the power of dry brushing to add texture and highlights to your miniatures. Learn when and how to use this essential technique.",
    category: "Techniques",
    difficulty: "Beginner",
    duration: "30 min",
    instructor: "Mike Rodriguez",
    icon: "🖌️",
    skills: [
      "Proper brush loading",
      "Texture enhancement",
      "Highlight placement",
      "Edge highlighting"
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Replace with your actual YouTube video
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
    icon: "⚔️",
    skills: [
      "Power armor painting",
      "Weapon detailing",
      "Chapter markings",
      "Battle damage effects"
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Replace with your actual YouTube video
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
    icon: "🌈",
    skills: [
      "Paint consistency control",
      "Timing and speed",
      "Color theory application",
      "Gradient smoothing"
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Replace with your actual YouTube video
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
    icon: "👤",
    skills: [
      "Color mixing for skin",
      "Shading techniques",
      "Highlight placement",
      "Fantasy skin variations"
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Replace with your actual YouTube video
    link: "#tutorial-5"
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