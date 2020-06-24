import React, { useRef } from "react";
import mock from "../../../data/JSON/mock.json";


let PercentageBar = () => {
  let values = mock.slice(0, 4);
  let sum = 0;
  let result = mock.map((values) => {
    return (sum += values.Shares);
  });

  const addIndustry = (companies) => {
    return (
      <div key={companies.id}>
        <div className="shares first">{companies.Shares / sum}</div>
      </div>
    );
  };
  return (
    <div>
      <div>{values.map(addIndustry)}</div>
      <h1>{sum} SEK</h1>
    </div>
  );
};
export default PercentageBar;
