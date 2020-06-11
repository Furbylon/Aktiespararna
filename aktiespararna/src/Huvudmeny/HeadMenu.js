import React from "react";
import SideBar from "./Components/SideBar";
import Home from "./Hem/Home";
import Portfolio from "./Min Portfolio/Portfolio";
import Settings from "./UserSettings/Settings";

import { BrowserRouter, Route, Switch, Link} from "react-router-dom";

const HeadMenu = () => {

  const MissingPage = () => {
    return(
    <div>
    404 - <Link to="/home">Go home</Link>
    </div>
    )
  }
  const CompPath = () => {
    return (
      <div className={"componentCompilation"}>
      <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/settings" component={Settings} />
          <Route component={MissingPage} />
          </Switch>
      </div>
    );
  };

  const openCloseNavigation = () => {
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
  
  const SidebarButton = () => {
    return (
      <button id="sidebarButton" onClick={openCloseNavigation}>
        Open sidebar
      </button>
    );
  };

  return (
    <BrowserRouter>
      <div id="headMenu">
        <SidebarButton/>        
        <SideBar />
        <CompPath />
      </div>
    </BrowserRouter>
  );
};

export default HeadMenu;
