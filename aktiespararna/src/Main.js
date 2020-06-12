import React from "react";
import "./App.css";
import Login from "./LoginMenu/Login/Login";
import Registrering from "./LoginMenu/Registrering/Registrering";
import GlömtLösenord from "./LoginMenu/Glömt lösenord/GlömtLösenord"
import {BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./HeadMenu/Hem/Home"
import Portfolio from "./HeadMenu/Min Portfolio/Portfolio";
import Settings from "./HeadMenu/UserSettings/Settings";
import SidebarButton from "./HeadMenu/Components/SidebarButton"
import Sidebar from "./HeadMenu/Components/SideBar"



const LoginPaths = () => {
  return (
    <div className={"componentCompilation"}>
      <Switch>
      <Route path="/login" component={Login} />
        <Route path="/registration" component={Registrering}/>
        <Route path="/forgotpassword" component={GlömtLösenord}/>
        </Switch>
        </div>
        );
      };
      const MenuPaths = () => {
        return(
          <Switch>
          <div id="headMenu">
          <Sidebar/>
          <Route path="/home" component={Home}/>
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/settings" component={Settings} />
          </div>
        </Switch>
        )
      }
     

const Main = () => {
  return (
    <BrowserRouter>
    <div className="App">
    <LoginPaths/>
    <MenuPaths/>
    </div>
    </BrowserRouter>
  );
};

export default Main;
