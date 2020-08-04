import React from "react";
import Header from "../Components/Header";
import Portfolioframe from "./Portfolio Components/Portfolioframe";
import "./Portfolio css/Portfolio.css";
import LastUpdate from "../Components/LastUpdate";

const Portfolio = (props) => {
  return (
    <div id="portfolio">
      <div id="portfolioHeader">
        <Header head={"Min Portfolio"} />
      </div>
      <LastUpdate time={props.time}/>
      <Portfolioframe />
    </div>
  );
};

export default Portfolio;
