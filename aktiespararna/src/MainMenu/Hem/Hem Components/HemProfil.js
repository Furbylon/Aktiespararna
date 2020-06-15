import React, { useState } from "react";
import profileList from "../../../data/profil.json";
import ProfileValues from "../Hem Components/ProfileValues";
import { Link } from "react-router-dom";

const HemProfil = () => {
  let [profile, setProfile] = useState(profileList.slice(0, 1));

  const showProfile = (profile) => {
    return (
      <ProfileValues
        key={profile.name}
        picture={profile.pictureUrl}
        name={profile.name}
        personalNumber={profile.personalNumber}
        industries={profile.industries}
        telephoneNumber={profile.telephone}
        email={profile.email}
        address={profile.address}
        postNumber={profile.postNumber}
        postTown={profile.postTown}
      />
    );
  };
  return (
    <div id="homeProfile" style={{ position: "relative" }}>
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
