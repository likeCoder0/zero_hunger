import React, { useEffect } from "react";
import { useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { useUserAuth } from "../context/UserAuthContext";
import { serverTimestamp } from "firebase/firestore";

const Address = () => {
  const firebase=useUserAuth();
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pin, setPin] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    await firebase.handleCreateNewAddress(address,city,state,pin);
    alert("Address is set.")
  };

  const [TakeAddress, setTakeAddress] = useState(null);

  useEffect(() => {
    firebase.getDonorAddressById()?.then((orders) => setTakeAddress(orders.data()));
  }, []);

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
                <input type="button" disabled={address===""||city===""||state===""||pin===""} value="Add Address" onClick={handleSubmit} />
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
