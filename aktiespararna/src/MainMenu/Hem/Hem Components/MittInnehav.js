import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import mock from "../../../data/JSON/mock.json";
import IndustryPercentage from "../Hem Components/IndustryPrecentage";
import LastUpdate from "../../Components/LastUpdate";
import Header from "../../Components/Header";

const MittInnehav = () => {
  let values = mock.slice(0, 3);

  const CheckIfValuesExist = (companies) => {
    if (values.length !== 0) {
      return (
        <div key={companies.id}>
            <p>
              {companies.Industry} {companies.Shares} SEK
            </p>
        </div>
      );
    } else {
      return (
        <div>
          <h2>inget innehav tillagt ännu </h2>
        </div>
      );
    }
  };

  return (
    <div id="mittInnehav" style={{ position: "relative" }}>
      <div>
        <Header head={"Mitt Innehav"} />
        <Link to="/mainmenu/portfolio">Min portfölj</Link>
        <IndustryPercentage />
        <h1>500 000 SEK</h1>
        {values.map(CheckIfValuesExist)}
        <p>Övrigt: 60 000 SEK </p>
      </div>
    </div>
  );
};

export default MittInnehav;
