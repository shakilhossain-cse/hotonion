import Button from "@restart/ui/esm/Button";
import React from "react";
import { useState, useEffect } from "react";
import { ButtonGroup, Container, Row, Spinner } from "react-bootstrap";
import Food from "../Food/Food";
import "./Items.css";

const Items = () => {
  const [Foods, setFoods] = useState([]);
  const [DisplayFoods, setDisplayFoods] = useState([])
  useEffect(() => {
    fetch("./food.json")
      .then((res) => res.json())
      .then((data) => {
        setFoods(data)
        setDisplayFoods(data)
      });
  }, []);

  const handelFood = foodCat => {
    const fooddata = Foods.filter(food => food.category === foodCat);
    setDisplayFoods(fooddata)
    console.log(Foods);
  };
  return (
    <div className="my-5">
      <Container>
        <div className="d-flex justify-content-center py-5">
          <ButtonGroup aria-label="Basic example">
            <Button
              variant="secondary"
              onClick={() => handelFood("breakfast")}
              className="items-button"
            >
              Breakfast
            </Button>
            <Button variant="secondary" onClick={() => handelFood("lunch")} className="items-button">
              Lanch
            </Button>
            <Button variant="secondary" onClick={() => handelFood("dinner")} className="items-button">
              Dinner
            </Button>
          </ButtonGroup>
        </div>
        {Foods.length === 0 ? (
          <div className="d-flex justify-content-center">
            <Spinner animation="border" />
          </div>
        ) : (
          <Row xs={1} sm={2} md={3} className="g-4">
            {DisplayFoods.slice(0, 6).map((food) => (
              <Food food={food} key={food.id} />
            ))}
          </Row>
        )}
      </Container>
      <div className="text-center my-3">
        <button  className="btn btn-secondary text-white opacity-75 rounded ">
          Checkout Your Food
        </button>
      </div>
    </div>
  );
};

export default Items;
