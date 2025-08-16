import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
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