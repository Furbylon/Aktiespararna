import React from "react";
import aktielogoo from "../Login/img/aktielogoo.png";
import userData from "../../../src/data/JSON/user.json";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "../Glömt lösenord/ForgottenPassword.css";

const ForgottenPassword = (props) => {
  const checkPassword = (e) => {
    console.log(e.target.elements.email.value)
    console.log(props.email)
    e.preventDefault()
    if ((e.target.elements.email.value) === (props.email)) {
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
        <br></br>
        <input type="text" id="username" placeholder="username" required />
        <br></br>
        <label htmlFor="email">Email:</label>
        <br></br>
        <input type="text" id="email" placeholder="Email" required />
        <br></br>
        <div id="button">
        <button>Hämta lösenord</button>
        </div>
        <br></br>
      </form>
      <br></br>
      <div id="link">
        <Link to="/">Start page</Link>
      </div>
    </div>
  );
};

export default ForgottenPassword;
