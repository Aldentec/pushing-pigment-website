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
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=S7-At4qVC84&t=2429s",
    link: "#tutorial-1" // Fallback link if YouTube URL doesn't work
  },
  {
    id: 2,
    title: "Become a DRYBRUSH MASTER! The complete guide to drybrushing minis ",
    description: "Learn how to properly drybrush your minis!",
    category: "Techniques",
    difficulty: "Beginner",
    duration: "26 min",
    instructor: "Midwinter Minis",
    icon: "🖌️",
    skills: [
      "Proper brush loading",
      "Texture enhancement",
      "Highlight placement",
      "Edge highlighting"
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=LtD1kyz5slk&t=922s",
    link: "#tutorial-2"
  },
  {
    id: 3,
    title: "The only 3 ways we’ll ever paint Space Marines again ",
    description: "Step-by-step guide to painting Warhammer 40K Space Marines with crisp details and professional-looking results.",
    category: "Miniature Types",
    difficulty: "Intermediate",
    duration: "17 min",
    instructor: "Squidmar",
    icon: "⚔️",
    skills: [
      "Power armor painting",
      "Weapon detailing",
      "Chapter markings",
      "Battle damage effects"
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=sxgJUp5A8f0",
    link: "#tutorial-3"
  },
  {
    id: 4,
    title: "FASTEST Way to Blend! | Wet Blending explained in 5 minutes",
    description: "Wet blending is one of the major blending methods in miniature painting. If you want to paint cloaks or skin, wet blending is perfect solution! Of course you can go ahead and use it on space marine armor, but natural surfaces are the best for wet blending.",
    category: "Techniques",
    difficulty: "Advanced",
    duration: "6 min",
    instructor: "Zumikito Miniatures",
    icon: "🌈",
    skills: [
      "Paint consistency control",
      "Timing and speed",
      "Color theory application",
      "Gradient smoothing"
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=uqFnsbE1Mr4",
    link: "#tutorial-4"
  },
  {
    id: 5,
    title: "Miniature Skin Painting Explained",
    description: "Going over the basics of painting skin on miniatures and some advanced techniques if you want to go a bit further.",
    category: "Techniques",
    difficulty: "Intermediate",
    duration: "14 min",
    instructor: "Doctor Faust's Painting Clinic",
    icon: "👤",
    skills: [
      "Color mixing for skin",
      "Shading techniques",
      "Highlight placement",
      "Fantasy skin variations"
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=9wSZjPHaaC4",
    link: "#tutorial-5"
  },
  {
    id: 6,
    title: "STIPPLING explained in 5 minutes",
    description: "Stippling is one of the best speedpainting or time efficient methods that you can use to paint miniatures with a great result in no time. In this video you will learn how to stipple on your miniatures, so you can paint better and faster as well!",
    category: "Techniques",
    difficulty: "Advanced",
    duration: "5 min",
    instructor: "Zumikito Miniatures",
    icon: "🖌️",
    skills: [
      "Stippling",
      "Blending techniques",
      "Speedpainting techniques"
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=Y0z5DHADF4M",
    link: "#tutorial-6"
  },
  {
    id: 7,
    title: "3 Ways to Speed Paint your Tyranids",
    description: "In this tutorial we show you 3 very different speed painting techniques to get your Tyranid swarm on the table top in no time at all and looking good!",
    category: "Miniature Types",
    difficulty: "Beginner",
    duration: "23 min",
    instructor: "Duncan Rhodes Painting Academy",
    icon: "🖌⚔️",
    skills: [
      "Contrast painting",
      "Speedpainting",
      "Dipping"
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=Y0z5DHADF4M",
    link: "#tutorial-7"
  },
  {
    id: 8,
    title: "I Hate Army Painting, So I Tried Sponging",
    description: "The video follows the painter's attempt to use sponging to paint a Warhammer model. They explore the technique's advantages and disadvantages, highlighting how it works best on simpler-shaped models, while presenting challenges on complex designs.",
    category: "Miniature Types",
    difficulty: "Beginner",
    duration: "23 min",
    instructor: "Duncan Rhodes Painting Academy",
    icon: "🖌⚔️",
    skills: [
      "Sponging"
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=FRfFwOVD-Ug",
    link: "#tutorial-8"
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