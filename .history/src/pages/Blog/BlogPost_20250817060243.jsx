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

      // Load content from separate file
      try {
        const contentModule = await import(`../../data/blogPosts/${foundPost.contentFile}`);
        setContent(contentModule.default);
      } catch (error) {
        console.error('Error loading blog content:', error);
        console.error('Attempted to load:', foundPost.contentFile);
        setContent('<p>Content temporarily unavailable. Please check that the content file exists.</p>');
      }

      setLoading(false);
    };

    loadPost();
    window.scrollTo(0, 0);
  }, [slug]);

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
              <div className="post-content">
                <div dangerouslySetInnerHTML={{ __html: content }} />
              </div>
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

export default BlogPost;<h3 className="related-posts-title">Related Articles</h3>
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

export default BlogPost;