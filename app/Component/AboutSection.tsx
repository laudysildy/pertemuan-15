"use client";

import { Container, Row, Col, Button } from "react-bootstrap";

function AboutSection() {
  return (
    <section id="about" className="py-5">
      <Container>
        <Row className="align-items-center">

          <Col md={6} className="mb-4">
            <img
              src="/about.jpg"
              alt="About Us"
              className="img-fluid rounded shadow"
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
                display: "block",
              }}
            />
          </Col>

          <Col md={6} className="mb-4">
            <h2 className="fw-bold mb-3">About Us</h2>

            <p className="text-muted">
              Welcome to our company. We are dedicated to providing
              the best products and services for our customers.
            </p>

            <p className="text-muted">
              Our team is committed to quality, creativity, and
              customer satisfaction. We always strive to deliver
              the best experience for everyone.
            </p>

            <Button variant="primary" href="#contact">
              Learn More
            </Button>
          </Col>

        </Row>
      </Container>
    </section>
  );
}

export default AboutSection;