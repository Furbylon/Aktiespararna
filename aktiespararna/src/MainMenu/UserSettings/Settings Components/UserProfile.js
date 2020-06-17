import React, { useState } from "react";
import Ior from "../../images/Ior.jpg";
import "../UserSettings css/UserProfile.css";
import { useForm } from "react-hook-form";
import profileList from "../../../data/JSON/profil.json";
import profileValues from "../../Hem/Hem Components/ProfileValues";

const Profile = () => {
  let { register, handleSubmit } = useForm();
  let [profile, setProfile] = useState(profileList.slice(0, 1));


  let currentProfile = (profile) => {
    return (
      <div key={profile.username}>
        <div id="userProfile"></div>
        <img src={Ior} alt="profilePic" id="profilePic"></img>
        <form name="input">
          Förnamn
          <input
            type="text"
            name="firstNameInput"
            placeholder={profile.firstName}
            ref={register}
          ></input>
          <br />
          Efternamn
          <input
            type="text"
            name="lastNameInput"
            placeholder={profile.lastName}
            ref={register}
          ></input>
          <br />
          Personnummer
          <input
            type="text"
            name="personalNumberInput"
            placeholder={profile.personalNumber}
            ref={register}
          ></input>
          <br />
          Adress
          <input
            type="text"
            name="adressInput"
            placeholder={profile.address}
            ref={register}
          ></input>
          <br />
          Postort
          <input
            type="text"
            name="postTownInput"
            placeholder={profile.postTown}
            ref={register}
          ></input>
          <br />
          Postnummer
          <input
            type="text"
            name="postNumberInput"
            placeholder={profile.postNumber}
            ref={register}
          ></input>
          <br />
          Telefonnummer
          <input
            type="text"
            name="telephoneNumberInput"
            placeholder={profile.telephone}
            ref={register}
          ></input>
          <br />
          Email
          <input
            type="text"
            name="emailInput"
            placeholder={profile.email}
            ref={register}
          ></input>
          <br />
          <input type="submit" id="profileSaveButton" value="Uppdatera" />
        </form>
      </div>
    );
  };
  return <div>{profile.map(currentProfile)}</div>;
};
export default Profile;
