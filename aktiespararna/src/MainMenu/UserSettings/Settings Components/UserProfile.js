import React, { useState } from "react";
import Ior from "../../images/Ior.jpg";
import "../UserSettings css/UserProfile.css";
import profileList from "../../../data/profil.json";

const Profile = (props) => {
  let [profile, setProfile] = useState(profileList.slice(0, 1));

  const updateProfile = () => {

  }
  return (
    <div>
      <div id="userProfile"></div>
      <img src={Ior} alt="profilePic" id="profilePic"></img>
      <form>
        Förnamn
        <input type="text" id="firstNameInput"></input>
        <br />
        Efternamn
        <input type="text" id="lastNameInput"></input>
        <br />
        Personnummer
        <input type="text" id="personalNumberInput"></input>
        <br />
        Adress
        <input type="text" id="adressInput"></input>
        <br />
        Postort
        <input type="text" id="postTownInput"></input>
        <br />
        Postnummer
        <input type="text" id="postNumberInput"></input>
        <br />
        Telefonnummer
        <input type="text" id="telephoneNumberInput"></input>
        <br />
        Email
        <input type="text" id="emailInput"></input>
        <br />
        <button id="profileSaveButton" onClick= {updateProfile()}>Spara</button>
      </form>
    </div>
  );
};
export default Profile;
