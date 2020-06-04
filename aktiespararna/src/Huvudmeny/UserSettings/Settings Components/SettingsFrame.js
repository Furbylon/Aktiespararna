import React from "react";
import "../UserSettings css/SettingsFrame.css";
import Profile from "./UserProfile";
import PasswordChange from "./PasswordChange";
import Preferences from "./Preferences";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";

const SettingsFrame = () => {
  let def = 0;
  const openProfile = () => {
    if (def !== 0) {
      document.getElementById("userProfile").style.display = "block";
      document.getElementById("changePassword").style.display = "none";
      document.getElementById("preferences").style.display = "none";
      def = 0;
    }
  };
  const openPasswordChange = () => {
    if (def !== 1) {
      document.getElementById("userProfile").style.display = "none";
      document.getElementById("changePassword").style.display = "block";
      document.getElementById("preferences").style.display = "none";
      def = 1;
    }
  };
  const openPreferences = () => {
    if (def !== 2) {
      document.getElementById("userProfile").style.display = "none";
      document.getElementById("changePassword").style.display = "none";
      document.getElementById("preferences").style.display = "block";
      def = 2;
    }
  };

  const SettingsComp = () => {
    return (
      <div>
        <Tabs>
          <TabList>
            <Tab>
              <button label="profileButton" id="profileButton" onClick={openProfile}>
                Min Profil
              </button>
            </Tab>
            <Tab>
              <button label="changePasswordButton" id="changePasswordButton" onClick={openPasswordChange}>
                Byt lösenord
              </button>
            </Tab>
            <Tab>
              <button label="preferenceButton" id="preferencesButton" onClick={openPreferences}>
                Preferenser
              </button>
            </Tab>
          </TabList>
          <TabPanel>
            <Profile />
          </TabPanel>
          <TabPanel>
            <PasswordChange />
          </TabPanel>
          <TabPanel>
            <Preferences />
          </TabPanel>
        </Tabs>
      </div>
    );
  };

  return (
    <div className="settingsFrame">
      <SettingsComp />
    </div>
  );
};

export default SettingsFrame;
