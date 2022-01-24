import "../Main_styles.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Form,Button} from "react-bootstrap"
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
    };
  }
  handlechange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted", this.state);
    this.setstate = {
      Firstname: "",
      Othername: "",
      Lastname: "",
      Username: "",
      Email: "",
      Password: "",
    };
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
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
                name="Firstname"
                type="text"
                placeholder="First Name"
                required
                value={this.state.Firstname}
                onChange={this.handlechange}
              />
            </div>
            <div className="Other-name">
              <input
                name="Othername"
                type="text"
                placeholder="Other Name (Optional)"
                value={this.state.Othername}
                onChange={this.handlechange}
              />
            </div>
            <div className="Last-name">
              <input
                name="Lastname"
                type="text"
                placeholder="Last Name"
                required
                value={this.state.Lastname}
                onChange={this.handlechange}
              />
            </div>
            <div className="User-name">
              <input
                name="Username"
                type="text"
                placeholder="User Name"
                required
                value={this.state.Username}
                onChange={this.handlechange}
              />
            </div>
            <div className="Email">
              <input
                name="Email"
                type="email"
                placeholder="Email    example@hkitz.com"
                required
                onChange={this.handlechange}
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
                onChange={this.handlechange}
              />
              <br></br>
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
            Signup
          </Button>
        <p>Already a member?</p>
        <Link to="/login">
          <p>Login</p>
        </Link>
        </div>
        </div>
      </Form>
    );
  }
}
/*
const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};
const mapDispatchtoProps = {
  addNewUser: addUser,
};
export default connect(mapStateToProps, mapDispatchtoProps)(Form);*/
