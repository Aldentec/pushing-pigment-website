// src/data/blogPosts.js

export const blogPosts = [
  {
    id: 'best-miniature-paints-beginners-2025',
    title: 'Best Miniature Paints for Beginners 2025: Complete Buying Guide',
    slug: 'best-miniature-paints-beginners-2025',
    excerpt: 'Discover the top miniature paint sets for beginners. Compare Citadel, Vallejo, and Army Painter with honest reviews, pricing, and recommendations.',
    author: 'Pushing Pigment Team',
    publishDate: '2025-01-15',
    lastModified: '2025-01-15',
    category: 'Buying Guides',
    tags: ['beginner', 'paints', 'citadel', 'vallejo', 'army painter', 'buying guide'],
    featuredImage: '/images/blog/best-paints-beginners-2025.jpg',
    featuredImageAlt: 'Collection of beginner miniature paint sets including Citadel, Vallejo, and Army Painter',
    readTime: '12 min read',
    difficulty: 'Beginner',
    seoTitle: 'Best Miniature Paints for Beginners 2025 | Complete Buying Guide',
    seoDescription: 'Find the perfect miniature paint set for beginners. Expert comparison of Citadel, Vallejo, Army Painter with prices, pros/cons, and buying recommendations.',
    keywords: 'best miniature paints beginners, citadel vs vallejo paints, army painter review, miniature painting starter set, acrylic paints miniatures',
    affiliateProducts: [
      'citadel-paint-set',
      'vallejo-model-color-set', 
      'army-painter-starter-set'
    ],
    contentFile: 'best-miniature-paints-beginners-2025.js'
  },
  {
    id: 'paint-wont-stick-miniatures-fix',
    title: 'Paint Won\'t Stick to Your Miniatures? Here\'s Why (And How to Fix It)',
    slug: 'paint-wont-stick-miniatures-fix',
    excerpt: 'Frustrated with paint peeling off your miniatures? Learn the 5 main causes and proven solutions to ensure perfect paint adhesion every time.',
    author: 'Pushing Pigment Team',
    publishDate: '2025-01-10',
    lastModified: '2025-01-10',
    category: 'Troubleshooting',
    tags: ['troubleshooting', 'primer', 'paint adhesion', 'beginner problems', 'techniques'],
    featuredImage: '/images/blog/paint-adhesion-problems.jpg',
    featuredImageAlt: 'Before and after comparison showing poor paint adhesion vs properly primed miniature',
    readTime: '8 min read',
    difficulty: 'Beginner',
    seoTitle: 'Paint Won\'t Stick to Miniatures? 5 Causes & Solutions | Fix Guide',
    seoDescription: 'Fix paint adhesion problems on miniatures. Learn why paint peels off and get proven solutions for perfect primer and paint application.',
    keywords: 'paint won\'t stick miniatures, miniature primer problems, paint peeling off models, miniature painting adhesion, how to prime miniatures',
    affiliateProducts: [
      'citadel-chaos-black-primer',
      'vallejo-surface-primer',
      'army-painter-primer'
    ],
    contentFile: 'paint-wont-stick-miniatures-fix.js'
  },
  {
    id: 'christmas-gifts-miniature-painters-2025',
    title: 'Christmas Gifts for Miniature Painters 2025: 25+ Ideas for Every Budget',
    slug: 'christmas-gifts-miniature-painters-2025',
    excerpt: 'The ultimate gift guide for miniature painting enthusiasts. From $10 stocking stuffers to $200+ premium tools, find the perfect present.',
    author: 'Pushing Pigment Team',
    publishDate: '2024-11-01',
    lastModified: '2024-12-15',
    category: 'Gift Guides',
    tags: ['christmas', 'gifts', 'holiday', 'buying guide', 'presents', 'budget'],
    featuredImage: '/images/blog/christmas-gifts-miniature-painters.jpg',
    featuredImageAlt: 'Christmas-themed arrangement of miniature painting supplies and tools',
    readTime: '15 min read',
    difficulty: 'All Levels',
    seoTitle: 'Christmas Gifts for Miniature Painters 2025 | 25+ Gift Ideas',
    seoDescription: 'Perfect Christmas gifts for miniature painting hobbyists. Budget-friendly to premium options with buying guides and gift recommendations.',
    keywords: 'christmas gifts miniature painters, holiday presents hobby painters, miniature painting gift ideas, warhammer christmas gifts, painting supplies gifts',
    affiliateProducts: [
      'citadel-paint-set',
      'winsor-newton-brushes',
      'wet-palette',
      'magnifying-lamp',
      'hobby-knife-set'
    ],
    contentFile: 'christmas-gifts-miniature-painters-2025.js'
  }
];

// Helper functions
export const getBlogPostBySlug = (slug) => {
  return blogPosts.find(post => post.slug === slug);
};

export const getBlogPostsByCategory = (category) => {
  return blogPosts.filter(post => post.category === category);
};

export const getBlogPostsByTag = (tag) => {
  return blogPosts.filter(post => post.tags.includes(tag));
};

export const getRecentBlogPosts = (limit = 5) => {
  return [...blogPosts]
    .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate))
    .slice(0, limit);
};

export const getAllCategories = () => {
  const categories = [...new Set(blogPosts.map(post => post.category))];
  return categories.sort();
};

export const getAllTags = () => {
  const tags = [...new Set(blogPosts.flatMap(post => post.tags))];
  return tags.sort();
};

export const getRelatedPosts = (currentPost, limit = 3) => {
  return blogPosts
    .filter(post => 
      post.id !== currentPost.id && 
      (post.category === currentPost.category || 
       post.tags.some(tag => currentPost.tags.includes(tag)))
    )
    .slice(0, limit);
};