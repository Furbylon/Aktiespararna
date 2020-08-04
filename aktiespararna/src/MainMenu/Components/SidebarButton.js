import React from "react";
import openCloseNavigation from "./OpenCloseNavigation"

const SidebarButton = () => {
  return (
    <button id="sidebarButton" onClick={openCloseNavigation}>
      Öppna sidofält
    </button>
  );
};
export default SidebarButton;
