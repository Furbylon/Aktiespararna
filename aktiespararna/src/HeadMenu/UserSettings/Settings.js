import React from 'react';  
import SettingsFrame from './Settings Components/SettingsFrame'
import SidebarButton from "../Components/SidebarButton"

const Settings = () => {
    return (
      <div id = "settings">
      <SidebarButton/>
      <SettingsFrame/>
      </div>
    );
  }
export default Settings;
