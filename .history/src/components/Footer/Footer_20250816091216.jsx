import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <Container>
        <Row>
          <Col lg={4} md={6} className="mb-4">
            <div className="footer-section">
              <h5 className="footer-brand">
                <span className="brand-text">Pushing</span>
                <span className="brand-accent">Pigment</span>
              </h5>
              <p className="footer-description">
                Your ultimate resource for miniature painting mastery. 
                From beginner guides to advanced techniques, we help you 
                bring your miniatures to life.
              </p>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="YouTube">
                  📺
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  📷
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  🐦
                </a>
                <a href="#" className="social-link" aria-label="Discord">
                  💬
                </a>
              </div>
            </div>
          </Col>

          <Col lg={2} md={6} className="mb-4">
            <div className="footer-section">
              <h6 className="footer-title">Quick Links</h6>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Getting Started</Link></li>
                <li><Link to="/tutorials">Tutorials</Link></li>
                <li><a href="#blog">Blog</a></li>
              </ul>
            </div>
          </Col>

          <Col lg={2} md={6} className="mb-4">
            <div className="footer-section">
              <h6 className="footer-title">Categories</h6>
              <ul className="footer-links">
                <li><a href="#beginners">Beginners</a></li>
                <li><a href="#advanced">Advanced</a></li>
                <li><a href="#tools">Tools & Supplies</a></li>
                <li><a href="#techniques">Techniques</a></li>
              </ul>
            </div>
          </Col>

          <Col lg={2} md={6} className="mb-4">
            <div className="footer-section">
              <h6 className="footer-title">Support</h6>
              <ul className="footer-links">
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#community">Community</a></li>
                <li><a href="#feedback">Feedback</a></li>
              </ul>
            </div>
          </Col>

          <Col lg={2} md={12} className="mb-4">
            <div className="footer-section">
              <h6 className="footer-title">Newsletter</h6>
              <p className="newsletter-text">
                Get the latest tutorials and tips delivered to your inbox.
              </p>
              <div className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="newsletter-input"
                />
                <button className="newsletter-btn">
                  Subscribe
                </button>
              </div>
            </div>
          </Col>
        </Row>

        <hr className="footer-divider" />

        <Row className="footer-bottom">
          <Col md={6}>
            <p className="copyright">
              © {currentYear} Pushing Pigment. All rights reserved.
            </p>
          </Col>
          <Col md={6}>
            <div className="footer-legal">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#affiliate">Affiliate Disclosure</a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;