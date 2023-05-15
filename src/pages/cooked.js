import React from "react";
import { useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { Link } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Cooked = () => {
  const firebase = useUserAuth();
  const [time, setTime] = useState("");
  const [which, setWhich] = useState("");
  const [pres, setPres] = useState("1");
  const [canned, setCanned] = useState("");
  const [foodPic, setFoodPic] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    await firebase.handleCreateNewDonatingCooked(which,canned,time,pres,foodPic);
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
              <div class="topic">Cooked Food</div>
              <div class="text-one">Fillup all details</div>
              <div class="text-two">Enter correct information</div>
            </div>
          </div>
          <div class="right-side">
            <div class="topic-text">Cooked Food details</div>

            <form action="#" method="POST">
              <div class="input-box">
                <input
                  type="text"
                  placeholder="Q.which type of food?"
                  name="which"
                  id=""
                  value={which}
                  onChange={(e) => setWhich(e.target.value)}
                  required
                />
              </div>

              <div class="input-box">
                <select class="form-select" aria-label="Default select example" value={canned} onChange={(e) => setCanned(e.target.value)} required>
                  <option selected>
                    --Canned/Unpack food--
                  </option>
                  <option value="Canned food">Canned food</option>
                  <option value="Unpack food">Unpack food</option>
                </select>
              </div>

              <div class="input-box">
                <select class="form-select" aria-label="Default select example" value={time} onChange={(e) => setTime(e.target.value)} 
                  required
                  >
                  <option selected>
                    --Estimate duration for which the food is consumable--
                  </option>
                  <option value="0-2 hours">0-2 hours</option>
                  <option value="2-4 hours">2-4 hours</option>
                  <option value="4-6 hours">4-6 hours</option>
                  <option value="6-8 hours">6-8 hours</option>
                  <option value="8-10 hours">8-10 hours</option>
                </select>
              </div>

              <div class="input-box">
                <input
                  type="number"
                  placeholder="Estimated servings possible?"
                  min="1"
                  name="pres"
                  id=""
                  value={pres}
                  onChange={(e) => setPres(e.target.value)}
                  required

                />
              </div>
              <div class="mb-3">
                <label for="formFile" class="form-label">
                  Upload a picture of food
                </label>
                <input class="form-control" type="file" id="formFile" onChange={(e) => setFoodPic(e.target.files[0])}
                  required
                  />
              </div>

              <div class="contact-button">
                <Link to="/home">
                  <input type="button" disabled={time==""||foodPic==""||canned==""||which==""} value="Continue" onClick={handleSubmit}/>
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

export default Cooked;
