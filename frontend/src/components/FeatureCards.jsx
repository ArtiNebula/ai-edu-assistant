import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const FeatureCards = () => {
  const features = [
    { title: "Clean Design", desc: "Modern UI patterns and responsive layouts." },
    { title: "Bootstrap 5 Ready", desc: "Fully compatible with Bootstrap utilities." },
    { title: "Reusable Components", desc: "Built with modular React components." },
  ];

  return (
    <Container className="py-5">
      <Row>
        {features.map((f, i) => (
          <Col md={4} key={i}>
            <Card className="text-center shadow-sm border-0 mb-4 feature-card">
              <Card.Body>
                <h5 className="fw-bold">{f.title}</h5>
                <p className="text-muted">{f.desc}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FeatureCards;
