import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const Home = () => {

// const {logOut} = useUserAuth()

// const navigate= useNavigate()
// const handleLogout = async ()=>{
//   try{
//     await logOut()
//     navigate("/login")
//   }catch(error) {
//     console.log(error.message)
//   }
// }

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
      {/* <Button variant="primary" onClick={handleLogout}>LogOut</Button> */}
    </div>
  );
};

export default Home;
