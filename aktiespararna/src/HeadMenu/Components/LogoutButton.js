import React from "react";
import {Link} from "react-router-dom";

const LogoutButton = () => {
  const CloseNavigation = () => {
    document.getElementById("mySideBar").style.width = "0px";
  };
      return (
        <div>
        <button onClick= {CloseNavigation}>
        <Link to = "/login" exact= {true}>Logout</Link>
        </button>
        </div>
      );
      }

  export default LogoutButton;
