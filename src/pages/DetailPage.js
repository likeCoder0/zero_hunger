import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import Navbar from "./navbar";

const DetailPage = () => {
  const params = useParams();
  const firebase = useUserAuth();

  const [qty, setQty] = useState(1);

  const [data, setData] = useState(null);
  const [url, setURL] = useState(null);

  useEffect(() => {
    firebase.getDonorById(params.foodId)?.then((value) => setData(value.data()));
  }, []);

  useEffect(() => {
    if (data) {
      const imageURL = data.imageURL;
      firebase.getImageURL(imageURL)?.then((url) => setURL(url));
    }
  }, [data]);

  const placeOrder = async () => {
    await firebase.placeOrder(params.foodId, qty);
    alert("Your order is Booked.");
  };

  if (data == null) return <h1>Loading...</h1>;

  return (
    <>
      <Navbar></Navbar>
    <div className="DetailPage container mt-5">

      <h1>{data.name}</h1>
      <img src={url} width="50%" style={{ borderRadius: "10px" }} />
      <h1>Details</h1>
      <p><b>Canned/Unpack food</b>: {data.canned}</p>
      <p><b>Type of Food</b>: {data.foodType}</p>
      <p><b>which type of food</b>: {data.which}</p>
      <p><b>Estimated servings possible</b>: {data.pres}</p>
      {/* <p>Price: Rs. {data.price}</p>
      <p>ISBN Number. {data.isbn}</p> */}
      <h1>Donor details</h1>
      <p>Name: {data.displayName}</p>
      <p>Email: {data.userEmail}</p>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Qty</Form.Label>
        <Col sm="3">
        <Form.Control
          onChange={(e) => setQty(e.target.value)}
          value={qty}
          type="Number"
          min={1}
          max={data.pres}
          placeholder="Enter Qty"
        /></Col>
      </Form.Group>
      <Button onClick={placeOrder} variant="success">
       Confirm
      </Button>
    </div>
    </>
  );
};

export default DetailPage;