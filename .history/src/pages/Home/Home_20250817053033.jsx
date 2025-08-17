import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Hero from '../../components/Hero/Hero';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* SEO Helmet for Homepage */}
      <Helmet>
        <title>Pushing Pigment - Master Miniature Painting | Tutorials, Tools & Techniques</title>
        <meta name="description" content="Learn miniature painting with expert tutorials, essential tool guides, and step-by-step techniques. From beginner basics to advanced methods - your complete miniature painting resource." />
        <meta name="keywords" content="miniature painting, warhammer painting, mini painting tutorials, painting techniques, miniature paints, brushes, primer, tabletop gaming, model painting, acrylic paints, hobby painting" />
        <link rel="canonical" href="https://pushingpigment.com" />
        
        {/* Open Graph for social sharing */}
        <meta property="og:title" content="Pushing Pigment - Master Miniature Painting | Tutorials & Tools" />
        <meta property="og:description" content="Learn miniature painting with expert tutorials, essential tool guides, and step-by-step techniques. From beginner basics to advanced methods." />
        <meta property="og:url" content="https://pushingpigment.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://pushingpigment.com/og-image.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pushing Pigment - Master Miniature Painting" />
        <meta name="twitter:description" content="Learn miniature painting with expert tutorials, essential tool guides, and step-by-step techniques." />
        <meta name="twitter:image" content="https://pushingpigment.com/twitter-card.jpg" />
        
        {/* Schema.org structured data for homepage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Pushing Pigment",
            "description": "Master miniature painting with expert tutorials, essential tool guides, and step-by-step techniques for all skill levels.",
            "url": "https://pushingpigment.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://pushingpigment.com/search?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Pushing Pigment",
              "url": "https://pushingpigment.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://pushingpigment.com/logo.png"
              },
              "sameAs": [
                "https://youtube.com/@pushingpigment",
                "https://instagram.com/pushingpigment",
                "https://twitter.com/pushingpigment"
              ]
            }
          })}
        </script>
        
        {/* Educational Organization Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Pushing Pigment",
            "description": "Educational resource for miniature painting techniques and tutorials",
            "url": "https://pushingpigment.com",
            "courseMode": "online",
            "educationalLevel": "Beginner to Advanced",
            "teaches": [
              "Miniature Painting",
              "Model Painting Techniques", 
              "Acrylic Painting",
              "Brush Techniques",
              "Color Theory",
              "Weathering Effects"
            ]
          })}
        </script>
        
        {/* FAQ Schema for common questions */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What do I need to start miniature painting?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "To start miniature painting, you need basic supplies: primer, acrylic paints, brushes (sizes 0, 2, and 6), a palette, water containers, and your first miniatures. Our getting started guide covers everything in detail."
                }
              },
              {
                "@type": "Question", 
                "name": "How much does it cost to start miniature painting?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A basic miniature painting setup costs $50-100 for entry-level supplies, $100-200 for mid-range quality, and $200+ for professional-grade tools. We offer budget guides for every skill level."
                }
              },
              {
                "@type": "Question",
                "name": "What are the best paints for miniature painting?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Popular miniature paint brands include Citadel, Vallejo, Army Painter, and Reaper. Each has different strengths - we compare them all in our comprehensive paint guide."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <Hero />
     
      {/* Quick Start Section */}
      <section className="quick-start-section section-padding">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h2 className="section-title">
                Ready to Start Your <span className="gradient-text">Painting Journey?</span>
              </h2>
              <p className="section-description">
                Whether you're a complete beginner or looking to improve your skills,
                we have everything you need to succeed.
              </p>
              <div className="quick-start-buttons">
                <Button
                  as={Link}
                  to="/getting-started"
                  className="btn-primary-custom me-3 mb-3"
                  size="lg"
                >
                  Complete Getting Started Guide
                </Button>
                <Button
                  as={Link}
                  to="/products"
                  variant="outline-primary"
                  className="btn-outline-custom mb-3"
                  size="lg"
                >
                  Browse All Products
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Feature Highlights */}
      <section className="features-section section-padding section-light">
        <Container>
          <Row>
            <Col lg={4} className="mb-4">
              <div className="feature-card">
                <div className="feature-icon">🎯</div>
                <h4>Step-by-Step Guides</h4>
                <p>Complete beginner-friendly guides that take you from zero to painting pro.</p>
                <Button as={Link} to="/getting-started" variant="link" className="feature-link">
                  Start Learning →
                </Button>
              </div>
            </Col>
            <Col lg={4} className="mb-4">
              <div className="feature-card">
                <div className="feature-icon">🛒</div>
                <h4>Curated Products</h4>
                <p>Hand-picked tools and supplies recommended by experienced painters.</p>
                <Button as={Link} to="/products" variant="link" className="feature-link">
                  Shop Now →
                </Button>
              </div>
            </Col>
            <Col lg={4} className="mb-4">
              <div className="feature-card">
                <div className="feature-icon">🎨</div>
                <h4>Expert Tutorials</h4>
                <p>Learn advanced techniques from professional miniature painters.</p>
                <Button as={Link} to="/tutorials" variant="link" className="feature-link">
                  Watch Tutorials →
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;