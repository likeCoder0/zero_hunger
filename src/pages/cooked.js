import React from "react";
import { useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { Link } from "react-router-dom";

const Cooked = () => {
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
    const { which,canned,time,pres} = userData;

    if (which && canned && time&& pres) {
      const res = fetch(
        process.env.REACT_APP_DATABASE,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            which,canned,time,pres
          }),
        }
      );

      if (res) {
        setUserData({
          which: "",
    canned: "",
    time: "",
    pres: "",
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
              <div class="topic">Cooked Food</div>
              <div class="text-one">Fillup all details</div>
              <div class="text-two">Enter correct information</div>
            </div>
          </div>
          <div class="right-side">
            <div class="topic-text">Cooked Food details</div>

            <form action="#" method="POST">
              <div class="input-box">
                <input type="text" placeholder="Q.which type of food?" name='which' id='' onChange={postUserData}/>
              </div>

              <div class="input-box">
                <input type="text" placeholder="Canned/Unpack food" name='canned' id='' onChange={postUserData} />
              </div>

              <div class="input-box">
              <select class="form-select" aria-label="Default select example">
  <option selected>--Estimate duration for which the food is consumable--</option>
  <option value="1">0-2 hours</option>
  <option value="2">2-4 hours</option>
  <option value="3">4-6 hours</option>
  <option value="3">6-8 hours</option>
  <option value="3">8-10 hours</option>
</select>
              </div>

              <div class="input-box">
                <input type="number" placeholder="Estimated servings possible?" min="1" name='pres' id='' onChange={postUserData}/>
              </div>
              <div class="mb-3">
  <label for="formFile" class="form-label">Upload a picture of food</label>
  <input class="form-control" type="file" id="formFile"/>
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

export default Cooked;
