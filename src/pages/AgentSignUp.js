import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function AgentSignUp() {
  return (
    <Container fluid className="login-page">
      <Row>
        <Col md={5} className="bg-light">
          <div className="left-wrapper">
            <h3 className="text-primary mb-4">
              Discover a better path to home buying with advanced technology
            </h3>
            <img src="/main.png" alt="main" />
          </div>
        </Col>
        <Col md={7}>
          <div className="right-wrapper">
            <h4 className="text-primary fw-bold mb-4">
              Create an AskChristee account
            </h4>
            <Form className="d-flex flex-column">
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Control type="text" size="lg" placeholder="First name" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Control type="text" size="lg" placeholder="Last name" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Control type="email" size="lg" placeholder="Email" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="password"
                      size="lg"
                      placeholder="Password"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="password"
                      size="lg"
                      placeholder="Confirm password"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Button className="my-4" variant="primary" type="submit">
                Sign Up
              </Button>
              <Link to="/login" className="text-decoration-none my-1">
                Already have an account ? Login now.
              </Link>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AgentSignUp;
