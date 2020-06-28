import React, { useState } from "react";
import mock from "../../../data/JSON/mock.json";

let PercentageBar = (colours) => {
  let [preferredCompanies, setPreferredCompanies] = useState(mock.slice(0, 4));

  let arr = [];
  arr.push(preferredCompanies);
  let sum = 0;
  mock.map((values) => {
    return (sum += values.Balance);
  });

  const percentageGraph = (companies, index) => {
    return (
      <div key={preferredCompanies[index].id}>
        <div
          style={{
            width: (preferredCompanies[index].Balance / sum) * 1000,
            background: colours.companyColours[index].colour,
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
        {preferredCompanies.map(percentageGraph)}
      </div>
      <h1>{sum} SEK</h1>
    </div>
  );
};
export default PercentageBar;
