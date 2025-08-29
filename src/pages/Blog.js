import React from "react";
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap";

function Blog() {
  const posts = [
    {
      title: "Top 10 Fashion Trends in 2025",
      excerpt:
        "Discover the latest fashion trends that are taking over this year. Stay ahead in style...",
      img: "https://img.freepik.com/free-photo/stylish-woman-hat-posing_144627-53838.jpg",
      date: "August 15, 2025",
    },
    {
      title: "How to Save Big on Electronics",
      excerpt:
        "Smart tips and tricks to get the best deals on electronics while shopping online...",
      img: "https://img.freepik.com/free-photo/flat-lay-composition-gadgets_23-2148919483.jpg",
      date: "August 20, 2025",
    },
    {
      title: "Why Online Shopping is the Future",
      excerpt:
        "E-commerce is booming! Find out why more people prefer online shopping over retail...",
      img: "https://img.freepik.com/free-photo/shopping-cart-laptop-online-shopping-concept_1423-84.jpg",
      date: "August 25, 2025",
    },
  ];

  const categories = ["Fashion", "Electronics", "Lifestyle", "Offers", "News"];
  const recentPosts = [
    "New Deals on Smartphones",
    "Best Summer Collection 2025",
    "Why Customers Love MyApp",
  ];

  return (
    <div>
      {/* Hero Banner */}
      <div className="bg-dark text-white text-center py-5">
        <h1 className="fw-bold">Our Blog</h1>
        <p className="lead">Latest trends, tips & updates from MyApp</p>
      </div>

      {/* Blog Section */}
      <Container className="my-5">
        <Row>
          {/* Blog Posts */}
          <Col md={8}>
            <Row>
              {posts.map((post, index) => (
                <Col md={6} key={index} className="mb-4">
                  <Card className="h-100 shadow-sm border-0 rounded-4">
                    <Card.Img
                      variant="top"
                      src={post.img}
                      alt={post.title}
                      className="rounded-top-4"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <Card.Body>
                      <Card.Title>{post.title}</Card.Title>
                      <Card.Text className="text-muted small">{post.date}</Card.Text>
                      <Card.Text>{post.excerpt}</Card.Text>
                      <Button variant="primary" size="sm">
                        Read More
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>

          {/* Sidebar */}
          <Col md={4}>
            <div className="mb-4 p-3 bg-light rounded shadow-sm">
              <h5 className="mb-3">Categories</h5>
              <ListGroup>
                {categories.map((cat, index) => (
                  <ListGroup.Item key={index} action>
                    {cat}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </div>

            <div className="p-3 bg-light rounded shadow-sm">
              <h5 className="mb-3">Recent Posts</h5>
              <ul className="list-unstyled">
                {recentPosts.map((rp, index) => (
                  <li key={index} className="mb-2">
                    <a href="#" className="text-decoration-none text-primary">
                      {rp}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Blog;
