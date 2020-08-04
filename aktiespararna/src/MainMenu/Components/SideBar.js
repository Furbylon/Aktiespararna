import React from "react";
import LogoutButton from "./LogoutButton";
import SidebarButton from "./SidebarButton";
import SidebarLinks from "./SidebarLinks"
import closeNavigation from "./CloseNavigation"

const Sidebar = () => {

  return (
    <div>
      <div id="mySideBar">
        <SidebarLinks closeNavigation={closeNavigation}/>
        <LogoutButton />
      </div>
      <SidebarButton />
    </div>
  );
};

export default Sidebar;
