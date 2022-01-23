import "../Main_styles.css";
import React from "react";
import { Link } from "react-router-dom";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }
  handleSubmit(e) {
    alert('A name was submitted: ' + this.state.value);
    e.preventDefault();
  }
 
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
        <form>
          <div className="First-name">
            <input type="text" placeholder="First Name"  value={this.state.value} onChange={this.handleChange}/>
          </div>
          <div className="Other-name">
            <input type="text" placeholder="Other Name (Optional)" />
          </div>
          <div className="Last-name">
            <input type="text" placeholder="Last Name"  value={this.state.value} onChange={this.handleChange} />
          </div>
          <div className="User-name">
            <input type="text" placeholder="User Name"  value={this.state.value} onChange={this.handleChange} />
          </div>
          <div className="Email">
            <input type="text" placeholder="Email   example@hkitz.com"  value={this.state.value} onChange={this.handleChange} />
          </div>
          <div className="Password">
            <input type="password" placeholder="Password"  value={this.state.value} onChange={this.handleChange} />
            <br></br>
            <div className="Gender" />
            <h3>Sex</h3>
            <label>Male</label>
            <input type="radio"   />
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
    </form>
  );
};}

     export default Signup;
