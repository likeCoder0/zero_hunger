import React from "react";
import { useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";


const Address = () => {
      
  const [userData, setUserData] = useState({
    address: "",
    city: "",
    state: "",
    pin: "",
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
    const { address,city,state,pin} = userData;

    if (city && state && pin && address) {
      const res = fetch(
        process.env.REACT_APP_DATABASE,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            address,city,state,pin
          }),
        }
      );

      if (res) {
        setUserData({
          address: "",
    city: "",
    state: "",
    pin: "",
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
              <div class="topic">Address</div>
              <div class="text-one">Fillup all details</div>
              <div class="text-two">Enter correct Address</div>
            </div>
          </div>
          <div class="right-side">
            <div class="topic-text">Address details</div>

            <form action="#" method="POST">
              <div class="input-box">
                <input type="text" placeholder="Address" name="address"
                          id="" value={userData.address}
                          onChange={postUserData}/>
              </div>

              <div class="input-box">
                <input type="text" placeholder="City" name="city"
                          id="" value={userData.city}
                          onChange={postUserData}/>
              </div>

              <div class="input-box">
                <input type="text" placeholder="State" name="state"
                          id="" value={userData.state}
                          onChange={postUserData}/>
              </div>

              <div class="input-box">
                <input type="text" placeholder="Pin" name="pin"
                          id="" value={userData.pin}
                          onChange={postUserData}/>
              </div>

              <div class="contact-button">
                <input type="button" value="Add Address" onClick={submitData} />
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
