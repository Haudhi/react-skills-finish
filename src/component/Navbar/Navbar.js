import React from "react";
import "./Navbar.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import Login from "../Login/Login";
import { Link } from "react-router-dom";

const Navbarcom = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" variant="dark" className="navbar">
        <Container className="one">
          <Navbar.Brand href="#home">
            <i className="fas fa-skull-crossbones"></i> Skills.id
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" id="me-auto">
              <Nav.Link className="nav-links" href="#products">
                Products
              </Nav.Link>
              <Nav.Link className="nav-links" href="#contacts">
                Contacts
              </Nav.Link>
              <Link to="/Login" className="nav-login">
                Login
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbarcom;
