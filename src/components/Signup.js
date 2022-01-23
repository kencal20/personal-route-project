import "../Main_styles.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Firstname: "",
      Othername: "",
      Lastname: "",
      Username: "",
      Email: "",
      Password: "",
      Gender: "",
    };
  }
  handlechange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.setstate = {
      Firstname: "",
      Othername: "",
      Lastname: "",
      Username: "",
      Email: "",
      Password: "",
      Gender: "",
    };
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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
              <input
                name="name"
                type="text"
                placeholder="First Name"
                value={this.state.Firstname}
                onChange={this.handlechange}
              />
            </div>
            <div className="Other-name">
              <input
                type="text"
                placeholder="Other Name (Optional)"
                value={this.state.Othername}
                onChange={this.handlechange}
              />
            </div>
            <div className="Last-name">
              <input
                type="text"
                placeholder="Last Name"
                value={this.state.Lastname}
                onChange={this.handlechange}
              />
            </div>
            <div className="User-name">
              <input
                type="text"
                placeholder="User Name"
                value={this.state.Username}
                onChange={this.handlechange}
              />
            </div>
            <div className="Email">
              <input
                type="text"
                placeholder="Email    example@hkitz.com"
                onChange={this.handlechange}
                value={this.state.Email}
              />
            </div>

            <div className="Password">
              <input
                type="password"
                placeholder="Password"
                value={this.state.Password}
                onChange={this.handlechange}
              />
              <br></br>
              <div className="Gender" />
              <h3>Sex</h3>
              <label>Male</label>
              <input
                type="radio"
                value={this.state.Gender}
                onChange={this.handlechange}
              />
              <label>Female</label>
              <input
                type="radio"
                value={this.state.Gender}
                onChange={this.handlechange}
              />
            </div>
            <input type="reset" />
            <input type="submit" />
            <p>Already a member?</p>
            <Link to="/login">
              <p>Login</p>
            </Link>
          </div>
        </div>
      </form>
    );
  }
}

export default Signup;
