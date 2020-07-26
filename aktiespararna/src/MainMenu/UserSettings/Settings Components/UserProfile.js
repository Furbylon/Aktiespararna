import React from "react";
import "../UserSettings css/UserProfile.css";

const Profile = (props) => {
  let updateProfile = (e) => {
    e.preventDefault();
    props.setProfile({
      profilePicture: e.target.value.profilePictureInput.value,
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
  const inpFile = document.getElementById("profilePictureInput");
  const previewContainer = document.getElementById("imagePreview");
  console.log(previewContainer);
  const previewImage = previewContainer.querySelector(".image-preview__image");
  const previewDefaultText = previewContainer.querySelector(
    ".image-preview__default-text"
  );
  inpFile.addEventListener("change", () => {
    const file = this.files[0];

    console.log(file);
  });
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
          onChange="showPreview(event);"
        />
        <div class="preview"></div>
        <br />
        Förnamn
        <input
          type="text"
          id="firstNameInput"
          placeholder={props.profile.firstName}
          required
        />
        <br />
        Efternamn
        <input
          type="text"
          placeholder={props.profile.lastName}
          id="lastNameInput"
          required
        />
        <br />
        Personnummer
        <input
          type="text"
          placeholder={props.profile.personalNumber}
          id="personalNumberInput"
          required
        />
        <br />
        Adress
        <input
          type="text"
          placeholder={props.profile.address}
          id="adressInput"
          required
        />
        <br />
        Postort
        <input
          type="text"
          placeholder={props.profile.postTown}
          id="postTownInput"
          required
        />
        <br />
        Postnummer
        <input
          type="text"
          placeholder={props.profile.postNumber}
          id="postNumberInput"
          required
        />
        <br />
        Telefonnummer
        <input
          type="text"
          placeholder={props.profile.phoneNumber}
          id="telephoneNumberInput"
          required
        />
        <br />
        Email
        <input
          type="text"
          placeholder={props.profile.email}
          id="emailInput"
          required
        />
        <br />
      </form>
    </div>
  );
};
export default Profile;
