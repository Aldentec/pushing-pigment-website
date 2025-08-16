import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import ProductCard from '../ProductCard/ProductCard';
import { startingProducts } from '../../data/products';
import './GettingStarted.css';

const GettingStarted = () => {
  const steps = [
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
      title: "Basing Materials",
      description: "Complete your miniatures with realistic bases",
      icon: "🌿"
    }
  ];

  return (
    <section className="getting-started-section section-padding">
      <Container>
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <h2 className="section-title">
              Your Journey to <span className="gradient-text">Miniature Mastery</span>
            </h2>
            <p className="section-description">
              Follow our step-by-step guide to build your perfect miniature painting setup. 
              Each step includes carefully curated products ranked by value and quality.
            </p>
          </Col>
        </Row>

        {/* Steps Overview */}
        <Row className="mb-5">
          {steps.map((step, index) => (
            <Col md={6} lg={4} key={step.step} className="mb-4">
              <Card className="step-card h-100">
                <Card.Body className="text-center">
                  <div className="step-icon">{step.icon}</div>
                  <Badge bg="primary" className="step-number mb-3">
                    Step {step.step}
                  </Badge>
                  <h5 className="step-title">{step.title}</h5>
                  <p className="step-description">{step.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Featured Products by Category */}
        <Row>
          <Col>
            <h3 className="text-center mb-4">Recommended Starter Products</h3>
            <p className="text-center text-muted mb-5">
              Sorted by value - get the most bang for your buck
            </p>
            <Row>
              {startingProducts.map((product, index) => (
                <Col md={6} lg={4} key={product.id} className="mb-4">
                  <ProductCard product={product} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default GettingStarted;