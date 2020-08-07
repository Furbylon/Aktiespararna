import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home/Home";
import Portfolio from "./Portfolio/Portfolio";
import Settings from "./UserSettings/Settings";
import Sidebar from "../MainMenu/Components/SideBar";



let MainMenuRoutes = (props) => {
  return (
    <div id="mainMenu">
      <Route path="/mainMenu" component={Sidebar} />
      <Route
        path="/mainMenu/home"
        render={() => (
          <Home
            profile={props.profile}
            preferredIndustries={props.preferredIndustries}
            remainingIndustries={props.remainingIndustries}
            time={props.time}
          />
        )}
      />
      <Route
        path="/mainMenu/portfolio"
        render={() => <Portfolio time={props.time} />}
      />
      <Route
        path="/mainMenu/settings"
        render={() => (
          <Settings
            preferredIndustries={props.preferredIndustries}
            setPreferredIndustries={props.setPreferredIndustries}
            remainingIndustries={props.remainingIndustries}
            setRemainingIndustries={props.setRemainingIndustries}
            password={props.password}
            setPassword={props.setPassword}
            profile={props.profile}
            setProfile={props.setProfile}
            setTime={props.setTime}
          />
        )}
      />
    </div>
  );
};

export default MainMenuRoutes
