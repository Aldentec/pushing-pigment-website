import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Badge, Button, Card } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { getBlogPostBySlug, getRelatedPosts } from '../../data/blogPosts';
import './BlogPost.css';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [content, setContent] = useState('');
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      const foundPost = getBlogPostBySlug(slug);
      
      if (!foundPost) {
        setLoading(false);
        return;
      }

      setPost(foundPost);
      setRelatedPosts(getRelatedPosts(foundPost));

      // Load markdown content
      try {
        // For now, we'll use placeholder content since we don't have a markdown parser
        // You can add react-markdown later if you want to use actual markdown files
        setContent(getPlaceholderContent(foundPost));
      } catch (error) {
        console.error('Error loading blog content:', error);
        setContent('<p>Content temporarily unavailable.</p>');
      }

      setLoading(false);
    };

    loadPost();
    window.scrollTo(0, 0);
  }, [slug]);

  // Placeholder content generator (replace with actual markdown loading later)
  const getPlaceholderContent = (post) => {
    if (post.slug === 'best-miniature-paints-beginners-2025') {
      return `
        <h2>Why Choosing the Right Paint Matters</h2>
        <p>Starting your miniature painting journey with the wrong paints can be frustrating and expensive. After testing dozens of paint sets, I've identified the top options that will set you up for success.</p>
        
        <h2>Top 5 Beginner Paint Sets</h2>
        
        <h3>1. Citadel Paint + Tool Set ($89.99)</h3>
        <p><strong>Best for:</strong> Warhammer players and long-term hobby commitment</p>
        <p><strong>Pros:</strong></p>
        <ul>
          <li>Industry standard colors</li>
          <li>Excellent coverage and consistency</li>
          <li>Wide color range available</li>
          <li>Perfect for Games Workshop miniatures</li>
        </ul>
        <p><strong>Cons:</strong></p>
        <ul>
          <li>Most expensive option</li>
          <li>Pot design can lead to paint drying out</li>
          <li>Limited mixing ratios</li>
        </ul>
        <div class="affiliate-section">
          <a href="#" class="btn btn-primary affiliate-btn">🛒 Shop Citadel Paint Set on Amazon</a>
          <p class="affiliate-note">As an Amazon Associate, we earn from qualifying purchases.</p>
        </div>

        <h3>2. Vallejo Model Color Intro Set ($24.99)</h3>
        <p><strong>Best for:</strong> Budget-conscious beginners who want professional quality</p>
        <p><strong>Pros:</strong></p>
        <ul>
          <li>Excellent value for money</li>
          <li>Dropper bottles prevent waste</li>
          <li>High pigment concentration</li>
          <li>Easy to thin and mix</li>
        </ul>
        <p><strong>Cons:</strong></p>
        <ul>
          <li>Steeper learning curve</li>
          <li>Requires more mixing knowledge</li>
          <li>Smaller starter selection</li>
        </ul>
        <div class="affiliate-section">
          <a href="#" class="btn btn-primary affiliate-btn">🛒 Get Vallejo Model Color Set</a>
        </div>

        <h3>3. Army Painter Warpaints Starter Paint Set ($35.99)</h3>
        <p><strong>Best for:</strong> Balanced price and performance</p>
        <p><strong>Pros:</strong></p>
        <ul>
          <li>Good coverage and flow</li>
          <li>Reasonable price point</li>
          <li>Includes washing and highlighting paints</li>
          <li>Beginner-friendly consistency</li>
        </ul>
        <div class="affiliate-section">
          <a href="#" class="btn btn-primary affiliate-btn">🛒 Shop Army Painter Set</a>
        </div>

        <h2>Essential Individual Colors</h2>
        <p>Regardless of which set you choose, these individual colors are must-haves:</p>
        <ul>
          <li><strong>Black Primer</strong> - Foundation for all your models</li>
          <li><strong>White</strong> - For highlighting and mixing</li>
          <li><strong>Brown</strong> - Perfect for leather, wood, and earth tones</li>
          <li><strong>Metallic Silver</strong> - For weapons and armor details</li>
          <li><strong>Wash (Nuln Oil or equivalent)</strong> - Instant depth and definition</li>
        </ul>

        <h2>Complete Beginner Shopping List</h2>
        <div class="shopping-list">
          <h4>Essential Kit ($45-65 total):</h4>
          <ul>
            <li>Starter paint set (your choice from above)</li>
            <li>2-3 basic brushes (sizes 2, 6, and detail brush)</li>
            <li>Water containers</li>
            <li>Paper towels</li>
            <li>Palette (or ceramic plate)</li>
          </ul>
          <a href="#" class="btn btn-success affiliate-btn">🛒 Shop Complete Beginner Kit</a>
        </div>

        <h2>Conclusion</h2>
        <p>For most beginners, I recommend starting with the <strong>Vallejo Model Color set</strong> for the best value, or the <strong>Citadel set</strong> if you're painting Warhammer miniatures specifically.</p>
        
        <p>Remember: the best paint is the one you'll actually use. Start with a basic set, learn the fundamentals, and expand your collection as your skills and interests develop.</p>
      `;
    }
    
    // Default placeholder for other posts
    return `
      <p>This is placeholder content for the blog post "${post.title}". The actual content would be loaded from the markdown file: ${post.contentFile}</p>
      <p>Key topics covered in this article include: ${post.tags.join(', ')}.</p>
      <p>This ${post.difficulty.toLowerCase()}-level guide will help you understand the topic better and includes specific product recommendations to support your miniature painting journey.</p>
    `;
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

  if (loading) {
    return (
      <div className="blog-post-page">
        <Container>
          <Row>
            <Col>
              <div className="text-center py-5">
                <h3>Loading...</h3>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="blog-post-page">
        <Container>
          <Row>
            <Col>
              <div className="text-center py-5">
                <h3>Blog post not found</h3>
                <Button as={Link} to="/blog" variant="primary">
                  ← Back to Blog
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  return (
    <div className="blog-post-page">
      <Helmet>
        <title>{post.seoTitle}</title>
        <meta name="description" content={post.seoDescription} />
        <meta name="keywords" content={post.keywords} />
        <link rel="canonical" href={`https://pushingpigment.com/blog/${post.slug}`} />
        
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={`https://pushingpigment.com/blog/${post.slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={`https://pushingpigment.com${post.featuredImage}`} />
        <meta property="article:author" content={post.author} />
        <meta property="article:published_time" content={post.publishDate} />
        <meta property="article:modified_time" content={post.lastModified} />
        <meta property="article:section" content={post.category} />
        {post.tags.map(tag => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "image": `https://pushingpigment.com${post.featuredImage}`,
            "author": {
              "@type": "Organization",
              "name": post.author
            },
            "publisher": {
              "@type": "Organization",
              "name": "Pushing Pigment",
              "logo": {
                "@type": "ImageObject",
                "url": "https://pushingpigment.com/logo.png"
              }
            },
            "datePublished": post.publishDate,
            "dateModified": post.lastModified,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://pushingpigment.com/blog/${post.slug}`
            }
          })}
        </script>
      </Helmet>

      <Container className="blog-post-content">
        {/* Breadcrumb */}
        <Row>
          <Col>
            <nav aria-label="breadcrumb" className="blog-breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/blog">Blog</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {post.title}
                </li>
              </ol>
            </nav>
          </Col>
        </Row>

        {/* Post Header */}
        <Row>
          <Col lg={8} className="mx-auto">
            <article className="blog-post">
              <header className="blog-post-header">
                <div className="post-meta mb-3">
                  <Badge bg="primary" className="category-badge me-2">
                    {post.category}
                  </Badge>
                  <Badge bg={getDifficultyColor(post.difficulty)} className="difficulty-badge">
                    {post.difficulty}
                  </Badge>
                </div>
                
                <h1 className="post-title">{post.title}</h1>
                
                <div className="post-meta-details">
                  <span className="post-author">By {post.author}</span>
                  <span className="post-date">• {formatDate(post.publishDate)}</span>
                  <span className="post-read-time">• {post.readTime}</span>
                </div>

                <div className="post-tags mt-3">
                  {post.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      bg="light" 
                      text="dark" 
                      className="tag-badge me-1 mb-1"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </header>

              {/* Featured Image */}
              <div className="featured-image-container mb-4">
                <img
                  src={post.featuredImage}
                  alt={post.featuredImageAlt}
                  className="featured-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="featured-image-placeholder" style={{ display: 'none' }}>
                  <span className="image-icon">📝</span>
                  <div className="placeholder-text">{post.title}</div>
                </div>
              </div>

              {/* Post Content */}
              <div 
                className="post-content" 
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </article>
          </Col>
        </Row>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <Row className="mt-5">
            <Col>
              <h3 className="related-posts-title">Related Articles</h3>
              <Row>
                {relatedPosts.map((relatedPost) => (
                  <Col md={4} key={relatedPost.id} className="mb-4">
                    <Card className="related-post-card h-100">
                      <div className="related-image-container">
                        <img
                          src={relatedPost.featuredImage}
                          alt={relatedPost.featuredImageAlt}
                          className="related-image"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="related-image-placeholder" style={{ display: 'none' }}>
                          <span className="related-icon">📝</span>
                        </div>
                      </div>
                      <Card.Body>
                        <Badge bg="primary" className="category-badge mb-2">
                          {relatedPost.category}
                        </Badge>
                        <h6 className="related-title">
                          <Link to={`/blog/${relatedPost.slug}`}>
                            {relatedPost.title}
                          </Link>
                        </h6>
                        <p className="related-excerpt">
                          {relatedPost.excerpt.substring(0, 100)}...
                        </p>
                        <small className="text-muted">
                          {formatDate(relatedPost.publishDate)} • {relatedPost.readTime}
                        </small>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        )}

        {/* Back to Blog */}
        <Row className="mt-5">
          <Col className="text-center">
            <Button as={Link} to="/blog" variant="outline-primary" size="lg">
              ← Back to All Articles
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BlogPost;>
  );
};

export default BlogPost;>
  );
};

export default BlogPost;