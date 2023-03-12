import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { Alert, Button } from "react-bootstrap";
// import { AiFillGoogleCircle,AiFillFacebook,AiFillApple } from 'react-icons/ai';
// import { BsFacebook, } from 'react-icons/bs';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const firebase = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await firebase.logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };
  const handleGoogle = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await firebase.signinWithGoogle();
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-wrapper">
      <form action="" className="form">
        <h2>Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
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
        <h4 className="mt-1 mb-1">OR</h4>
        <Button variant="danger" onClick={handleGoogle}>
          Sigin with Google
        </Button>
        <hr></hr>
        <p>
          New User? <Link to="/signin">Start here.</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
