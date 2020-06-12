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
    <div>
      <li>
          <NavLink to="/mainmenu/home" onClick={closeNavigation}>Hem</NavLink>
      </li>
      <li>
          <NavLink to="/mainmenu/portfolio" onClick={closeNavigation}>Portfolio</NavLink>
      </li>
      <li>
        <NavLink to="/mainmenu/settings/profile" onClick={closeNavigation}>Settings</NavLink>
      </li>
    </div>
  );

  return (
    <div id="mySideBar">
      <ul id="sidebarButtons">
        <Routes />
      </ul>
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
