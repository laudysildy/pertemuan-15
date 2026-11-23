"use client";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function AutoLayoutExample() {
  return (
    <Container>
      <Row className="mt-5 mb-5">
        <Row className="mb-3">
          <Col className="text-center">
            <h2>What We Work</h2>
            <p>Lorem Ipsum dolor sit amet consectetur adipiscing elit.</p>
          </Col>
        </Row>
        <Col>
          <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src="/Card1.jpg" style={{ objectFit: 'cover', height: '300px' }} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src="/Card2.jpg" style={{ objectFit: 'cover', height: '300px' }} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src="/Card3.jpg" style={{ objectFit: 'cover', height: '300px' }} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AutoLayoutExample;