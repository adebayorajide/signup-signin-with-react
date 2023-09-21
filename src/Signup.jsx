import React, { useState } from 'react'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faFacebook } from '@fortawesome/free-solid-svg-icons'
// import {faGoogle} from '@fortawesome/free-solid-svg-icons'
import './signup.css'
const Signup = (props) => {
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [password, setPassword] = useState('')
    const [isChecked, setIschecked] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault()
         setEmail("");
         setNumber("")
         setPassword("");
         setIschecked(false);
         console.log(email,number,password);
    }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleNumber = (e) => {
    setNumber(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleCheckBox = (e) => {
    setIschecked(e.target.checked);
    console.log(e.target.checked);
  }


  return (
    <div className="container">
      <div className="header">
        <h2>Create Account</h2>
        <p>Connect with your Friends Today!</p>
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
            placeholder="Enter your Email"
            onChange={handleEmail}
          />
        </p>
        <p>
          <label htmlFor="number" className="label">
            Mobile Number
          </label>
          <input
            type="text"
            value={number}
            name="number"
            id="number"
            placeholder="+255 | Enter your mobile number"
            onChange={handleNumber}
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

        <p className="checkbox">
          <input type="checkbox" name="terms" id="terms" checked={isChecked} onChange={handleCheckBox}/>
          <label htmlFor="terms">I agree to the terms and conditions</label>
        </p>

        <button type="submit" className="btn">
          Sign Up
        </button>
      </form>

      <div className="symbol">
        &mdash;&mdash;&mdash;&mdash;
        <span>Or Login with</span>
        &mdash;&mdash;&mdash;&mdash;
      </div>

      <section className="social_btn">
        <button type="button">
          {/* <FontAwesomeIcon icon={faFacebook} /> */}
          <img src="" alt="" />
          Facebook
        </button>
        <button type="button" className="google">
          {/* <FontAwesomeIcon icon={faGoogle} /> */}
          <img src="" alt="" />
          Google
        </button>
      </section>

      <footer>
        <p>
          Already have account?
          <a href="#" onClick={() => props.pageSwitch("login")}>
            Log In
          </a>
        </p>
      </footer>
    </div>
  );
}
export default Signup