import React, { useState } from "react";
import Ior from "../../images/Ior.jpg";
import "../UserSettings css/UserProfile.css";
import profileList from "../../../data/profil.json";
import ProfileValues from "../../Hem/Hem Components/ProfileValues";

const Profile = () => {
  let [profile, setProfile] = useState(profileList.slice(0, 1));

  const updateProfile = () => {};
  const currentProfile = (profile) => {
    return (
      <div>
        <div id="userProfile"></div>
        <img src={Ior} alt="profilePic" id="profilePic"></img>
        <form>
          Förnamn
          <input
            type="text"
            id="firstNameInput"
            placeholder={profile.name}
          ></input>
          <br />
          Efternamn
          <input
            type="text"
            name="lastNameInput"
            placeholder={profile.name}
          ></input>
          <br />
          Personnummer
          <input
            type="text"
            name="personalNumberInput"
            placeholder={profile.personalNumber}
          ></input>
          <br />
          Adress
          <input
            type="text"
            name="adressInput"
            placeholder={profile.address}
          ></input>
          <br />
          Postort
          <input
            type="text"
            name="postTownInput"
            placeholder={profile.postTown}
          ></input>
          <br />
          Postnummer
          <input
            type="text"
            name="postNumberInput"
            placeholder={profile.postNumber}
          ></input>
          <br />
          Telefonnummer
          <input
            type="text"
            name="telephoneNumberInput"
            placeholder={profile.telephone}
          ></input>
          <br />
          Email
          <input
            type="text"
            name="emailInput"
            placeholder={profile.email}
          ></input>
          <br />
          <input
            type="submit"
            id="profileSaveButton"
            value="Uppdatera"
            onClick={updateProfile()}
          />
        </form>
      </div>
    );
  };
  return <div>{profile.map(currentProfile)}</div>;
};
export default Profile;
