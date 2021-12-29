import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const Contact = () => (
  <Container
    fluid
    id="contact"
    as="section"
    className="min-vh-100 d-flex flex-column justify-content-center py-5"
  >
    <Row className="mx-0 py-5 flex-column flex-md-row justify-content-evenly">
      <Col md={5}>
        <h2 className="text-center text-md-start display-5 fw-bold mb-4">
          I&apos;m always interested in hearing about new projects, so if you&apos;d like to chat
          please get in touch.
        </h2>
      </Col>
      <Col md={6}>
        <Form action="https://formspree.io/f/meqvpkyg" method="post">
          <Form.Control
            type="text"
            name="name"
            placeholder="Full name"
            className="mb-3 py-2 border-0 border-bottom"
          />
          <Form.Control
            type="email"
            name="email"
            placeholder="Email address"
            className="mb-3 py-2 border-0 border-bottom"
          />
          <Form.Control
            as="textarea"
            name="msg"
            rows={3}
            placeholder="Message"
            className="mb-4 py-2 border-0 border-bottom"
          />
          <div className="d-flex justify-content-center">
            <Button type="submit" size="lg" className="bg-custom1 fw-bold border-0">
              Get in touch
            </Button>
          </div>
        </Form>
      </Col>
    </Row>
  </Container>
);

export default Contact;
