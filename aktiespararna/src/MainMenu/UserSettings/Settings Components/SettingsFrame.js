import React from "react";
import "../UserSettings css/SettingsFrame.css";

import UserSettings from "../Settings Components/UserProfile";
import PasswordChange from "../Settings Components/PasswordChange";
import Preferences from "../Settings Components/Preferences";
import { NavLink, Route} from "react-router-dom";

const SettingsFrame = () => {
  const SettingsHead = () => {
    return (
      <div>
      <div id = "topBarSettings">
        <NavLink to="/settings/profile" className = "topBarLinks" activeClassName="activeTopBarLinks"> Profil </NavLink>
        <NavLink to="/settings/passwordchange" className = "topBarLinks" activeClassName="activeTopBarLinks"> Ändra Lösenord </NavLink>
        <NavLink to="/settings/preferences" className = "topBarLinks" activeClassName="activeTopBarLinks"> Preferenser </NavLink>
        </div>
        <div>
        <Routes/>
        </div>
      </div>
    );
  };
  const Routes = () => {
    return(
    <div>
    <Route path="/settings/profile" component={UserSettings} />
    <Route
      path="/settings/passwordchange"
      component={PasswordChange}
    />
    <Route path="/settings/preferences" component={Preferences} />
    </div>
    )
  }
  return (
    <div className="settingsFrame" style={{ display: "absolute" }}>
      <SettingsHead/>
    </div>
  );
};

export default SettingsFrame;
