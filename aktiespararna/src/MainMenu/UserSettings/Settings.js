import React from "react";
import SettingsFrame from "./Settings Components/SettingsFrame";
import Header from "../Components/Header";
import { Route } from "react-router-dom";

const Settings = () => {
  return (
    <div id="settings">
      <div id="settingsHeader">
        <Header head={"Inställningar"} />
      </div>
      <Route path="/mainMenu/settings" component={SettingsFrame} />
    </div>
  );
};
export default Settings;
