import React from 'react';  
import '../Inställningar css/SettingsFrame.css'
import Profile from '../UserProfile js/Profile'
import PasswordChange from '../ChangePassword js/PasswordChange'
import Preferences from '../Preferences js/Preferences'

class SettingsComp extends React.Component {
    render() {
      return (
        <div className= "settingsCompilation">
        <Profile/>
        <PasswordChange/>
        <Preferences/>
        </div>
      );
    }
  }
const SettingsFrame = () => {
    let def = 0
    const openProfile = () => {
        if (def !== 0){
            console.log("profile")
            document.getElementById("userProfile").style.display = "block";
            document.getElementById("changePassword").style.display = "none";
            document.getElementById("preferences").style.display = "none";
            def = 0
        }
    }
    const openPasswordChange = () => {
        if (def !== 1){
            document.getElementById("userProfile").style.display = "none";
            document.getElementById("changePassword").style.display = "block";
            document.getElementById("preferences").style.display = "none";
            def = 1
        }
    }
    const openPreferences = () => {
        if (def !== 2){
            document.getElementById("userProfile").style.display = "none";
            document.getElementById("changePassword").style.display = "none";
            document.getElementById("preferences").style.display = "block";
            def = 2
        }
    }
    return(          
        <div className = "settingsFrame" style = {{position: "relative"}}>
        <button id= "profileButton" onClick= {openProfile}>Min Profil</button>
        <button id= "changePasswordButton" onClick= {openPasswordChange}> Byt lösenord</button>
        <button id= "preferencesButton" onClick= {openPreferences}>Preferenser</button>
        <SettingsComp/>
        </div>
        )
      }
      

    export default SettingsFrame;
