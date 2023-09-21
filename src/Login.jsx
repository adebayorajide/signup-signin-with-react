import React, { useState } from "react";
import "./signup.css";
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIschecked] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    setIschecked(false)
    console.log(email, password);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleCheckBox = (e) => {
    setIschecked(e.target.checked);
  }

  return (
    <div className="container">
      <div className="header">
        <h2>Hello! Welcome back!</h2>
        <p>Hello again, You've been missed!</p>
      </div>

      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="email" className="label">
            Email Address
          </label>
          <input
            type="email"
            value={email}
            name="email"
            id="email"
            placeholder="rodgence@yahoo.com"
            onChange={handleEmail}
          />
        </p>
        <p>
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            value={password}
            name="password"
            id="password"
            placeholder="Enter your password"
            onChange={handlePassword}
          />
        </p>

        <p className="checkbox forgot">
          <div>
            <input type="checkbox" name="terms" id="terms" checked={isChecked} onChange={handleCheckBox} />
            <label htmlFor="terms">Remember me</label>
          </div>

          <a href="#">Forgot Password</a>
        </p>

        <button type="submit" className="btn">
          Login
        </button>
      </form>

      <div className="symbol">
        &mdash;&mdash;&mdash;&mdash;
        <span>Or Login with</span>
        &mdash;&mdash;&mdash;&mdash;
      </div>

      <section className="social_btn">
        <button type="button">
          <img src="" alt="" />
          Facebook
        </button>
        <button type="button" className="google">
          <img src="" alt="" />
          Google
        </button>
      </section>

      <footer>
        <p>
          Don't have an account?{" "}
          <a href="#" onClick={() => props.pageSwitch("signup")}>
            Sign Up
          </a>
        </p>
      </footer>
    </div>
  );
};
export default Login;
