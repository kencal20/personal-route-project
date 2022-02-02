import React, { useState } from "react";
import { useUserAuth } from "../Context/UserAuthContext";
import { Button } from "react-bootstrap";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");
  const  signup  = useUserAuth();
  return (
    <>
      <form>
        <h1>Signup form</h1>
        <label>Email</label>
        <input type="email" />
        <br />
        <label>Password</label>
        <input type="password" />
        <br />
        <Button variant="primary">Submit</Button>
      </form>
    </>
  );
};

export default Signup;
