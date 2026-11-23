"use client";

import { Container, Row, Col, Image } from 'react-bootstrap';

function ServiceSection() {
  return (
    <Container className="my-5">
      <Row>
        <Col md={4} className="mb-3 text-center py-3">
          <Image src="/service1.jpg" alt="Service 1" fluid style={{ objectFit: 'cover', height: '300px', width: '100%' }} />
          <h3 className="mt-3">Service 1</h3>
          <p>Description of Service 1.</p>
        </Col>

        <Col md={4} className="mb-3 text-center py-3">
          <Image src="/service2.jpg" alt="Service 2" fluid style={{ objectFit: 'cover', height: '300px', width: '100%' }} />
          <h3 className="mt-3">Service 2</h3>
          <p>Description of Service 2.</p>
        </Col>

        <Col md={4} className="mb-3 text-center py-3">
          <Image src="/service3.jpg" alt="Service 3" fluid style={{ objectFit: 'cover', height: '300px', width: '100%' }} />
          <h3 className="mt-3">Service 3</h3>
          <p>Description of Service 3.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default ServiceSection;