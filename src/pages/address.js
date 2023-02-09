import React from 'react'
import Navbar from './navbar';
import Footer from './footer';

const Address = () => {
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
        
      <form action="#">
        <div class="input-box">
          <input type="text" placeholder="Address"/>
        </div>

        <div class="input-box">
          <input type="text" placeholder="City"/>
        </div>

        <div class="input-box">
          <input type="text" placeholder="State"/>
        </div>

        <div class="input-box">
          <input type="text" placeholder="Pin"/>
        </div>
       
        <div class="contact-button">
          <input type="button" value="Send Now" />
        </div>
      </form>
    </div>
    </div>
  </div>
  <Footer></Footer>
    </div>
  )
}

export default Address;