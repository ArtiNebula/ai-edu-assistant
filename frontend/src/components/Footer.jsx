// src/components/Footer.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-light border-top mt-5 py-4">
      <Container>
        <Row>
          <Col md={6}>
            <p className="mb-0 fw-semibold">© 2025 Start Bootstrap</p>
          </Col>
          <Col md={6} className="text-md-end">
            <a href="/" className="text-decoration-none me-3">Privacy Policy</a>
            <a href="/" className="text-decoration-none">Terms</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
