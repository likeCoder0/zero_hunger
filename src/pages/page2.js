import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import Cooked from "./cooked";
import Grocery from "./grocery";

const Page2 = () => {

  // const firebase=useUserAuth();
  // useEffect(() => {
  //     if(firebase.user.)
    
  // }, [])
  
  return (
    <>
      <div class="bg-image1"></div>
      <div class="bg-image2"></div>
      <div class="bg-text">
        <div>
          <h1>Is it Cooked food or Uncooked food?</h1>
        </div>
        <div>
          <Link to="/cooked">
            <button class="button button1">Cooked food</button>
          </Link>
        </div>
        <div>
          <Link to="/grocery">
            <button class="button button2">Grocery</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Page2;
