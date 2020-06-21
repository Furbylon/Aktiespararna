import React, { Component } from "react";
import aktielogoo from "../Login/img/aktielogoo.png";
import RegistreringStyle from "./RegistreringStyle.css";

export default class Register extends Component {
  render() {
    return (
      <div id="registrationDiv" className="loginMenuPages">
        <img id="logo" src={aktielogoo} alt="logo" />
        <form>
          <p> Register an account</p>
          <br></br>
          <p>Username:</p>
          <input type="text" />
          <p>Password:</p>
          <input type="password" />
          <p>Confirm password:</p>
          <input type="password" />
          <br></br>
          <br></br>
          <button>Register</button>
        </form>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    );
  }
}
