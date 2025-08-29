import React from "react";
import { Container, Card } from "react-bootstrap";

function Privacy() {
  return (
    <Container className="my-5">
      <Card className="shadow-lg border-0 rounded-4">
        <Card.Body className="p-5">
          <h1 className="text-center text-primary mb-4">Privacy Policy</h1>
          <p className="text-muted text-center mb-5">
            Your privacy is important to us. This page explains how we collect,
            use, and protect your information when you use <strong>MyApp</strong>.
          </p>

          <section className="mb-4">
            <h4 className="text-dark">1. Information We Collect</h4>
            <ul className="text-muted">
              <li>Personal details such as name, email, and phone number.</li>
              <li>Payment details (processed securely via third parties).</li>
              <li>Browsing behavior and preferences.</li>
            </ul>
          </section>

          <section className="mb-4">
            <h4 className="text-dark">2. How We Use Your Information</h4>
            <ul className="text-muted">
              <li>To provide and improve our services.</li>
              <li>To process secure transactions.</li>
              <li>To send updates, promotions, and offers.</li>
              <li>To enhance user experience and website performance.</li>
            </ul>
          </section>

          <section className="mb-4">
            <h4 className="text-dark">3. Sharing of Information</h4>
            <p className="text-muted">
              We never sell or trade your information. We may share data only
              with trusted partners for payment, delivery, or analytics.
            </p>
          </section>

          <section className="mb-4">
            <h4 className="text-dark">4. Cookies</h4>
            <p className="text-muted">
              We use cookies to improve your browsing experience. You can
              disable them in your browser, but some features may not work
              properly.
            </p>
          </section>

          <section className="mb-4">
            <h4 className="text-dark">5. Data Security</h4>
            <p className="text-muted">
              We implement strict security measures to keep your data safe from
              unauthorized access or misuse.
            </p>
          </section>

          <section className="mb-4">
            <h4 className="text-dark">6. Your Rights</h4>
            <p className="text-muted">
              You can request access, update, or delete your data anytime by
              contacting us.
            </p>
          </section>

          <section>
            <h4 className="text-dark">7. Contact Us</h4>
            <p className="text-muted">
              If you have any questions about our Privacy Policy, contact us at:
              <br />
              <strong>Email:</strong> support@myapp.com
            </p>
          </section>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Privacy;
