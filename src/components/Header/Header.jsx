import Button from "@restart/ui/esm/Button";
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Cart } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Logo from "../../images/logo/logo1.png";

const Header = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={Logo}
            height="50"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Button className="border-0 bg-white">
            <Cart />
          </Button>
          <Nav.Link as={Link} className="px-4 my-3" to="#home">
            Sign Up
          </Nav.Link>
          <Nav.Link
            as={Link}
            className="px-4 bg-danger rounded-pill text-white my-3"
            to="#home"
          >
            Login
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
