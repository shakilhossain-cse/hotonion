import Button from "@restart/ui/esm/Button";
import React from "react";
import { useState,useEffect } from "react";
import { ButtonGroup, Container, Row } from "react-bootstrap";
import Food from "../Food/Food";
import "./Items.css";

const Items = () => {
    const [Foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("./food.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  return (
    <div className="my-5">
      <Container>
        <div className="d-flex justify-content-center py-5">
          <ButtonGroup aria-label="Basic example">
            <Button variant="secondary" className="items-button active">
              Breakfast
            </Button>
            <Button variant="secondary" className="items-button">
              Lanch
            </Button>
            <Button variant="secondary" className="items-button">
              Dinner
            </Button>
          </ButtonGroup>
        </div>
              <Row xs={1} sm={2} md={3} className="g-4">
                  {
                      Foods.slice(0,6).map(food => <Food food={food}/>)
                  }
                 
        </Row>
      </Container>
      <div className="text-center my-3">
        <button className="btn btn-light text-muted rounded ">
          Checkout Your Food
        </button>
      </div>
    </div>
  );
};

export default Items;
