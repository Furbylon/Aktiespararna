import React, { Component } from "react";
import aktielogoo from "./img/aktielogoo.png";
import LoginStyle from "./LoginStyle.css";

export default class Login extends Component {
  state = {
    username: "",
    password: "",
  };
  handleEvent() {}
  render() {
    return (
      <div id="loginDiv">
        <img id="logo" src={aktielogoo} alt="logo" />
        <form>
          <p>Username:</p>
          <input type="text" />
          <p>Password</p>
          <input type="password" />
          <button>Log In</button>
          <p>Dont have an account?</p>
          <a href="www.google.com">Register now!</a>
        </form>
      </div>
    );
  }
}
