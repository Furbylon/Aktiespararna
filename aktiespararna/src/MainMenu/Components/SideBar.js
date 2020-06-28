import React from "react";
import LogoutButton from "./LogoutButton";
import SidebarButton from "./SidebarButton"

import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const closeNavigation = () => {
    document.getElementById("mySideBar").style.width = "0px";
    document.getElementById("mainMenu").style.marginLeft = "0px";
    document.getElementById("sidebarButton").innerHTML = "Open sidebar";
  };
  const Routes = () => (
    <div id="sidebarButtons">
      <li>
        <NavLink
          className="sideButton"
          activeClassName="activeSideButtons"
          to="/mainMenu/home"
          onClick={closeNavigation}
        >
          Startsida
        </NavLink>
      </li>
      <li>
        <NavLink
          className="sideButton"
          activeClassName="activeSideButtons"
          to="/mainMenu/portfolio"
          onClick={closeNavigation}
        >
          Min Portfolio
        </NavLink>
      </li>
      <li>
        <NavLink
          className="sideButton"
          activeClassName="activeSideButtons"
          to="/mainMenu/settings/profile"
          onClick={closeNavigation}
        >
          Inställningar
        </NavLink>
      </li>
    </div>
  );

  return (
    <div>
    <div id="mySideBar">
      <Routes />
      <LogoutButton />
    </div>
    <SidebarButton/>
    </div>
  );
};

export default Sidebar;
