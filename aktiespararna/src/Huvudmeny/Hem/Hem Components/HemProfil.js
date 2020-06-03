import React from 'react'; 
import Ior from '../../images/Ior.jpg'


class HemProfil extends React.Component {
    render(){
      return(
        <div id = "hemProfil" style = {{position: "relative"}}>
        <div className = "hemprofilHeader">
        <header>Min Profil</header>
        </div>
        <div className = "hemprofilHeader">
        <button id = "profileButton">Redigera</button>
        </div>
        <div>
        <img src={Ior} alt="profilePic" id= "profilePic"></img>
        </div>
        <div>
        <h1>Namn</h1>
        <p>Person Nr/Organisation Nr</p>
        <p>780817-6331</p>
        </div>
        <p>Föredragna Industrier</p>
        <p>Inga industrier valda än</p>
        <p>Kontaktuppgifter</p>
        <p>Telefon: 000 000 000</p>
        <p>Mail: </p>
        <p>Adress:</p>
        <p>Postnummer:</p>
        <p>Postort:</p>
        </div>
      )
    }
  }
export default HemProfil;
