import React, { useState } from 'react';
import { Container, Row, Col, Card, Badge, Button, Nav } from 'react-bootstrap';
import ProductCard from '../ProductCard/ProductCard';
import { startingProducts } from '../../data/products';
import './GettingStarted.css';

const GettingStarted = () => {
  const [activeLevel, setActiveLevel] = useState('entry');

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

  // Enhanced detailed steps with tiered product recommendations
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
      levels: {
        entry: {
          title: "Entry Level - Perfect for Beginners",
          description: "Simple, affordable miniatures to learn the basics",
          amazonLinks: [
            {
              name: "D&D Nolzur's Unpainted Miniatures",
              price: "$8.00",
              link: "https://amzn.to/4n6l99V",
              description: "Pre-primed fantasy miniatures, great for practice"
            },
            {
              name: "Reaper Bones Miniatures (Basic Heroes)",
              price: "$12.99",
              link: "https://amazon.com/dp/example-bones",
              description: "Durable plastic miniatures, very forgiving"
            },
            {
              name: "Army Painter Speedpaint Starter Set Miniatures",
              price: "$15.99",
              link: "https://amazon.com/dp/example-army",
              description: "Designed specifically for speed painting techniques"
            }
          ]
        },
        mid: {
          title: "Mid Level - Building Skills",
          description: "Higher detail miniatures for developing techniques",
          amazonLinks: [
            {
              name: "GAMES WORKSHOP Warhammer 40K: Space Marines Set",
              price: "$35.00",
              link: "https://amzn.to/4oFPXzM",
              description: "Iconic miniatures with excellent detail and quality"
            },
            {
              name: "Privateer Press Warmachine Miniatures",
              price: "$28.99",
              link: "https://amazon.com/dp/example-warmachine",
              description: "Metal miniatures with crisp detail"
            },
            {
              name: "Infinity CodeOne Starter Miniatures",
              price: "$42.99",
              link: "https://amazon.com/dp/example-infinity",
              description: "High-tech aesthetic with fine details"
            }
          ]
        },
        professional: {
          title: "Professional Level - Display Quality",
          description: "Premium miniatures for competition and display",
          amazonLinks: [
            {
              name: "Forge World Resin Character Models",
              price: "$65.00",
              link: "https://amazon.com/dp/example-forgeworld",
              description: "Ultra-high detail resin miniatures"
            },
            {
              name: "Scale75 Fantasy Miniatures",
              price: "$45.99",
              link: "https://amazon.com/dp/example-scale75",
              description: "Artist-designed miniatures for serious painters"
            },
            {
              name: "Kingdom Death Monster Miniatures",
              price: "$55.00",
              link: "https://amazon.com/dp/example-kdm",
              description: "Incredibly detailed, unique sculpts"
            }
          ]
        }
      }
    },
    {
      step: 2,
      title: "Essential Tools & Brushes",
      icon: "🔧",
      description: "Quality tools make painting easier and more enjoyable. Start with a few essential brushes and basic tools.",
      tips: [
        "Get brushes in sizes 0, 2, and 6 to start",
        "Natural hair holds more paint than synthetic",
        "A good cutting mat protects your surfaces"
      ],
      levels: {
        entry: {
          title: "Entry Level - Basic Tool Kit",
          description: "Essential tools to get started without breaking the bank",
          amazonLinks: [
            {
              name: "Golden Maple Miniature Paint Brushes 10pcs",
              price: "$16.99",
              link: "https://amzn.to/3Jjo7sX",
              description: "Decent synthetic brushes for beginners"
            },
            {
              name: "X-Acto Basic Knife Set",
              price: "$8.99",
              link: "https://amazon.com/dp/example-xacto-basic",
              description: "Simple hobby knife for mold line removal"
            },
            {
              name: "Self-Healing Cutting Mat (Small)",
              price: "$12.99",
              link: "https://amazon.com/dp/example-mat-small",
              description: "9x12 cutting surface for hobby work"
            }
          ]
        },
        mid: {
          title: "Mid Level - Quality Tools",
          description: "Better tools that will last longer and improve your results",
          amazonLinks: [
            {
              name: "Winsor & Newton Series 7 Brush Set",
              price: "$45.99",
              link: "https://amazon.com/dp/example-w7",
              description: "Professional sable brushes, excellent point retention"
            },
            {
              name: "X-Acto Precision Knife Kit",
              price: "$18.99",
              link: "https://amazon.com/dp/example-xacto-pro",
              description: "Multiple blade types and ergonomic handles"
            },
            {
              name: "Cutting Mat with Grid (Large)",
              price: "$24.99",
              link: "https://amazon.com/dp/example-mat-large",
              description: "18x24 mat with measurement guides"
            },
            {
              name: "Magnifying Desk Lamp",
              price: "$39.99",
              link: "https://amazon.com/dp/example-magnify",
              description: "LED lighting with 2x magnification"
            }
          ]
        },
        professional: {
          title: "Professional Level - Premium Tools",
          description: "Top-tier tools for serious hobbyists and professionals",
          amazonLinks: [
            {
              name: "Raphael 8404 Kolinsky Sable Brush Set",
              price: "$89.99",
              link: "https://amazon.com/dp/example-raphael",
              description: "The gold standard for miniature painting brushes"
            },
            {
              name: "Proxxon Precision Knife System",
              price: "$45.99",
              link: "https://amazon.com/dp/example-proxxon",
              description: "German-engineered precision cutting tools"
            },
            {
              name: "Professional Cutting Station",
              price: "$79.99",
              link: "https://amazon.com/dp/example-station",
              description: "Multi-surface cutting station with storage"
            },
            {
              name: "Daylight Company Halo Lamp",
              price: "$149.99",
              link: "https://amazon.com/dp/example-halo",
              description: "Color-correct LED ring light for painting"
            }
          ]
        }
      }
    },
    {
      step: 3,
      title: "Prime Your Models",
      icon: "🎯",
      description: "Primer creates a surface for paint to adhere to and provides a uniform base color. Never skip this crucial step!",
      tips: [
        "Clean models before priming",
        "Use thin, even coats",
        "White primer for bright colors, black for dark themes"
      ],
      levels: {
        entry: {
          title: "Entry Level - Basic Primers",
          description: "Affordable primers that get the job done",
          amazonLinks: [
            {
              name: "Rust-Oleum Universal Primer",
              price: "$6.99",
              link: "https://amazon.com/dp/example-rustoleum",
              description: "Hardware store primer that works for miniatures"
            },
            {
              name: "Army Painter Colour Primer Spray",
              price: "$12.99",
              link: "https://amazon.com/dp/example-army-primer",
              description: "Hobby-specific primer in various colors"
            }
          ]
        },
        mid: {
          title: "Mid Level - Hobby Primers",
          description: "Purpose-built primers for miniature painting",
          amazonLinks: [
            {
              name: "Citadel Chaos Black Primer Spray",
              price: "$16.99",
              link: "https://amazon.com/dp/example-citadel-spray",
              description: "Professional quality primer spray"
            },
            {
              name: "Vallejo Surface Primer Set (3 colors)",
              price: "$18.99",
              link: "https://amazon.com/dp/example-vallejo-set",
              description: "Brush-on primers for detail work"
            },
            {
              name: "Badger Stynylrez Primer",
              price: "$14.99",
              link: "https://amazon.com/dp/example-stynylrez",
              description: "Self-leveling airbrush primer"
            }
          ]
        },
        professional: {
          title: "Professional Level - Premium Primers",
          description: "High-end primers for competition and display pieces",
          amazonLinks: [
            {
              name: "Alclad II Gloss Black Base Primer",
              price: "$24.99",
              link: "https://amazon.com/dp/example-alclad",
              description: "Ultra-smooth finish for metallics"
            },
            {
              name: "Mr. Surfacer 1000 Primer",
              price: "$19.99",
              link: "https://amazon.com/dp/example-surfacer",
              description: "Japanese lacquer primer, museum quality"
            },
            {
              name: "AK Interactive Real Colors Primer Set",
              price: "$32.99",
              link: "https://amazon.com/dp/example-ak-primer",
              description: "Military-grade primers with superior adhesion"
            }
          ]
        }
      }
    },
    {
      step: 4,
      title: "Essential Paints",
      icon: "🎨",
      description: "Quality paints are the foundation of great miniatures. Choose your paint system based on your goals and budget.",
      tips: [
        "Start with primary colors and mix your own",
        "Thin your paints for better coverage",
        "Consider paint consistency for your chosen techniques"
      ],
      levels: {
        entry: {
          title: "Entry Level - Budget Paint Sets",
          description: "Affordable paint sets to learn color theory and techniques",
          amazonLinks: [
            {
              name: "Apple Barrel Acrylic Paint Set (18 colors)",
              price: "$12.99",
              link: "https://amazon.com/dp/example-apple-barrel",
              description: "Craft paints that work for practice miniatures"
            },
            {
              name: "Army Painter Warpaints Starter Set",
              price: "$24.99",
              link: "https://amazon.com/dp/example-army-starter",
              description: "Basic hobby paints with dropper bottles"
            },
            {
              name: "Vallejo Game Color Basic Set (16 colors)",
              price: "$39.99",
              link: "https://amazon.com/dp/example-vallejo-basic",
              description: "Good coverage and color selection for beginners"
            }
          ]
        },
        mid: {
          title: "Mid Level - Quality Paint Systems",
          description: "Professional hobby paints with excellent coverage and mixing",
          amazonLinks: [
            {
              name: "Vallejo Model Color Set (72 colors)",
              price: "$149.99",
              link: "https://amazon.com/dp/example-vallejo-72",
              description: "Comprehensive set with excellent color range"
            },
            {
              name: "Citadel Paint Starter Set (Essential Colors)",
              price: "$89.99",
              link: "https://amazon.com/dp/example-citadel-starter",
              description: "High-quality Games Workshop paint system"
            },
            {
              name: "Scale75 Scalecolor Range Set",
              price: "$119.99",
              link: "https://amazon.com/dp/example-scale75-set",
              description: "Artist-quality paints with superior pigmentation"
            }
          ]
        },
        professional: {
          title: "Professional Level - Artist Quality Paints",
          description: "Premium paints for competition and display painting",
          amazonLinks: [
            {
              name: "Golden Heavy Body Acrylics Paint Set",
              price: "$179.99",
              link: "https://amazon.com/dp/example-golden",
              description: "Artist-quality paints with maximum pigment load"
            },
            {
              name: "Andrea Color Complete Paint Range",
              price: "$299.99",
              link: "https://amazon.com/dp/example-andrea",
              description: "Complete professional miniature paint system"
            },
            {
              name: "Kimera Kolors Complete Set",
              price: "$249.99",
              link: "https://amazon.com/dp/example-kimera",
              description: "Pure pigment paints for advanced color mixing"
            }
          ]
        }
      }
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
      levels: {
        entry: {
          title: "Entry Level - Basic Shading",
          description: "Simple wash techniques for immediate improvement",
          amazonLinks: [
            {
              name: "Army Painter Quickshade Dark Tone",
              price: "$6.99",
              link: "https://amazon.com/dp/example-quickshade",
              description: "Universal brown wash for most miniatures"
            },
            {
              name: "Citadel Nuln Oil Shade",
              price: "$7.99",
              link: "https://amazon.com/dp/example-nuln",
              description: "The most popular wash in miniature painting"
            }
          ]
        },
        mid: {
          title: "Mid Level - Complete Wash Set",
          description: "Full range of washes for different materials and colors",
          amazonLinks: [
            {
              name: "Citadel Shade Paint Complete Set",
              price: "$89.99",
              link: "https://amazon.com/dp/example-shade-set",
              description: "All essential washes for any project"
            },
            {
              name: "Army Painter Quickshade Complete Set",
              price: "$54.99",
              link: "https://amazon.com/dp/example-army-wash-set",
              description: "Strong, dark, and light tones for versatility"
            },
            {
              name: "Vallejo Wash Set (8 colors)",
              price: "$29.99",
              link: "https://amazon.com/dp/example-vallejo-wash",
              description: "Matte finish washes with good flow properties"
            }
          ]
        },
        professional: {
          title: "Professional Level - Advanced Shading",
          description: "Specialized washes and inks for advanced techniques",
          amazonLinks: [
            {
              name: "Scale75 Inktensity Complete Set",
              price: "$79.99",
              link: "https://amazon.com/dp/example-inktensity",
              description: "High-intensity inks for professional shading"
            },
            {
              name: "AK Interactive Enamel Wash Set",
              price: "$89.99",
              link: "https://amazon.com/dp/example-ak-wash",
              description: "Enamel washes for realistic weathering"
            },
            {
              name: "Daler Rowney FW Acrylic Inks",
              price: "$119.99",
              link: "https://amazon.com/dp/example-fw-inks",
              description: "Artist-quality inks for custom wash mixing"
            }
          ]
        }
      }
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
      levels: {
        entry: {
          title: "Entry Level - Simple Basing",
          description: "Basic materials for clean, effective bases",
          amazonLinks: [
            {
              name: "Play Sand for Miniature Bases",
              price: "$8.99",
              link: "https://amazon.com/dp/example-sand",
              description: "Simple sand texture for basic bases"
            },
            {
              name: "Army Painter Battlefield Grass",
              price: "$4.99",
              link: "https://amazon.com/dp/example-grass",
              description: "Static grass for quick, effective basing"
            },
            {
              name: "PVA Glue (White Glue)",
              price: "$3.99",
              link: "https://amazon.com/dp/example-pva",
              description: "Essential adhesive for basing materials"
            }
          ]
        },
        mid: {
          title: "Mid Level - Themed Basing",
          description: "Complete basing kits for specific environments",
          amazonLinks: [
            {
              name: "Citadel Texture Paint Set (6 colors)",
              price: "$44.99",
              link: "https://amazon.com/dp/example-texture-set",
              description: "Ready-to-use textured base paints"
            },
            {
              name: "Army Painter Battlefield Basing Set",
              price: "$27.99",
              link: "https://amazon.com/dp/example-battlefield-set",
              description: "Complete materials for various terrains"
            },
            {
              name: "Woodland Scenics Realistic Grass Assortment",
              price: "$19.99",
              link: "https://amazon.com/dp/example-woodland",
              description: "Multiple grass colors and textures"
            }
          ]
        },
        professional: {
          title: "Professional Level - Display Bases",
          description: "Premium materials for competition and display pieces",
          amazonLinks: [
            {
              name: "Green Stuff World Rolling Pins Set",
              price: "$39.99",
              link: "https://amazon.com/dp/example-rolling-pins",
              description: "Create custom textured bases with putty"
            },
            {
              name: "AK Interactive Diorama Series Complete Set",
              price: "$149.99",
              link: "https://amazon.com/dp/example-ak-diorama",
              description: "Professional weathering and terrain materials"
            },
            {
              name: "Scale75 Instant Scenery Complete Collection",
              price: "$89.99",
              link: "https://amazon.com/dp/example-instant-scenery",
              description: "Laser-cut scenic elements and details"
            }
          ]
        }
      }
    },
    {
      step: 7,
      title: "Advanced Supplies",
      icon: "⚡",
      description: "Once you've mastered the basics, these tools will elevate your painting to professional levels.",
      tips: [
        "Invest in quality as your skills improve",
        "Wet palettes extend paint working time",
        "Proper lighting prevents eye strain and color errors"
      ],
      levels: {
        entry: {
          title: "Entry Level - Helpful Additions",
          description: "Useful tools that make painting more comfortable",
          amazonLinks: [
            {
              name: "DIY Wet Palette Kit",
              price: "$12.99",
              link: "https://amazon.com/dp/example-diy-palette",
              description: "Make your own wet palette with parchment paper"
            },
            {
              name: "Basic Desk Lamp with Daylight Bulb",
              price: "$24.99",
              link: "https://amazon.com/dp/example-basic-lamp",
              description: "Improve your lighting without breaking the bank"
            }
          ]
        },
        mid: {
          title: "Mid Level - Quality Upgrades",
          description: "Professional accessories that improve your painting experience",
          amazonLinks: [
            {
              name: "Redgrass Games Wet Palette",
              price: "$34.99",
              link: "https://amazon.com/dp/example-redgrass",
              description: "Professional wet palette keeps paints fresh for days"
            },
            {
              name: "Daylight LED Desk Lamp",
              price: "$49.99",
              link: "https://amazon.com/dp/example-led-lamp",
              description: "Color-accurate lighting for true color representation"
            },
            {
              name: "Vallejo Airbrush Thinner Medium",
              price: "$8.99",
              link: "https://amazon.com/dp/example-thinner",
              description: "For advanced blending and smooth finishes"
            }
          ]
        },
        professional: {
          title: "Professional Level - Studio Setup",
          description: "Complete professional painting station equipment",
          amazonLinks: [
            {
              name: "Harder & Steenbeck Airbrush Set",
              price: "$199.99",
              link: "https://amazon.com/dp/example-airbrush",
              description: "Professional airbrush for smooth gradients"
            },
            {
              name: "Professional Paint Station with Storage",
              price: "$149.99",
              link: "https://amazon.com/dp/example-paint-station",
              description: "Organized workspace with integrated lighting"
            },
            {
              name: "Color Temperature Adjustable Ring Light",
              price: "$89.99",
              link: "https://amazon.com/dp/example-ring-light",
              description: "Professional photography-grade lighting"
            },
            {
              name: "Ultrasonic Cleaner for Brushes",
              price: "$59.99",
              link: "https://amazon.com/dp/example-ultrasonic",
              description: "Extend brush life with deep cleaning"
            }
          ]
        }
      }
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

  const getLevelBadgeColor = (level) => {
    switch(level) {
      case 'entry': return 'success';
      case 'mid': return 'warning';
      case 'professional': return 'danger';
      default: return 'primary';
    }
  };

  const getLevelIcon = (level) => {
    switch(level) {
      case 'entry': return '🌱';
      case 'mid': return '🔥';
      case 'professional': return '👑';
      default: return '⭐';
    }
  };

  const calculateBudget = (level) => {
    const budgets = {
      entry: { min: 80, max: 120 },
      mid: { min: 200, max: 350 },
      professional: { min: 500, max: 1000 }
    };
    return budgets[level];
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
                  <Nav.Item>
                    <Nav.Link 
                      eventKey="entry" 
                      onClick={() => setActiveLevel('entry')}
                      className={activeLevel === 'entry' ? 'active' : ''}
                    >
                      🌱 Entry Level
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link 
                      eventKey="mid" 
                      onClick={() => setActiveLevel('mid')}
                      className={activeLevel === 'mid' ? 'active' : ''}
                    >
                      🔥 Mid Level
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link 
                      eventKey="professional" 
                      onClick={() => setActiveLevel('professional')}
                      className={activeLevel === 'professional' ? 'active' : ''}
                    >
                      👑 Professional
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                
                <div className="text-center mt-3">
                  <Badge bg={getLevelBadgeColor(activeLevel)} className="level-badge">
                    {getLevelIcon(activeLevel)} 
                    {activeLevel === 'entry' && 'Perfect for beginners - Budget: $80-120'}
                    {activeLevel === 'mid' && 'Quality tools for serious hobbyists - Budget: $200-350'}
                    {activeLevel === 'professional' && 'Premium equipment for competition - Budget: $500-1000'}
                  </Badge>
                </div>
              </Card.Body>
            </Card>
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
            <h3 className="text-center mb-3">
              {getLevelIcon(activeLevel)} {activeLevel.charAt(0).toUpperCase() + activeLevel.slice(1)} Level Shopping Guide
            </h3>
            <p className="text-center text-muted mb-5">
              Curated recommendations for your experience level and budget
            </p>
          </Col>
        </Row>

        {detailedSteps.map((step, stepIndex) => {
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

              {stepIndex < detailedSteps.length - 1 && <hr className="step-divider" />}
            </div>
          );
        })}

        {/* Budget Summary for Current Level */}
        <Row className="mb-5">
          <Col lg={8} className="mx-auto">
            <Card className="budget-summary-card">
              <Card.Header className="text-center">
                <h5 className="mb-0">
                  💰 {getLevelIcon(activeLevel)} {activeLevel.charAt(0).toUpperCase() + activeLevel.slice(1)} Level Investment
                </h5>
              </Card.Header>
              <Card.Body className="text-center">
                <div className="budget-breakdown">
                  <div className="budget-item">
                    <span className="budget-label">Complete {activeLevel} Kit:</span>
                    <span className="budget-amount">
                      ${calculateBudget(activeLevel).min} - ${calculateBudget(activeLevel).max}
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
                  {activeLevel === 'entry' && 'Perfect starting point - upgrade individual items as your skills develop!'}
                  {activeLevel === 'mid' && 'Quality tools that will serve you well for years of painting!'}
                  {activeLevel === 'professional' && 'Competition-ready equipment for serious miniature artists!'}
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
                      <tr>
                        <td><strong>Budget Range</strong></td>
                        <td>$80 - $120</td>
                        <td>$200 - $350</td>
                        <td>$500 - $1000+</td>
                      </tr>
                      <tr>
                        <td><strong>Best For</strong></td>
                        <td>Complete beginners, testing the hobby</td>
                        <td>Committed hobbyists, regular painting</td>
                        <td>Competition painters, display pieces</td>
                      </tr>
                      <tr>
                        <td><strong>Paint Quality</strong></td>
                        <td>Basic acrylics, good for learning</td>
                        <td>Professional hobby paints</td>
                        <td>Artist-quality pigments</td>
                      </tr>
                      <tr>
                        <td><strong>Brush Quality</strong></td>
                        <td>Synthetic bristles, basic set</td>
                        <td>Natural/synthetic blend</td>
                        <td>Premium Kolinsky sable</td>
                      </tr>
                      <tr>
                        <td><strong>Tool Durability</strong></td>
                        <td>1-2 years with care</td>
                        <td>3-5 years of regular use</td>
                        <td>Professional lifetime tools</td>
                      </tr>
                      <tr>
                        <td><strong>Results Expectation</strong></td>
                        <td>Tabletop quality, learning fundamentals</td>
                        <td>Display quality, refined techniques</td>
                        <td>Competition level, museum pieces</td>
                      </tr>
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
              {getLevelIcon(activeLevel)} Top {activeLevel.charAt(0).toUpperCase() + activeLevel.slice(1)} Level Products
            </h3>
            <p className="text-center text-muted mb-5">
              Our highest-rated recommendations for your experience level
            </p>
            <Row>
              {startingProducts
                .filter(product => {
                  // Filter products based on price ranges for each level
                  const price = parseFloat(product.price);
                  if (activeLevel === 'entry') return price <= 30;
                  if (activeLevel === 'mid') return price > 30 && price <= 80;
                  return price > 80;
                })
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
                  ✅ {getLevelIcon(activeLevel)} {activeLevel.charAt(0).toUpperCase() + activeLevel.slice(1)} Level Quick Start Checklist
                </h5>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <h6>Essential Items ({activeLevel} level):</h6>
                    <div className="checklist">
                      <div className="checklist-item">
                        <input type="checkbox" id="miniatures" />
                        <label htmlFor="miniatures">Starter miniatures</label>
                      </div>
                      <div className="checklist-item">
                        <input type="checkbox" id="brushes" />
                        <label htmlFor="brushes">Basic brush set</label>
                      </div>
                      <div className="checklist-item">
                        <input type="checkbox" id="primer" />
                        <label htmlFor="primer">Primer (spray or brush-on)</label>
                      </div>
                      <div className="checklist-item">
                        <input type="checkbox" id="paints" />
                        <label htmlFor="paints">Essential paint colors</label>
                      </div>
                      <div className="checklist-item">
                        <input type="checkbox" id="washes" />
                        <label htmlFor="washes">Basic wash/shade</label>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <h6>Setup & Tools:</h6>
                    <div className="checklist">
                      <div className="checklist-item">
                        <input type="checkbox" id="workspace" />
                        <label htmlFor="workspace">Dedicated workspace</label>
                      </div>
                      <div className="checklist-item">
                        <input type="checkbox" id="lighting" />
                        <label htmlFor="lighting">Good lighting</label>
                      </div>
                      <div className="checklist-item">
                        <input type="checkbox" id="water" />
                        <label htmlFor="water">Water containers</label>
                      </div>
                      <div className="checklist-item">
                        <input type="checkbox" id="palette" />
                        <label htmlFor="palette">Palette or mixing surface</label>
                      </div>
                      <div className="checklist-item">
                        <input type="checkbox" id="cleaning" />
                        <label htmlFor="cleaning">Paper towels/tissue</label>
                      </div>
                    </div>
                  </Col>
                </Row>
                <div className="text-center mt-4">
                  <Button 
                    variant="primary" 
                    size="lg"
                    onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                  >
                    🛒 Start Shopping for {activeLevel.charAt(0).toUpperCase() + activeLevel.slice(1)} Level Kit
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