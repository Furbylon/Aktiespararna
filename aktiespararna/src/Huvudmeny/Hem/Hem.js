import React from 'react';  
import SideBar from '../Components/SideBar'

const Hem = () => {

  const OpenNavigation = (e) => {
    let sideButton = document.getElementById("sidebarButton");
    if (sideButton.innerHTML == "Open sidebar") {
      document.getElementById("mySideBar").style.width = "250px";
      document.getElementById("hem").style.marginLeft = "250px";
      document.getElementById("sidebarButton").innerHTML = "close";
    } else {
      document.getElementById("mySideBar").style.width = "0px";
      document.getElementById("hem").style.marginLeft = "0px";
      document.getElementById("sidebarButton").innerHTML = "Open sidebar";
    }
    }
    return (
      <div id = "hem">
      <button id="sidebarButton" onClick={OpenNavigation}>Open sidebar</button>
      <SideBar></SideBar>
      </div>
    );
  }

export default Hem;
