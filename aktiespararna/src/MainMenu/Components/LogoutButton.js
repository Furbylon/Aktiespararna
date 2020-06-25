import React from "react";
import { Link } from "react-router-dom";

const LogoutButton = () => {
  const CloseNavigation = () => {
    document.getElementById("mySideBar").style.width = "0px";
  };
  return (
    <div>
      <button onClick={CloseNavigation} id="logoutButton">
        <Link to="/login">Logga ut</Link>
      </button>
    </div>
  );
};

export default LogoutButton;
