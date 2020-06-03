import React, { Component } from "react";
import Login from "./Login/Login";
import Registrering from './Registrering/Registrering'
import GlömtLösenord from './Glömt lösenord/GlömtLösenord'
export default class LoginMenu extends Component {
  render() {
    return (
      <div id = "loginMenu" style = {{display: "none"}}>
        <Login />
        <Registrering/>
        <GlömtLösenord/>
      </div>
    );
  }
}
