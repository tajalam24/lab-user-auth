import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Login() {
  return (
    <Container
      fluid
      className="signup-page bg-light vh-100 d-flex align-items-center justify-content-center"
    >
      <Row>
        <Col md={6}>
          <div className="p-5 m-3 bg-white rounded-3">
            <img src="/potentialBuyer.svg" alt="buyer" width="221" height="202" />
          </div>
        </Col>
        <Col md={6}>
          <div className="p-5 m-3 bg-white rounded-3">
            <img src="/realEstateAgent.svg" alt="buyer" width="221" height="202" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
