import React from "react";
import "../UserSettings css/UserProfile.css";
import UserProfile from "./UserProfile"

const Profile = (props) => {
  let updateProfile = (e) => {
    e.preventDefault();
    alert("Profil har uppdaterats")
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
    <UserProfile showPreview={showPreview} updateProfile={updateProfile} profile={props.profile}/>
  );
};
export default Profile;
