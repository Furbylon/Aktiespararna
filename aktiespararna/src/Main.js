import React from "react";
import "./App.css";
import HeadMenu from "./Huvudmeny/HeadMenu";
import LoginMenu from "./LoginMenu/LoginMenu";
import ForgottenPassword from "./LoginMenu/Glömt lösenord/GlömtLösenord";
const Main = () => {
  return (
    <div className="App">
      <ForgottenPassword />
    </div>
  );
};

export default Main;
