import React from "react";
import "../UserSettings css/SettingsFrame.css";
import Profile from "./UserProfile";
import PasswordChange from "./PasswordChange";
import Preferences from "./Preferences";

import { BrowserRouter, Route, Switch, Link} from "react-router-dom";

const SettingsFrame = () => {
  const SettingsHead = () => {
    return(
    <div>
    <BrowserRouter>
    <li>
      <Link to="/settings/profile" exact={true}>
        Profil
      </Link>
    </li>
    <li>
      <Link to="/settings/passwordchange" exact={true}>
        Ändra Lösenord
      </Link>
    </li>
    <li>
      <Link to="/settings/preferences" exact={true}>
        Preferenser
      </Link>
    </li>
  </BrowserRouter>
  </div>
  )
  }
  const SettingsComp = () => {
    return (
        <div>
        <Switch>
        <Route path="/settings/profile" component={Profile} exact ={true}/>
        <Route path="/settings/passwordchange" component={PasswordChange} exact= {true}/>
        <Route path="/settings/preferences" component={Preferences} exact= {true}/>
        </Switch>
        </div>
    );
  };

  return (
    <div className="settingsFrame" style ={{display:"absolute"}}>
    <SettingsHead/>
      <SettingsComp />
    </div>
  );
};

export default SettingsFrame;
