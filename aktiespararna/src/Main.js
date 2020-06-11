import React from "react";
import "./App.css";
import HeadMenu from "./Huvudmeny/HeadMenu";
import LoginMenu from "./LoginMenu/LoginMenu";
const Main = () => {
  return (
    <div className="App">
      <HeadMenu />
      <LoginMenu />
    </div>
  );
};

export default Main;
