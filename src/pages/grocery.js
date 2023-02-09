import React from "react";

import Navbar from "./navbar";
import Footer from "./footer";
import { Link } from "react-router-dom";

const Grocery = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div class="contact-container">
        <div class="contact-content">
          <div class="left-side">
            <div class="address details">
              <i class="fas fa-map-marker-alt"></i>
              <div class="topic">Grocery</div>
              <div class="text-one">Fillup all details</div>
              <div class="text-two">Enter correct information</div>
            </div>
          </div>
          <div class="right-side">
            <div class="topic-text">Grocery details</div>

            <form action="#">
              <div class="input-box">
                <input type="text" placeholder="Which type of grocery?" />
              </div>

              <div class="input-box">
                <input type="text" placeholder="Canned/Unpack Food" />
              </div>

              <div class="input-box">
                <input type="text" placeholder="Fresh/Old Food" />
              </div>

              <div class="input-box">
                <input type="text" placeholder="Expiry Date" />
              </div>

              <div class="contact-button">
                <Link to="/home">
                <input type="button" value="Continue" />
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Grocery;
