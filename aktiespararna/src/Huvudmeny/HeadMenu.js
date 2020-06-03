import React from "react";
import SideBar from "./Components/SideBar";
import Hem from "./Hem/Hem";
import Settings from './UserSettings/Settings'
import Portfolio from "./Min Portfolio/Portfolio";

class Comps extends React.Component {
  render() {
    return (
      <div className= {"componentCompilation"}>
        <Hem />
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
      document.getElementById("mySideBar").style.width = "250px";
      document.getElementById("menu").style.marginLeft = "250px";
      document.getElementById("sidebarButton").innerHTML = "close";
    } else {
      document.getElementById("mySideBar").style.width = "0px";
      document.getElementById("menu").style.marginLeft = "0px";
      document.getElementById("sidebarButton").innerHTML = "Open sidebar";
    }
  };
  return (
    <div id="menu">
      <button id="sidebarButton" onClick={OpenCloseNavigation}>
        Open sidebar
      </button>
      <SideBar />
      <Comps />
    </div>
  );
};

export default HeadMenu;
