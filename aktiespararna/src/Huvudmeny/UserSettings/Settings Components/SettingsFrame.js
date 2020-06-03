import React from 'react';  


const openProfile = () => {
    console.log("profile")
    document.getElementById("userProfile").style.display = "block";
}
const openPasswordChange = () => {
    console.log("password")
}
const openPreferences = () => {
    console.log("preferences")
}

class SettingsFrame extends React.Component {
    render(){
      return(          
      <div className = "settingsFrame" style = {{position: "relative"}}>
      <button id= "profileButton" onClick= {openProfile}>Min Profil</button>
      <button id= "changePasswordButton" onClick= {openPasswordChange}> Byt lösenord</button>
      <button id= "preferencesButton" onClick= {openPreferences}>Preferenser</button>
      </div>
      )
    }
    }

    export default SettingsFrame;
