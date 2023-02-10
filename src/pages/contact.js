import React from 'react'
import { useState } from 'react';
import Footer from './footer';
import Navbar from './navbar';

const Contact = () => {
  const [userData, setUserData] = useState({
    Name: "",
    Email: "",
    Message: "",
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
    const { Name,Email,Message} = userData;

    if (Name && Email && Message) {
      const res = fetch(
        process.env.REACT_APP_DATABASE,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Name,Email,Message
          }),
        }
      );

      if (res) {
        setUserData({
          Name: "",
    Email: "",
    Message: "",
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
    
    <>
    <Navbar></Navbar>
    <div class="contact-container">
    <div class="contact-content">
      <div class="left-side">
        <div class="address details">
          <i class="fas fa-map-marker-alt"></i>
          <div class="topic">Address</div>
          <div class="text-one">444 S. Cedros Ave</div>
          <div class="text-two">Solana Beach, Mumbai</div>
        </div>
        <div class="phone details">
          <i class="fas fa-phone-alt"></i>
          <div class="topic">Phone</div>
          <div class="text-one">+9198 9893 5647</div>
          <div class="text-two">+9196 3434 5678</div>
        </div>
        <div class="email details">
          <i class="fas fa-envelope"></i>
          <div class="topic">Email</div>
          <div class="text-one">support@zerohunger.com</div>
          {/* <div class="text-two">info.codinglab@gmail.com</div> */}
        </div>
      </div>
      <div class="right-side">
        <div class="topic-text">Send us a message</div>
        <p>If you have any work from me or any types of quries related to Services, you can send me message from here. It's my pleasure to help you.</p>
      <form action="#" method="POST">
        <div class="input-box">
          <input type="text" placeholder="Enter your name" name='Name' id='' onChange={postUserData}/>
        </div>
        <div class="input-box">
          <input type="text" placeholder="Enter your email" name='Email' id='' onChange={postUserData}/>
        </div>
        <div class="input-box message-box">
        <input type="text" placeholder="Enter your message" name='Message' id='' onChange={postUserData}/>
        </div>
        <div class="contact-button">
          <input type="button" value="Send Now" onClick={submitData}/>
        </div>
      </form>
    </div>
    </div>
  </div>
  <Footer></Footer>
    </>
  )
}

export default Contact;