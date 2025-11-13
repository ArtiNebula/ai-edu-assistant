// src/pages/Home.jsx
import React from "react";
import { Container, Button } from "react-bootstrap";

function Home() {
  return (
    <section className="hero-section text-center py-5 bg-light">
      <Container>
        <h1 className="display-4 fw-bold">Welcome to Start Bootstrap</h1>
        <p className="lead text-muted mb-4">
          Build responsive websites quickly with free Bootstrap themes and templates.
        </p>
        <Button variant="danger" size="lg">
          Get Started
        </Button>
      </Container>
    </section>
  );
}

export default Home;
