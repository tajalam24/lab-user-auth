import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

function SignUp() {
  return (
    <Container
      fluid
      className="signup-page bg-light vh-100 d-flex align-items-center justify-content-center"
    >
      <div className="d-flex flex-column align-items-center">
        <h4 className="text-primary fw-bold">Select one to register</h4>
        <Row>
          <Col md={6}>
            <Link to="/user-signup">
              <div className="p-5 m-3 bg-white rounded-3">
                <img
                  className="m-5"
                  src="/potentialBuyer.svg"
                  alt="buyer"
                  width="221"
                  height="202"
                />
              </div>
            </Link>
          </Col>
          <Col md={6}>
            <Link to="/agent-signup">
              <div className="p-5 m-3 bg-white rounded-3">
                <img
                  className="m-5"
                  src="/realEstateAgent.svg"
                  alt="buyer"
                  width="221"
                  height="202"
                />
              </div>
            </Link>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default SignUp;
