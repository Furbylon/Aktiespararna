import React from "react";

const logOut = () => {
  document.getElementById("headMenu").style.display = "none";
  document.getElementById("loginDiv").style.display = "block";
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
