import React from "react";
import Home from "./Hem/Home";
import Portfolio from "./Min Portfolio/Portfolio";
import Settings from "./UserSettings/Settings";
import {Route} from "react-router-dom";
import SidebarButton from "../MainMenu/Components/SidebarButton";
import Sidebar from "../MainMenu/Components/SideBar";

const MainMenu = () => {
  const CompPath = () => {
    return (
      <div id = "mainMenu">
        <Sidebar />
        <SidebarButton />
        <Route path="/mainmenu/home" component={Home} />
        <Route path="/mainmenu/portfolio" component={Portfolio} />
        <Route path="/mainmenu/settings" component={Settings} />
      </div>
    );
  };

  return (
    <div>
      <CompPath />
    </div>
  );
};

export default MainMenu;
