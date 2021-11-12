import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Login() {
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
              Welcome Back to AskChristee!
            </h4>
            <Form className="d-flex flex-column align-items-center">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" size="lg" placeholder="Email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  size="lg"
                  placeholder="Password"
                />
              </Form.Group>

              <Button className="my-4" variant="primary" type="submit">
                Log In
              </Button>

              <Link to="/forget-password" className="text-decoration-none my-1">
                Forgot Password?
              </Link>
              <Link to="/signup" className="text-decoration-none my-1">
                Don't have an account ? Sign up now.
              </Link>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
