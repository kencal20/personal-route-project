import React from "react";
import {
  BrowserRouter as AppRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Nav from "./components/Nav";
import Login from "./components/Login";
import Contacts from "./components/Contacts";

export default function Router() {
  return (
    <AppRouter>
      <Nav>
        <ul>
          <li>
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>

          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </Nav>
      <Routes>
        <Route path="/signup" element={<Signup />} />

        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Home />} />
        <Route path="contacts" element={<Contacts />} />
      </Routes>
    </AppRouter>
  );
}
