// Alternative approach: Manual image URLs in product data
// src/components/ProductCard/ProductCard.jsx

import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const handleProductClick = () => {
    // Track analytics if available
    if (window.gtag) {
      window.gtag('event', 'product_click', {
        'product_name': product.name,
        'product_category': product.category,
        'product_price': product.price
      });
    }
    
    window.open(product.amazonLink, '_blank', 'noopener,noreferrer');
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star full">★</span>);
    }
    
    if (hasHalfStar) {
      stars.push(<span key="half" className="star half">☆</span>);
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star empty">☆</span>);
    }
    
    return stars;
  };

  // Use manual imageUrl if provided, otherwise show placeholder
  const hasImage = product.imageUrl && product.imageUrl !== '';

  return (
    <Card className="product-card h-100">
      {/* Product Image Section */}
      <div className="product-image-container">
        {hasImage ? (
          <img 
            src={product.imageUrl} 
            alt={product.name}
            className="product-image"
            loading="lazy"
            onError={(e) => {
              // Fallback to placeholder if image fails to load
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
        ) : null}
        
        {/* Fallback placeholder */}
        <div 
          className="image-placeholder" 
          style={{ display: hasImage ? 'none' : 'flex' }}
        >
          <div className="category-icon">
            {product.category === 'Miniatures' && '🏰'}
            {product.category === 'Brushes' && '🖌️'}
            {product.category === 'Tools' && '🔧'}
            {product.category === 'Lighting' && '💡'}
            {product.category === 'Primers' && '🎯'}
            {product.category === 'Paints' && '🎨'}
            {product.category === 'Washes' && '💧'}
            {product.category === 'Basing' && '🌿'}
            {product.category === 'Airbrush' && '⚡'}
            {!['Miniatures', 'Brushes', 'Tools', 'Lighting', 'Primers', 'Paints', 'Washes', 'Basing', 'Airbrush'].includes(product.category) && '📦'}
          </div>
          <span className="placeholder-text">{product.category}</span>
        </div>
        
        {/* Product Badges */}
        <div className="product-badges">
          {product.isRecommended && (
            <Badge bg="success" className="recommended-badge">
              ⭐ Recommended
            </Badge>
          )}
          {product.experienceLevel && (
            <Badge 
              bg={
                product.experienceLevel === 'entry' ? 'success' :
                product.experienceLevel === 'mid' ? 'warning' : 'danger'
              } 
              className="level-badge"
            >
              {product.experienceLevel === 'entry' ? '🌱 Entry' :
               product.experienceLevel === 'mid' ? '🔥 Mid' : '👑 Pro'}
            </Badge>
          )}
        </div>
      </div>

      {/* Product Content */}
      <Card.Body className="d-flex flex-column">
        {/* Category */}
        <div className="product-category mb-2">
          <Badge bg="light" text="dark" className="category-badge">
            {product.category}
          </Badge>
        </div>

        {/* Product Name */}
        <h5 className="product-name">{product.name}</h5>

        {/* Features */}
        {product.features && product.features.length > 0 && (
          <div className="product-features mb-3">
            <ul className="features-list">
              {product.features.slice(0, 3).map((feature, index) => (
                <li key={index} className="feature-item">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Rating and Reviews */}
        {product.rating && (
          <div className="product-rating mb-3">
            <div className="stars">
              {renderStars(product.rating)}
            </div>
            <span className="rating-text">
              {product.rating}
            </span>
          </div>
        )}

        {/* Price and Button */}
        <div className="mt-auto">
          <div className="product-footer">
            <div className="price-section">
              <span className="current-price">${product.price}</span>
              {product.originalPrice && product.originalPrice > product.price && (
                <span className="original-price">${product.originalPrice}</span>
              )}
            </div>
            <Button 
              variant="primary" 
              className="buy-button"
              onClick={handleProductClick}
            >
              View on Amazon
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;