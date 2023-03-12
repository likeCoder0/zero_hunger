import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { GrBottomCorner } from "react-icons/gr";
import FoodCard from "../components/Card";
// import BookCard from "../components/Card";
import { useUserAuth } from "../context/UserAuthContext";
import Navbar from "./navbar";

const ListPage = () => {
  const firebase = useUserAuth();
  const [foods, setFoods] = useState([]);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {

  }, []);
  useEffect(() => {
    if (filter === "All") {
      firebase.listAllFood()?.then((foods) => setFoods(foods.docs));
    } else {
      firebase
        .fetchMydonor("foodType", filter)
        ?.then((foods) => setFoods(foods.docs));
      alert("Filter is apply.")
    }
  }, [filter, firebase]);

  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <Form.Group className="mb-3 mt-3" controlId="formBasicPassword">
          <Row>
            {/* <Col sm="10">
              <Form.Control type="search" placeholder="Search" value={search}
                onChange={(e) => setSearch(e.target.value)} />
                
            </Col>
            <Col>
              <Button variant="secondary">Search</Button>
            </Col> */}
            <Col>
              <Form.Select
                aria-label="Default select example"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Cooked">Cooked</option>
                <option value="Grocery">Grocery</option>
              </Form.Select>
            </Col>
          </Row>
        </Form.Group>

        {foods.map((food) => (
          <FoodCard
            key={food.id}
            link={`/food/view/${food.id}`}
            id={food.id}
            {...food.data()}
          />
        ))}
      </div>
    </>
  );
};

export default ListPage;
