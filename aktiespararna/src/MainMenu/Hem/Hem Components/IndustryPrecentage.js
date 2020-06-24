import React, { useRef } from "react";
import mock from "../../../data/JSON/mock.json";


let PercentageBar = () => {
  let values = mock.slice(0, 4);
  let sum = 0;
  mock.map((values) => {
    return(
      (sum += values.Shares)
    )
  });
  console.log(sum)
  const addIndustry = (companies) => {
    return (
      <div key={companies.id}>
        <div style = {{width: companies.Shares/sum * 100 + "%"}} className="shares first">{companies.Shares / sum * 100 + "%"}</div>
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
