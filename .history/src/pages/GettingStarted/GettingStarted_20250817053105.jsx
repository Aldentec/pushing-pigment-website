import React from 'react';
import { Helmet } from 'react-helmet-async';
import GettingStartedComponent from '../../components/GettingStarted/GettingStarted';
import './GettingStarted.css';

const GettingStarted = () => {
  return (
    <div className="getting-started-page">
      {/* SEO Helmet for Getting Started Page */}
      <Helmet>
        <title>Miniature Painting Getting Started Guide 2025 | Complete Beginner Tutorial</title>
        <meta name="description" content="Complete beginner's guide to miniature painting. Learn what supplies you need, step-by-step techniques, and recommended tools. Start your hobby journey today with our expert guide." />
        <meta name="keywords" content="miniature painting beginner guide, how to start miniature painting, miniature painting supplies for beginners, first time miniature painting, painting miniatures tutorial, beginner hobby guide" />
        <link rel="canonical" href="https://pushingpigment.com/getting-started" />
        
        {/* Open Graph for social sharing */}
        <meta property="og:title" content="Complete Miniature Painting Getting Started Guide | Beginner Tutorial" />
        <meta property="og:description" content="Everything you need to know to start miniature painting. Supplies, techniques, and step-by-step instructions for beginners." />
        <meta property="og:url" content="https://pushingpigment.com/getting-started" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://pushingpigment.com/getting-started-guide.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Complete Miniature Painting Getting Started Guide" />
        <meta name="twitter:description" content="Everything you need to know to start miniature painting. Supplies, techniques, and step-by-step instructions." />
        <meta name="twitter:image" content="https://pushingpigment.com/getting-started-guide.jpg" />
        
        {/* Article Schema for the guide */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Complete Miniature Painting Getting Started Guide for Beginners",
            "description": "Comprehensive beginner's guide covering everything needed to start miniature painting, from essential supplies to step-by-step techniques.",
            "author": {
              "@type": "Organization",
              "name": "Pushing Pigment"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Pushing Pigment",
              "logo": {
                "@type": "ImageObject",
                "url": "https://pushingpigment.com/logo.png"
              }
            },
            "datePublished": "2025-01-01",
            "dateModified": "2025-01-01",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://pushingpigment.com/getting-started"
            },
            "image": "https://pushingpigment.com/getting-started-guide.jpg",
            "articleSection": "Tutorial",
            "wordCount": 2500,
            "inLanguage": "en-US"
          })}
        </script>
        
        {/* HowTo Schema for the painting process */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Start Miniature Painting: Complete Beginner Guide",
            "description": "Learn how to start miniature painting with this comprehensive step-by-step guide covering supplies, techniques, and best practices.",
            "image": "https://pushingpigment.com/getting-started-guide.jpg",
            "totalTime": "PT2H",
            "estimatedCost": {
              "@type": "MonetaryAmount",
              "currency": "USD",
              "value": "75"
            },
            "supply": [
              {
                "@type": "HowToSupply",
                "name": "Acrylic Paints"
              },
              {
                "@type": "HowToSupply", 
                "name": "Synthetic Brushes"
              },
              {
                "@type": "HowToSupply",
                "name": "Primer"
              },
              {
                "@type": "HowToSupply",
                "name": "Miniatures"
              }
            ],
            "tool": [
              {
                "@type": "HowToTool",
                "name": "Paint Palette"
              },
              {
                "@type": "HowToTool",
                "name": "Water Container"
              },
              {
                "@type": "HowToTool",
                "name": "Hobby Knife"
              }
            ],
            "step": [
              {
                "@type": "HowToStep",
                "position": 1,
                "name": "Choose Your First Miniature",
                "text": "Select a simple miniature with clear details to practice on. Avoid highly detailed models for your first attempt."
              },
              {
                "@type": "HowToStep",
                "position": 2,
                "name": "Gather Essential Supplies",
                "text": "Get basic acrylic paints, synthetic brushes (sizes 0, 2, 6), primer, palette, and water containers."
              },
              {
                "@type": "HowToStep",
                "position": 3,
                "name": "Prime Your Miniature",
                "text": "Apply a thin, even coat of primer to help paint adhere properly and show true colors."
              },
              {
                "@type": "HowToStep",
                "position": 4,
                "name": "Apply Base Colors",
                "text": "Paint large areas with base colors using thin, multiple coats rather than one thick coat."
              },
              {
                "@type": "HowToStep",
                "position": 5,
                "name": "Add Details and Highlights",
                "text": "Use smaller brushes to add details, highlights, and finishing touches to bring your miniature to life."
              }
            ]
          })}
        </script>
        
        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://pushingpigment.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Getting Started",
                "item": "https://pushingpigment.com/getting-started"
              }
            ]
          })}
        </script>
      </Helmet>

      <GettingStartedComponent />
    </div>
  );
};

export default GettingStarted;