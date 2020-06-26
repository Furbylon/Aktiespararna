import React, { useState } from "react";
import profileList from "../../../data/JSON/profil.json";
import ProfileValues from "../Hem Components/ProfileValues";
import { Link } from "react-router-dom";
import Header from "../../Components/Header"


const HemProfil = () => {
  let [profile, setProfile] = useState(profileList.slice(0,1));

  
  const showProfile = (profile) => {
    return (
      <ProfileValues
        key={profile.id}
        picture={profile.pictureURL}
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
    <div id="homeProfile" style={{ position: "relative"}}>
    <Header head = {"Min Profil"}/>
      <div id="profileInformation">{profile.map(showProfile)}</div>
      <Link to="/mainmenu/settings/profile">Redigera</Link>
    </div>
  );
};
export default HemProfil;
