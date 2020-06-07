import React from "react";
import LogoutButton from "./LogoutButton";

const Sidebar = () => {
  const OpenHome = () => {
    console.log("home");
    if (document.getElementById("home") !== "block") {
      document.getElementById("mySideBar").style.width = "0px";
      document.getElementById("headMenu").style.marginLeft = "0px";
      document.getElementById("home").style.display = "block";
      document.getElementById("portfolio").style.display = "none";
      document.getElementById("settings").style.display = "none";
      document.getElementById("sidebarButton").innerHTML = "Open sidebar";
    }
  };
  const OpenPortfolio = () => {
    console.log("port");
    if (document.getElementById("portfolio") !== "block") {
      document.getElementById("mySideBar").style.width = "0px";
      document.getElementById("headMenu").style.marginLeft = "0px";
      document.getElementById("home").style.display = "none";
      document.getElementById("portfolio").style.display = "block";
      document.getElementById("settings").style.display = "none";
      document.getElementById("sidebarButton").innerHTML = "Open sidebar";
    }
  };
  const OpenSettings = () => {
    console.log("settings");
    if (document.getElementById("settings") !== "block") {
      document.getElementById("mySideBar").style.width = "0px";
      document.getElementById("headMenu").style.marginLeft = "0px";
      document.getElementById("home").style.display = "none";
      document.getElementById("portfolio").style.display = "none";
      document.getElementById("settings").style.display = "block";
      document.getElementById("userProfile").style.display = "block";
      document.getElementById("passwordChange").style.display = "none";
      document.getElementById("preferences").style.display = "none";
      document.getElementById("sidebarButton").innerHTML = "Open sidebar";
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
