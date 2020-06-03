import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import LogoutButton from './LogoutButton'

const Sidebar = () => {
  let def = 0;
  const OpenHome = () => {
    console.log("home");
    if (def !== 0) {
      document.getElementById("mySideBar").style.width = "0px";
      document.getElementById("menu").style.marginLeft = "0px";
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
      document.getElementById("menu").style.marginLeft = "0px";
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
      document.getElementById("menu").style.marginLeft = "0px";
      document.getElementById("home").style.display = "none";
      document.getElementById("portfolio").style.display = "none";
      document.getElementById("settings").style.display = "block";
      document.getElementById("sidebarButton").innerHTML = "Open sidebar";
      def = 2;
    }
  };
  return (
    <div className="sidebar" id="mySideBar">
      <Tabs>
        <TabList className="sidebarList">
          <Tab label="HomeButton" id="homeButton" onClick={OpenHome}>
            {" "}
            Hem{" "}
          </Tab>
          <Tab
            label="PortfolioButton"
            id="PortfolioButton"
            onClick={OpenPortfolio}
          >
            Min portfolio
          </Tab>
          <Tab
            label="SettingsButton"
            id="SettingsButton"
            onClick={OpenSettings}
          >
            Inställningar
          </Tab>
        </TabList>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
      </Tabs>
      <LogoutButton/>
    </div>
  );
};


export default Sidebar;
