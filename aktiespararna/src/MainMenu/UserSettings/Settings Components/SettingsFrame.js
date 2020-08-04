import React from "react";
import "../UserSettings css/SettingsFrame.css";
import { NavLink } from "react-router-dom";
import SettingsRoutes from "./SettingsRoutes";

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
          <SettingsRoutes
            profile={props.profile}
            setProfile={props.setProfile}
            password={props.password}
            setPassword={props.setPassword}
            setPreferredIndustries={props.setPreferredIndustries}
            setRemainingIndustries={props.setRemainingIndustries}
            setTime={props.setTime}
          />
        </div>
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
