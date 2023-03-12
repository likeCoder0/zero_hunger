import React from "react";
import { useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { Link } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Grocery = () => {
  const firebase = useUserAuth();
  const [time, setTime] = useState("");
  const [which, setWhich] = useState("");
  const [canned, setCanned] = useState("");
  const [quatity, setQuatity] = useState("");
  const [foodPic, setFoodPic] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await firebase.handleCreateNewDonatingGrocery(which, canned,quatity, time,foodPic);
    alert("Donation is listed.")
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
                <input
                  type="text"
                  placeholder="Which type of grocery?"
                  name="grocery_which"
                  id=""
                  value={which}
                  onChange={(e) => setWhich(e.target.value)}
                />
              </div>

              {/* <div class="input-box">
                <input type="text" placeholder="Canned/Unpack Food" name='grocery_canned' id='' onChange={postUserData}/>
              </div> */}
              <div class="input-box">
                <select
                  class="form-select"
                  aria-label="Default select example"
                  value={canned}
                  onChange={(e) => setCanned(e.target.value)}
                >
                  <option selected>--Canned/Unpack food--</option>
                  <option value="Canned food">Canned food</option>
                  <option value="Unpack food">Unpack food</option>
                </select>
              </div>
              <div class="input-box">
                <input
                  type="number"
                  placeholder="Number of kgs"
                  min={1}
                  name="grocery_canned"
                  id=""
                  value={quatity}
                  onChange={(e) => setQuatity(e.target.value)}
                />
              </div>

              <div class="input-box">
                <select class="form-select" aria-label="Default select example" value={time}
                  onChange={(e) => setTime(e.target.value)}>
                  <option selected>
                    --Estimate duration for which the grocery is consumable--
                  </option>
                  <option value="0-2 days">0-2 days</option>
                  <option value="2-4 weeks">2-4 weeks</option>
                  <option value="4-6 weeks">4-6 weeks</option>
                  <option value="6-8 weeks">6-8 weeks</option>
                  <option value="Above 8 weeks">Above 8 weeks</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="formFile" class="form-label">
                  Upload a picture of food
                </label>
                <input class="form-control" type="file" id="formFile" onChange={(e) => setFoodPic(e.target.files[0])}/>
              </div>

              <div class="contact-button">
                  <input
                    type="button"
                    value="Continue"
                    onClick={handleSubmit}
                  />
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
