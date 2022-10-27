import React from 'react'
import { Link } from 'react-router-dom';
// import { AiFillGoogleCircle,AiFillFacebook,AiFillApple } from 'react-icons/ai';
// import { BsFacebook, } from 'react-icons/bs';

const Login = () => {
  return (
    <div className="login-wrapper">
    <form action="" className="form">
      <h2>Login</h2>
      <div className="input-group">
        <input type="text" name="loginUser" id="loginUser" required />
        <label for="loginUser">User Name</label>
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
      <input type="submit" value="Login" className="submit-btn" />
      <hr></hr>
      <p>New Donor? <Link to="/signin">Start here.</Link></p>
    </form>
    
  </div>
  )
}

export default Login;