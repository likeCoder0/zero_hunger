import React from "react";
import { useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { Link } from "react-router-dom";

const Grocery = () => {
  const [userData, setUserData] = useState({
    which: "",
    canned: "",
    time: "",
    pres: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  // connect with firebase
  const submitData = async (event) => {
    event.preventDefault();
    const { grocery_which,grocery_canned,grocery_time,grocery_pres} = userData;

    if (grocery_which && grocery_canned && grocery_time&& grocery_pres) {
      const res = fetch(
        process.env.REACT_APP_DATABASE,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            grocery_which,grocery_canned,grocery_time,grocery_pres
          }),
        }
      );

      if (res) {
        setUserData({
          grocery_which: "",
          grocery_canned: "",
          grocery_time: "",
          grocery_pres: "",
        });
        alert("Data Stored");
      } else {
        alert("plz fill the data");
      }
    } else {
      alert("plz fill the data");
    }
  };
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

            <form action="#" method="POST">
              <div class="input-box">
                <input type="text" placeholder="Which type of grocery?" name='grocery_which' id='' onChange={postUserData} />
              </div>

              <div class="input-box">
                <input type="text" placeholder="Canned/Unpack Food" name='grocery_canned' id='' onChange={postUserData}/>
              </div>
              <div class="input-box">
                <input type="number" placeholder="Number of kgs" min={1} name='grocery_canned' id='' onChange={postUserData}/>
              </div>

              <div class="input-box">
              <select class="form-select" aria-label="Default select example">
  <option selected>--Estimate duration for which the grocery is consumable--</option>
  <option value="1">0-2 days</option>
  <option value="2">2-4 weeks</option>
  <option value="3">4-6 weeks</option>
  <option value="3">6-8 weeks</option>
  <option value="3">Above 8 weeks</option>
</select>
              </div>

              <div class="contact-button">
                <Link to="/home">
                <input type="button" value="Continue" onClick={submitData}/>
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
