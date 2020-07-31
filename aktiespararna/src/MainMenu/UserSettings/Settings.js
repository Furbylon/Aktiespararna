import React from "react";
import SettingsFrame from "./Settings Components/SettingsFrame";
import Header from "../Components/Header";
import { Route } from "react-router-dom";

const Settings = (props) => {
  return (
    <div id="settings">
      <div id="settingsHeader">
        <Header head={"Inställningar"} />
      </div>
      <Route
        path="/mainMenu/settings"
        render={() => (
          <SettingsFrame
            password={props.password}
            setPassword={props.setPassword}
            setPreferredIndustries={props.setPreferredIndustries}
            setRemainingIndustries={props.setRemainingIndustries}
            profile={props.profile}
            setProfile={props.setProfile}
            setTime={props.setTime}
          />
        )}
      />
    </div>
  );
};
export default Settings;
