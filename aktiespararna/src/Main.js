import React from "react";
import "./App.css";
import Login from "./LoginMenu/Login/Login";
import Registrering from "./LoginMenu/Registrering/Registrering";
import GlömtLösenord from "./LoginMenu/Glömt lösenord/GlömtLösenord";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Mainmenu from "./MainMenu/MainMenu";

const Main = () => {
  const MissingPage = () => (
    <div>
      404 - <button><Link to="/">Missing page </Link></button>
    </div>
  );

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Login} exact={true} />
        <Route path="/registration" component={Registrering} />
        <Route path="/forgotpassword" component={GlömtLösenord} />
        <Mainmenu MissingPage= {MissingPage}/>
      </Switch>
    </BrowserRouter>
  );
};

export default Main;
