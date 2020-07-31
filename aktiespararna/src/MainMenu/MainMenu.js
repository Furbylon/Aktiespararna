import React, { useState } from "react";
import Home from "./Home/Home";
import Portfolio from "./Portfolio/Portfolio";
import Settings from "./UserSettings/Settings";
import { Route } from "react-router-dom";
import Sidebar from "../MainMenu/Components/SideBar";
import companies from "../data/JSON/mock.json";

const MainMenu = (props) => {
  let max = companies.length;
  let profilePicture;
  let firstName;
  let lastName;
  let personalNumber;
  let address;
  let postTown;
  let postNumber;
  let phoneNumber;
  let email;

  let [profile, setProfile] = useState([
    {
      profilePicture,
      firstName,
      lastName,
      personalNumber,
      address,
      postTown,
      postNumber,
      phoneNumber,
      email,
    },
  ]);
  const date = new Date();
  let [time, setTime] = useState("Inga uppdateringar har gjorts tidigare");

  let [preferredIndustries, setPreferredIndustries] = useState();
  console.log(preferredIndustries);
  let [remainingIndustries, setRemainingIndustries] = useState(
    companies.slice(0, max)
  );

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
            time={time}
          />
        )}
      />
      <Route
        path="/mainMenu/portfolio"
        render={() => <Portfolio time={time} />}
      />
      <Route
        path="/mainMenu/settings"
        render={() => (
          <Settings
            preferredIndustries={preferredIndustries}
            setPreferredIndustries={setPreferredIndustries}
            remainingIndustries={remainingIndustries}
            setRemainingIndustries={setRemainingIndustries}
            password={props.password}
            setPassword={props.setPassword}
            profile={profile}
            setProfile={setProfile}
            setTime={setTime}
          />
        )}
      />
    </div>
  );
};

export default MainMenu;
