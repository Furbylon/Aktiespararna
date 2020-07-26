import React from "react";
import IndustryGraph from "./IndustryGraph";
import Header from "../../Components/Header";
import LastUpdate from "../../Components/LastUpdate";
import LinkTo from "./LinkTo";
import Remaining from "./RemainingIndustries";
import { companyColours, borderColours, randomColour } from "./GetColour";

const MyHoldings = (props) => {
  let sumOfRemaining = 0;
  props.remainingIndustries.map((values) => {
    return (sumOfRemaining += values.Balance);
  });

  let sumOfTotal = sumOfRemaining;
  props.preferredIndustries.map((values) => {
    return (sumOfTotal += values.Balance);
  });

  let IndustryBalance = (values) => {
    let totalBalance = values.Balance;
    props.remainingIndustries.forEach((innerValues) => {
      if (values.Industry === innerValues.Industry) {
        return (totalBalance += innerValues.Balance);
      }
    });
    return totalBalance;
  };

  let totalCompanies = (values) => {
    let totalCompanies = [];
    totalCompanies.push(values.Company);
    props.remainingIndustries.forEach((innerValues) => {
      if (values.Industry === innerValues.Industry) {
        totalCompanies.push(innerValues.Company);
      }
    });
    return totalCompanies;
  };

  let unlistedCompanies = (values) => {
    let totalCompanies = [];
    totalCompanies.push(values.Company);
    props.remainingIndustries.forEach((innerValues) => {
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

  let spacedSum = sumOfRemaining.toLocaleString();

  const CheckIfValuesExist = (industry, index) => {
    let Balance = IndustryBalance(industry).toLocaleString();
    let CompanyOne = totalCompanies(industry)[0];
    let CompanyTwo = totalCompanies(industry)[1];
    let remaining = unlistedCompanies(industry);

    let colour = borderColours();
    console.log(colour);
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
  let lastColour = borderColours().length - 1;
  return (
    <div id="myHoldings" style={{ position: "relative" }}>
      <div>
        <Header head={"Mitt Innehav"} />
        <LinkTo link={"/mainmenu/portfolio"} tag={"Portfolio"} />
        <p style={{ fontWeight: "lighter" }}>Senast uppdaterad: </p>
        <LastUpdate />
        <IndustryGraph
          companyColours={companyColours}
          preferredIndustries={props.preferredIndustries}
          remainingIndustries={props.remainingIndustries}
          borderColours={borderColours}
          sumOfRemaining={sumOfRemaining}
          sumOfTotal={sumOfTotal}
          IndustryBalance={IndustryBalance}
          randomColour={randomColour}
        />
        {props.preferredIndustries.map(CheckIfValuesExist)}
        <canvas
          style={{
            backgroundColor: borderColours()[lastColour].colour,
            width: "10px",
            height: "30px",
            position: "absolute",
            left: "-10px",
          }}
        />
        <Remaining
          spacedSum={spacedSum}
          remainingIndustries={props.remainingIndustries}
        />
      </div>
    </div>
  );
};

export default MyHoldings;
