import React from "react";
import HemProfil from "./Hem Components/HemProfil";
import MittInnehav from "./Hem Components/MittInnehav";
import VälkomstMeddelande from "./Hem Components/VälkomstMeddelande";
import HemHeader from "./Hem Components/HemHeader";
import "./Hem css/Hem.css";
import SidebarButton from "../Components/SidebarButton"




const Hem = () => {
  return (
    <div id="home">
      <HemHeader />
      <SidebarButton/>
      <VälkomstMeddelande />
      <div id="profilOchInnehav">
        <HemProfil />
        <MittInnehav />
      </div>
    </div>
  );
};

export default Hem;
