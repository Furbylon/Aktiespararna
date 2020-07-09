import React from "react";
import ProfileValues from "./ProfileValues";
import Header from "../../Components/Header";
import LinkTo from "./LinkTo";

const homeProfile = (props) => {
  const showProfile = (profile) => {

    return (
      <ProfileValues
        key={profile.id}
        picture={profile.pictureURL}
        firstName={profile.firstName}
        lastName={profile.lastName}
        personalNumber={profile.personalNumber}
        industry1={props.preferredIndustries[0].Industry}
        industry2={props.preferredIndustries[1].Industry}
        industry3={props.preferredIndustries[2].Industry}
        industry4={props.preferredIndustries[3].Industry}
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
export default homeProfile;
