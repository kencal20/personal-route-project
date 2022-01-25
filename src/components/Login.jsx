import React, { useState } from "react";
import "../Main_styles.css";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Button, Form } from "react-bootstrap";
import { useUserAuth } from "../UserAuthContext";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");
  const [login, googleSignIn] = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    seterror("");
    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      seterror(err.message);
    }
  };

  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    try {
      googleSignIn();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="App">
        <h1>Login</h1>
        <p>Hello member</p>
        {error && <Alert variant="danger">{error}</Alert>}
        <div className="User-name">
          <input
            type="email"
            placeholder="User Name "
            name="Username"
            required
            value={this.state.Email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div className="Password">
          <input
            type="password"
            placeholder="Password"
            name="Password"
            required
            value={this.state.Password}
            onChange={(e) => setpassword(e.target.value)}
          />
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
          login
        </Button>
        <googleButton
          className="g-btn-google"
          type="dark"
          onClick={handleGoogleSignIn}
        />

        <p>New Here?</p>
        <Link to="/signup">
          <p>Signup</p>
        </Link>
      </div>
    </Form>
  );
};
export default Login;
