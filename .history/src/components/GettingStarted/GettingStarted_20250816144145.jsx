// src/components/GettingStarted/GettingStarted.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Card, Badge, Button, Nav } from 'react-bootstrap';
import ProductCard from '../ProductCard/ProductCard';
import { startingProducts } from '../../data/products';
import { 
  gettingStartedSteps, 
  levelConfig, 
  calculateBudget, 
  getLevelBadgeColor, 
  getLevelIcon,
  quickStartChecklist,
  levelComparison,
  filterProductsByLevel
} from '../../data/tieredProducts';
import './GettingStarted.css';

const GettingStarted = () => {
  const [activeLevel, setActiveLevel] = useState('entry');

  // Basic step overview for the cards section
  const stepOverview = [
    {
      step: 1,
      title: "Choose Your Miniatures",
      description: "Start with high-quality miniatures that inspire you",
      icon: "🏰"
    },
    {
      step: 2,
      title: "Essential Tools",
      description: "Get the right brushes, cutting tools, and workspace setup",
      icon: "🔧"
    },
    {
      step: 3,
      title: "Prime Your Models",
      description: "Proper priming ensures paint adhesion and vibrant colors",
      icon: "🎯"
    },
    {
      step: 4,
      title: "Select Quality Paints",
      description: "Invest in good paints - they make all the difference",
      icon: "🎨"
    },
    {
      step: 5,
      title: "Washes & Shades",
      description: "Add depth and definition with professional washes",
      icon: "💧"
    },
    {
      step: 6,
      title: "Basing Materials",
      description: "Complete your miniatures with realistic bases",
      icon: "🌿"
    },
    {
      step: 7,
      title: "Advanced Supplies",
      description: "Professional tools for the next level",
      icon: "⚡"
    }
  ];

  const handleAffiliateClick = (link, productName) => {
    // Add tracking for analytics
    if (window.gtag) {
      window.gtag('event', 'affiliate_click', {
        'product_name': productName,
        'step': 'getting_started',
        'level': activeLevel
      });
    }
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  const currentLevelConfig = levelConfig[activeLevel];
  const currentBudget = calculateBudget(activeLevel);

  return (
    <section className="getting-started-section section-padding">
      <Container>
        {/* Hero Section */}
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <h2 className="section-title">
              Your Journey to <span className="gradient-text">Miniature Mastery</span>
            </h2>
            <p className="section-description">
              Follow our comprehensive step-by-step guide with three tiers of recommendations.
              Choose your path based on your budget and commitment level.
            </p>
          </Col>
        </Row>

        {/* Level Selection */}
        <Row className="mb-5">
          <Col lg={8} className="mx-auto">
            <Card className="level-selector-card">
              <Card.Body>
                <h5 className="text-center mb-4">Choose Your Experience Level</h5>
                <Nav variant="pills" className="justify-content-center" activeKey={activeLevel}>
                  {Object.entries(levelConfig).map(([level, config]) => (
                    <Nav.Item key={level}>
                      <Nav.Link 
                        eventKey={level} 
                        onClick={() => setActiveLevel(level)}
                        className={activeLevel === level ? 'active' : ''}
                      >
                        {config.icon} {config.title}
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
                
                <div className="text-center mt-3">
                  <Badge bg={getLevelBadgeColor(activeLevel)} className="level-badge">
                    {getLevelIcon(activeLevel)} {currentLevelConfig.description}
                  </Badge>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Steps Overview */}
        <Row className="mb-5">
          {stepOverview.map((step, index) => (
            <Col md={6} lg={4} xl={3} key={step.step} className="mb-4">
              <Card className="step-card h-100">
                <Card.Body className="text-center">
                  <div className="step-icon">{step.icon}</div>
                  <Badge bg="primary" className="step-number mb-3">
                    Step {step.step}
                  </Badge>
                  <h6 className="step-title">{step.title}</h6>
                  <p className="step-description">{step.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Detailed Step-by-Step Guide */}
        <Row className="mb-5">
          <Col>
            <h3 className="text-center mb-3">
              {getLevelIcon(activeLevel)} {currentLevelConfig.title} Shopping Guide
            </h3>
            <p className="text-center text-muted mb-5">
              Curated recommendations for your experience level and budget
            </p>
          </Col>
        </Row>

        {gettingStartedSteps.map((step, stepIndex) => {
          const currentLevel = step.levels[activeLevel];
          
          return (
            <div key={step.step} className="detailed-step-section mb-5">
              <Row className="mb-4">
                <Col>
                  <div className="step-header">
                    <span className="step-number-large">{step.step}</span>
                    <div className="step-header-content">
                      <div className="step-icon-large">{step.icon}</div>
                      <h4 className="step-main-title">{step.title}</h4>
                      <p className="step-main-description">{step.description}</p>
                    </div>
                  </div>
                </Col>
              </Row>

              {/* Current Level Section */}
              <Row className="mb-4">
                <Col>
                  <Card className="level-section-card">
                    <Card.Header className={`level-header level-header-${activeLevel}`}>
                      <h5 className="mb-0">
                        {getLevelIcon(activeLevel)} {currentLevel.title}
                      </h5>
                      <p className="mb-0 level-description">{currentLevel.description}</p>
                    </Card.Header>
                    <Card.Body>
                      <Row>
                        {/* Tips */}
                        <Col lg={4}>
                          <Card className="tips-card">
                            <Card.Header>
                              <h6 className="mb-0">💡 Pro Tips</h6>
                            </Card.Header>
                            <Card.Body>
                              <ul className="tips-list">
                                {step.tips.map((tip, tipIndex) => (
                                  <li key={tipIndex}>{tip}</li>
                                ))}
                              </ul>
                            </Card.Body>
                          </Card>
                        </Col>

                        {/* Products for Current Level */}
                        <Col lg={8}>
                          <Row>
                            {currentLevel.amazonLinks.map((product, productIndex) => (
                              <Col md={6} key={productIndex} className="mb-3">
                                <Card className="product-link-card">
                                  <Card.Body>
                                    <h6 className="product-name">{product.name}</h6>
                                    <p className="product-description">{product.description}</p>
                                    <div className="product-footer">
                                      <span className="product-price">{product.price}</span>
                                      <Button
                                        size="sm"
                                        className="amazon-link-btn"
                                        onClick={() => handleAffiliateClick(product.link, product.name)}
                                      >
                                        View on Amazon
                                      </Button>
                                    </div>
                                    {product.rating && (
                                      <div className="product-rating">
                                        <span className="rating">⭐ {product.rating}</span>
                                        <span className="review-count">({product.reviewCount} reviews)</span>
                                      </div>
                                    )}
                                  </Card.Body>
                                </Card>
                              </Col>
                            ))}
                          </Row>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

              {stepIndex < gettingStartedSteps.length - 1 && <hr className="step-divider" />}
            </div>
          );
        })}

        {/* Budget Summary for Current Level */}
        <Row className="mb-5">
          <Col lg={8} className="mx-auto">
            <Card className="budget-summary-card">
              <Card.Header className="text-center">
                <h5 className="mb-0">
                  💰 {getLevelIcon(activeLevel)} {currentLevelConfig.title} Investment
                </h5>
              </Card.Header>
              <Card.Body className="text-center">
                <div className="budget-breakdown">
                  <div className="budget-item">
                    <span className="budget-label">Complete {activeLevel} Kit:</span>
                    <span className="budget-amount">
                      ${currentBudget.min} - ${currentBudget.max}
                    </span>
                  </div>
                  {activeLevel === 'entry' && (
                    <div className="budget-item">
                      <span className="budget-label">Upgrade to Mid Level:</span>
                      <span className="budget-amount">+$120 - $230</span>
                    </div>
                  )}
                  {activeLevel === 'mid' && (
                    <div className="budget-item">
                      <span className="budget-label">Upgrade to Professional:</span>
                      <span className="budget-amount">+$300 - $650</span>
                    </div>
                  )}
                </div>
                <p className="budget-note">
                  {currentLevelConfig.badge}
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Level Comparison Table */}
        <Row className="mb-5">
          <Col>
            <Card className="comparison-card">
              <Card.Header className="text-center">
                <h5 className="mb-0">🔍 Level Comparison Guide</h5>
              </Card.Header>
              <Card.Body>
                <div className="table-responsive">
                  <table className="table table-bordered comparison-table">
                    <thead>
                      <tr>
                        <th>Feature</th>
                        <th className="entry-column">🌱 Entry Level</th>
                        <th className="mid-column">🔥 Mid Level</th>
                        <th className="professional-column">👑 Professional</th>
                      </tr>
                    </thead>
                    <tbody>
                      {levelComparison.map((row, index) => (
                        <tr key={index}>
                          <td><strong>{row.feature}</strong></td>
                          <td>{row.entry}</td>
                          <td>{row.mid}</td>
                          <td>{row.professional}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="text-center mt-3">
                  <p className="text-muted mb-0">
                    💡 <strong>Pro Tip:</strong> Start with Entry Level and upgrade individual items as your skills and interest grow!
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Featured Products by Category - filtered by current level */}
        <Row>
          <Col>
            <h3 className="text-center mb-4">
              {getLevelIcon(activeLevel)} Top {currentLevelConfig.title} Products
            </h3>
            <p className="text-center text-muted mb-5">
              Our highest-rated recommendations for your experience level
            </p>
            <Row>
              {filterProductsByLevel(startingProducts, activeLevel)
                .slice(0, 6) // Limit to 6 products
                .map((product, index) => (
                  <Col md={6} lg={4} key={product.id} className="mb-4">
                    <ProductCard product={product} />
                  </Col>
                ))}
            </Row>
          </Col>
        </Row>

        {/* Quick Start Checklist */}
        <Row className="mb-5">
          <Col lg={8} className="mx-auto">
            <Card className="checklist-card">
              <Card.Header className="text-center">
                <h5 className="mb-0">
                  ✅ {getLevelIcon(activeLevel)} {currentLevelConfig.title} Quick Start Checklist
                </h5>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <h6>Essential Items ({activeLevel} level):</h6>
                    <div className="checklist">
                      {quickStartChecklist.essential.map((item) => (
                        <div key={item.id} className="checklist-item">
                          <input type="checkbox" id={item.id} />
                          <label htmlFor={item.id}>{item.label}</label>
                        </div>
                      ))}
                    </div>
                  </Col>
                  <Col md={6}>
                    <h6>Setup & Tools:</h6>
                    <div className="checklist">
                      {quickStartChecklist.setup.map((item) => (
                        <div key={item.id} className="checklist-item">
                          <input type="checkbox" id={item.id} />
                          <label htmlFor={item.id}>{item.label}</label>
                        </div>
                      ))}
                    </div>
                  </Col>
                </Row>
                <div className="text-center mt-4">
                  <Button 
                    variant="primary" 
                    size="lg"
                    onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                  >
                    🛒 Start Shopping for {currentLevelConfig.title} Kit
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default GettingStarted;