import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function ArticlesList() {
  return (
    <Container className="articles-list mb-5">
      <Row>
        <Col>
          <h3 className="text-light text-center mt-5">Articles List</h3>
          <hr className="bg-light" />
        </Col>
      </Row>
      <Row className="card-group mb-5">
        <CardGroup>
          <Card>
            <Card.Img
              variant="top"
              src="https://miro.medium.com/v2/resize:fill:400:250/1*ALspCbdlif3un2ULvMglkg.png"
            />
            <Card.Body>
              <Card.Text>
                <a
                  href="https://mazux.medium.com/golang-error-handling-the-neat-way-4b7ec3ac5d6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h5 class="card-title">
                    [Golang] Error Handling, the neat way!
                  </h5>
                  <p class="card-text">
                    I've seen lot's of developers in the golang community,
                    especially who were lately moved to it because of its
                    simplicity, making some quick judgment on how things should
                    be treated in golang. One of these things is error handling.
                    As most of the language current devs are coming from OOP…
                  </p>
                </a>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">3 mins read</small>
            </Card.Footer>
          </Card>

          <Card>
            <Card.Img
              variant="top"
              src="https://miro.medium.com/v2/resize:fill:400:250/1*T0eYy1hAwWxfHNvUiqeX9w.png"
            />
            <Card.Body>
              <Card.Text>
                <a
                  href="https://mazux.medium.com/retry-rabbitmq-messages-using-infrastructure-not-application-with-golang-sample-code-d54c92cd2b1f"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h5 class="card-title">
                    Retry rabbitMQ messages using infrastructure not
                    application, with Golang sample code
                  </h5>
                  <p class="card-text">
                    Most likely you encountered the situation in which you have
                    to retry consuming the queue messages for another time due
                    to any kind of temporary issue (e.g: consuming the message
                    requires performing an HTTP call to a service which is
                    facing a temporary outage). I encountered this alot — I…
                  </p>
                </a>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">5 mins read</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </Row>
      <Row className="text-light">
        <Col>
          <Button
            variant="secondary"
            href="https://medium.com/@mazux"
            target="_blank"
          >
            For more checkout my medium
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ArticlesList;
