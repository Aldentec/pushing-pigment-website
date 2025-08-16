import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const {
    name,
    price,
    originalPrice,
    category,
    rating,
    reviewCount,
    image,
    amazonLink,
    features,
    isRecommended
  } = product;

  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  const handleAmazonClick = () => {
    // Add affiliate tracking here
    window.open(amazonLink, '_blank', 'noopener,noreferrer');
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push('⭐');
    }
    if (hasHalfStar) {
      stars.push('⭐');
    }
    return stars.join('');
  };

  return (
    <Card className="product-card h-100">
      {isRecommended && (
        <div className="recommended-badge">
          <Badge bg="warning" className="recommended-label">
            Recommended
          </Badge>
        </div>
      )}
      
      {discount > 0 && (
        <div className="discount-badge">
          <Badge bg="danger" className="discount-label">
            -{discount}%
          </Badge>
        </div>
      )}

      <div className="product-image-container">
        <div className="product-image-placeholder">
          {image ? (
            <img src={image} alt={name} className="product-image" />
          ) : (
            <div className="placeholder-content">
              <span className="placeholder-icon">📦</span>
              <span className="placeholder-text">Product Image</span>
            </div>
          )}
        </div>
      </div>

      <Card.Body className="d-flex flex-column">
        <div className="product-category">
          <Badge bg="light" text="dark" className="category-badge">
            {category}
          </Badge>
        </div>

        <h5 className="product-title">{name}</h5>

        <div className="product-rating mb-2">
          <span className="stars">{renderStars(rating)}</span>
          <span className="rating-text">
            {rating} ({reviewCount} reviews)
          </span>
        </div>

        <div className="product-features mb-3">
          {features && features.slice(0, 3).map((feature, index) => (
            <div key={index} className="feature-item">
              ✓ {feature}
            </div>
          ))}
        </div>

        <div className="mt-auto">
          <div className="price-container mb-3">
            <span className="current-price">${price}</span>
            {originalPrice && (
              <span className="original-price">${originalPrice}</span>
            )}
          </div>

          <Button 
            className="amazon-btn w-100"
            onClick={handleAmazonClick}
          >
            View on Amazon
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;