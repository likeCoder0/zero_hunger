import React from 'react'
import { AiFillGithub } from 'react-icons/ai';

const Footer = () => {
  return (
    <>
    <footer class="footer-distributed">

<div class="footer-left">

  <h3>Zero<span>Hunger</span></h3>

  <p class="footer-links">
    <a href="#" class="link-1">Home</a>
    
    <a href="#">Blog</a>
  
    {/* <a href="#">Pricing</a> */}
  
    <a href="#">About</a>
    
    <a href="#">Faq</a>
    
    <a href="#">Contact</a>
  </p>

  <p class="footer-company-name">Zero Hunger © 2022</p>
</div>

<div class="footer-center">

  <div>
    <i class="fa fa-map-marker"></i>
    <p><span>444 S. Cedros Ave</span> Solana Beach, Mumbai</p>
  </div>

  <div>
    <i class="fa fa-phone"></i>
    <p>+9196 3434 5678</p>
  </div>

  <div>
    <i class="fa fa-envelope"></i>
    <p><a href="mailto:support@company.com">support@zerohunger.com</a></p>
  </div>

</div>

<div class="footer-right">

  <p class="footer-company-about">
    <span>About us</span>
    Our website will help, to take the excess food from you, and ensure it reaches the underprivileged.
  </p>

  {/* <div class="footer-icons">

    <a href="#"><i class="fa fa-facebook"></i></a>
    <a href="#"><i class="fa fa-twitter"></i></a>
    <a href="#"><i class="fa fa-linkedin"></i></a>
    <a href="#"><i class="fa fa-github"></i></a>

  </div> */}

</div>

</footer>
    </>
  )
}

export default Footer;