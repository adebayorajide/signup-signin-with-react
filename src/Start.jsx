import React, {useState} from "react";
import './start.css';
const Start = (props) => {
  return (
    <div className="start_container">
      <section className="get">
        <h1>
          Let's Get <br /> Started
        </h1>
        <p>
          Connect with each other while chatting or <br /> calling. Enjoy safe
          and private texting
        </p>

        <button type="button" onClick={() => props.pageSwitch("signup")}>
          Join Now
        </button>
      </section>
      <footer className="foot">
        <p>
          Already have an account?{" "}
          <a href="#" onClick={() => props.pageSwitch("login")}>
            Log In
          </a>
        </p>
      </footer>
    </div>
  );
}
export default Start