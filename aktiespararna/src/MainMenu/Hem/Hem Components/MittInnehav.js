import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import mock from "../../../data/JSON/mock.json";
import IndustryPercentage from "../Hem Components/IndustryPrecentage";
import Header from "../../Components/Header";
import LastUpdate from "../../Components/LastUpdate"

const MittInnehav = (newValue) => {
  let [values, setValues] = useState(mock.slice(0, 4));
  const CheckIfValuesExist = (companies) => {
    if (values.length !== 0) {
      return (
        <div key={companies.id}>
            <p>
              {companies.Industry} {companies.Balance} SEK
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
        <Header head={"Mitt Innehav"}/>
        <p style = {{fontWeight: "lighter"}}>Senast uppdaterad: <LastUpdate/> </p>
        <IndustryPercentage />
        {values.map(CheckIfValuesExist)}
        <p>Övrigt: 60 000 SEK </p>
        <Link to="/mainmenu/portfolio">Min portfölj</Link>
      </div>
    </div>
  );
};

export default MittInnehav;
