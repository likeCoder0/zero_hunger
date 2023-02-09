import React from "react";
import { Link } from "react-router-dom";
import Page3 from "./page3";

const Page1 = () => {
  return (
    <>
      <div class="bg-image"></div>
      <div class="bg-text">
        <div>
          <h1>DO YOU HAVE EXTRA FOOD?</h1>
        </div>
        <div>
          <Link to="/page2">
            <button class="button button1">Yes</button>
          </Link>
        </div>
        <div>
          <Link to="/page3">
            <button class="button button2">No</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Page1;
