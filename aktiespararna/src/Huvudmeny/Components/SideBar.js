import React from "react";
import LogoutButton from "./LogoutButton";

import { BrowserRouter, Link} from "react-router-dom";

const Sidebar = () => {
  const Routes = () => (
    <div>
      <BrowserRouter>
        <li>
          <Link to="/home" exact={true}>
            Hem
          </Link>
        </li>
        <li>
          <Link to="/portfolio" exact={true}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="/settings" exact={true}>
            Settings
          </Link>
        </li>
      </BrowserRouter>
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
