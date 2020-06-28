import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import mock from "../../../data/JSON/mock.json";
import IndustryPercentage from "../Hem Components/IndustryPrecentage";
import Header from "../../Components/Header";
import LastUpdate from "../../Components/LastUpdate";
import LinkTo from "./LinkTo";

const MittInnehav = () => {
  let [values, setValues] = useState(mock.slice(0, 4));

  let max = mock.length;

  let [remainingCompanies, setRemainingCompanies] = useState(
    mock.slice(5, max)
  );
  let sumOfRemaining = 0;
  remainingCompanies.map((values, index) => {
    return (sumOfRemaining += values.Balance);
  });
  console.log(sumOfRemaining);

  let companyColours = [
    { colour: "rgb(58, 145, 116)" },
    { colour: "rgb(97, 73, 165)" },
    { colour: "rgb(173, 32, 32)" },
    { colour: "rgb(193, 224, 81)" },
  ];
  const CheckIfValuesExist = (companies, index) => {
    if (values.length !== 0) {
      return (
        <div key={companies.id}>
          <div
            style={{ background: companyColours[index].colour, width: "200px" }}
          >
            <p>
              {companies.Industry} {companies.Balance} SEK
            </p>
          </div>
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
        <LinkTo link={"/mainmenu/portfolio"} tag={"Portfolio"} />
        <p style={{ fontWeight: "lighter" }}>Senast uppdaterad: </p>
        <LastUpdate />
        <IndustryPercentage companyColours={companyColours} />
        {values.map(CheckIfValuesExist)}
        <p
          style={{
            background: "rgb(0, 162, 255)",
            width: "200px",
            backgroundSize: "20%",
          }}
        >
          Övrigt: {sumOfRemaining} SEK
        </p>
      </div>
    </div>
  );
};

export default MittInnehav;
