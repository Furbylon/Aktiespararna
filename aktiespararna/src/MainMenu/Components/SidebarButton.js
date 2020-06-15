import React from "react";

const SidebarButton = () => {

    return (
      <button id="sidebarButton" onClick={openCloseNavigation}>
        Open sidebar
      </button>
    );
  };
  
  const openCloseNavigation = () => {
    let sidebarButton = document.getElementById("sidebarButton");
    if (sidebarButton.innerHTML === "Open sidebar") {
      document.getElementById("mySideBar").style.width = "150px";
      document.getElementById("mainMenu").style.marginLeft = "150px";
      document.getElementById("sidebarButton").innerHTML = "close";
    } else {
      document.getElementById("mySideBar").style.width = "0px";
      document.getElementById("mainMenu").style.marginLeft = "0px";
      document.getElementById("sidebarButton").innerHTML = "Open sidebar";
    }
  };
  export default SidebarButton;
