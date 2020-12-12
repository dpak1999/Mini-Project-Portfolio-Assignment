import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Container, Nav } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <header className="header_area">
      <div className="main_menu">
        <Navbar expand="lg" className="">
          <Container className="box_1620">
            <LinkContainer to="/">
              <Navbar.Brand>
                <span className="text-white ml-3">DK.</span>
              </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="menu_nav ml-auto">
                <LinkContainer to="/">
                  <Nav.Link className="text-white">Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/about">
                  <Nav.Link className="text-white">About</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/blog">
                  <Nav.Link className="text-white">Blog</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </header>
  );
};

export default NavbarComponent;
