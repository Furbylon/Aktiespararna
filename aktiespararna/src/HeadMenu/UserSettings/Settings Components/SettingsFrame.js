import React from "react";
import "../UserSettings css/SettingsFrame.css";

import UserSettings from "../Settings Components/UserProfile"
import PasswordChange from "../Settings Components/PasswordChange"
import Preferences from "../Settings Components/Preferences"
import {Link, Route} from "react-router-dom";


const SettingsFrame = () => {
  const SettingsHead = () => {
    return(
    <div>
    <li>
      <Link to="/mainmenu/settings/profile">
        Profil
      </Link>
    </li>
    <li>
      <Link to="/mainmenu/settings/passwordchange">
        Ändra Lösenord
      </Link>
    </li>
    <li>
      <Link to="/mainmenu/settings/preferences">
        Preferenser
      </Link>
    </li>
    <Route path="/mainmenu/settings/profile" component={UserSettings}/>
    <Route path="/mainmenu/settings/passwordchange" component={PasswordChange}/>
    <Route path="/mainmenu/settings/preferences" component={Preferences}/>
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
