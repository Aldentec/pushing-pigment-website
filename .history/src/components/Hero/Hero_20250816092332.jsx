import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-background"></div>
      <Container>
        <Row className="align-items-center min-vh-100 py-5">
          <Col lg={6} className="hero-content">
            <div className="fade-in-up">
              <h1 className="hero-title">
                Master the Art of 
                <span className="gradient-text"> Miniature Painting</span>
              </h1>
              <p className="hero-description">
                Transform ordinary miniatures into extraordinary works of art. 
                From beginner basics to advanced techniques, discover everything 
                you need to bring your miniatures to life.
              </p>
              <div className="hero-buttons">
                <Button 
                  as={Link} 
                  to="/getting-started" 
                  className="btn-primary-custom me-3 mb-3"
                  size="lg"
                >
                  Get Started
                </Button>
                <Button 
                  as={Link} 
                  to="/tutorials" 
                  variant="outline-primary" 
                  className="btn-outline-custom mb-3"
                  size="lg"
                >
                  View Tutorials
                </Button>
              </div>
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Tutorials</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">10k+</span>
                  <span className="stat-label">Happy Painters</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">100+</span>
                  <span className="stat-label">Products</span>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} className="hero-image-col">
            <div className="hero-image-container fade-in-up">
              <div className="hero-image-placeholder">
                <div className="paintbrush-icon">🎨</div>
                <p>Miniature Painting Hub</p>
              </div>
              <div className="floating-elements">
                <div className="floating-element element-1">🖌️</div>
                <div className="floating-element element-2">🎭</div>
                <div className="floating-element element-3">⚔️</div>
                <div className="floating-element element-4">🏰</div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;