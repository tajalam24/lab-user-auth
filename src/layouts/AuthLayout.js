import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";

function AuthLayout() {
  return (
    <>
      <Navbar fixed="top">
        <Container fluid>
          <Navbar.Brand href="/">
            <img src="/logo.svg" alt="logo" />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default AuthLayout;
