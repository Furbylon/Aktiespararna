import React from "react";
import Home from "./Hem/Home";
import Portfolio from "./Min Portfolio/Portfolio";
import Settings from "./UserSettings/Settings";
import { Route, Switch } from "react-router-dom";
import Sidebar from "../MainMenu/Components/SideBar";

const MainMenu = (props) => {
  return (
    <div id="mainMenu">
      <Route path="/mainMenu" component={Sidebar} />
      <Route path="/mainMenu/home" component={Home} />
      <Route path="/mainMenu/portfolio" component={Portfolio} />
      <Route path="/mainMenu/settings" component={Settings} />
      <Route component={props.MissingPage}/>
    </div>
  );
};

export default MainMenu;
