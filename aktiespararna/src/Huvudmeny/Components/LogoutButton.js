import React from "react";

const logOut = () => {
  document.getElementById("headMenu").style.display = "none";
  document.getElementById("loginMenu").style.display = "block";
  document.getElementById("registrationDiv").style.display ="none"
  document.getElementById("forgottenPasswordDiv").style.display ="none"
}
class LogoutButton extends React.Component {
    render() {
      return (
        <div>
          <button id="logOutButton" onClick = {logOut}>Logga ut</button>
        </div>
      );
    }
  }

  export default LogoutButton;
