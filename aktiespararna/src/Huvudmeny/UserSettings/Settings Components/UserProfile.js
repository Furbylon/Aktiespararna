import React from "react";
import Ior from '../../images/Ior.jpg'
import '../UserSettings css/UserProfile.css'

class Profile extends React.Component {
  render() {
    return (
      <div id="userProfile" style = {{display: "none"}}>
      <img src={Ior} alt="profilePic" id= "profilePic"></img>
      <form>
      <p>Förnamn</p>
      <input id = "firstNameInput"></input>
      <p>Efternamn</p>
      <input id = "lastNameInput"></input>
      <p>Personnummer</p>
      <input id ="personalNumberInput"></input>
      <p>Adress</p>
      <input id = "adressInput"></input>
      <p>Postort</p>
      <input id = "postTownInput"></input>
      <p>Postnummer</p>
      <input id = "postNumberInput"></input>
      <p>Telefonnummer</p>
      <input id = "telephoneNumberInput"></input>
      <p>Email</p>
      <input id = "emailInput"></input>
      <button id = "profileSaveButton">Spara</button>
      </form>
      </div>
    );
  }
}
export default Profile;
