import React from "react";
import HemProfil from "./HemComponents/HomeProfile";
import MittInnehav from "./HemComponents/MyHolding";
import VälkomstMeddelande from "./HemComponents/WelcomeMessage";
import Header from "../Components/Header";
import "./Hem css/Hem.css";

const Hem = (props) => {
  return (
    <div id="home">
      <div id="homeHeader">
        <Header head={"Aktiespararna - Ditt aktivitetsverktyg"} />
      </div>
      <VälkomstMeddelande />
      <div id="profilOchInnehav">
        <HemProfil profile={props.profile}/>
        <MittInnehav/>
      </div>
    </div>
  );
};

export default Hem;
