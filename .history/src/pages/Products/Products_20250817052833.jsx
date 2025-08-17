import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Badge } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import ProductCard from '../../components/ProductCard/ProductCard';
import { allProducts, productCategories, sortProductsByPriceDesc, sortProductsByRating } from '../../data/products';
import './Products.css';

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState(sortProductsByPriceDesc(allProducts));
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('price-desc');

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    applyFilters(category, sortBy);
  };

  const handleSortChange = (sortOption) => {
    setSortBy(sortOption);
    applyFilters(selectedCategory, sortOption);
  };

  const applyFilters = (category, sort) => {
    let products = [...allProducts];

    // Filter by category
    if (category !== 'All') {
      products = products.filter(product => product.category === category);
    }

    // Apply sorting
    switch (sort) {
      case 'price-desc':
        products = sortProductsByPriceDesc(products);
        break;
      case 'price-asc':
        products = products.sort((a, b) => a.price - b.price);
        break;
      case 'rating':
        products = sortProductsByRating(products);
        break;
      case 'name':
        products = products.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    setFilteredProducts(products);
  };

  // Dynamic title and description based on filters
  const getPageTitle = () => {
    if (selectedCategory === 'All') {
      return 'Best Miniature Painting Supplies & Tools 2025 | Expert Reviews';
    }
    return `Best ${selectedCategory} for Miniature Painting 2025 | Product Reviews`;
  };

  const getPageDescription = () => {
    if (selectedCategory === 'All') {
      return 'Discover the top-rated miniature painting supplies with expert reviews. Find the best brushes, paints, primers, and tools with Amazon prices and ratings.';
    }
    return `Find the best ${selectedCategory.toLowerCase()} for miniature painting. Expert reviews, price comparisons, and Amazon affiliate links for ${selectedCategory.toLowerCase()}.`;
  };

  return (
    <div className="products-page">
      {/* SEO Helmet - ADD THIS HERE */}
      <Helmet>
        <title>{getPageTitle()}</title>
        <meta name="description" content={getPageDescription()} />
        <meta name="keywords" content={`miniature painting ${selectedCategory !== 'All' ? selectedCategory.toLowerCase() : 'supplies'}, warhammer painting tools, model painting equipment, acrylic paints, miniature brushes, hobby supplies`} />
        <link rel="canonical" href={`https://pushingpigment.com/products${selectedCategory !== 'All' ? `?category=${selectedCategory}` : ''}`} />
        
        {/* Open Graph for social sharing */}
        <meta property="og:title" content={getPageTitle()} />
        <meta property="og:description" content={getPageDescription()} />
        <meta property="og:url" content="https://pushingpigment.com/products" />
        <meta property="og:type" content="website" />
        
        {/* Schema.org structured data for products */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": getPageTitle(),
            "description": getPageDescription(),
            "url": "https://pushingpigment.com/products",
            "mainEntity": {
              "@type": "ItemList",
              "numberOfItems": filteredProducts.length,
              "itemListElement": filteredProducts.slice(0, 10).map((product, index) => ({
                "@type": "Product",
                "position": index + 1,
                "name": product.name,
                "description": product.features.join(", "),
                "offers": {
                  "@type": "Offer",
                  "price": product.price,
                  "priceCurrency": "USD",
                  "availability": "https://schema.org/InStock",
                  "seller": {
                    "@type": "Organization",
                    "name": "Amazon"
                  }
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": product.rating,
                  "bestRating": 5,
                  "worstRating": 1
                }
              }))
            }
          })}
        </script>
      </Helmet>

      <div className="products-hero">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h1 className="products-title">
                Your Complete <span className="gradient-text">Painting Arsenal</span>
              </h1>
              <p className="products-description">
                Everything you need to start and master miniature painting, 
                carefully curated and ranked by value and quality.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="products-content">
        {/* Filters and Sorting */}
        <Row className="mb-4">
          <Col lg={8}>
            <div className="category-filters">
              <h5 className="filter-title">Categories:</h5>
              <div className="category-buttons">
                <Button
                  variant={selectedCategory === 'All' ? 'primary' : 'outline-primary'}
                  size="sm"
                  className="category-btn me-2 mb-2"
                  onClick={() => handleCategoryFilter('All')}
                >
                  All Products
                </Button>
                {productCategories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'primary' : 'outline-primary'}
                    size="sm"
                    className="category-btn me-2 mb-2"
                    onClick={() => handleCategoryFilter(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="sort-controls">
              <Form.Label className="filter-title">Sort by:</Form.Label>
              <Form.Select
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value)}
                className="sort-select"
              >
                <option value="price-desc">Price (High to Low)</option>
                <option value="price-asc">Price (Low to High)</option>
                <option value="rating">Highest Rated</option>
                <option value="name">Name (A-Z)</option>
              </Form.Select>
            </div>
          </Col>
        </Row>

        {/* Results Summary */}
        <Row className="mb-4">
          <Col>
            <div className="results-summary">
              <Badge bg="light" text="dark" className="results-badge">
                {filteredProducts.length} products found
                {selectedCategory !== 'All' && ` in ${selectedCategory}`}
              </Badge>
            </div>
          </Col>
        </Row>

        {/* Products Grid */}
        <Row>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Col md={6} lg={4} key={product.id} className="mb-4">
                <ProductCard product={product} />
              </Col>
            ))
          ) : (
            <Col className="text-center py-5">
              <div className="no-products">
                <div className="no-products-icon">🔍</div>
                <h4>No products found</h4>
                <p className="text-muted">
                  Try adjusting your filters or check back later for new products.
                </p>
                <Button 
                  variant="primary" 
                  onClick={() => handleCategoryFilter('All')}
                >
                  View All Products
                </Button>
              </div>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Products;