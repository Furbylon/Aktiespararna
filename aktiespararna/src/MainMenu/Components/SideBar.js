import React from "react";
import LogoutButton from "./LogoutButton";

import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const closeNavigation = () => {
    document.getElementById("mySideBar").style.width = "0px";
    document.getElementById("mainMenu").style.marginLeft = "0px";
    document.getElementById("sidebarButton").innerHTML = "close";
  };
  const Routes = () => (
    <div id="sidebarButtons">
      <li>
        <NavLink
          className="sideButton"
          activeClassName="activeSideButtons"
          to="/home"
          onClick={closeNavigation}
        >
          Startsida
        </NavLink>
      </li>
      <li>
        <NavLink
          className="sideButton"
          activeClassName="activeSideButtons"
          to="/portfolio"
          onClick={closeNavigation}
        >
          Min Portfolio
        </NavLink>
      </li>
      <li>
        <NavLink
          className="sideButton"
          activeClassName="activeSideButtons"
          to="/settings/profile"
          onClick={closeNavigation}
        >
          Inställningar
        </NavLink>
      </li>
    </div>
  );

  return (
    <div id="mySideBar">
      <Routes />
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
