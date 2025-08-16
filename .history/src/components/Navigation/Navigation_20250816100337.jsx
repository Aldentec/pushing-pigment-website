import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import pushingPigmentLogo from '../../assets/pushing-pigment-logo-icon.png';
import './Navigation.css';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Debug: Log the logo import to console
  console.log('Logo import:', pushingPigmentLogo);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-logo">
          {/* Fallback approach - check if logo loads */}
          <img
            src={pushingPigmentLogo}
            alt="Pushing Pigment Logo"
            className="navbar-logo"
            onError={(e) => {
              console.error('Logo failed to load:', e.target.src);
              e.target.style.display = 'none';
            }}
            onLoad={() => {
              console.log('Logo loaded successfully');
            }}
          />
          <div className="brand-text-container">
            <span className="brand-text">Pushing</span>
            <span className="brand-accent">Pigment</span>
          </div>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/"
              className={location.pathname === '/' ? 'active' : ''}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/getting-started"
              className={location.pathname === '/getting-started' ? 'active' : ''}
            >
              Getting Started
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/products"
              className={location.pathname === '/products' ? 'active' : ''}
            >
              Products
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/tutorials"
              className={location.pathname === '/tutorials' ? 'active' : ''}
            >
              Tutorials
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;