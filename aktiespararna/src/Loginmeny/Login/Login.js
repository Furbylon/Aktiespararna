import React, { Component } from "react";
import aktielogoo from "./img/aktielogoo.png";
import LoginStyle from "./LoginStyle.css";

const openMenu = () => {
  console.log("menu")
  document.getElementsByClassName("menu").style.display = "block";
  document.getElementById("loginDiv").style.display = "none"
}

export default class Login extends Component {
  state = {
    username: "",
    password: "",
  };
  handleEvent() 
  {}
  render() {
    return (
      <div id="loginDiv">
        <img id="logo" src={aktielogoo} alt="logo" />
        <form>
          <p>Username:</p>
          <input type="text" />
          <p>Password</p>
          <input type="password" />
          <button onClick={openMenu}>Log In</button>
          <p>Dont have an account?</p>
          <a href="www.google.com">Register now!</a>
        </form>
      </div>
    );
  }
}
