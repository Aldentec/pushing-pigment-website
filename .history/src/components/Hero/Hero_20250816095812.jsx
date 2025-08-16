import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import pushingPigmentLogo from '../../assets/pushing-pigment-logo.png';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-background"></div>
      <Container>
        <Row className="align-items-center min-vh-100 py-5">
          <Col lg={6} className="hero-content">
            <div className="fade-in-up">
              <div className="hero-badge mb-3">
                <span className="badge-text">🎨 Professional Miniature Painting Hub</span>
              </div>
              <h1 className="hero-title">
                Master the Art of 
                <span className="gradient-text"> Miniature Painting</span>
              </h1>
              <p className="hero-description">
                Transform ordinary miniatures into extraordinary works of art. 
                From beginner basics to advanced techniques, discover everything 
                you need to bring your miniatures to life with expert guidance and quality tools.
              </p>
              <div className="hero-buttons">
                <Button 
                  as={Link} 
                  to="/getting-started" 
                  className="btn-primary-custom me-3 mb-3"
                  size="lg"
                >
                  Get Started Now
                </Button>
                <Button 
                  as={Link} 
                  to="/tutorials" 
                  variant="outline-primary" 
                  className="btn-outline-custom mb-3"
                  size="lg"
                >
                  Watch Tutorials
                </Button>
              </div>
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Expert Tutorials</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">10k+</span>
                  <span className="stat-label">Happy Painters</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">100+</span>
                  <span className="stat-label">Quality Products</span>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} className="hero-image-col">
            <div className="hero-image-container fade-in-up">
              <div className="hero-logo-showcase">
                <div className="logo-background-circle"></div>
                <img 
                  src={pushingPigmentLogo} 
                  alt="Pushing Pigment - Master Miniature Painting" 
                  className="hero-logo-main"
                />
                <div className="logo-accent-elements">
                  <div className="accent-dot accent-1"></div>
                  <div className="accent-dot accent-2"></div>
                  <div className="accent-dot accent-3"></div>
                </div>
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