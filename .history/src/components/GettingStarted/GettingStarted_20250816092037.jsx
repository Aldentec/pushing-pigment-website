import React from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
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

  // Detailed step-by-step guide with affiliate links
  const detailedSteps = [
    {
      step: 1,
      title: "Start with Quality Miniatures",
      icon: "🏰",
      description: "Choose miniatures that inspire you and match your skill level. Beginners should start with larger models with less intricate details.",
      tips: [
        "Start with 28mm scale for easier painting",
        "Choose models with clear, defined details",
        "Avoid multi-part kits for your first models"
      ],
      amazonLinks: [
        {
          name: "Warhammer 40K Space Marine Heroes",
          price: "$24.99",
          link: "https://amazon.com/dp/example1", // Replace with real affiliate link
          description: "Perfect starter miniatures with great detail"
        },
        {
          name: "D&D Nolzur's Unpainted Miniatures",
          price: "$8.99",
          link: "https://amazon.com/dp/example2",
          description: "Affordable, pre-primed fantasy miniatures"
        }
      ]
    },
    {
      step: 2,
      title: "Essential Tools & Brushes",
      icon: "🔧",
      description: "Quality tools make painting easier and more enjoyable. Start with a few essential brushes and basic tools.",
      tips: [
        "Get brushes in sizes 0, 2, and 6 to start",
        "Synthetic brushes are great for beginners",
        "A good cutting mat protects your surfaces"
      ],
      amazonLinks: [
        {
          name: "Army Painter Starter Brush Set",
          price: "$19.99",
          link: "https://amazon.com/dp/example3",
          description: "Essential brush sizes for all techniques"
        },
        {
          name: "X-Acto Precision Knife Kit",
          price: "$12.99",
          link: "https://amazon.com/dp/example4",
          description: "For cleaning mold lines and detail work"
        },
        {
          name: "Self-Healing Cutting Mat",
          price: "$15.99",
          link: "https://amazon.com/dp/example5",
          description: "Protects surfaces and extends blade life"
        }
      ]
    },
    {
      step: 3,
      title: "Prime Your Models",
      icon: "🎯",
      description: "Primer creates a surface for paint to adhere to and provides a uniform base color. Never skip this crucial step!",
      tips: [
        "Clean models before priming",
        "Use thin, even coats",
        "White primer for bright colors, black for dark"
      ],
      amazonLinks: [
        {
          name: "Citadel Chaos Black Primer Spray",
          price: "$16.99",
          link: "https://amazon.com/dp/example6",
          description: "Professional quality primer spray"
        },
        {
          name: "Vallejo Surface Primer (60ml)",
          price: "$4.99",
          link: "https://amazon.com/dp/example7",
          description: "Brush-on primer for detail work"
        }
      ]
    },
    {
      step: 4,
      title: "Essential Paints",
      icon: "🎨",
      description: "Quality paints are the foundation of great miniatures. Start with basic colors and expand your palette over time.",
      subsections: [
        {
          title: "Base Acrylic Paints",
          description: "Traditional acrylics for detailed work and mixing",
          amazonLinks: [
            {
              name: "Vallejo Model Color Basic Set",
              price: "$79.99",
              link: "https://amazon.com/dp/example8",
              description: "72 essential colors for any project"
            },
            {
              name: "Citadel Base Paint Set",
              price: "$89.99",
              link: "https://amazon.com/dp/example9",
              description: "High-quality Games Workshop paints"
            }
          ]
        },
        {
          title: "Speed Paints (Contrast/Express)",
          description: "One-coat paints that shade and highlight automatically",
          amazonLinks: [
            {
              name: "Citadel Contrast Paint Set",
              price: "$124.99",
              link: "https://amazon.com/dp/example10",
              description: "Revolutionary one-coat painting system"
            },
            {
              name: "Army Painter Speedpaint Starter Set",
              price: "$59.99",
              link: "https://amazon.com/dp/example11",
              description: "Fast, easy painting for beginners"
            }
          ]
        }
      ],
      tips: [
        "Start with primary colors and mix your own",
        "Thin your paints with water or medium",
        "Speed paints work best over light primers"
      ]
    },
    {
      step: 5,
      title: "Washes & Shades",
      icon: "💧",
      description: "Washes flow into recesses to create natural-looking shadows and definition. They're magic in a bottle for beginners!",
      tips: [
        "Apply over base colors for instant depth",
        "Use sparingly - you can always add more",
        "Clean brush immediately after use"
      ],
      amazonLinks: [
        {
          name: "Citadel Shade Paint Set",
          price: "$69.99",
          link: "https://amazon.com/dp/example12",
          description: "Professional washes for realistic shading"
        },
        {
          name: "Army Painter Quickshade Set",
          price: "$39.99",
          link: "https://amazon.com/dp/example13",
          description: "Essential washes for all miniatures"
        }
      ]
    },
    {
      step: 6,
      title: "Basing Materials",
      icon: "🌿",
      description: "A great base completes your miniature and tells a story. Start simple and build complexity as you improve.",
      tips: [
        "Match base to your miniature's theme",
        "Use texture paints for easy results",
        "Add small details like grass or stones"
      ],
      amazonLinks: [
        {
          name: "Citadel Texture Paint Set",
          price: "$44.99",
          link: "https://amazon.com/dp/example14",
          description: "Ready-to-use textured base paints"
        },
        {
          name: "Army Painter Battlefield Basing Set",
          price: "$27.99",
          link: "https://amazon.com/dp/example15",
          description: "Complete basing materials kit"
        },
        {
          name: "Static Grass Variety Pack",
          price: "$12.99",
          link: "https://amazon.com/dp/example16",
          description: "Realistic grass tufts in multiple colors"
        }
      ]
    },
    {
      step: 7,
      title: "Advanced Supplies",
      icon: "⚡",
      description: "Once you've mastered the basics, these professional tools will take your painting to the next level.",
      tips: [
        "Invest in quality as you improve",
        "Wet palettes keep paints workable longer",
        "Good lighting reduces eye strain"
      ],
      amazonLinks: [
        {
          name: "Redgrass Games Wet Palette",
          price: "$34.99",
          link: "https://amazon.com/dp/example17",
          description: "Keeps paints fresh for days"
        },
        {
          name: "Daylight LED Desk Lamp",
          price: "$49.99",
          link: "https://amazon.com/dp/example18",
          description: "Perfect color-accurate lighting"
        },
        {
          name: "Vallejo Airbrush Thinner Medium",
          price: "$8.99",
          link: "https://amazon.com/dp/example19",
          description: "For advanced techniques and smooth finishes"
        }
      ]
    }
  ];

  const handleAffiliateClick = (link, productName) => {
    // Add tracking for analytics
    if (window.gtag) {
      window.gtag('event', 'affiliate_click', {
        'product_name': productName,
        'step': 'getting_started'
      });
    }
    window.open(link, '_blank', 'noopener,noreferrer');
  };

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
              Follow our comprehensive step-by-step guide to build your perfect miniature painting setup.
              Each step includes expert recommendations and carefully selected products.
            </p>
          </Col>
        </Row>

        {/* Steps Overview */}
        <Row className="mb-5">
          {steps.map((step, index) => (
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
            <h3 className="text-center mb-5">Complete Beginner's Shopping Guide</h3>
            <p className="text-center text-muted mb-5">
              Everything you need to start painting miniatures, with direct links to quality products
            </p>
          </Col>
        </Row>

        {detailedSteps.map((step, stepIndex) => (
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

            {/* Tips Section */}
            <Row className="mb-4">
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

              {/* Products Section */}
              <Col lg={8}>
                {step.subsections ? (
                  // Handle paint section with subsections
                  step.subsections.map((subsection, subIndex) => (
                    <div key={subIndex} className="subsection mb-4">
                      <h5 className="subsection-title">{subsection.title}</h5>
                      <p className="subsection-description">{subsection.description}</p>
                      <Row>
                        {subsection.amazonLinks.map((product, productIndex) => (
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
                              </Card.Body>
                            </Card>
                          </Col>
                        ))}
                      </Row>
                    </div>
                  ))
                ) : (
                  // Handle regular sections
                  <Row>
                    {step.amazonLinks.map((product, productIndex) => (
                      <Col md={6} lg={4} key={productIndex} className="mb-3">
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
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                )}
              </Col>
            </Row>

            {stepIndex < detailedSteps.length - 1 && <hr className="step-divider" />}
          </div>
        ))}

        {/* Budget Summary */}
        <Row className="mb-5">
          <Col lg={8} className="mx-auto">
            <Card className="budget-summary-card">
              <Card.Header className="text-center">
                <h5 className="mb-0">💰 Complete Starter Kit Investment</h5>
              </Card.Header>
              <Card.Body className="text-center">
                <div className="budget-breakdown">
                  <div className="budget-item">
                    <span className="budget-label">Basic Starter Kit:</span>
                    <span className="budget-amount">$150 - $200</span>
                  </div>
                  <div className="budget-item">
                    <span className="budget-label">Complete Professional Setup:</span>
                    <span className="budget-amount">$300 - $400</span>
                  </div>
                </div>
                <p className="budget-note">
                  Start with essentials and gradually expand your collection. 
                  Quality tools last longer and make painting more enjoyable!
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Featured Products by Category */}
        <Row>
          <Col>
            <h3 className="text-center mb-4">Top Rated Starter Products</h3>
            <p className="text-center text-muted mb-5">
              Our highest-rated recommendations sorted by value
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