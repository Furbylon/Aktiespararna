import React, { Component } from "react";
import Login from "./Login/Login";
import Registrering from "./Registrering/Registrering";
import GlömtLösenord from "./Glömt lösenord/GlömtLösenord";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const LoginMenu = () => {
  const LoginPaths = () => {
    return (
      <div className={"componentCompilation"}>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Registrering}/>
          <Route path="/forgotpassword" component={GlömtLösenord}/>
        </Switch>
      </div>
    );
  };

  return (
    <BrowserRouter>
      <div id="loginMenu">
        <LoginPaths />
      </div>
    </BrowserRouter>
  );
};
export default LoginMenu;
