// src/utils/amazonImageHelper.js
// Simple Amazon image helper for full URLs only

import { useState, useEffect } from 'react';

/**
 * Extract ASIN from full Amazon URL
 * @param {string} amazonUrl - Full Amazon product URL
 * @returns {string|null} - ASIN or null if not found
 */
export const extractASIN = (amazonUrl) => {
  if (!amazonUrl) return null;
  
  // Handle different Amazon URL formats
  const patterns = [
    /\/dp\/([A-Z0-9]{10})/,           // amazon.com/dp/B08EXAMPLE
    /\/gp\/product\/([A-Z0-9]{10})/,  // amazon.com/gp/product/B08EXAMPLE
    /\/exec\/obidos\/ASIN\/([A-Z0-9]{10})/ // Old format
  ];
  
  for (const pattern of patterns) {
    const match = amazonUrl.match(pattern);
    if (match) return match[1];
  }
  
  return null;
};

/**
 * Generate Amazon product image URL from ASIN
 * @param {string} asin - Amazon ASIN
 * @param {string} size - Image size (thumbnail, small, medium, large)
 * @returns {string|null} - Amazon image URL
 */
export const getAmazonImageUrl = (asin, size = 'medium') => {
  if (!asin) return null;
  
  const sizeMap = {
    thumbnail: 'SL75_',
    small: 'SL160_',
    medium: 'SL300_',
    large: 'SL500_'
  };
  
  const sizeCode = sizeMap[size] || 'SL300_';
  return `https://images-na.ssl-images-amazon.com/images/P/${asin}.01.${sizeCode}.jpg`;
};

/**
 * Get multiple fallback image URLs for a product
 * @param {string} asin - Amazon ASIN
 * @returns {array} - Array of image URLs to try
 */
export const getImageFallbacks = (asin) => {
  if (!asin) return [];
  
  return [
    `https://images-na.ssl-images-amazon.com/images/P/${asin}.01.SL300_.jpg`,
    `https://m.media-amazon.com/images/I/${asin}.jpg`,
    `https://images-na.ssl-images-amazon.com/images/P/${asin}.01._SCLZZZZZZZ_.jpg`,
    `https://images-na.ssl-images-amazon.com/images/I/${asin}._AC_SL300_.jpg`
  ];
};

/**
 * React hook for loading Amazon product images
 * @param {string} amazonUrl - Full Amazon product URL
 * @param {string} size - Image size preference (thumbnail, small, medium, large)
 * @returns {object} - Image state { src, loading, error, asin }
 */
export const useAmazonProductImage = (amazonUrl, size = 'medium') => {
  const [imageState, setImageState] = useState({
    src: null,
    loading: true,
    error: false,
    asin: null
  });
  
  useEffect(() => {
    if (!amazonUrl) {
      setImageState({
        src: null,
        loading: false,
        error: true,
        asin: null
      });
      return;
    }
    
    const asin = extractASIN(amazonUrl);
    
    if (!asin) {
      setImageState({
        src: null,
        loading: false,
        error: true,
        asin: null
      });
      return;
    }
    
    setImageState(prev => ({
      ...prev,
      loading: true,
      error: false,
      asin: asin
    }));
    
    // Get fallback URLs to try
    const imageUrls = getImageFallbacks(asin);
    
    // Function to try loading images in sequence
    const tryLoadImage = (index = 0) => {
      if (index >= imageUrls.length) {
        // All images failed to load
        setImageState({
          src: null,
          loading: false,
          error: true,
          asin: asin
        });
        return;
      }
      
      const img = new Image();
      
      img.onload = () => {
        setImageState({
          src: imageUrls[index],
          loading: false,
          error: false,
          asin: asin
        });
      };
      
      img.onerror = () => {
        // Try next fallback
        tryLoadImage(index + 1);
      };
      
      img.src = imageUrls[index];
    };
    
    tryLoadImage();
    
  }, [amazonUrl, size]);
  
  return imageState;
};