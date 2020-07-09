import React from "react";
import HomeProfile from "./Home Component/HomeProfile";
import MyHolding from "./Home Component/MyHolding";
import WelcomeMessage from "./Home Component/WelcomeMessage";
import Header from "../Components/Header";
import "./Home css/Home.css"

const Hem = (props) => {
  return (
    <div id="home">
      <div id="homeHeader">
        <Header head={"Aktiespararna - Ditt aktivitetsverktyg"} />
      </div>
      <WelcomeMessage />
      <div id="profileAndHoldings">
        <HomeProfile profile={props.profile} preferredIndustries={props.preferredValues}/>
        <MyHolding preferredIndustries={props.preferredValues}/>
      </div>
    </div>
  );
};

export default Hem;
