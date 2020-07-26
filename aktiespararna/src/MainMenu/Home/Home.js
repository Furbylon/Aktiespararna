import React from "react";
import HomeProfile from "./Home Component/HomeProfile";
import MyHolding from "./Home Component/MyHolding";
import WelcomeMessage from "./Home Component/WelcomeMessage";
import Header from "../Components/Header";
import "./Home css/Home.css";

const Hem = (props) => {
  console.log(props.profile)
  return (
    <div id="home">
      <div id="homeHeader">
        <Header head={"Aktiespararna - Ditt aktivitetsverktyg"} />
      </div>
      <WelcomeMessage />
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
