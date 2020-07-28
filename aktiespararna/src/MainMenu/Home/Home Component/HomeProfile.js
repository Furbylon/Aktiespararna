import React from "react";
import ProfileValues from "./ProfileValues";
import Header from "../../Components/Header";
import LinkTo from "./LinkTo";

const HomeProfile = (props) => {
  const showProfile = () => {
    return (
      <ProfileValues
        picture={props.profile.profilePicture}
        firstName={props.profile.firstName}
        lastName={props.profile.lastName}
        personalNumber={props.profile.personalNumber}
        industry={props.preferredIndustries}
        telephoneNumber={props.profile.phoneNumber}
        email={props.profile.email}
        address={props.profile.address}
        postNumber={props.profile.postNumber}
        postTown={props.profile.postTown}
      />
    );
  };
  return (
    <div id="homeProfile" style={{ position: "relative" }}>
      <Header head={"Min Profil"}> </Header>
      <LinkTo link={"/mainmenu/settings/profile"} tag={"Redigera"} />
      <hr/>
      <div id="profileInformation">{showProfile()}</div>
    </div>
  );
};
export default HomeProfile;
