import React from "react";
import shareLogo from "../StartMenu css/img/aktielogoo.png";
import { Link } from "react-router-dom";
import "../StartMenu css/ForgottenPassword.css";

const ForgottenPassword = (props) => {
  const checkPassword = (e) => {
    console.log(e.target.elements.email.value);
    console.log(props.email);
    e.preventDefault();
    if (e.target.elements.email.value === props.email) {
      alert("Your Password is: " + props.password);
    } else {
      alert("No username Found");
    }
  };
  return (
    <div id="forgottenPasswordDiv" className="loginMenuPages">
      <img id="logo" src={shareLogo} alt="logo" />
      <form onSubmit={checkPassword}>
        <label htmlFor="username">Username:</label>
        <br />
        <input type="text" id="username" placeholder="username" required />
        <br />
        <label htmlFor="email">Email:</label>
        <br />
        <input type="text" id="email" placeholder="Email" required />
        <br />
        <div id="button">
          <button id="getPasswordButton">Hämta lösenord</button>
        </div>
        <br />
      </form>
      <br />
      <div id="link">
        <Link to="/">Startsida</Link>
      </div>
    </div>
  );
};

export default ForgottenPassword;
