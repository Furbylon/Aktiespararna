import React from "react";

const UserProfile = (props) => {
  return (
    <div>
      <form id="profileForm" onSubmit={props.updateProfile}>
        Profilbild
        <br />
        <input
          type="file"
          name="profilePictureInput"
          id="profilePictureInput"
          accept="image/"
          onChange={props.showPreview}
        />
        <div className="preview"></div>
        <img
          style={{ width: "100px" }}
          id="preview"
          alt=""
          src={props.profile.profilePicture}
        />
        <br />
        Förnamn
        <br />
        <input
          type="text"
          id="firstNameInput"
          placeholder={props.profile.firstName}
        />
        <br />
        Efternamn
        <br />
        <input
          type="text"
          placeholder={props.profile.lastName}
          id="lastNameInput"
        />
        <br />
        Personnummer
        <br />
        <input
          type="text"
          placeholder={props.profile.personalNumber}
          id="personalNumberInput"
        />
        <br />
        Adress
        <br />
        <input
          type="text"
          placeholder={props.profile.address}
          id="adressInput"
        />
        <br />
        Postort
        <br />
        <input
          type="text"
          placeholder={props.profile.postTown}
          id="postTownInput"
        />
        <br />
        Postnummer
        <br />
        <input
          type="text"
          placeholder={props.profile.postNumber}
          id="postNumberInput"
        />
        <br />
        Telefonnummer
        <br />
        <input
          type="text"
          placeholder={props.profile.phoneNumber}
          id="telephoneNumberInput"
        />
        <br />
        Email
        <br />
        <input type="text" placeholder={props.profile.email} id="emailInput" />
        <input type="submit" id="profileSaveButton" placeholder="Spara" />
      </form>
    </div>
  );
};
export default UserProfile;
