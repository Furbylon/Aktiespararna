import React from "react";
import ProfileRender from "./ProfileRender";
import Profile from "./Profile";

const HomeProfile = (props) => {
  const showProfile = () => {
    return (
      <ProfileRender
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
  return <Profile showProfile={showProfile} />;
};
export default HomeProfile;
