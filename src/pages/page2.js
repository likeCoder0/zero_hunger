import React from "react";
import { Link } from "react-router-dom";
import Cooked from "./cooked";
import Grocery from "./grocery";

const Page2 = () => {
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
            <button class="button button2">Uncooked food</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Page2;
