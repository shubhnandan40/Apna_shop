import React from "react";
import { Container, Accordion, Card } from "react-bootstrap";

function FAQ() {
  return (
    <Container className="my-5">
      <Card className="shadow-lg border-0 rounded-4">
        <Card.Body className="p-5">
          <h1 className="text-center text-primary mb-4">Frequently Asked Questions</h1>
          <p className="text-muted text-center mb-5">
            Find answers to the most common questions about <strong>MyApp</strong>.
          </p>

          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>What is MyApp?</Accordion.Header>
              <Accordion.Body>
                MyApp is your trusted e-commerce platform where you can shop top-quality products at the best prices.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>How can I place an order?</Accordion.Header>
              <Accordion.Body>
                Simply browse products, add them to your cart, and proceed to checkout. Payments are secure and easy.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>What payment methods are supported?</Accordion.Header>
              <Accordion.Body>
                We support credit/debit cards, net banking, UPI, and popular wallets for a smooth shopping experience.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>How long does delivery take?</Accordion.Header>
              <Accordion.Body>
                Orders are usually delivered within 3-7 business days depending on your location.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header>Can I return or exchange a product?</Accordion.Header>
              <Accordion.Body>
                Yes, we offer easy returns and exchanges within 7 days of delivery. Conditions apply.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5">
              <Accordion.Header>How do I contact support?</Accordion.Header>
              <Accordion.Body>
                You can reach our support team at <strong>support@myapp.com</strong> or through the Contact page.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default FAQ;
