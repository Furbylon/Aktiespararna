import React from "react";
import Header from "../../Components/Header";
import LinkTo from "./LinkTo";
import IndustryGraph from "./IndustryGraph";
import Remaining from "./RemainingIndustries";
import LastUpdate from "../../Components/LastUpdate";
import mock from "../../../data/JSON/mock.json";

import { companyColours, borderColours } from "./GetColour";

let DefaultHoldings = (props) => {
  let totalCompanies = (values) => {
    let totalCompanies = [];
    mock.forEach((innerValues) => {
      if (values.Industry === innerValues.Industry) {
        return totalCompanies.push(innerValues.Company);
      }
    });
    console.log(totalCompanies);
    return totalCompanies;
  };

  let unlistedCompanies = (values) => {
    let totalCompanies = [];
    mock.forEach((innerValues) => {
      if (values.Industry === innerValues.Industry) {
        totalCompanies.push(innerValues.Company);
      }
    });
    if (totalCompanies.length - 2 >= 1) {
      let remain = totalCompanies.length - 2;
      remain.toString();

      return "+" + remain;
    }
  };
  const CheckIfValuesExist = (industry, index) => {
    let Balance = props.IndustryBalance(industry).toLocaleString();
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
    <div id="myHoldings" style={{ position: "relative" }}>
      <div>
        <div>
          <Header head={"Mitt Innehav"}> </Header>
          <div style={{ float: "left" }}>
            <LinkTo
              link={"/mainmenu/settings/preferences"}
              tag={"Preferenser"}
            />
          </div>
          <LinkTo link={"/mainmenu/portfolio"} tag={"Portfolio"} />
        </div>
        <hr />
        <p style={{ fontWeight: "bold", fontSize: "20px" }}>
          {props.total.toLocaleString()} SEK
        </p>
        <p style={{ fontWeight: "lighter" }}>Senast uppdaterad: </p>
        <LastUpdate />
        <IndustryGraph
          companyColours={companyColours}
          preferredIndustries={props.preferredIndustries}
          remainingIndustries={props.remainingIndustries}
          borderColours={borderColours}
          sumOfRemaining={props.sumOfRemaining}
          sumOfTotal={props.total}
          IndustryBalance={props.IndustryBalance}
          randomColour={props.randomColour}
        />
        {props.preferredIndustries.map(CheckIfValuesExist)}
        <canvas
          style={{
            backgroundColor: borderColours()[props.otherColour].colour,
            width: "10px",
            height: "30px",
            position: "absolute",
            left: "-10px",
          }}
        />
        <Remaining
          spacedSum={props.spacedSum}
          remainingIndustries={props.remainingIndustries}
        />
      </div>
    </div>
  );
};

export default DefaultHoldings;
