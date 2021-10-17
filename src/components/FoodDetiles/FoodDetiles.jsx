import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Cart } from "react-bootstrap-icons";
import { useParams } from "react-router";
import image from "./../../images/Breakfast/breakfast1.png";

const FoodDetiles = () => {
  const { id } = useParams();
  const [Food, setFood] = useState([]);
  const [DisplayFood, setDisplatFood] = useState({});
  const [Quantity, setQuantity] = useState(1);
  useEffect(() => {
    fetch("http://localhost:3000//food.json")
      .then((res) => res.json())
      .then((data) => setFood(data));
  }, []);
  useEffect(() => {
    if (Food.length !== 0) {
      const foodItem = Food.find((food) => food.id == id);
      setDisplatFood(foodItem);
    }
  }, [Food]);

  const quantityHandeler = (value) => {
    if (value == "inceriment") {
      setQuantity(Quantity + 1)
    } else {
      if (Quantity > 1) {
        setQuantity(Quantity - 1)
      } else {
        return;
      }
    }
  };
  return (
    <div className="py-5">
      <Container>
        <Row>
          <Col
            md="6"
            xs="12"
            className="d-flex align-item-center justify-content-center my-4"
          >
            <img src={image} alt="" className="w-75" />
          </Col>
          <Col
            md="6"
            xs="12"
            className="d-flex align-item-center justify-content-center flex-column my-4"
          >
            <h3>{DisplayFood.title}</h3>
            <p className="my-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
              vitae nobis quos labore quia, cupiditate reprehenderit magnam
              minus perspiciatis architecto autem placeat quis aliquid ipsam
              amet, alias quam perferendis. Sit!
            </p>
            <div className="d-flex">
              <div>
                <Button
                  className=" btn btn-secondary"
                  onClick={() => quantityHandeler("decriment")}
                >
                  -
                </Button>
                <input
                  type="number"
                  value={Quantity}
                  style={{ width: "3rem" }}
                  className="p-1 mx-2"
                  readOnly
                />
                <Button
                  className=" btn btn-secondary"
                  onClick={() => quantityHandeler("inceriment")}
                >
                  +
                </Button>
              </div>
              <Button className="border-0 btn btn-danger ms-3">
                <Cart /> Add to Cart
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FoodDetiles;
