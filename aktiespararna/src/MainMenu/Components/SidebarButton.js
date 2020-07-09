import React from "react";

const SidebarButton = () => {
  const openCloseNavigation = () => {
    if (document.getElementById("sidebarButton").innerHTML === "Öppna sidofält") {
      document.getElementById("mySideBar").style.width = "150px";
      document.getElementById("mainMenu").style.marginLeft = "150px";
      document.getElementById("sidebarButton").innerHTML = "Stäng";
    } else {
      document.getElementById("mySideBar").style.width = "0px";
      document.getElementById("mainMenu").style.marginLeft = "0px";
      document.getElementById("sidebarButton").innerHTML = "Öppna sidofält";

    }
  };
  return (
    <button id="sidebarButton" onClick={openCloseNavigation}>
      Öppna sidofält
    </button>
  );
};
export default SidebarButton;
