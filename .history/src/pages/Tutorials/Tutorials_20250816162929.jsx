import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
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

  return (
    <div className="tutorials-page">
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
              {filteredTutorials.length} video tutorials found
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
                              // Fallback to high quality if maxres fails
                              e.target.src = getYouTubeThumbnail(videoId, 'hqdefault');
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
                        </div>
                      ) : (
                        <div className="tutorial-image-placeholder">
                          <span className="tutorial-icon">{tutorial.icon || '🎥'}</span>
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