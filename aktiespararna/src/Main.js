import React from "react";
import "./App.css";
import Login from "./LoginMenu/Login/Login";
import Registrering from "./LoginMenu/Registrering/Registrering";
import GlömtLösenord from "./LoginMenu/Glömt lösenord/GlömtLösenord";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Mainmenu from "./MainMenu/MainMenu";

const MissingPage = () => (
  <div>
    <Link to="/login">404- missing page</Link>
  </div>
);
const MenuPaths = () => {
  return (
    <div id="mainMenu">
      <Switch className="App">
        <Route path="/mainmenu" component={Mainmenu} />
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registrering} />
        <Route path="/forgotpassword" component={GlömtLösenord} />
        <Route component={MissingPage} />
      </Switch>
    </div>
  );
};

const Main = () => {
  return (
    <BrowserRouter>
      <MenuPaths />
    </BrowserRouter>
  );
};

export default Main;
