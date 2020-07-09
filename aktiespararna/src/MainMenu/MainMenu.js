import React, { useState } from "react";
import Home from "./Home/Home";
import Portfolio from "./Portfolio/Portfolio";
import Settings from "./UserSettings/Settings";
import { Route } from "react-router-dom";
import Sidebar from "../MainMenu/Components/SideBar";
import data from "../data/JSON/profil.json";
import companies from "../data/JSON/mock.json";

const MainMenu = (props) => {
  let max = companies.length;
  let [preferredIndustries, setPreferredIndustries] = useState(companies.slice(0, 4));
  let [profile, setProfile] = useState(data.slice(0, 1));
  let [remainingIndustries, setRemainingIndustries] = useState(companies.slice(5, max));

  console.log(preferredIndustries);
  return (
    <div id="mainMenu">
      <Route path="/mainMenu" component={Sidebar} />
      <Route
        path="/mainMenu/home"
        render={() => (
          <Home
            profile={profile}
            preferredIndustries={preferredIndustries}
            remainingIndustries={remainingIndustries}
          />
        )}
      />
      <Route path="/mainMenu/portfolio" component={Portfolio} />
      <Route
        path="/mainMenu/settings"
        render={() => (
          <Settings
            profile={profile}
            setProfile={setProfile}
            preferredIndustries={preferredIndustries}
            setPreferredIndustries={setPreferredIndustries}
            remainingIndustries={remainingIndustries}
            setRemainingIndustries={setRemainingIndustries}
            password={props.password}
            setPassword={props.setPassword}
          />
        )}
      />
    </div>
  );
};

export default MainMenu;
