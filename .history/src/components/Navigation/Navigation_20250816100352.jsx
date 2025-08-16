import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
// Try multiple import approaches
import pushingPigmentLogo from '../../assets/pushing-pigment-logo-icon.png';
import './Navigation.css';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Multiple fallback options for logo
  const LogoComponent = () => {
    // Option 1: Try the import
    if (!logoError && pushingPigmentLogo) {
      return (
        <img
          src={pushingPigmentLogo}
          alt="Pushing Pigment Logo"
          className="navbar-logo"
          onError={() => {
            console.error('Import logo failed');
            setLogoError(true);
          }}
          onLoad={() => console.log('Import logo loaded successfully')}
        />
      );
    }

    // Option 2: Try public folder path
    return (
      <img
        src="/pushing-pigment-logo-icon.png"
        alt="Pushing Pigment Logo"
        className="navbar-logo"
        onError={(e) => {
          console.error('Public folder logo failed');
          // Hide the broken image and show fallback
          e.target.style.display = 'none';
        }}
        onLoad={() => console.log('Public folder logo loaded')}
      />
    );
  };


  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-logo">
          {/* Try logo, fallback to icon if needed */}
          <div className="logo-container">
            <LogoComponent />
            <PaintbrushIcon />
          </div>
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