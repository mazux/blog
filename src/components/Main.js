import { Col, Container, Row } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";

function Main() {
  var yearOfExperience = new Date().getFullYear() - 2016;
  return (
    <Container className="bg-light">
      <Row>
        <Col>
          <div className="card mb-5 mt-5">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://avatars.githubusercontent.com/u/14344479?v=4"
                  className="img-fluid"
                  alt="Mazen Kenjrawi"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Hey there... Welcome!</h5>
                  <p className="card-text">
                    I started this journey in a webstudio in my home country
                    Syria...
                    <br />
                    Now, I have around {yearOfExperience} years of extensive
                    experience in software engineering. My expertise encompasses
                    a profound understanding of fundamental principles and
                    practices.
                  </p>
                  <p>
                    <Badge bg="info">Golang</Badge>
                    <Badge bg="info">Kotlin</Badge>
                    <Badge bg="info">rabbitMQ</Badge>
                    <Badge bg="info">mysql</Badge>
                    <Badge bg="info">postgres</Badge>
                    <Badge bg="info">RESTful API</Badge>
                    <Badge bg="info">gRPC</Badge>
                    <Badge bg="info">TDD</Badge>
                    <Badge bg="info">DDD</Badge>
                  </p>

                  <p className="card-text">
                    <strong className="text-body-secondary">
                      Mazen Kenjrawi
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
