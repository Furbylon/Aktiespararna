import React from "react";
import LogoutButton from "./LogoutButton";

import {Link, Switch} from "react-router-dom";

const Sidebar = () => {
  const Routes = () => (
    <div>
      <Switch>
      <button>
               <Link to="/home">
            Hem
          </Link>
          </button>
          <button>
          <Link to="/portfolio">
            Portfolio
          </Link>
          </button>
          <button>
          <Link to="/settings/profile">
            Settings
          </Link>
          </button>
          </Switch>
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
