import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <header className="header_area">
      <div className="main_menu">
        <Navbar expand="lg" className="">
          <Container className="box_1620">
            <Navbar.Brand href="/#">
              <span className="text-white">DK.</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="menu_nav ml-auto">
                <Nav.Link className="text-white" href="#home">
                  Home
                </Nav.Link>
                <Nav.Link className="text-white" href="#home">
                  About
                </Nav.Link>
                <Nav.Link className="text-white" href="#home">
                  Blog
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </header>
  );
};

export default NavbarComponent;
