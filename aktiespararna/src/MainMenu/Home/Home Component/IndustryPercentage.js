import React from "react";
import mock from "../../../data/JSON/mock.json";

let PercentageBar = (props) => {
  let sum = 0;
  mock.map((values) => {
    return (sum += values.Balance);
  });
  
  let spacedSum = sum.toLocaleString();
  
  const percentageGraph = (companies, index) => {
    return (
      <div key={props.preferredIndustries[index].id}>
        <div
          style={{
            width: (props.preferredIndustries[index].Balance / sum) * 1000,
            background: props.companyColours[index].colour
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
        {props.preferredIndustries.map(percentageGraph)}
      </div>
      <h1>{spacedSum} SEK</h1>
    </div>
  );
};
export default PercentageBar;
