import React from "react";
import { Button } from "react-bootstrap";

const Login = () => {
  return (
    <>
      <form>
        <h1>Signup form</h1>
        <label>Email</label>
        <input type="email" />
        <br />
        <label>Password</label>
        <input type="password" /><br/>
        <Button variant="primary">Submit</Button>
      </form>
    </>
  );
};

export default Login;
