import React from "react";
import HomeProfile from "./Home Component/HomeProfile";
import MyHolding from "./Home Component/MyHolding";
import WelcomeMessage from "./Home Component/WelcomeMessage";
import Header from "../Components/Header";
import "./Home css/Home.css";

const Hem = (props) => {
  return (
    <div id="home">
      <div id="homeHeader">
        <Header head={"Aktiespararna - Ditt aktivitetsverktyg"} />
      </div>
      <WelcomeMessage profile={props.profile} />
      <div id="profileAndHoldings">
        <HomeProfile
          profile={props.profile}
          preferredIndustries={props.preferredIndustries}
        />
        <MyHolding
          preferredIndustries={props.preferredIndustries}
          remainingIndustries={props.remainingIndustries}
        />
      </div>
    </div>
  );
};

export default Hem;
