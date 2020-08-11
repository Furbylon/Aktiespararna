import React from "react";
import mock from "../../../data/JSON/mock.json";
import MyHoldingsRender from "./MyHoldingsRender";
import IndustryBalance from "./IndustryBalance";
import { totalCompanies } from "./TotalCompanies";
import { unlistedCompanies } from "./UnlistedCompanies";
import { companyColours, borderColours } from "./GetColour";


const MyHoldings = (props) => {
  
  let sumOfRemaining = 0;

  if (props.remainingIndustries !== undefined) {
    props.remainingIndustries.map((values) => {
      return (sumOfRemaining += values.Balance);
    });
  }

  let total = 0;
  mock.map((values) => {
    return (total += values.Balance);
  });

  let spacedSum = sumOfRemaining.toLocaleString();

  let otherColour;
  if (props.preferredIndustries !== undefined) {
    otherColour = props.preferredIndustries.length;
  } else {
    otherColour = 0;
  }
  const checkifDataExists = (industry, index) => {
    let Balance = IndustryBalance(industry).toLocaleString();
    let CompanyOne = totalCompanies(industry)[0];
    let CompanyTwo = totalCompanies(industry)[1];
    let remaining = unlistedCompanies(industry);

    let colour = borderColours();
    if (props.preferredIndustries.length !== 0) {
      return (
        <div key={industry.id}>
          <canvas
            style={{
              backgroundColor: colour[index].colour,
              width: "10px",
              height: "30px",
              position: "absolute",
              left: "-10px",
            }}
          />
          <div style={{ width: "200px" }}>
            <p style={{ fontWeight: "bold" }}>{industry.Industry}</p>
            <p>
              Företag: {CompanyOne}, {CompanyTwo} {remaining}
            </p>
            <p>Innehav: {Balance} SEK</p>
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
    <MyHoldingsRender
      total={total}
      preferredIndustries={props.preferredIndustries}
      remainingIndustries={props.remainingIndustries}
      sumOfRemaining={sumOfRemaining}
      IndustryBalance={IndustryBalance}
      spacedSum={spacedSum}
      otherColour={otherColour}
      time={props.time}
      checkifDataExists={checkifDataExists}
    />
  );
};

export default MyHoldings;
