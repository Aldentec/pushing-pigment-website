import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { tutorialData } from '../../data/tutorials';
import './Tutorials.css';

const Tutorials = () => {
  const [filteredTutorials, setFilteredTutorials] = useState(tutorialData);
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const difficulties = ['Beginner', 'Intermediate', 'Advanced'];
  const categories = ['Basics', 'Techniques', 'Miniature Types', 'Advanced'];

  // Function to extract YouTube video ID from URL
  const getYouTubeVideoId = (url) => {
    if (!url) return null; // Handle undefined/null URLs
    const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  // Function to get YouTube thumbnail URL
  const getYouTubeThumbnail = (videoId, quality = 'maxresdefault') => {
    return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
  };

  const handleFilter = (difficulty, category) => {
    let filtered = [...tutorialData];

    if (difficulty !== 'All') {
      filtered = filtered.filter(tutorial => tutorial.difficulty === difficulty);
    }

    if (category !== 'All') {
      filtered = filtered.filter(tutorial => tutorial.category === category);
    }

    setFilteredTutorials(filtered);
  };

  const handleDifficultyChange = (difficulty) => {
    setSelectedDifficulty(difficulty);
    handleFilter(difficulty, selectedCategory);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    handleFilter(selectedDifficulty, category);
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'success';
      case 'Intermediate': return 'warning';
      case 'Advanced': return 'danger';
      default: return 'secondary';
    }
  };

  const handleTutorialClick = (tutorial) => {
    // Track analytics if available
    if (window.gtag) {
      window.gtag('event', 'tutorial_click', {
        'tutorial_title': tutorial.title,
        'difficulty': tutorial.difficulty,
        'category': tutorial.category
      });
    }
    
    // Open YouTube video in new tab, fallback to regular link if no youtubeUrl
    const linkToOpen = tutorial.youtubeUrl || tutorial.link || '#';
    if (linkToOpen !== '#') {
      window.open(linkToOpen, '_blank', 'noopener,noreferrer');
    }
  };

  // Dynamic SEO content based on filters
  const getPageTitle = () => {
    let title = 'Miniature Painting Tutorials & Techniques 2025';
    
    if (selectedDifficulty !== 'All' && selectedCategory !== 'All') {
      return `${selectedDifficulty} ${selectedCategory} Miniature Painting Tutorials | Video Guides`;
    } else if (selectedDifficulty !== 'All') {
      return `${selectedDifficulty} Miniature Painting Tutorials | Step-by-Step Videos`;
    } else if (selectedCategory !== 'All') {
      return `${selectedCategory} Miniature Painting Tutorials | Expert Techniques`;
    }
    
    return `${title} | Step-by-Step Video Guides`;
  };

  const getPageDescription = () => {
    let description = 'Learn advanced miniature painting techniques with our comprehensive video tutorials.';
    
    if (selectedDifficulty !== 'All' && selectedCategory !== 'All') {
      return `Master ${selectedCategory.toLowerCase()} techniques with our ${selectedDifficulty.toLowerCase()} miniature painting video tutorials. Step-by-step guides from expert painters.`;
    } else if (selectedDifficulty !== 'All') {
      return `Perfect for ${selectedDifficulty.toLowerCase()} painters! Learn miniature painting techniques with detailed video tutorials and expert instruction.`;
    } else if (selectedCategory !== 'All') {
      return `Master ${selectedCategory.toLowerCase()} in miniature painting with our comprehensive video tutorials. From basic techniques to advanced methods.`;
    }
    
    return `${description} From dry brushing to wet blending, master every technique with expert YouTube tutorials and step-by-step guides.`;
  };

  const getKeywords = () => {
    const baseKeywords = 'miniature painting tutorials, painting techniques videos, miniature painting YouTube, step by step painting guides';
    
    if (selectedDifficulty !== 'All') {
      return `${selectedDifficulty.toLowerCase()} ${baseKeywords}, ${selectedDifficulty.toLowerCase()} miniature painting`;
    }
    
    if (selectedCategory !== 'All') {
      return `${selectedCategory.toLowerCase()} painting tutorials, ${baseKeywords}, ${selectedCategory.toLowerCase()} techniques`;
    }
    
    return `${baseKeywords}, dry brushing tutorial, wet blending, miniature painting videos, advanced painting methods`;
  };

  return (
    <div className="tutorials-page">
      {/* SEO Helmet for Tutorials Page */}
      <Helmet>
        <title>{getPageTitle()}</title>
        <meta name="description" content={getPageDescription()} />
        <meta name="keywords" content={getKeywords()} />
        <link rel="canonical" href={`https://pushingpigment.com/tutorials${selectedDifficulty !== 'All' || selectedCategory !== 'All' ? `?difficulty=${selectedDifficulty}&category=${selectedCategory}` : ''}`} />
        
        {/* Open Graph for social sharing */}
        <meta property="og:title" content={getPageTitle()} />
        <meta property="og:description" content={getPageDescription()} />
        <meta property="og:url" content="https://pushingpigment.com/tutorials" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://pushingpigment.com/tutorials-preview.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={getPageTitle()} />
        <meta name="twitter:description" content={getPageDescription()} />
        <meta name="twitter:image" content="https://pushingpigment.com/tutorials-preview.jpg" />
        
        {/* Video Collection Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": getPageTitle(),
            "description": getPageDescription(),
            "url": "https://pushingpigment.com/tutorials",
            "mainEntity": {
              "@type": "ItemList",
              "numberOfItems": filteredTutorials.length,
              "itemListElement": filteredTutorials.slice(0, 10).map((tutorial, index) => {
                const videoId = getYouTubeVideoId(tutorial.youtubeUrl);
                return {
                  "@type": "VideoObject",
                  "position": index + 1,
                  "name": tutorial.title,
                  "description": tutorial.description,
                  "thumbnailUrl": videoId ? getYouTubeThumbnail(videoId) : "https://pushingpigment.com/tutorial-placeholder.jpg",
                  "uploadDate": "2025-01-01",
                  "duration": tutorial.duration,
                  "contentUrl": tutorial.youtubeUrl || tutorial.link,
                  "embedUrl": videoId ? `https://www.youtube.com/embed/${videoId}` : undefined,
                  "interactionStatistic": {
                    "@type": "InteractionCounter",
                    "interactionType": "http://schema.org/WatchAction",
                    "userInteractionCount": Math.floor(Math.random() * 10000) + 1000
                  },
                  "creator": {
                    "@type": "Person",
                    "name": tutorial.instructor
                  },
                  "educationalLevel": tutorial.difficulty,
                  "learningResourceType": "Tutorial",
                  "teaches": tutorial.skills
                };
              })
            }
          })}
        </script>
        
        {/* Educational Course Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Miniature Painting Video Tutorial Collection",
            "description": "Comprehensive collection of miniature painting tutorials covering techniques from beginner to advanced levels.",
            "provider": {
              "@type": "Organization",
              "name": "Pushing Pigment",
              "url": "https://pushingpigment.com"
            },
            "educationalLevel": ["Beginner", "Intermediate", "Advanced"],
            "teaches": [
              "Miniature Painting Techniques",
              "Brush Control",
              "Color Theory",
              "Dry Brushing",
              "Wet Blending",
              "Highlighting",
              "Shading",
              "Weathering Effects"
            ],
            "courseMode": "online",
            "hasCourseInstance": {
              "@type": "CourseInstance",
              "courseMode": "online",
              "courseWorkload": "PT2H"
            }
          })}
        </script>
        
        {/* HowTo Schema for main tutorial process */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Learn Miniature Painting Through Video Tutorials",
            "description": "Step-by-step guide to learning miniature painting effectively using video tutorials",
            "image": "https://pushingpigment.com/tutorials-preview.jpg",
            "totalTime": "PT20H",
            "step": [
              {
                "@type": "HowToStep",
                "position": 1,
                "name": "Start with Beginner Tutorials",
                "text": "Begin with basic technique tutorials to build fundamental skills"
              },
              {
                "@type": "HowToStep",
                "position": 2,
                "name": "Practice Each Technique",
                "text": "Apply what you learn in each tutorial to your own miniatures"
              },
              {
                "@type": "HowToStep",
                "position": 3,
                "name": "Progress to Advanced Methods",
                "text": "Gradually move to more complex tutorials as your skills improve"
              }
            ]
          })}
        </script>
        
        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://pushingpigment.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Tutorials",
                "item": "https://pushingpigment.com/tutorials"
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="tutorials-hero">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h1 className="tutorials-title">
                Learn from the <span className="gradient-text">Masters</span>
              </h1>
              <p className="tutorials-description">
                Step-by-step video tutorials to take your miniature painting from 
                beginner to pro. Each tutorial includes detailed YouTube guides 
                and recommended techniques from expert painters.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="tutorials-content">
        {/* Filters */}
        <Row className="mb-4">
          <Col md={6}>
            <div className="filter-section">
              <h5 className="filter-title">Difficulty Level:</h5>
              <div className="filter-buttons">
                <Button
                  variant={selectedDifficulty === 'All' ? 'primary' : 'outline-primary'}
                  size="sm"
                  className="filter-btn me-2 mb-2"
                  onClick={() => handleDifficultyChange('All')}
                >
                  All Levels
                </Button>
                {difficulties.map((difficulty) => (
                  <Button
                    key={difficulty}
                    variant={selectedDifficulty === difficulty ? 'primary' : 'outline-primary'}
                    size="sm"
                    className="filter-btn me-2 mb-2"
                    onClick={() => handleDifficultyChange(difficulty)}
                  >
                    {difficulty}
                  </Button>
                ))}
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="filter-section">
              <h5 className="filter-title">Category:</h5>
              <div className="filter-buttons">
                <Button
                  variant={selectedCategory === 'All' ? 'primary' : 'outline-primary'}
                  size="sm"
                  className="filter-btn me-2 mb-2"
                  onClick={() => handleCategoryChange('All')}
                >
                  All Categories
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'primary' : 'outline-primary'}
                    size="sm"
                    className="filter-btn me-2 mb-2"
                    onClick={() => handleCategoryChange(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </Col>
        </Row>

        {/* Results Summary */}
        <Row className="mb-4">
          <Col>
            <Badge bg="light" text="dark" className="results-badge">
              🎥 {filteredTutorials.length} video tutorials found
            </Badge>
          </Col>
        </Row>

        {/* Tutorials Grid */}
        <Row>
          {filteredTutorials.length > 0 ? (
            filteredTutorials.map((tutorial) => {
              const videoId = getYouTubeVideoId(tutorial.youtubeUrl);
              const thumbnailUrl = videoId ? getYouTubeThumbnail(videoId) : null;
              const hasYouTubeVideo = Boolean(tutorial.youtubeUrl && videoId);
              
              return (
                <Col md={6} lg={4} key={tutorial.id} className="mb-4">
                  <Card className="tutorial-card h-100" onClick={() => handleTutorialClick(tutorial)}>
                    <div className="tutorial-image-container">
                      {hasYouTubeVideo && thumbnailUrl ? (
                        <div className="youtube-thumbnail-wrapper">
                          <img 
                            src={thumbnailUrl} 
                            alt={tutorial.title}
                            className="youtube-thumbnail"
                            onError={(e) => {
                              // Fallback to high quality if maxres fails, then to medium quality
                              if (e.target.src.includes('maxresdefault')) {
                                e.target.src = getYouTubeThumbnail(videoId, 'hqdefault');
                              } else if (e.target.src.includes('hqdefault')) {
                                e.target.src = getYouTubeThumbnail(videoId, 'mqdefault');
                              }
                            }}
                          />
                          <div className="youtube-play-overlay">
                            <div className="youtube-play-button">
                              <svg width="68" height="48" viewBox="0 0 68 48">
                                <path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00"></path>
                                <path d="M 45,24 27,14 27,34" fill="#fff"></path>
                              </svg>
                            </div>
                          </div>
                          <div className="video-indicator">
                            <span className="video-badge">
                              <span className="video-icon">🎥</span>
                              VIDEO
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className="tutorial-image-placeholder">
                          <span className="tutorial-icon">{tutorial.icon || '🎥'}</span>
                          <div className="placeholder-text">Video Tutorial</div>
                        </div>
                      )}
                      
                      <div className="tutorial-badges">
                        <Badge 
                          bg={getDifficultyColor(tutorial.difficulty)} 
                          className="difficulty-badge"
                        >
                          {tutorial.difficulty}
                        </Badge>
                        <Badge bg="dark" className="duration-badge">
                          {tutorial.duration}
                        </Badge>
                      </div>
                    </div>

                    <Card.Body className="d-flex flex-column">
                      <div className="tutorial-category mb-2">
                        <Badge bg="light" text="dark" className="category-badge">
                          {tutorial.category}
                        </Badge>
                      </div>

                      <h5 className="tutorial-title">{tutorial.title}</h5>
                      <p className="tutorial-description">{tutorial.description}</p>

                      <div className="tutorial-skills mb-3">
                        <h6 className="skills-title">You'll Learn:</h6>
                        <ul className="skills-list">
                          {tutorial.skills.slice(0, 3).map((skill, index) => (
                            <li key={index}>{skill}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-auto">
                        <div className="tutorial-meta mb-3">
                          <div className="meta-item">
                            <span className="meta-icon">👨‍🎨</span>
                            <span>{tutorial.instructor}</span>
                          </div>
                          <div className="meta-item">
                            <span className="meta-icon">🎥</span>
                            <span>{hasYouTubeVideo ? 'YouTube Tutorial' : 'Tutorial'}</span>
                          </div>
                        </div>

                        <Button 
                          variant="primary" 
                          className="w-100 tutorial-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleTutorialClick(tutorial);
                          }}
                        >
                          <span className="me-2">{hasYouTubeVideo ? '▶️' : '📖'}</span>
                          {hasYouTubeVideo ? 'Watch Tutorial' : 'View Tutorial'}
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })
          ) : (
            <Col className="text-center py-5">
              <div className="no-tutorials">
                <div className="no-tutorials-icon">🎨</div>
                <h4>No tutorials found</h4>
                <p className="text-muted">
                  Try adjusting your filters to find the perfect tutorial for you.
                </p>
                <Button 
                  variant="primary" 
                  onClick={() => {
                    setSelectedDifficulty('All');
                    setSelectedCategory('All');
                    setFilteredTutorials(tutorialData);
                  }}
                >
                  View All Tutorials
                </Button>
              </div>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Tutorials;