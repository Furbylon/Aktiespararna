import React, { useState, useEffect } from "react";
import portfolio from "../../Min Portfolio/Portfolio";
import portfolioFrame from "../../Min Portfolio/PortfolioComponenter.js/Portfolioframe";
import profileList from "../../../data/JSON/profil.json";
import { Link, Route } from "react-router-dom";
import mock from "../../../data/JSON/mock.json";
import IndustryPercentage from "../Hem Components/IndustryPrecentage"

const MittInnehav = () => {
  let [values, setValues] = useState(mock.slice(0,1));

  const CheckIfValuesExist = (companies) => {
    if (values.length !== 0) {
      return (
        <div key={companies.id}>
        <IndustryPercentage/>
          <p>{companies.Industry}</p>
          <p>{companies.Industry} {companies.Shares} SEK</p>
          <p>{companies.Industry} {companies.Shares} SEK</p>
          <p>{companies.Industry} {companies.Shares} SEK</p>
          <p>{companies.Industry} {companies.Shares} SEK</p>
        </div>
      );
    } else {
      return (
        <div>
          <h2>inget innehav tillagt ännu</h2>
        </div>
      );
    }
  };
  return (
    <div id="mittInnehav" style={{ position: "relative", fontSize: "60%" }}>
      <div>
        <header>Mitt Innehav</header>
        <Link to="/mainmenu/portfolio">Min portfölj</Link>
        <h1>500 000 SEK</h1>
        <p>Senast uppdaterad: </p>
        {values.map(CheckIfValuesExist)}
      </div>
    </div>
  );
};

export default MittInnehav;
