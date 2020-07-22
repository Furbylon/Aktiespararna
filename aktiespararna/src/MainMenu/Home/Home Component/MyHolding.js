import React from "react";
import IndustryGraph from "./IndustryGraph";
import Header from "../../Components/Header";
import LastUpdate from "../../Components/LastUpdate";
import LinkTo from "./LinkTo";
import Remaining from "./RemainingSum";

const MyHoldings = (props) => {
  let sumOfRemaining = 0;
  props.remainingIndustries.map((values) => {
    return (sumOfRemaining += values.Balance);
  });

  let IndustryBalance = ({ values }) => {
    let totalBalance = values.Balance;
    props.remainingIndustries.forEach((innerValues) => {
      if (values.Industry === innerValues.Industry) {
        return (totalBalance += innerValues.Balance);
      }
    });
    return totalBalance.toLocaleString();
  };

  let spacedSum = sumOfRemaining.toLocaleString();
  let companyColours = [
    { colour: "rgba(255, 99, 132, 0.2)" },
    { colour: "rgba(54, 162, 235, 0.2)" },
    { colour: "rgba(255, 206, 86, 0.2)" },
    { colour: "rgba(75, 192, 192, 0.2)" },
    { colour: "rgba(153, 102, 255, 0.2)" },
  ];
  let borderColours = [
    { colour: "rgba(54, 162, 235, 1)" },
    { colour: "rgba(255, 206, 86, 1)" },
    { colour: "rgba(75, 192, 192, 1)" },
    { colour: "rgba(153, 102, 255, 1)" },
    { colour: "rgba(255, 99, 132, 1)" },
  ];
  const CheckIfValuesExist = (companies, index) => {
    if (props.preferredIndustries.length !== 0) {
      return (
        <div key={companies.id}>
          <canvas
            style={{
              backgroundColor: borderColours[index].colour,
              width: "10px",
              height: "30px",
              position: "absolute",
              left: "-10px",
            }}
          />
          <div style={{ width: "200px" }}>
            <p>
              {companies.Industry} <IndustryBalance values={companies} /> SEK
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
        <IndustryGraph
          companyColours={companyColours}
          preferredIndustries={props.preferredIndustries}
          remainingIndustries={props.remainingIndustries}
          borderColours={borderColours}
          sumOfRemaining={sumOfRemaining}
        />
        {props.preferredIndustries.map(CheckIfValuesExist)}
        <canvas
          style={{
            backgroundColor: borderColours[4].colour,
            width: "10px",
            height: "30px",
            position: "absolute",
            left: "-10px",
          }}
        />
        <Remaining spacedSum={spacedSum} />
      </div>
    </div>
  );
};

export default MyHoldings;
