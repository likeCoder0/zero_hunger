import React from 'react'

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
    </form>
  </div>
  )
}

export default Login;