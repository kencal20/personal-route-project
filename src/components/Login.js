import React, { Component } from "react";
import "../Main_styles.css";
import { Link } from "react-router-dom";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Username: "",
      Password: "",
    };
  }
  handlechange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
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
            onChange={this.handlechange}
          />
        </div>
        <div className="Password">
          <input
            type="password"
            placeholder="Password"
            name="Password"
            value={this.state.Password}
            onChange={this.handlechange}
          />
        </div>
        <button
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
        </button>

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
