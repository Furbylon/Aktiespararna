import React from "react";
import {Route} from "react-router-dom";
import UserSettings from "./UpdateProfile";
import PasswordChange from "./PasswordChange";
import Preferences from "./Preferences";

const SettingsRoutes = (props) => {
    return (
      <div>
        <Route
          path="/mainMenu/settings/profile"
          render={() => (
            <UserSettings
              profile={props.profile}
              setProfile={props.setProfile}
            />
          )}
        />
        <Route
          path="/mainMenu/settings/passwordchange"
          render={() => (
            <PasswordChange
              password={props.password}
              setPassword={props.setPassword}
            />
          )}
        />
        <Route
          path="/mainMenu/settings/preferences"
          render={() => (
            <Preferences
              setPreferredIndustries={props.setPreferredIndustries}
              setRemainingIndustries={props.setRemainingIndustries}
              setTime={props.setTime}
            />
          )}
        />
      </div>
    );
  };
  
  export default SettingsRoutes;
