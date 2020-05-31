import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const Sidebar = () => {
    let def = 0;
    const OpenHome = () => {
        console.log("home")
        if (def !== 0) {
            document.getElementById("mySideBar").style.width = "0px";
            document.getElementById("meny").style.marginLeft = "0px";
            document.getElementById("hem").style.display = "block";
            document.getElementById("portfolio").style.display = "none";
            document.getElementById("inställningar").style.display = "none";
            document.getElementById("sidebarButton").innerHTML = "Open sidebar";
            def = 0
        }
    }
    const OpenPortfolio = () => {
        console.log("port")
        if (def !== 1) {
            document.getElementById("mySideBar").style.width = "0px";
            document.getElementById("meny").style.marginLeft = "0px";
            document.getElementById("hem").style.display = "none";
            document.getElementById("portfolio").style.display = "block";
            document.getElementById("inställningar").style.display = "none";
            document.getElementById("sidebarButton").innerHTML = "Open sidebar";
            def = 1
        }
    }
    const OpenSettings = () => {
        console.log("settings")
        if (def !== 2) {
            document.getElementById("mySideBar").style.width = "0px";
            document.getElementById("meny").style.marginLeft = "0px";
            document.getElementById("hem").style.display = "none";
            document.getElementById("portfolio").style.display = "none";
            document.getElementById("inställningar").style.display = "block";
            document.getElementById("sidebarButton").innerHTML = "Open sidebar";
            def = 2
        }
    }
  return (
    <div className = "sidebar" id= "mySideBar">
    <Tabs>
    <TabList className = "sidebarList">
            <Tab label = "HomeButton" id = "homeButton" onClick= {OpenHome}> Hem </Tab>
            <Tab label = "PortfolioButton" id = "PortfolioButton" onClick = {OpenPortfolio}>Min portfolio</Tab>
            <Tab label = "SettingsButton" id = "SettingsButton" onClick = {OpenSettings}>Inställningar</Tab>
            </TabList>
            <TabPanel>
            </TabPanel>
            <TabPanel>
            </TabPanel>
            <TabPanel>        
            </TabPanel>
            </Tabs>
            </div>
  );
};


export default Sidebar;
