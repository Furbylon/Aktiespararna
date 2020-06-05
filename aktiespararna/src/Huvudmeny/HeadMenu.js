import React from "react";
import SideBar from "./Components/SideBar";
import Home from "./Hem/Home";
import Settings from './UserSettings/Settings'
import Portfolio from "./Min Portfolio/Portfolio";

class Comps extends React.Component {
  render() {
    return (
      <div className= {"componentCompilation"}>
        <Home />
        <Portfolio />
        <Settings />
      </div>
    );
  }
}
const HeadMenu = () => {
  const OpenCloseNavigation = (e) => {
    let sideButton = document.getElementById("sidebarButton");
    if (sideButton.innerHTML === "Open sidebar") {
      document.getElementById("mySideBar").style.width = "150px";
      document.getElementById("headMenu").style.marginLeft = "150px";
      document.getElementById("sidebarButton").innerHTML = "close";
    } else {
      document.getElementById("mySideBar").style.width = "0px";
      document.getElementById("headMenu").style.marginLeft = "0px";
      document.getElementById("sidebarButton").innerHTML = "Open sidebar";
    }
  };
  return (
    <div id="headMenu">
      <button id="sidebarButton" onClick={OpenCloseNavigation}>
        Open sidebar
      </button>
      <SideBar />
      <Comps />
    </div>
  );
};

export default HeadMenu;
