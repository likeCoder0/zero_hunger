import React from 'react'
import { Link } from 'react-router-dom';
import { RiArrowRightSFill } from 'react-icons/ri';

const SignIn = () => {
  return (
    <>
    <div className="login-wrapper">
    <form action="" className="form">
      <h2>Create Account</h2>
      <div className="input-group">
        <input type="text" name="loginUser" id="loginUser" required />
        <label for="loginUser">Your name</label>
      </div>
      <div className="input-group">
        <input type="text" name="loginUser" id="loginUser" required />
        <label for="loginUser">Mobile number</label>
      </div>
      <div className="input-group">
        <input type="text" name="loginUser" id="loginUser" required />
        <label for="loginUser">Email (optional)</label>
      </div>
      <div className="input-group">
        <input
          type="password"
          name="loginPassword"
          id="loginPassword"
          required
        />
        <label for="loginPassword">Password</label>
      </div>
      <input type="submit" value="Continue" className="submit-btn" />
      <hr></hr>
      <p>Already have an account? <Link to="/login">Sign in <RiArrowRightSFill/></Link></p>
    </form>
    
  </div>
    </>
  )
}

export default SignIn;