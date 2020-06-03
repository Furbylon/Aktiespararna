import React from "react";
import "./App.css";
import HuvudMeny from "./Huvudmeny/HuvudMeny";
import Login from "./Loginmeny/Login/Login";
import Register from "./Loginmeny/Registrering/Registrering";
import ForgottenPassword from "./Loginmeny/Glömt lösenord/Glömt Lösenord";
const Main = () => {
  return (
    <div className="App">
      <ForgottenPassword />
    </div>
  );
};

export default Main;
