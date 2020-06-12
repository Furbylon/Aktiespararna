import React from "react";
import "./App.css";
import Login from "./LoginMenu/Login/Login";
import Registrering from "./LoginMenu/Registrering/Registrering";
import GlömtLösenord from "./LoginMenu/Glömt lösenord/GlömtLösenord"
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";
import Home from "./MainMenu/Hem/Home";
import Portfolio from "./MainMenu/Min Portfolio/Portfolio";
import Settings from "./MainMenu/UserSettings/Settings";
import Sidebar from "./MainMenu/Components/SideBar";
import Mainmenu from "./MainMenu/MainMenu"


      const MissingPage = () => <div><Link to ="/login">404- missing page</Link></div>;
      const MenuPaths = () => {
        return (
          <div id="mainMenu">
            <Route path="/mainmenu" component={Mainmenu} />
            <Route path="/login" component={Login} />
            <Route path="/registration" component={Registrering}/>
            <Route path="/forgotpassword" component={GlömtLösenord}/>
          </div>
        );
      };

const Main = () => {
  return (
    <BrowserRouter>
    <Switch className="App">
    <MenuPaths/>
    <Route component={MissingPage} />
    </Switch>
    </BrowserRouter>

  );
};

export default Main;
