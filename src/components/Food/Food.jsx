import React from "react";
import { Card, Col } from "react-bootstrap";
import image from "./../../images/Breakfast/breakfast1.png";
import './Food.css'

const Food = (props) => {
  const { title, description, price } = props.food;
  return (
    <Col className="py-2">
      <Card className="d-flex justify-content-center align-items-center flex-column py-5 border-0 card">
        <Card.Img variant="top" src={image} className="w-50" />
        <Card.Body className="text-center">
          <Card.Title>{title}</Card.Title>
          <Card.Text className="text-muted">{description}</Card.Text>
          <h4>${price}</h4>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Food;
