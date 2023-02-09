import React from "react";

import Navbar from "./navbar";
import Footer from "./footer";

const Cooked = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div class="contact-container">
        <div class="contact-content">
          <div class="left-side">
            <div class="address details">
              <i class="fas fa-map-marker-alt"></i>
              <div class="topic">Cooked Food</div>
              <div class="text-one">Fillup all details</div>
              <div class="text-two">Enter correct information</div>
            </div>
          </div>
          <div class="right-side">
            <div class="topic-text">Cooked Food details</div>

            <form action="#">
              <div class="input-box">
                <input type="text" placeholder="Q.which type of food?" />
              </div>

              <div class="input-box">
                <input type="text" placeholder="Canned/Unpack food" />
              </div>

              <div class="input-box">
                <input
                  type="text"
                  placeholder="Approximate date/time of food"
                />
              </div>

              <div class="input-box">
                <input type="text" placeholder="Preservation Used?" />
              </div>

              <div class="contact-button">
                <input type="button" value="Continue" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Cooked;
