import React from "react";
import "../UserSettings css/UserProfile.css";

const Profile = (props) => {
  console.log(props.profile);

  let currentProfile = (profile) => {
    return (
      <div key={profile.id}>
        <div id="userProfile"></div>
        <img src={profile.pictureURL} alt="profilePic" id="profilePic"></img>
        <form name="input">
          Förnamn
          <input
            type="text"
            id="firstNameInput"
            placeholder={profile.firstName}
          ></input>
          <br />
          Efternamn
          <input
            type="text"
            id="lastNameInput"
            placeholder={profile.lastName}
          ></input>
          <br />
          Personnummer
          <input
            type="text"
            id="personalNumberInput"
            placeholder={profile.personalNumber}
          ></input>
          <br />
          Adress
          <input
            type="text"
            id="adressInput"
            placeholder={profile.address}
          ></input>
          <br />
          Postort
          <input
            type="text"
            id="postTownInput"
            placeholder={profile.postTown}
          ></input>
          <br />
          Postnummer
          <input
            type="text"
            id="postNumberInput"
            placeholder={profile.postNumber}
          ></input>
          <br />
          Telefonnummer
          <input
            type="text"
            id="telephoneNumberInput"
            placeholder={profile.telephone}
          ></input>
          <br />
          Email
          <input
            type="text"
            id="emailInput"
            placeholder={profile.email}
          ></input>
          <br />
          <input type="button" id="profileSaveButton" value="Save"/>
        </form>
      </div>
    );
  };
  return props.profile.map(currentProfile)
};
export default Profile;
