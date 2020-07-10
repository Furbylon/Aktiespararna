import React from "react";
import "../UserSettings css/UserProfile.css";

const Profile = (props) => {
  let updateProfile = (e) => {
    e.preventDefault();
    
  };
  let currentProfile = (profile) => {
    return (
      <div key={profile.id}>
        <form id="profileForm" onSubmit={updateProfile}>
        
          <img src={profile.pictureURL} alt="profilePic" id="profilePic"></img>
          <br />
          Förnamn
          <input
            type="text"
            name="firstNameInput"
            value={props.firstName}
            placeholder={profile.firstName}
            onChange={updateProfile}
          ></input>
          <br />
          Efternamn
          <input
            type="text"
            name="lastNameInput"
            value={props.lastName}
            placeholder={profile.lastName}
          ></input>
          <br />
          Personnummer
          <input
            type="text"
            name="personalNumberInput"
            value={props.personalNumber}
            placeholder={profile.personalNumber}
          ></input>
          <br />
          Adress
          <input
            type="text"
            name="adressInput"
            value={props.address}
            placeholder={profile.address}
          ></input>
          <br />
          Postort
          <input
            type="text"
            name="postTownInput"
            value={props.postTown}
            placeholder={profile.postTown}
          ></input>
          <br />
          Postnummer
          <input
            type="text"
            name="postNumberInput"
            value={props.postNumber}
            placeholder={profile.postNumber}
          ></input>
          <br />
          Telefonnummer
          <input
            type="text"
            name="telephoneNumberInput"
            value={props.telephone}
            placeholder={profile.telephone}
          ></input>
          <br />
          Email
          <input
            type="text"
            name="emailInput"
            value={props.email}
            placeholder={profile.email}
          ></input>
          <br />
          <input type="submit" id="profileSaveButton" value="Spara" />
        </form>
      </div>
    );
  };
  return props.profile.map(currentProfile);
};
export default Profile;
