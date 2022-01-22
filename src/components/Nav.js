
import React from "react";
import { Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <Navbar style={{ backgroundColor: `black`, paddingLeft: `900px` }}>
        <Link to="/">
          <Button variant="outline-success">Home </Button>
        </Link>
        <Link to="/signup">
          {" "}
          <Button variant="outline-success">Signup </Button>{" "}
        </Link>
        <Link to="/login">
          {" "}
          <Button variant="outline-success">Login </Button>{" "}
        </Link>
        <Link to="/contacts">
          {" "}
          <Button variant="outline-success">Contacts </Button>{" "}
        </Link>
      </Navbar>
    </div>
  );
};

export default Nav;