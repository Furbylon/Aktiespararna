import React, { useState } from "react";
import "../UserSettings css/UserProfile.css";
import profileList from "../../../data/JSON/profil.json";

const Profile = () => {
  let [profile, setProfile] = useState(profileList.slice(0, 1));

  let handleSubmit = (e) => {
    
  }
  let currentProfile = (profile) => {
    return (
      <div key={profile.username}>
        <div id="userProfile"></div>
        <img src={profile.pictureURL} alt="profilePic" id="profilePic"></img>
        <form name="input" onSubmit={handleSubmit()}>
          Förnamn
          <input
            type="text"
            name="firstNameInput"
            placeholder={profile.firstName}
            ref={profile}
          ></input>
          <br />
          Efternamn
          <input
            type="text"
            name="lastNameInput"
            placeholder={profile.lastName}
            ref={profile}
          ></input>
          <br />
          Personnummer
          <input
            type="text"
            name="personalNumberInput"
            placeholder={profile.personalNumber}
            ref={profile}
          ></input>
          <br />
          Adress
          <input
            type="text"
            name="adressInput"
            placeholder={profile.address}
            ref={profile}
          ></input>
          <br />
          Postort
          <input
            type="text"
            name="postTownInput"
            placeholder={profile.postTown}
            ref={profile}
          ></input>
          <br />
          Postnummer
          <input
            type="text"
            name="postNumberInput"
            placeholder={profile.postNumber}
            ref={profile}
          ></input>
          <br />
          Telefonnummer
          <input
            type="text"
            name="telephoneNumberInput"
            placeholder={profile.telephone}
            ref={profile}
          ></input>
          <br />
          Email
          <input
            type="text"
            name="emailInput"
            placeholder={profile.email}
            ref={profile}
          ></input>
          <br />
          <input type="submit" id="profileSaveButton" value="Save" />
        </form>
      </div>
    );
  };
  return <div>{profile.map(currentProfile)}</div>;
};
export default Profile;
