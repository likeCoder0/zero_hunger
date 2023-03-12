import React from "react";
import { useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { useUserAuth } from "../context/UserAuthContext";

const Address = () => {
  // const [userData, setUserData] = useState({
  //   address: "",
  //   city: "",
  //   state: "",
  //   pin: "",
  // });

  // let name, value;
  // const postUserData = (event) => {
  //   name = event.target.name;
  //   value = event.target.value;

  //   setUserData({ ...userData, [name]: value });
  // };

  // // connect with firebase
  // const submitData = async (event) => {
  //   event.preventDefault();
  //   const { address, city, state, pin } = userData;

  //   if (city && state && pin && address) {
  //     const res = fetch(process.env.REACT_APP_DATABASE, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         address,
  //         city,
  //         state,
  //         pin,
  //       }),
  //     });

  //     if (res) {
  //       setUserData({
  //         address: "",
  //         city: "",
  //         state: "",
  //         pin: "",
  //       });
  //       alert("Data Stored");
  //     } else {
  //       alert("plz fill the data");
  //     }
  //   } else {
  //     alert("plz fill the data");
  //   }
  // };
  const firebase=useUserAuth();
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pin, setPin] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    await firebase.handleCreateNewAddress(address,city,state,pin);
  };

  return (
    <div>
      <Navbar></Navbar>
      <div class="contact-container">
        <div class="contact-content">
          <div class="left-side">
            <div class="address details">
              <i class="fas fa-map-marker-alt"></i>
              <div class="topic">Address</div>
              <div class="text-one">Fillup all details</div>
              <div class="text-two">Enter correct Address</div>
            </div>
          </div>
          <div class="right-side">
            <div class="topic-text">Address details</div>

            <form action="#" method="POST">
              <div class="input-box">
                <input
                  type="text"
                  placeholder="Address"
                  name="address"
                  id=""
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>

              <div class="input-box">
                <input
                  type="text"
                  placeholder="City"
                  name="city"
                  id=""
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>

              <div class="input-box">
                <input
                  type="text"
                  placeholder="State"
                  name="state"
                  id=""
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
              </div>

              <div class="input-box">
                <input
                  type="number"
                  placeholder="Pin"
                  name="pin"
                  id=""
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                />
              </div>

              <div class="contact-button">
                <input type="button" value="Add Address" onClick={handleSubmit} />
                {/* <button ty onClick={submitData}>Add Address</button> */}
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Address;
