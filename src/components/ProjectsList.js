import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ProjectsList() {
  return (
    <Container className="projects-list mb-5">
      <Row>
        <Col>
          <h3 className="text-light text-center mt-5">Projects List</h3>
          <hr className="bg-light" />
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>
          <Card className="text-center mb-3">
            <Card.Header>autodlq</Card.Header>
            <Card.Body>
              <Card.Title>Auto DLQ</Card.Title>
              <Card.Text>
                Lightweight package in golang to declare a DLQ to you rabbitMQ
                queue and apply a fixed-time retryable mechanism on its
                messages.
                <br />
                it depends on{" "}
                <a
                  href="https://github.com/streadway/amqp"
                  target="_blank"
                  rel="noreferrer"
                >
                  streadway/amqp
                </a>{" "}
                a Go client for AMQP 0.9.1
              </Card.Text>
              <Button
                variant="dark"
                href="https://github.com/mazux/autodlq"
                target="_blank"
              >
                Check it on github
              </Button>
            </Card.Body>
          </Card>
          <Card className="text-center mb-3">
            <Card.Header>pwd</Card.Header>
            <Card.Body>
              <Card.Title>CLI Password Manger</Card.Title>
              <Card.Text>
                Simple open-source lightweight password manager in golang.
                <br />
                It's written while embracing the{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Command%E2%80%93query_separation"
                  target="_blank"
                  rel="noreferrer"
                >
                  CQS design
                </a>{" "}
                to separate the code base into different layers (domain,
                application, presentation) in which the domain layer is the
                lower layer and all other layers are dependent on it
              </Card.Text>
              <Button
                variant="dark"
                href="https://github.com/mazux/pwd"
                target="_blank"
              >
                Check it on github
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="text-light">
        <Col>
          <Button
            variant="secondary"
            href="https://github.com/mazux"
            target="_blank"
          >
            For more checkout my github
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ProjectsList;
