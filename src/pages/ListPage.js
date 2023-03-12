import React, { useEffect } from 'react'
import { useState } from 'react';
import FoodCard from '../components/Card';
// import BookCard from "../components/Card";
import { useUserAuth } from '../context/UserAuthContext';
import Navbar from './navbar';

const ListPage = () => {
  const firebase=useUserAuth();
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    firebase.listAllFood().then((foods) => setFoods(foods.docs));
  }, []);

  return (<>
    <Navbar></Navbar>
    <div className="container">
      {foods.map((food) => (
        <FoodCard key={food.id} id={food.id} {...food.data()}/>
      ))}
    </div></>
  )
}

export default ListPage;