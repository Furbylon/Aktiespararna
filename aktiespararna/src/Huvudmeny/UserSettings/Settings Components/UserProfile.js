import React from "react";
import Ior from "../../images/Ior.jpg";
import "../UserSettings css/UserProfile.css";
import ProfileValues from "../../Hem/Hem Components/ProfileValues";
import profileList  from "../../../data/profil.json"
const max = 1; 

class Profile extends React.Component {
  constructor(props) {
    super(props)
    
    this.updateValues = this.updateValues.bind(this);

    this.state = {
      profiles:[]
    }
  }
  updateValues(){
    console.log("test")
  }
  render(){
  return (
    <div id="userProfile">
      <img src={Ior} alt="profilePic" id="profilePic"></img>
      <form method="get">
        Förnamn
        <input type= "text" id="firstNameInput"></input><br/>
        Efternamn
        <input type= "text" id="lastNameInput"></input><br/>
        Personnummer
        <input type="number" id="personalNumberInput"></input><br/>
        Adress
        <input type="number" id="adressInput"></input><br/>
        Postort
        <input type="number" id="postTownInput"></input><br/>
        Postnummer
        <input type="number" id="postNumberInput"></input><br/>
        Telefonnummer
        <input type="number" id="telephoneNumberInput"></input><br/>
        Email
        <input type="number" id="emailInput"></input><br/>
        <button onClick={this.updateValues} id="profileSaveButton">Spara</button>
      </form>
    </div>
  );
};
}
export default Profile;
