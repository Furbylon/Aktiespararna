import React from "react";
import profileList from "../Hem Components/profil.json";
import ProfileValues from '../Hem Components/ProfileValues'
const max = 1;
class HemProfil extends React.Component {
  state = {
    profiles: [],
  };
  componentDidMount() {
    const sliced = profileList.slice(0, max);
    this.setState({
      profiles: sliced,
    });
  }
  render() {
    return (
      <div id="homeProfile" style={{ position: "relative" }}>
        <div className="hemprofilHeader">
          <header>Min Profil</header>
        </div>
        <div className="hemprofilHeader">
          <button id="profileButton">Redigera</button>
        </div>
        <div>
          {this.state.profiles.map((profile) => {
            return (
              <ProfileValues
              key ={profile.name}
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
