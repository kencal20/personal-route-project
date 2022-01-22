import "../Main_styles.css";
import React from "react";


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
        <div className="input">
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
          </div>
          <input type="reset" />
          <input type="submit"/>
         
        </div>
      </div>
    </>
  );
}

export default Signup;
