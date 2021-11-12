import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Navbar, Nav, Button } from "react-bootstrap";

function DefaultLayout() {
  return (
    <>
      <Navbar fixed="top" bg="white" variant="light">
        <Container fluid >
          <Navbar.Brand href="/">
            <img src="/logo.svg" alt="logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/login">
                <Button variant="link" className="text-decoration-none">
                  Log In
                </Button>
              </Nav.Link>
              <Nav.Link href="/signup">
                <Button variant="primary">Sign Up</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default DefaultLayout;
