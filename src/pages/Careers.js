import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Careers() {
  const jobs = [
    {
      title: "Frontend Developer",
      location: "Remote / India",
      type: "Full-time",
      description:
        "We are looking for a skilled React developer with strong knowledge of JavaScript, Bootstrap, and responsive design.",
    },
    {
      title: "Backend Developer",
      location: "Remote / India",
      type: "Full-time",
      description:
        "Join our backend team to build scalable APIs using Node.js / Django with a focus on performance and security.",
    },
    {
      title: "UI/UX Designer",
      location: "Remote",
      type: "Contract",
      description:
        "Creative designer with experience in Figma, Adobe XD, and creating user-friendly interfaces.",
    },
    {
      title: "Digital Marketing Specialist",
      location: "Bangalore, India",
      type: "Full-time",
      description:
        "Passionate about SEO, social media, and marketing campaigns? We’d love to have you on our team.",
    },
  ];

  return (
    <Container className="my-5">
      <h1 className="text-center text-primary mb-4">Careers at MyApp</h1>
      <p className="text-muted text-center mb-5">
        Join our growing team and shape the future of e-commerce with{" "}
        <strong>MyApp</strong>. Explore open positions below.
      </p>

      <Row>
        {jobs.map((job, index) => (
          <Col md={6} lg={4} key={index} className="mb-4">
            <Card className="shadow-lg border-0 rounded-4 h-100">
              <Card.Body>
                <Card.Title className="text-dark">{job.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  📍 {job.location} | 💼 {job.type}
                </Card.Subtitle>
                <Card.Text className="mt-3">{job.description}</Card.Text>
                <Button variant="primary" className="w-100 rounded-pill">
                  Apply Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Careers;
