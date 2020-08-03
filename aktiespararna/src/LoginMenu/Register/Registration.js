import React from "react";
import shareLogo from "../Login/img/aktielogoo.png";
import "./Registration.css";
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
      alert("Skapade nytt konto. Du kan nu logga in med uppgifterna");
    } else {
      alert("Lösenord matchar inte");
    }
  };
  return (
    <div id="registrationDiv" className="loginMenuPages">
      <img id="logo" src={shareLogo} alt="logo" />
      <form onSubmit={checkAccount}>
        <p> Registrera ett konto</p>
        <br />
        <p>AnvändarNamn:</p>
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
        <Link to="/">Gå tillbaka till login</Link>
      </div>
    </div>
  );
};
export default Registration;
