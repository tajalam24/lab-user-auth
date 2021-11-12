import React from "react";
import { Container, Row, Col } from "react-bootstrap";

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
            <h4 className="text-primary mb-4">Welcome Back to AskChristee!</h4>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
