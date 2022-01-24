import React, { Component } from "react";
import "../Main_styles.css";
import { Link } from "react-router-dom";
import {Button } from "react-bootstrap";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Username: "",
      Password: "",
    };
  }
  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
   
  };
  handleSubmit = (e) => {
    e.preventDefault();
    
    this.setstate = {
      Username: "",
      Password: "",
    };
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="App">
          <h1>Login</h1>
          <p>Hello member</p>
          <div className="User-name">
            <input
              type="text"
              placeholder="User Name "
              name="Username"
              value={this.state.Username}
              onChange={this.handleChange}
            />
          </div>
          <div className="Password">
            <input
              type="password"
              placeholder="Password"
              name="Password"
              value={this.state.Password}
              onChange={this.handleChange}
            />
          </div>
          <Button type="submit"
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
            login 
          </Button>

          <p>New Here?</p>
          <Link to="/signup">
            <p>Signup</p>
          </Link>
        </div>
      </form>
    );
  }
}
export default Login;
