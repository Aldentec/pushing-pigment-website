import React, { useState } from 'react';
import { Container, Row, Col, Card, Badge, Button, Form } from 'react-bootstrap';
import { tutorialData } from '../../data/tutorials';
import './Tutorials.css';

const Tutorials = () => {
  const [filteredTutorials, setFilteredTutorials] = useState(tutorialData);
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const difficulties = ['Beginner', 'Intermediate', 'Advanced'];
  const categories = ['Basics', 'Techniques', 'Miniature Types', 'Advanced'];

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
                Step-by-step tutorials to take your miniature painting from 
                beginner to pro. Each tutorial includes detailed instructions, 
                video guides, and recommended products.
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
              {filteredTutorials.length} tutorials found
            </Badge>
          </Col>
        </Row>

        {/* Tutorials Grid */}
        <Row>
          {filteredTutorials.length > 0 ? (
            filteredTutorials.map((tutorial) => (
              <Col md={6} lg={4} key={tutorial.id} className="mb-4">
                <Card className="tutorial-card h-100">
                  <div className="tutorial-image-container">
                    <div className="tutorial-image-placeholder">
                      <span className="tutorial-icon">{tutorial.icon}</span>
                    </div>
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
                          <span className="meta-icon">⭐</span>
                          <span>{tutorial.rating} ({tutorial.reviews} reviews)</span>
                        </div>
                      </div>

                      <Button 
                        variant="primary" 
                        className="w-100 tutorial-btn"
                        onClick={() => window.open(tutorial.link, '_blank')}
                      >
                        Start Tutorial
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
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