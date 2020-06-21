import React from 'react';  
import SettingsFrame from './Settings Components/SettingsFrame'
import Header from "../Components/Header"
const Settings = () => {
    return (
      <div id = "settings">
      <Header head={"Inställningar"}/>
      <SettingsFrame/>
      </div>
    );
  }
export default Settings;
