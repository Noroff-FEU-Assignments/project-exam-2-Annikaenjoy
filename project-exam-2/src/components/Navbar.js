import React from "react";
import { Link } from "react-router-dom";

// React Bootstrap
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

// Images
import Logo from "../assets/images/Autonext_hvit.png";

const NavBar = (props) => {
  return (
    <>
      <Navbar className="navbar" bg="background" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            {" "}
            <img className="logo" src={Logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar-position ml-auto">
              <Link className="nav_link" exact to="/">
                Forside
              </Link>{" "}
              <Link className="nav_link" exact to="/omoss">
                Om oss
              </Link>
              <Link className="nav_link" exact to="/tjenester">
                Tjenester
              </Link>
              <Link className="nav_link" exact to="/biler">
                Våre biler
              </Link>
              <Link className="nav_link" exact to="/bestilling">
                Kontakt oss
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
