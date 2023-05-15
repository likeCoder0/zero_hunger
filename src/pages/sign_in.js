import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiArrowRightSFill } from "react-icons/ri";
import { useUserAuth } from "../context/UserAuthContext";
import { Alert } from "react-bootstrap";

const SignIn = () => {
  const firebase=useUserAuth();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <>
      <div className="login-wrapper">
        <form action="" className="form">
          <h2>Create Account</h2>

          {error && <Alert variant="danger">{error}</Alert>}
          <div className="input-group">
            <input
              type="text"
              name="loginUser"
              id="loginUser"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              required
            />
            <label for="loginUser">Your name</label>
          </div>
          <div className="input-group">
            <input
              type="text"
              name="loginUser"
              id="loginUser"
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
              required
            />
            <label for="loginUser">Mobile number</label>
          </div>
          <div className="input-group">
            <input
              type="text"
              name="loginUser"
              id="loginUser"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label for="loginUser">Email</label>
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
            value="Continue"
            className="submit-btn"
            onClick={handleSubmit}
          />
          <hr></hr>
          <p>
            Already have an account?{" "}
            <Link to="/">
              Sign in <RiArrowRightSFill />
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignIn;
