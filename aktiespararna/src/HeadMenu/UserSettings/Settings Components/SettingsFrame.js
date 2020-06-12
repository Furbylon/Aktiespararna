import React from "react";
import "../UserSettings css/SettingsFrame.css";
import Profile from "./UserProfile";
import PasswordChange from "./PasswordChange";
import Preferences from "./Preferences";

import {Switch, Link} from "react-router-dom";

const SettingsFrame = () => {
  const SettingsHead = () => {
    return(
    <div>
    <li>
      <Link to="/settings/profile">
        Profil
      </Link>
    </li>
    <li>
      <Link to="/settings/passwordchange">
        Ändra Lösenord
      </Link>
    </li>
    <li>
      <Link to="/settings/preferences">
        Preferenser
      </Link>
    </li>
  </div>
  )
  }
  return (
    <div className="settingsFrame" style ={{display:"absolute"}}>
    <SettingsHead/>
    </div>
  );
};

export default SettingsFrame;
