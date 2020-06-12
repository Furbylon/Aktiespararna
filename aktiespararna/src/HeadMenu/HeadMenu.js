import React from "react";
import Home from "./Hem/Home";
import Portfolio from "./Min Portfolio/Portfolio";
import Settings from "./UserSettings/Settings";
import {BrowserRouter, Route, Switch } from "react-router-dom";
import SidebarButton from "../HeadMenu/Components/SidebarButton"
import Sidebar from "../HeadMenu/Components/SideBar"



const HeadMenu = () => {
  const CompPath = () => {
    return (
      <div>
      <Sidebar/>
      <SidebarButton/>
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

export default HeadMenu;
