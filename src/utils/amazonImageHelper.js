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
    // Modern Amazon image URLs (most reliable) - updated patterns
    `https://m.media-amazon.com/images/I/${asin}._AC_SX300_.jpg`,
    `https://m.media-amazon.com/images/I/${asin}._AC_SY300_.jpg`,
    `https://m.media-amazon.com/images/I/${asin}._AC_SX400_.jpg`,
    `https://m.media-amazon.com/images/I/${asin}._AC_SY400_.jpg`,
    `https://m.media-amazon.com/images/I/${asin}._AC_SX522_.jpg`,
    `https://m.media-amazon.com/images/I/${asin}._AC_SY522_.jpg`,
    
    // Alternative size patterns
    `https://m.media-amazon.com/images/I/${asin}._AC_SL300_.jpg`,
    `https://m.media-amazon.com/images/I/${asin}._AC_SL400_.jpg`,
    `https://m.media-amazon.com/images/I/${asin}._AC_SL500_.jpg`,
    
    // Different server patterns
    `https://images-na.ssl-images-amazon.com/images/I/${asin}._AC_SX300_.jpg`,
    `https://images-na.ssl-images-amazon.com/images/I/${asin}._AC_SY300_.jpg`,
    
    // Legacy patterns (fallback)
    `https://images-na.ssl-images-amazon.com/images/P/${asin}.01.SL300_.jpg`,
    `https://images-na.ssl-images-amazon.com/images/P/${asin}.01._SCLZZZZZZZ_.jpg`,
    
    // Additional fallbacks
    `https://images.amazon.com/images/P/${asin}.01.L.jpg`,
    `https://ecx.images-amazon.com/images/I/${asin}.jpg`
  ];
};

/**
 * Debug helper to test all image URLs for an ASIN
 * @param {string} asin - Amazon ASIN to test
 * @returns {Promise<object>} - Results of testing all image URLs
 */
export const debugImageUrls = async (asin) => {
  const urls = getImageFallbacks(asin);
  const results = [];
  
  console.log(`🔍 Testing image URLs for ASIN: ${asin}`);
  
  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    
    try {
      const response = await fetch(url, { method: 'HEAD' });
      const result = {
        index: i,
        url: url,
        status: response.status,
        contentType: response.headers.get('content-type'),
        contentLength: response.headers.get('content-length'),
        working: response.ok
      };
      
      results.push(result);
      
      if (response.ok) {
        console.log(`✅ [${i}] WORKING: ${url}`);
        console.log(`   Status: ${response.status}, Type: ${result.contentType}, Size: ${result.contentLength} bytes`);
      } else {
        console.log(`❌ [${i}] FAILED: ${url} (Status: ${response.status})`);
      }
    } catch (error) {
      const result = {
        index: i,
        url: url,
        status: 'error',
        error: error.message,
        working: false
      };
      
      results.push(result);
      console.log(`❌ [${i}] ERROR: ${url} (${error.message})`);
    }
  }
  
  const workingUrls = results.filter(r => r.working);
  console.log(`\n📊 Summary for ${asin}:`);
  console.log(`   Working URLs: ${workingUrls.length}/${results.length}`);
  
  if (workingUrls.length > 0) {
    console.log(`   Best URL: ${workingUrls[0].url}`);
  } else {
    console.log(`   ⚠️  No working image URLs found for this ASIN`);
  }
  
  return {
    asin,
    results,
    workingUrls,
    bestUrl: workingUrls.length > 0 ? workingUrls[0].url : null
  };
};

/**
 * Test image URLs from browser console
 * Usage: testAmazonImage('https://amazon.com/dp/B07WG989SD...')
 * @param {string} amazonUrl - Full Amazon URL to test
 */
export const testAmazonImage = async (amazonUrl) => {
  const asin = extractASIN(amazonUrl);
  if (!asin) {
    console.error('❌ Could not extract ASIN from URL:', amazonUrl);
    return null;
  }
  
  return await debugImageUrls(asin);
};

/**
 * React hook for loading Amazon product images with enhanced fallback system
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
    let loadedSuccessfully = false;
    let currentIndex = 0;
    
    // Function to try loading images in sequence
    const tryLoadImage = (index = 0) => {
      if (loadedSuccessfully) return; // Prevent race conditions
      
      if (index >= imageUrls.length) {
        // All images failed to load
        if (!loadedSuccessfully) {
          setImageState({
            src: null,
            loading: false,
            error: true,
            asin: asin
          });
        }
        return;
      }
      
      currentIndex = index;
      const img = new Image();
      
      // Set crossOrigin to anonymous to handle CORS better
      img.crossOrigin = 'anonymous';
      
      // Set a timeout to prevent hanging on slow images
      const timeout = setTimeout(() => {
        if (!loadedSuccessfully && currentIndex === index) {
          tryLoadImage(index + 1);
        }
      }, 3000); // Reduced timeout to 3 seconds
      
      img.onload = () => {
        clearTimeout(timeout);
        // Check if image actually has content (not a 1x1 pixel or empty)
        if (img.naturalWidth > 10 && img.naturalHeight > 10 && !loadedSuccessfully && currentIndex === index) {
          loadedSuccessfully = true;
          setImageState({
            src: imageUrls[index],
            loading: false,
            error: false,
            asin: asin
          });
        } else if (!loadedSuccessfully && currentIndex === index) {
          // Image loaded but is too small/invalid, try next
          tryLoadImage(index + 1);
        }
      };
      
      img.onerror = (e) => {
        clearTimeout(timeout);
        // Only try next if this is still the current attempt
        if (!loadedSuccessfully && currentIndex === index) {
          tryLoadImage(index + 1);
        }
      };
      
      // Add error handling for network issues
      img.onabort = () => {
        clearTimeout(timeout);
        if (!loadedSuccessfully && currentIndex === index) {
          tryLoadImage(index + 1);
        }
      };
      
      try {
        img.src = imageUrls[index];
      } catch (error) {
        clearTimeout(timeout);
        if (!loadedSuccessfully && currentIndex === index) {
          tryLoadImage(index + 1);
        }
      }
    };
    
    tryLoadImage();
    
    // Cleanup function
    return () => {
      loadedSuccessfully = true; // Prevent state updates if component unmounts
    };
    
  }, [amazonUrl, size]);
  
  return imageState;
};

// Make it available globally for debugging
if (typeof window !== 'undefined') {
  window.testAmazonImage = testAmazonImage;
  window.debugImageUrls = debugImageUrls;
}