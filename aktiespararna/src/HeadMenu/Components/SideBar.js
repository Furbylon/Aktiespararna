import React from "react";
import LogoutButton from "./LogoutButton";

import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const Routes = () => (
    <div>
    <li>
      <NavLink to="/home">Hem</NavLink>
      </li>
      <li>
      <NavLink to="/portfolio">Portfolio</NavLink>
      </li>
      <li>
      <NavLink to="/settings/profile">Settings</NavLink>
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
