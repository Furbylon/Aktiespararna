import React from "react";
import { Link, useHistory } from "react-router-dom";

const LogoutButton = () => {
  const history = useHistory();
  const CloseNavigation = () => {
    document.getElementById("mySideBar").style.width = "0px";
    history.push("/");
  };
  return (
    <div>
      <button id="logoutButton" onClick={CloseNavigation}>
        Logga ut
      </button>
    </div>
  );
};

export default LogoutButton;
