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
            preferredValues={props.preferredValues}
            setPreferredValues={props.setPreferredValues}
          />
        )}
      />
    </div>
  );
};
export default Settings;
