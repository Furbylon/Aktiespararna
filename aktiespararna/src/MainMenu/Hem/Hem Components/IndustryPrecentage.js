import React, { useState } from "react";
import mock from "../../../data/JSON/mock.json";

let PercentageBar = () => {
  let maxVal = mock.length;
  let [companyShares, setCompanyShares] = useState(mock.slice(0, 4));
  let [others, setOthers] = useState(mock.slice(5, maxVal));

  let sum = 0;
  mock.map((values) => {
    return (sum += values.Balance);
  });

  const addIndustry = (companies) => {
    return (
      <div key={companies.id}>
        <div
          style={{ width: (companies.Balance / sum) * 100 + "%" }}
          className="shares first"
        >
          {(companies.Balance / sum) * 100 + "%"}
        </div>
      </div>
    );
  };
  return (
    <div>
      <div>{companyShares.map(addIndustry)}</div>
      <h1>{sum} SEK</h1>
    </div>
  );
};
export default PercentageBar;
