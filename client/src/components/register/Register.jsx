import React from "react";
import "./register.css";

function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Olaish</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Olaish
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />

            <input placeholder="Password Again" className="loginInput" />

            <button className="loginBtn">Sign Up</button>
            <button className="loginRegistration">Log In</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
