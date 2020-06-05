import React from "react";
import LogoutButton from "./LogoutButton";

const Sidebar = () => {
  let def = 0;
  const OpenHome = () => {
    console.log("home");
    if (def !== 0) {
      document.getElementById("mySideBar").style.width = "0px";
      document.getElementById("headMenu").style.marginLeft = "0px";
      document.getElementById("home").style.display = "block";
      document.getElementById("portfolio").style.display = "none";
      document.getElementById("settings").style.display = "none";
      document.getElementById("sidebarButton").innerHTML = "Open sidebar";
      def = 0;
    }
  };
  const OpenPortfolio = () => {
    console.log("port");
    if (def !== 1) {
      document.getElementById("mySideBar").style.width = "0px";
      document.getElementById("headMenu").style.marginLeft = "0px";
      document.getElementById("home").style.display = "none";
      document.getElementById("portfolio").style.display = "block";
      document.getElementById("settings").style.display = "none";
      document.getElementById("sidebarButton").innerHTML = "Open sidebar";
      def = 1;
    }
  };
  const OpenSettings = () => {
    console.log("settings");
    if (def !== 2) {
      document.getElementById("mySideBar").style.width = "0px";
      document.getElementById("headMenu").style.marginLeft = "0px";
      document.getElementById("home").style.display = "none";
      document.getElementById("portfolio").style.display = "none";
      document.getElementById("settings").style.display = "block";
      document.getElementById("sidebarButton").innerHTML = "Open sidebar";
      def = 2;
    }
  };
  return (
    <div id="mySideBar">
      <ul id="sidebarButtons">
        <li>
          <button label="HomeButton" id="homeButton" onClick={OpenHome}>
            Hem
          </button>
        </li>
        <li>
          <button
            label="PortfolioButton"
            id="portfolioButton"
            onClick={OpenPortfolio}
          >
            Min portfolio
          </button>
        </li>
        <li>
          <button
            label="SettingsButton"
            id="settingsButton"
            onClick={OpenSettings}
          >
            Inställningar
          </button>
        </li>
      </ul>
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
