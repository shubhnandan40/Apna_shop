import React from "react";
import { Container } from "react-bootstrap";

function Terms() {
  return (
    <div>
      {/* Hero Banner */}
      <div className="bg-primary text-white text-center py-5">
        <h1 className="fw-bold">Terms & Conditions</h1>
        <p className="lead">Please read these terms carefully before using MyApp</p>
      </div>

      {/* Terms Content */}
      <Container className="my-5">
        <section className="mb-5">
          <h3 className="fw-bold">1. Introduction</h3>
          <p className="text-muted">
            Welcome to <strong>MyApp</strong>. By accessing or using our website,
            you agree to comply with and be bound by the following terms and
            conditions. If you do not agree, please do not use our services.
          </p>
        </section>

        <section className="mb-5">
          <h3 className="fw-bold">2. Use of Our Service</h3>
          <p className="text-muted">
            You agree to use our website only for lawful purposes. You must not
            misuse our services or engage in any activity that could harm our
            platform or other users.
          </p>
        </section>

        <section className="mb-5">
          <h3 className="fw-bold">3. Account Responsibility</h3>
          <p className="text-muted">
            When creating an account, you are responsible for maintaining the
            confidentiality of your login details and for all activities under
            your account.
          </p>
        </section>

        <section className="mb-5">
          <h3 className="fw-bold">4. Purchases & Payments</h3>
          <p className="text-muted">
            All purchases made on our platform are subject to product
            availability and payment confirmation. We reserve the right to cancel
            or refuse any order at our discretion.
          </p>
        </section>

        <section className="mb-5">
          <h3 className="fw-bold">5. Intellectual Property</h3>
          <p className="text-muted">
            All content, logos, and materials available on MyApp are protected by
            copyright and trademark laws. Unauthorized use is strictly
            prohibited.
          </p>
        </section>

        <section className="mb-5">
          <h3 className="fw-bold">6. Limitation of Liability</h3>
          <p className="text-muted">
            We are not responsible for any direct, indirect, or incidental
            damages resulting from the use of our website or products.
          </p>
        </section>

        <section className="mb-5">
          <h3 className="fw-bold">7. Changes to Terms</h3>
          <p className="text-muted">
            We may update these Terms & Conditions from time to time. Any changes
            will be posted on this page with the updated date.
          </p>
        </section>

        <section className="mb-5">
          <h3 className="fw-bold">8. Contact Us</h3>
          <p className="text-muted">
            If you have any questions about these Terms & Conditions, please
            contact us at <a href="mailto:support@myapp.com">support@myapp.com</a>.
          </p>
        </section>
      </Container>
    </div>
  );
}

export default Terms;
