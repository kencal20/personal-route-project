import React, { useState } from "react";
import { useUserAuth } from "../Context/UserAuthContext";
import { Button } from "react-bootstrap";


const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");
  const { signup } = useUserAuth();

  return (
    <>
      <form>
        <h1>Signup from</h1>
        <label>Email</label>
        <input type="email" 
        value={email}/>
        <label>Password</label>
        <input type="password"
        value={password} />
        <Button variant="primary">Submit</Button>
      </form>
    </>
  );
};

export default Signup;
