import React from 'react';
import "../Main_styles.css"
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className='App'>
          <h1>Login</h1>
          <p>Hello member</p>
            <div className="User-name">
            <input type="text" placeholder="User Name " />
          </div>
          <div className="Password">
            <input type="password" placeholder="Password" />
            <p>New Here?</p>
            <Link to="/signup">
            <button type="button">Signup</button>
          </Link>
          </div>
        </div>
    );
}

export default Login;
