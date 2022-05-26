import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

// React Bootstrap
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

// Images
import Logo from "../assets/images/Autonxt_hvit.png";

const NavBar = (props) => {
  const [auth, setAuth] = useContext(AuthContext);

  const navigate = useNavigate();

  function logout() {
    setAuth(null);
    navigate("/");
  }

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
                Bestilling
              </Link>
              <Link className="nav_link" exact to="/kontakt">
                Kontakt oss
              </Link>
              {auth ? (
                <>
                  <Link className="nav_link" to="/admin">
                    Admin
                  </Link>{" "}
                  |{" "}
                  <button type="button" onClick={logout}>
                    Log out
                  </button>
                </>
              ) : (
                <Link className="nav_link" to="/login">
                  Login
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
