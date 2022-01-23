import "../Main_styles.css";
import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <>
      <div className="App">
        <div className="Title">
          <h1>SIGNUP</h1>
          <p>Welcome, fill the blanks to get an Account for free</p>
        </div>
        <div className="Sub_title">
          <h4>Welcome to the time buying App</h4>
        </div>
        <form>
          <div className="First-name">
            <input type="text" placeholder="First Name" />
          </div>
          <div className="Other-name">
            <input type="text" placeholder="Other Name (Optional)" />
          </div>
          <div className="Last-name">
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="User-name">
            <input type="text" placeholder="User Name" />
          </div>
          <div className="Email">
            <input type="text" placeholder="Email    example@hkitz.com" />
          </div>
          <div className="Password">
            <input type="password" placeholder="Password" />
            <br></br>
            <div className="Gender" />
            <h3>Sex</h3>
            <label>Male</label>
            <input type="radio" />
            <label>Female</label>
            <input type="radio" />
          </div>
          <input type="reset" />
          <input type="submit" />
        </form>
        <p>Already a member?</p>
        <Link to="/login">
          <p>Login</p>
        </Link>
      </div>
    </>
  );
}

export default Signup;
