import React from "react";
import mock from "../../../data/JSON/mock.json";

let PercentageBar = (props) => {
  console.log(props.preferredCompanies);
  let sum = 0;
  mock.map((values) => {
    return (sum += values.Balance);
  });

  const percentageGraph = (companies, index) => {
    return (
      <div key={props.preferredCompanies[index].id}>
        <div
          style={{
            width: (props.preferredCompanies[index].Balance / sum) * 1000,
            background: props.companyColours[index].colour,
          }}
        >
          ...
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className={"stackGraph"}>
        {props.preferredCompanies.map(percentageGraph)}
      </div>
      <h1>{sum} SEK</h1>
    </div>
  );
};
export default PercentageBar;
