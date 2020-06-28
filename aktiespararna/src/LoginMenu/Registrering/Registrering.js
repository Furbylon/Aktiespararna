import React, { useState, useCallback } from "react";
import aktielogoo from "../Login/img/aktielogoo.png";
import "./RegistreringStyle.css";
import user from "../../data/JSON/user.json";

const Registration = (props) => {
  const checkAccount = (e) => {
    e.preventDefault();
    if (
      e.target.elements.password.value ===
      e.target.elements.confirmPassword.value
    ) {
      props.setUserName(e.target.elements.username.value);
      props.setPassword(e.target.elements.password.value);
      props.setEmail(e.target.elements.email.value);
      alert("created new account");
    } else {
      alert("Password does not match");
    }
  };
  return (
    <div id="registrationDiv" className="loginMenuPages">
      <img id="logo" src={aktielogoo} alt="logo" />
      <form onSubmit={checkAccount}>
        <p> Registrera ett konto</p>
        <br></br>
        <p>Username:</p>
        <input id="username" type="text" required />
        <p>email:</p>
        <input id="email" type="text" required />
        <p>Password:</p>
        <input id="password" type="password" required />
        <p>Confirm password:</p>
        <input id="confirmPassword" type="password" required />
        <br></br>
        <br></br>
        <button>Register</button>
      </form>
    </div>
  );
};
export default Registration;
