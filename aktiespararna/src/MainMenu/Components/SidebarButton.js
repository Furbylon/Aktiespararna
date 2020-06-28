import React from "react";

const SidebarButton = () => {
  const openCloseNavigation = () => {
    if (document.getElementById("sidebarButton").innerHTML === "Open sidebar") {
      document.getElementById("mySideBar").style.width = "150px";
      document.getElementById("mainMenu").style.marginLeft = "150px";
      document.getElementById("sidebarButton").innerHTML = "Close";
    } else {
      document.getElementById("mySideBar").style.width = "0px";
      document.getElementById("mainMenu").style.marginLeft = "0px";
    }
  };
  return (
    <button id="sidebarButton" onClick={openCloseNavigation}>
      Open sidebar
    </button>
  );
};
export default SidebarButton;
