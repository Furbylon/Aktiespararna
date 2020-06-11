import React from "react";
import "./App.css";
import HeadMenu from "./Huvudmeny/HeadMenu";
import LoginMenu from "./LoginMenu/LoginMenu";


const Main = () => {
  return (
    <div className="App">
      <LoginMenu/>
      <HeadMenu/>
    </div>
  );
};

export default Main;
