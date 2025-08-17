import React, { useState } from 'react';
import { Container, Row, Col, Card, Badge, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts, getAllCategories, getAllTags } from '../../data/blogPosts';
import './Blog.css';

const Blog = () => {
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTag, setSelectedTag] = useState('All');

  const categories = getAllCategories();
  const tags = getAllTags();

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    applyFilters(category, selectedTag);
  };

  const handleTagFilter = (tag) => {
    setSelectedTag(tag);
    applyFilters(selectedCategory, tag);
  };

  const applyFilters = (category, tag) => {
    let filtered = [...blogPosts];

    if (category !== 'All') {
      filtered = filtered.filter(post => post.category === category);
    }

    if (tag !== 'All') {
      filtered = filtered.filter(post => post.tags.includes(tag));
    }

    // Sort by publish date (newest first)
    filtered.sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));

    setFilteredPosts(filtered);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
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
    <div className="blog-page">
      <Helmet>
        <title>Miniature Painting Blog | Tutorials, Reviews & Tips | Pushing Pigment</title>
        <meta name="description" content="Expert miniature painting tutorials, product reviews, and technique guides. Learn from detailed guides covering paints, brushes, techniques, and troubleshooting." />
        <meta name="keywords" content="miniature painting blog, painting tutorials, product reviews, miniature painting tips, warhammer painting guides, model painting techniques" />
        <link rel="canonical" href="https://pushingpigment.com/blog" />
        
        <meta property="og:title" content="Miniature Painting Blog | Expert Tutorials & Reviews" />
        <meta property="og:description" content="Learn miniature painting with expert tutorials, honest product reviews, and detailed technique guides." />
        <meta property="og:url" content="https://pushingpigment.com/blog" />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Pushing Pigment Blog",
            "description": "Expert miniature painting tutorials, product reviews, and technique guides",
            "url": "https://pushingpigment.com/blog",
            "publisher": {
              "@type": "Organization",
              "name": "Pushing Pigment"
            },
            "blogPost": filteredPosts.slice(0, 10).map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.excerpt,
              "url": `https://pushingpigment.com/blog/${post.slug}`,
              "datePublished": post.publishDate,
              "dateModified": post.lastModified,
              "author": {
                "@type": "Organization",
                "name": post.author
              }
            }))
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <div className="blog-hero">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h1 className="blog-title">
                Miniature Painting <span className="gradient-text">Blog</span>
              </h1>
              <p className="blog-description">
                Expert tutorials, honest product reviews, and proven techniques to 
                take your miniature painting from beginner to pro.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="blog-content">
        {/* Filters */}
        <Row className="mb-4">
          <Col md={6}>
            <div className="filter-section">
              <h5 className="filter-title">Categories:</h5>
              <div className="filter-buttons">
                <Button
                  variant={selectedCategory === 'All' ? 'primary' : 'outline-primary'}
                  size="sm"
                  className="filter-btn me-2 mb-2"
                  onClick={() => handleCategoryFilter('All')}
                >
                  All Categories
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'primary' : 'outline-primary'}
                    size="sm"
                    className="filter-btn me-2 mb-2"
                    onClick={() => handleCategoryFilter(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="filter-section">
              <h5 className="filter-title">Tags:</h5>
              <Form.Select
                value={selectedTag}
                onChange={(e) => handleTagFilter(e.target.value)}
                className="tag-select"
              >
                <option value="All">All Tags</option>
                {tags.map((tag) => (
                  <option key={tag} value={tag}>
                    {tag}
                  </option>
                ))}
              </Form.Select>
            </div>
          </Col>
        </Row>

        {/* Results Summary */}
        <Row className="mb-4">
          <Col>
            <Badge bg="light" text="dark" className="results-badge">
              📝 {filteredPosts.length} articles found
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            </Badge>
          </Col>
        </Row>

        {/* Blog Posts Grid */}
        <Row>
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <Col md={6} lg={4} key={post.id} className="mb-4">
                <Card className="blog-card h-100">
                  <div className="blog-image-container">
                    <img
                      src={post.featuredImage}
                      alt={post.featuredImageAlt}
                      className="blog-featured-image"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="blog-image-placeholder" style={{ display: 'none' }}>
                      <span className="blog-icon">📝</span>
                      <div className="placeholder-text">Blog Post</div>
                    </div>
                    
                    <div className="blog-badges">
                      <Badge bg="primary" className="category-badge">
                        {post.category}
                      </Badge>
                      <Badge 
                        bg={getDifficultyColor(post.difficulty)} 
                        className="difficulty-badge"
                      >
                        {post.difficulty}
                      </Badge>
                    </div>
                  </div>

                  <Card.Body className="d-flex flex-column">
                    <div className="blog-meta mb-2">
                      <small className="text-muted">
                        {formatDate(post.publishDate)} • {post.readTime}
                      </small>
                    </div>

                    <h5 className="blog-card-title">
                      <Link to={`/blog/${post.slug}`} className="blog-link">
                        {post.title}
                      </Link>
                    </h5>
                    
                    <p className="blog-excerpt">{post.excerpt}</p>

                    <div className="blog-tags mb-3">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge 
                          key={tag} 
                          bg="light" 
                          text="dark" 
                          className="tag-badge me-1 mb-1"
                          style={{ cursor: 'pointer' }}
                          onClick={() => handleTagFilter(tag)}
                        >
                          {tag}
                        </Badge>
                      ))}
                      {post.tags.length > 3 && (
                        <Badge bg="light" text="muted" className="tag-badge">
                          +{post.tags.length - 3} more
                        </Badge>
                      )}
                    </div>

                    <div className="mt-auto">
                      <Button 
                        as={Link}
                        to={`/blog/${post.slug}`}
                        variant="outline-primary" 
                        className="w-100"
                      >
                        Read Article →
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <Col className="text-center py-5">
              <div className="no-posts">
                <div className="no-posts-icon">📝</div>
                <h4>No articles found</h4>
                <p className="text-muted">
                  Try adjusting your filters to find the content you're looking for.
                </p>
                <Button 
                  variant="primary" 
                  onClick={() => {
                    setSelectedCategory('All');
                    setSelectedTag('All');
                    setFilteredPosts(blogPosts);
                  }}
                >
                  View All Articles
                </Button>
              </div>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Blog;