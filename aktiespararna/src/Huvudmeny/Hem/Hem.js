import React from 'react'; 
import Ior from '../images/Ior.jpg'


class HemHeader extends React.Component {
  render() {
    return (
      <div id = "hemHeader">
      <p>Hem</p>
      </div>
    )
  }
}

class HemProfil extends React.Component {
  render(){
    return(
      <div id = "hemProfil" style = {{position: "relative"}}>
      <p>Min Profil</p>
      <img src={Ior} alt="profilePic" id= "profilePic"></img>
      <h1>Namn</h1>
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
class MittInnehav extends React.Component {
  render(){
    return(
      <div id = "mittInnehav" style = {{position: "relative"}}>
      <p>Mitt Innehav</p>
      <h1>0 SEK</h1>
      <h2>Inget innehav tillagt ännu</h2>
      </div>
    )
  }
}
class VälkomstMeddelande extends React.Component {
  render(){
    return(
      <div id = "välkomstMeddelande">
      <p>Välkommen!</p>
      </div>
    )
  }
}
const Hem = () => {
    return (
      <div id = "hem">
      <HemHeader/>
      <VälkomstMeddelande/>
      <ul>
      <HemProfil/>
      <MittInnehav/>
      </ul>
      </div>
    );
  }

export default Hem;
