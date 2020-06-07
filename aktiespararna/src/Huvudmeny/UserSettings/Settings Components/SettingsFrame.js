import React from "react";
import "../UserSettings css/SettingsFrame.css";
import Profile from "./UserProfile";
import PasswordChange from "./PasswordChange";
import Preferences from "./Preferences";

const SettingsFrame = () => {
  let def = 0;
  const openProfile = () => {
    if (def !== 0) {
      document.getElementById("userProfile").style.display = "block";
      document.getElementById("passwordChange").style.display = "none";
      document.getElementById("preferences").style.display = "none";
      def = 0;
    }
  };
  const openPasswordChange = () => {
    if (def !== 1) {
      document.getElementById("userProfile").style.display = "none";
      document.getElementById("passwordChange").style.display = "block";
      document.getElementById("preferences").style.display = "none";
      def = 1;
    }
  };
  const openPreferences = () => {
    if (def !== 2) {
      document.getElementById("userProfile").style.display = "none";
      document.getElementById("passwordChange").style.display = "none";
      document.getElementById("preferences").style.display = "block";
      def = 2;
    }
  };
  const SettingsHead = () => {
    return(
    <div>
    <div>
      <button id="profileButton" onClick={openProfile}>
        Min Profil
      </button>
    </div>
    <div>
      <button id="changePasswordButton" onClick={openPasswordChange}>
        Byt lösenord
      </button>
    </div>
    <div>
      <button id="preferencesButton" onClick={openPreferences}>
        Preferenser
      </button>
    </div>
  </div>
  )
  }
  const SettingsComp = () => {
    return (
        <div>
        <div>
          <Profile />
        </div>
        <div>
          <PasswordChange />
        </div>
        <div>
          <Preferences />
        </div>
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
