import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
// import { AiFillGoogleCircle,AiFillFacebook,AiFillApple } from 'react-icons/ai';
// import { BsFacebook, } from 'react-icons/bs';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-wrapper">
      <form action="" className="form">
        <h2>Login</h2>
        <div className="input-group">
          <input
            type="text"
            name="loginUser"
            id="loginUser"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label for="loginUser">User Name</label>
        </div>
        <div className="input-group">
          <input
            type="password"
            name="loginPassword"
            id="loginPassword"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label for="loginPassword">Password</label>
        </div>
        <input
          type="submit"
          value="Login"
          className="submit-btn"
          onClick={handleSubmit}
        />
        <hr></hr>
        <p>
          New User? <Link to="/signin">Start here.</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
