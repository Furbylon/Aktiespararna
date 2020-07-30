import React from "react";
import "../UserSettings css/UserProfile.css";

const Profile = (props) => {
  let updateProfile = (e) => {
    e.preventDefault();
    if (e.target.elements.profilePictureInput.files.length !== 0) {
      props.setProfile({
        profilePicture: URL.createObjectURL(
          e.target.elements.profilePictureInput.files[0]
        ),
        firstName: e.target.elements.firstNameInput.value,
        lastName: e.target.elements.lastNameInput.value,
        personalNumber: e.target.elements.personalNumberInput.value,
        address: e.target.elements.adressInput.value,
        postTown: e.target.elements.postTownInput.value,
        postNumber: e.target.elements.postNumberInput.value,
        phoneNumber: e.target.elements.telephoneNumberInput.value,
        email: e.target.elements.emailInput.value,
      });
    } else {
      props.setProfile({
        firstName: e.target.elements.firstNameInput.value,
        lastName: e.target.elements.lastNameInput.value,
        personalNumber: e.target.elements.personalNumberInput.value,
        address: e.target.elements.adressInput.value,
        postTown: e.target.elements.postTownInput.value,
        postNumber: e.target.elements.postNumberInput.value,
        phoneNumber: e.target.elements.telephoneNumberInput.value,
        email: e.target.elements.emailInput.value,
      });
    }
  };
 
  let showPreview = (e) => {
    if (e.target.files.length > 0) {
      let src = URL.createObjectURL(e.target.files[0]);
      let preview = document.getElementById("preview");
      preview.src = src;
      preview.style.display = "block";
    }
  };
  
  return (
    <div>
      <form id="profileForm" onSubmit={updateProfile}>
        Profilbild
        <br />
        <input
          type="file"
          name="profilePictureInput"
          id="profilePictureInput"
          accept="image/"
          onChange={showPreview}
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
        <input type="text" placeholder={props.profile.lastName} id="lastNameInput" />
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
        <input type="text" placeholder={props.profile.address} id="adressInput" />
        <br />
        Postort
        <br />
        <input type="text" placeholder={props.profile.postTown} id="postTownInput" />
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
export default Profile;
