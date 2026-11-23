import { Container, Row, Col, Button, Image } from "react-bootstrap";
import HeroSection from "./Component/Herosection";
import WorkSection from "./Component/Worksection";
import ServiceSection from "./Component/Servicesection";
import ContactSection from "./Component/Contactsection";
import Footer from "./Component/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />

      <Container className="my-5">
        <Row className="my-4">
          <Col md={6} className="align-self-center mb-3">
            <h2>About Us</h2>
            <h6>What We Do?</h6>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat,
              ipsam culpa. Commodi aspernatur placeat adipisci at sequi
              consequuntur.
            </p>
            <Button variant="info">Learn More</Button>
          </Col>
          <Col md={6}>
            <Image
              src="/about.jpg"
              alt="About Us"
              width={500}
              height={500}
              fluid
            />
          </Col>
        </Row>
      </Container>

      <section className="py-4" style={{ backgroundColor: "#fff9ac" }}>
        <WorkSection />
      </section>

      <ServiceSection />
      <ContactSection />
      <Footer />
    </main>
  );
}