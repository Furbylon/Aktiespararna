import React from "react";

import { NavLink } from "react-router-dom";

const SidebarLinks = (props) => (
    <div id="sidebarButtons">
      <li>
        <NavLink
          className="sideButton"
          activeClassName="activeSideButtons"
          to="/mainMenu/home"
          onClick={props.closeNavigation}
        >
          Startsida
        </NavLink>
      </li>
      <li>
        <NavLink
          className="sideButton"
          activeClassName="activeSideButtons"
          to="/mainMenu/portfolio"
          onClick={props.closeNavigation}
        >
          Min Portfolio
        </NavLink>
      </li>
      <li>
        <NavLink
          className="sideButton"
          activeClassName="activeSideButtons"
          to="/mainMenu/settings/profile"
          onClick={props.closeNavigation}
        >
          Inställningar
        </NavLink>
      </li>
    </div>
  );

  export default SidebarLinks