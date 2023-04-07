import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import Navbar from "./navbar";
const ViewOrderDetails = () => {
  const navigate=useNavigate();
  
  const params = useParams();
  const firebase = useUserAuth();

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    firebase.getOrders(params.foodId)?.then((orders) => setOrders(orders.docs));
  }, []);
  

  return (
    <>
      <Navbar></Navbar>
    <div className="container mt-3">

      <h1>Requests recieved</h1>
      {orders.map((order) => {
        const data = order.data();
        return (
          <div
            key={order.id}
            className="mt-5"
            style={{ border: "1px solid", padding: "10px" }}
          >
            <h5>Reciever : {data.displayName}</h5>
            <h6>Qty: {data.pres}</h6>
            <p>Email: {data.userEmail}</p>
          </div>
        );
      })}
      <div className="mt-3" style={{  padding: "10px" }}>
        <Button onClick={e=>navigate("/food/orders")}>Back</Button>
      </div>
    </div>
    </>
  );
};

export default ViewOrderDetails;
