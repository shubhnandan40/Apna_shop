import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function About() {
  const team = [
    {
      name: "Rahul Sharma",
      role: "CEO & Founder",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Priya Mehta",
      role: "Head of Marketing",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Amit Verma",
      role: "Lead Developer",
      img: "https://randomuser.me/api/portraits/men/52.jpg",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-primary text-white text-center py-5">
        <h1 className="fw-bold">About Us</h1>
        <p className="lead">Building the Future of E-Commerce with MyApp</p>
      </div>

      {/* About Info */}
      <Container className="my-5">
        <Row className="align-items-center">
          <Col md={6}>
            <img
              src="https://img.freepik.com/free-vector/online-shopping-concept-illustration_114360-1084.jpg"
              alt="About Us"
              className="img-fluid rounded-4 shadow"
            />
          </Col>
          <Col md={6}>
            <h2 className="mb-3">Who We Are</h2>
            <p className="text-muted">
              <strong>MyApp</strong> is your trusted e-commerce platform where
              shopping meets innovation. We provide top-quality products at
              unbeatable prices while ensuring a seamless shopping experience.
              Our mission is to make online shopping simple, affordable, and
              enjoyable for everyone.
            </p>
            <p className="text-muted">
              Since our launch, we have served thousands of happy customers
              across the country. From fashion to electronics, we bring
              everything you love at one place.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Team Section */}
      <Container className="my-5">
        <h2 className="text-center mb-4 text-primary">Meet Our Team</h2>
        <Row>
          {team.map((member, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="text-center border-0 shadow rounded-4">
                <Card.Img
                  variant="top"
                  src={member.img}
                  className="rounded-circle mx-auto mt-3"
                  style={{ width: "120px", height: "120px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{member.name}</Card.Title>
                  <Card.Text className="text-muted">{member.role}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default About;
