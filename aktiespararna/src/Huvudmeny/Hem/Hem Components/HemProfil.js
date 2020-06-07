import React from "react";
import profileList  from "../../../data/profil.json"
import ProfileValues from "../Hem Components/ProfileValues";
const max = 1;
class HemProfil extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      profiles: [],
    };
    this.profileEditButton = this.profileEditButton.bind(this);
  }
  componentDidMount() {
    const sliced = profileList.slice(0, max);
    this.setState({
      profiles: sliced,
    });
  }
  profileEditButton() {
    document.getElementById("home").style.display = "none";
    document.getElementById("settings").style.display = "block";
    document.getElementById("userProfile").style.display = "block";
    document.getElementById("preferences").style.display = "none";
    document.getElementById("passwordChange").style.display = "none";
  }
  render() {
    return (
      <div id="homeProfile" style={{ position: "relative" }}>
        <div className="hemprofilHeader">
          <header>Min Profil</header>
        </div>
        <div className="hemprofilHeader">
          <button id="profileButton" onClick={this.profileEditButton}>
            Redigera
          </button>
        </div>
        <div>
          {this.state.profiles.map((profile) => {
            return (
              <ProfileValues
                key={profile.name}
                picture={profile.pictureUrl}
                name={profile.name}
                personalNumber={profile.personalNumber}
                industries={profile.industries}
                telephoneNumber={profile.telephone}
                email={profile.email}
                address={profile.address}
                postNumber={profile.postNumber}
                postTown={profile.postTown}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
export default HemProfil;
