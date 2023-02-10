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
        <div><div>
          <a href="https://akshayachaitanya.org/donate?sem=1&gclid=CjwKCAiA0JKfBhBIEiwAPhZXD-a_0m50BPEjQRO-0hF4yIV9CDgXTLoJpUh46nFxFQtibHv9KmDWjhoCNgUQAvD_BwE">akshayachaitanya</a></div>
          <div> <a href="https://iskconmumbai.com/anna-daan/google-anna?9062279&gclid=CjwKCAiA0JKfBhBIEiwAPhZXD2lWlEwrY_0QeciGv6ivK20X_r-pY50pxAUliAsGfrgX5l0GfbywSRoCymQQAvD_BwE">iskconmumbai</a></div>
          <div><a href="https://www.akshayapatra.org/onlinedonations">akshayapatra</a></div>
          <Link to="/home">
            <button class="button button2">Go Back Home</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Pay;
