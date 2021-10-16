import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import { Navbar, Nav, Container, Modal } from "react-bootstrap";
import { Cart } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Logo from "../../images/logo/logo1.png";

const Header = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Navbar>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            alt=""
            src={Logo}
            height="50"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Button className="border-0 bg-white"onClick={handleShow}>
            <Cart />
          </Button>
          <Nav.Link as={Link} className="px-4 my-3" to="/register">
            Sign Up
          </Nav.Link>
          <Nav.Link
            as={Link}
            className="px-4 bg-danger rounded-pill text-white my-3"
            to="/login"
          >
            Login
          </Nav.Link>
        </Nav>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className="btn btn-danger" onClick={handleClose}>
            pharches
          </Button>
        </Modal.Footer>
      </Modal>
    </Navbar>
  );
};

export default Header;
