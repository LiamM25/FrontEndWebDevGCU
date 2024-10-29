import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const Navigation = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">A Honkin Cafe</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="aboutus">About Us</Nav.Link>
              <Nav.Link as={Link} to="Placeholder">Contact Us</Nav.Link>
              <Nav.Link as={Link} to="Placeholder">Staff Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default Navigation;
