import { async } from "@firebase/util";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import BookCard from "../components/Card";
import { useUserAuth } from "../context/UserAuthContext";
import Navbar from "./navbar";

const OrdersPage = () => {
  const firebase = useUserAuth();
  const [foods, setFoods] = useState([]);

  useEffect(() => {
      firebase.fetchMydonor("userID",firebase.user.uid)?.then((foods) => setFoods(foods.docs));
  }, [firebase]);

  console.log(foods);

  // eslint-disable-next-line eqeqeq
  if (foods.length==0) return <h1>No Donation</h1>;

  return (
    <div>
      <Navbar></Navbar>
      
      {foods.map((food) => (
        <BookCard
          link={`/food/orders/${food.id}`}
          key={food.id}
          id={food.id}
          {...food.data()}
        />
      ))}
    </div>
  );
};

export default OrdersPage;
