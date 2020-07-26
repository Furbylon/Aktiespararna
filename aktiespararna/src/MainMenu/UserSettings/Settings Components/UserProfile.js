import React from "react";
import "../UserSettings css/UserProfile.css";

const Profile = (props) => {
  let updateProfile = (e) => {
    e.preventDefault();
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
  };
  console.log(props.profile)
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
        Profil Bild
        <br />
        <input
          type="file"
          name="profilePictureInput"
          id="profilePictureInput"
          accept="image/"
          onChange={showPreview}
        />
        <div className="preview"></div>
        <img style={{ width: "100px" }} id="preview" alt="" />
        <br />
        Förnamn
        <br />
        <input
          type="text"
          id="firstNameInput"
          placeholder={props.profile.firstName}
          required
        />
        <br />
        Efternamn
        <br />
        <input
          type="text"
          placeholder={props.profile.lastName}
          id="lastNameInput"
          required
        />
        <br />
        Personnummer
        <br />
        <input
          type="text"
          placeholder={props.profile.personalNumber}
          id="personalNumberInput"
          required
        />
        <br />
        Adress
        <br />
        <input
          type="text"
          placeholder={props.profile.address}
          id="adressInput"
          required
        />
        <br />
        Postort
        <br />
        <input
          type="text"
          placeholder={props.profile.postTown}
          id="postTownInput"
          required
        />
        <br />
        Postnummer
        <br />
        <input
          type="text"
          placeholder={props.profile.postNumber}
          id="postNumberInput"
          required
        />
        <br />
        Telefonnummer
        <br />
        <input
          type="text"
          placeholder={props.profile.phoneNumber}
          id="telephoneNumberInput"
          required
        />
        <br />
        Email
        <br />
        <input
          type="text"
          placeholder={props.profile.email}
          id="emailInput"
          required
        />
        <br />
        <input type="submit" id="profileSaveButton" value="Spara" />
      </form>
    </div>
  );
};
export default Profile;
