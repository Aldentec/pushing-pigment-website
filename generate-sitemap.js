const fs = require('fs');
const path = require('path');

// Configuration
const DOMAIN = 'https://pushingpigment.com';
const OUTPUT_FILE = path.join(__dirname, 'public', 'sitemap.xml');

// Static routes from your React app
const staticRoutes = [
  {
    url: '/',
    priority: '1.0',
    changefreq: 'weekly'
  },
  {
    url: '/getting-started',
    priority: '0.9',
    changefreq: 'monthly'
  },
  {
    url: '/products',
    priority: '0.9',
    changefreq: 'weekly'
  },
  {
    url: '/tutorials',
    priority: '0.9',
    changefreq: 'weekly'
  }
];

// Product categories (from your data)
const productCategories = [
  'Paints',
  'Brushes', 
  'Tools',
  'Primers',
  'Miniatures',
  'Accessories',
  'Basing Materials'
];

// Tutorial categories and difficulties
const tutorialDifficulties = ['Beginner', 'Intermediate', 'Advanced'];
const tutorialCategories = ['Basics', 'Techniques', 'Miniature Types', 'Advanced'];
const gettingStartedLevels = ['entry', 'mid', 'professional'];

// Sort options for products
const sortOptions = ['rating', 'price-asc', 'price-desc', 'name'];

// Generate dynamic routes
function generateDynamicRoutes() {
  const routes = [];
  
  // Since you don't use URL parameters, we'll focus on the main pages
  // and future individual pages you might add
  
  // Future individual product pages (when you create them)
  // For now, we'll just include the main pages
  
  // You could add individual tutorial pages if you create them:
  // Example: /tutorials/dry-brushing-basics
  // Example: /tutorials/wet-blending-guide
  
  // You could add individual product review pages:
  // Example: /products/citadel-paint-set-review
  // Example: /products/army-painter-brushes-review
  
  // You could add buying guide pages:
  // Example: /guides/best-miniature-paints-2025
  // Example: /guides/beginner-brush-buying-guide
  
  return routes;
}

// Generate the sitemap XML
function generateSitemap() {
  const currentDate = new Date().toISOString();
  const allRoutes = [...staticRoutes, ...generateDynamicRoutes()];
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">

`;

  allRoutes.forEach(route => {
    xml += `  <url>
    <loc>${DOMAIN}${route.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>

`;
  });

  xml += `</urlset>`;
  
  return xml;
}

// Future: Add individual product/tutorial pages when you have them
function generateIndividualPages() {
  // This would pull from your actual data files
  // Example for when you add individual product pages:
  
  /*
  const { allProducts } = require('./src/data/products.js');
  const { tutorialData } = require('./src/data/tutorials.js');
  
  const individualRoutes = [];
  
  // Individual product pages (if you create them)
  allProducts.forEach(product => {
    individualRoutes.push({
      url: `/products/${product.id}`,
      priority: '0.6',
      changefreq: 'monthly'
    });
  });
  
  // Individual tutorial pages (if you create them)
  tutorialData.forEach(tutorial => {
    individualRoutes.push({
      url: `/tutorials/${tutorial.id}`,
      priority: '0.7',
      changefreq: 'monthly'
    });
  });
  
  return individualRoutes;
  */
  
  return [];
}

// Write the sitemap file
function writeSitemap() {
  try {
    const sitemapXML = generateSitemap();
    
    // Ensure public directory exists
    const publicDir = path.dirname(OUTPUT_FILE);
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    
    fs.writeFileSync(OUTPUT_FILE, sitemapXML, 'utf8');
    
    console.log('✅ Sitemap generated successfully!');
    console.log(`📍 Location: ${OUTPUT_FILE}`);
    console.log(`🔗 URL: ${DOMAIN}/sitemap.xml`);
    console.log(`📊 Total URLs: ${staticRoutes.length + generateDynamicRoutes().length}`);
    
    // Log some example URLs for verification
    console.log('\n📋 Sample URLs generated:');
    const sampleRoutes = [...staticRoutes, ...generateDynamicRoutes()].slice(0, 10);
    sampleRoutes.forEach(route => {
      console.log(`   ${DOMAIN}${route.url}`);
    });
    
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
}

// Run the generator
if (require.main === module) {
  writeSitemap();
}

module.exports = {
  generateSitemap,
  writeSitemap,
  generateDynamicRoutes
};