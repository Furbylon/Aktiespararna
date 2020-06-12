import React from "react";
import "./App.css";
import Login from "./LoginMenu/Login/Login";
import Registrering from "./LoginMenu/Registrering/Registrering";
import GlömtLösenord from "./LoginMenu/Glömt lösenord/GlömtLösenord"
import {BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./HeadMenu/Hem/Home"
import Portfolio from "./HeadMenu/Min Portfolio/Portfolio";
import Settings from "./HeadMenu/UserSettings/Settings";
import Sidebar from "./HeadMenu/Components/SideBar"
import Profile from "./HeadMenu/UserSettings/Settings Components/UserProfile";
import PasswordChange from "./HeadMenu/UserSettings/Settings Components/PasswordChange";
import Preferences from "./HeadMenu/UserSettings/Settings Components/Preferences";



const LoginPaths = () => {
  return (
    <div className={"componentCompilation"}>
      <Route path="/login" component={Login} />
        <Route path="/registration" component={Registrering}/>
        <Route path="/forgotpassword" component={GlömtLösenord}/>
        </div>
        );
      };
      const MenuPaths = () => {
        return(
          <div id="headMenu">
          <Sidebar/>
          <Route path="/home" component={Home}/>
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/settings" component={Settings} />
          <Route path="/settings/profile" component={Profile}/>
          <Route path="/settings/passwordchange" component={PasswordChange}/>
          <Route path="/settings/preferences" component={Preferences}/>
          </div>
        )
      }
     

const Main = () => {
  return (
    <BrowserRouter>
    <Switch>
    <div className="App">
    <LoginPaths/>
    <MenuPaths/>
    </div>
    </Switch>
    </BrowserRouter>
  );
};

export default Main;
