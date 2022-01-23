import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et nunc sed
      nunc sollicitudin tempor a id diam. Etiam porttitor nulla augue, a
      venenatis tellus pretium nec. Phasellus vel ipsum quis purus eleifend
      consectetur quis sed augue. Quisque arcu ante, lobortis a dui in, suscipit
      maximus tellus. Proin lobortis odio erat, ac tristique odio finibus sit
      amet. Duis tempus mauris nec nulla iaculis, eu gravida massa dignissim.
      Aenean sit amet viverra sapien. Maecenas gravida elit at lacus tempus
      consequat vel in quam. Nullam nec augue risus.
      <br></br>
      <Link to="/signup">
        <Button
          style={{
            background: "red",
            width: "22%",
            height: "50px",
            margin: "20px",
            borderRadius: "6px",
            color: "white",
          }}
        >
          Get Started
        </Button>
      </Link>
    </div>
  );
};

export default Home;
