import "../Main_styles.css";
import React, { useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button,Alert } from "react-bootstrap";
import {useUserAuth} from "../UserAuthContext"
  const Signup = () =>  {
   
     const [email, setemail] = useState("");
     const [error, seterror] = useState("");
     const [password, setpassword] = useState("");
     
     const {signup} = useUserAuth()

     let navigate = useNavigate()

     const handleSubmit = async (e) => {
       e.preventDefault()
       seterror("")
       try{
         await signup(email,password)
         navigate("/")
       }catch (err) {
         seterror(err.message)
       }
     }
   
   
    return (
      <Form onSubmit={handleSubmit}>
        {error &&<Alert veriant="danger">{error}</Alert>}
        <div className="App">
          <div className="Title">
            <h1>SIGNUP</h1>
            <p>Welcome, fill the blanks to get an Account for free</p>
          </div>
          <div className="Sub_title">
            <h4>Welcome to the time buying App</h4>
          </div>

          <div className="Email">
            <input
              name="Email"
              type="email"
              placeholder="Email    example@hkitz.com"
              required
              onChange={(e)=>setemail(e.target.value)}
              value={this.state.Email}
            />
          </div>

          <div className="Password">
            <input
              name="Password"
              type="password"
              placeholder="Password"
              required
              value={this.state.Password}
              onChange={(e)=>setpassword(e.target.value)}
            />
            <br></br>
          </div>

          <Button
            type="submit"
            style={{
              background: "dodgerblue",
              width: "10%",
              height: "30px",
              margin: "20px",
              border: ["1px", "dodgerblue", "solid"],
              borderRadius: "6px",
              color: "white",
            }}
          >
            Signup
          </Button>
          <p>Already a member?</p>
          <Link to="/login">
            <p>Login</p>
          </Link>
        </div>
      </Form>
    );

}

export default Signup;
