// Sample product data - replace with your actual affiliate links
export const startingProducts = [
  {
    id: 1,
    name: "Warhammer 40K Space Marine Starter Set",
    price: 45.99,
    originalPrice: 59.99,
    category: "Miniatures",
    rating: 4.8,
    reviewCount: 1247,
    amazonLink: "https://amazon.com/dp/example1", // Replace with actual affiliate link
    features: [
      "High-quality plastic miniatures",
      "Detailed assembly instructions",
      "Perfect for beginners"
    ],
    isRecommended: true
  },
  {
    id: 2,
    name: "Citadel Base Paint Set - Essential Colors",
    price: 89.99,
    originalPrice: 109.99,
    category: "Paints",
    rating: 4.7,
    reviewCount: 892,
    amazonLink: "https://amazon.com/dp/example2",
    features: [
      "12 essential base colors",
      "High pigment concentration",
      "Easy to thin and blend"
    ],
    isRecommended: true
  },
  {
    id: 3,
    name: "Professional Miniature Brush Set",
    price: 34.99,
    originalPrice: 49.99,
    category: "Tools",
    rating: 4.6,
    reviewCount: 654,
    amazonLink: "https://amazon.com/dp/example3",
    features: [
      "Synthetic bristles",
      "Multiple brush sizes",
      "Comfortable grip handles"
    ],
    isRecommended: false
  },
  {
    id: 4,
    name: "Vallejo Surface Primer - Black",
    price: 12.99,
    originalPrice: 16.99,
    category: "Primer",
    rating: 4.5,
    reviewCount: 423,
    amazonLink: "https://amazon.com/dp/example4",
    features: [
      "Superior adhesion",
      "Quick drying formula",
      "Available in multiple colors"
    ],
    isRecommended: false
  },
  {
    id: 5,
    name: "Army Painter Battlefields Basing Set",
    price: 27.99,
    originalPrice: 34.99,
    category: "Basing",
    rating: 4.4,
    reviewCount: 312,
    amazonLink: "https://amazon.com/dp/example5",
    features: [
      "Multiple terrain textures",
      "Easy application",
      "Realistic battlefield effects"
    ],
    isRecommended: false
  },
  {
    id: 6,
    name: "X-Acto Precision Knife Set",
    price: 18.99,
    originalPrice: 24.99,
    category: "Tools",
    rating: 4.3,
    reviewCount: 567,
    amazonLink: "https://amazon.com/dp/example6",
    features: [
      "Precision cutting",
      "Replaceable blades",
      "Ergonomic design"
    ],
    isRecommended: false
  }
];

export const allProducts = [
  ...startingProducts,
  // Add more products here as needed
];

export const productCategories = [
  "Miniatures",
  "Paints", 
  "Tools",
  "Primer",
  "Basing",
  "Brushes",
  "Accessories"
];

// Helper function to get products by category
export const getProductsByCategory = (category) => {
  return allProducts.filter(product => product.category === category);
};

// Helper function to get recommended products
export const getRecommendedProducts = () => {
  return allProducts.filter(product => product.isRecommended);
};

// Helper function to sort products by price (descending)
export const sortProductsByPriceDesc = (products) => {
  return [...products].sort((a, b) => b.price - a.price);
};

// Helper function to sort products by rating
export const sortProductsByRating = (products) => {
  return [...products].sort((a, b) => b.rating - a.rating);
};