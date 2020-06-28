import React from "react";
import aktielogoo from "../Login/img/aktielogoo.png";
import { Link } from "react-router-dom";
import "./ForgottenPassword.css";

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
      <img id="logo" src={aktielogoo} alt="logo" />
      <form onSubmit={checkPassword}>
        <p htmlFor="username">Username:</p>
        <br />
        <input type="text" id="username" placeholder="username" required />
        <br />
        <label htmlFor="email">Email:</label>
        <br />
        <input type="text" id="email" placeholder="Email" required />
        <br />
        <div id="button">
          <button>Hämta lösenord</button>
        </div>
        <br />
      </form>
      <br />
      <div id="link">
        <Link to="/">Start page</Link>
      </div>
    </div>
  );
};

export default ForgottenPassword;
