import React from "react";
import HemProfil from "./Hem Components/HemProfil";
import MittInnehav from "./Hem Components/MittInnehav";
import VälkomstMeddelande from "./Hem Components/VälkomstMeddelande";
import Header from "../Components/Header";
import "./Hem css/Hem.css";

const Hem = () => {
  return (
    <div id="home">
      <Header head = {"Hem"}/>
      <VälkomstMeddelande />
      <div id="profilOchInnehav">
        <HemProfil />
        <MittInnehav />
      </div>
    </div>
  );
};

export default Hem;
