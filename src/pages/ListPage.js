import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { GrBottomCorner } from "react-icons/gr";
import FoodCard from "../components/Card";
// import BookCard from "../components/Card";
import { useUserAuth } from "../context/UserAuthContext";
import Navbar from "./navbar";

import Select from "react-select";


const ListPage = () => {
  const firebase = useUserAuth();
  const [foods, setFoods] = useState([]);
 

  useEffect(() => {
    firebase.listAllFood()?.then((foods) => setFoods(foods.docs));
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <div className="container">
      <Form.Group className="mb-3 mt-3" controlId="formBasicPassword">
        <Row>
        <Col sm="10">
        <Form.Control
          type="search"
          placeholder="Search"
        /></Col>
        <Col>
        <Button variant="secondary">Search</Button></Col>
        </Row>
      </Form.Group>

        {foods.map((food) => (
          <FoodCard key={food.id} link={`/food/view/${food.id}`} id={food.id} {...food.data()} />
        ))}
      </div>
    </>
  );
};

export default ListPage;
