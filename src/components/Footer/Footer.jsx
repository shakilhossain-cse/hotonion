import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Logo from "../../images/logo/logo.png";

const Footer = () => {
  return (
    <div className="bg-dark">
      <Container className="py-5">
        <Row className="text-white">
          <Col xs={12} md={7}>
            <img src={Logo} height="50" />
          </Col>
          <Col xs={12} md={5}>
            <div className="d-flex justify-content-between p-4">
              <div>
                <p>About Online Food</p>
                <p>Read Our Blog</p>
                <p>Sign Up To Delivered</p>
                <p>Add Your Resturant</p>
              </div>
              <div>
                <p>Get help</p>
                <p>Read FAQ</p>
                <p>View All Clients</p>
                <p>Resturents Near me</p>
              </div>
            </div>
          </Col>
        </Row>
        <div
          className="text-white d-flex flex-column justify-content-between pt-5 px-3 flex-md-row"
          sm=""
        >
          <p className="text-muted fst-italic">copyright @ 2020 online food</p>
          <div className="d-flex">
            <p className="mx-3">Privacy Policy .</p>
            <p className="mx-3">Trams Of Use</p>
            <p className="mx-3">Priceing</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
