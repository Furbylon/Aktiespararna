import React, { useState } from "react";
import profileList from "../../../data/JSON/profil.json";
import ProfileValues from "./ProfileValues";
import Header from "../../Components/Header";
import LinkTo from "./LinkTo";

const HemProfil = (props) => {

  const showProfile = (profile) => {
    return (
      <ProfileValues
        key={profile.id}
        picture={profile.pictureURL}
        firstName={profile.firstName}
        lastName={profile.lastName}
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
    <div id="homeProfile" style={{ position: "relative" }}>
      <LinkTo link={"/mainmenu/settings/profile"} tag={"Redigera"} />
      <Header head={"Min Profil"} />

      <div id="profileInformation">{props.profile.map(showProfile)}</div>
    </div>
  );
};
export default HemProfil;
