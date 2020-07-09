import React from "react";
import mock from "../../../data/JSON/mock.json";
import IndustryPercentage from "./IndustryPercentage";
import Header from "../../Components/Header";
import LastUpdate from "../../Components/LastUpdate";
import LinkTo from "./LinkTo";

const MyHoldings = (props) => {
  let max = mock.length;

  let remainingCompanies = mock.slice(5, max);
  let sumOfRemaining = 0;
  remainingCompanies.map((values) => {
    return (sumOfRemaining += values.Balance);
  });
  let spacedSum = sumOfRemaining.toLocaleString();
  let companyColours = [
    { colour: "rgb(58, 145, 116)" },
    { colour: "rgb(97, 73, 165)" },
    { colour: "rgb(173, 32, 32)" },
    { colour: "rgb(193, 224, 81)" },
  ];
  const CheckIfValuesExist = (companies, index) => {
    if (props.preferredIndustries.length !== 0) {
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
    <div id="myHoldings" style={{ position: "relative" }}>
      <div>
        <Header head={"Mitt Innehav"} />
        <LinkTo link={"/mainmenu/portfolio"} tag={"Portfolio"} />
        <p style={{ fontWeight: "lighter" }}>Senast uppdaterad: </p>
        <LastUpdate />
        <IndustryPercentage
          companyColours={companyColours}
          preferredIndustries={props.preferredIndustries}
        />
        {props.preferredIndustries.map(CheckIfValuesExist)}
        <p
          style={{
            background: "rgb(0, 162, 255)",
            width: "200px",
            backgroundSize: "20%",
          }}
        >
          Övrigt: {spacedSum} SEK
        </p>
      </div>
    </div>
  );
};

export default MyHoldings;
