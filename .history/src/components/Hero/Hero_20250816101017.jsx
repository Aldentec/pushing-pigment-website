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
              {/* Realistic Animated Painter Scene */}
              <div className="painter-scene">
                {/* Floating paint drops */}
                <div className="paint-drop"></div>
                <div className="paint-drop"></div>
                <div className="paint-drop"></div>
                
                {/* Chair */}
                <div className="chair"></div>
                
                {/* Desk with items */}
                <div className="desk">
                  {/* Miniature figure being painted */}
                  <div className="miniature"></div>
                  {/* Paint palette */}
                  <div className="palette"></div>
                  {/* Water cup */}
                  <div className="water-cup"></div>
                </div>
                
                {/* Realistic painter character */}
                <div className="painter">
                  <div className="head">
                    <div className="eyes"></div>
                    <div className="nose"></div>
                    <div className="mouth"></div>
                  </div>
                  <div className="body">
                    <div className="arm-left">
                      <div className="forearm-left">
                        <div className="hand">
                          <div className="paintbrush"></div>
                        </div>
                      </div>
                    </div>
                    <div className="arm-right"></div>
                  </div>
                </div>
              </div>
              
              {/* Keep the floating elements for extra charm */}
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