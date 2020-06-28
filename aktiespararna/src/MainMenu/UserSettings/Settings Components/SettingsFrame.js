import React from "react";
import "../UserSettings css/SettingsFrame.css";
import UserSettings from "../Settings Components/UserProfile";
import PasswordChange from "../Settings Components/PasswordChange";
import Preferences from "../Settings Components/Preferences";
import { NavLink, Route } from "react-router-dom";

const SettingsFrame = (props) => {
  const SettingsHead = () => {
    return (
      <div>
        <div id="topBarSettings">
          <NavLink
            to="/mainMenu/settings/profile"
            className="topBarLinks"
            activeClassName="activeTopBarLinks"
          >
            {" "}
            Profil{" "}
          </NavLink>
          <NavLink
            to="/mainMenu/settings/passwordchange"
            className="topBarLinks"
            activeClassName="activeTopBarLinks"
          >
            {" "}
            Ändra Lösenord{" "}
          </NavLink>
          <NavLink
            to="/mainMenu/settings/preferences"
            className="topBarLinks"
            activeClassName="activeTopBarLinks"
          >
            {" "}
            Preferenser{" "}
          </NavLink>
        </div>
        <div>
          <Routes />
        </div>
      </div>
    );
  };
  const Routes = () => {
    return (
      <div>
        <Route path="/mainMenu/settings/profile" component={UserSettings} />
        <Route
          path="/mainMenu/settings/passwordchange"
          render={() => <PasswordChange password ={props.password} setPassword={props.setPassword}/>}
        />
        <Route path="/mainMenu/settings/preferences" component={Preferences} />
      </div>
    );
  };
  return (
    <div className="settingsFrame" style={{ display: "absolute" }}>
      <SettingsHead />
    </div>
  );
};

export default SettingsFrame;
