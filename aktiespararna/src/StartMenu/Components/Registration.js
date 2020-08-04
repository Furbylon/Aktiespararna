import React from "react";
import shareLogo from "../StartMenu css/img/aktielogoo.png";
import "../StartMenu css/Registration.css";
import { Link } from "react-router-dom";

const Registration = (props) => {
  const checkAccount = (e) => {
    e.preventDefault();
    if (
      e.target.elements.password.value ===
      e.target.elements.confirmPassword.value
    ) {
      props.setUsername(e.target.elements.username.value);
      props.setPassword(e.target.elements.password.value);
      props.setEmail(e.target.elements.email.value);
      alert("Nytt konto skapat. Du kan nu logga in med dina användaruppgifter");
    } else {
      alert("Lösernord matchar inte, försök igen.");
    }
  };
  return (
    <div id="registrationDiv" className="loginMenuPages">
      <img id="logo" src={shareLogo} alt="logo" />
      <form onSubmit={checkAccount}>
        <p> Registrera ett konto</p>
        <br />
        <p>Användarnamn:</p>
        <input id="username" type="text" required />
        <p>Mail:</p>
        <input id="email" type="text" required />
        <p>Lösenord:</p>
        <input id="password" type="password" required />
        <p>Bekräfta Lösenord:</p>
        <input id="confirmPassword" type="password" required />
        <br />
        <br />
        <button id="registrationButton">Registrera</button>
      </form>
      <div id="link">
        <Link to="/">Startsida</Link>
      </div>
    </div>
  );
};
export default Registration;
