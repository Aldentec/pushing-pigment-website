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
    featuredImage: '/images/blog/best-miniature-paints-beginners-2025.jpg',
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
    featuredImage: '/images/blog/paint-wont-stick-miniatures-fix.jpg',
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