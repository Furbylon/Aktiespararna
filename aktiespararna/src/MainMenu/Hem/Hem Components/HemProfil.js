import React, { useState } from "react";
import profileList from "../../../data/JSON/profil.json";
import ProfileValues from "../Hem Components/ProfileValues";
import { Link } from "react-router-dom";
import userProfile from "../../UserSettings/Settings Components/UserProfile"

const HemProfil = () => {
  let [profile, setProfile] = useState(profileList);

  setProfile = () => {
    
  }

  const showProfile = (profile) => {
    return (
      <ProfileValues
        key={profile.id}
        picture={profile.pictureUrl}
        firstName={profile.firstName}
        lastName= {profile.lastName}
        personalNumber={profile.personalNumber}
        industry1={profile.industries[0]}
        industry2={profile.industries[1]}
        industry3={profile.industries[2]}
        industry4={profile.industries[3]}
        telephoneNumber={profile.telephone}
        email={profile.email}
        address={profile.address}
        postNumber={profile.postNumber}
        postTown={profile.postTown}
      />
    );
  };
  return (
    <div id="homeProfile" style={{ position: "relative", fontSize: "80%"}}>
      <div className="hemprofilHeader">
        <header>Min Profil</header>
        <div className="hemprofilHeader">
          <Link to="/mainmenu/settings/profile">Redigera</Link>
        </div>
      </div>

      <div>{profile.map(showProfile)}</div>
    </div>
  );
};
export default HemProfil;
