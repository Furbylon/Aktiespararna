import React from 'react';  
import SettingsFrame from './Settings Components/SettingsFrame'
class Settings extends React.Component {
  render(){
    return (
      <div id = "settings" style = {{display: "none"}}>
      <SettingsFrame/>
      </div>
    );
  }
  }
export default Settings;
