import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
const ViewOrderDetails = () => {
  const params = useParams();
  const firebase = useUserAuth();

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    firebase.getOrders(params.bookId).then((orders) => setOrders(orders.docs));
  }, []);

  return (
    <div className="container mt-3">
      <h1>Orders</h1>
      {orders.map((order) => {
        const data = order.data();
        return (
          <div
            key={order.id}
            className="mt-5"
            style={{ border: "1px solid", padding: "10px" }}
          >
            <h5>Order By: {data.displayName}</h5>
            <h6>Qty: {data.qty}</h6>
            <p>Email: {data.userEmail}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ViewOrderDetails;