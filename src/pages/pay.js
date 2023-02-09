import React from "react";
import { Link } from "react-router-dom";
// import MyImage from '../images/';
const Pay = () => {
  return (
    <>
      <div class="bg-image"></div>
      <div class="bg-text">
        <div>
          <h1>PAY BY UPI</h1>
        </div>
        <div className="Pay">
          {/* <img src={MyImage} width="100" height="50" alt="qrcode" /> */}
        </div>
        <div>
          <Link to="/">
            <button class="button button2">Go Back Home</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Pay;
