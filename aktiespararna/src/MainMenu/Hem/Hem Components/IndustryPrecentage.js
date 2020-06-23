import React, { useState, useEffect } from "react";
import mock from "../../../data/JSON/mock.json";

let PercentageBar = () => {
  let values = mock.slice(0, 3);

   useEffect (() => {
     let data = mock
     
  }
   )

  const addIndustry = (companies) => {
    return(
      <div key={companies.id}>
      <div className="shares first">{companies.Industry}</div>
      </div>
    )
  }
  return (
    <div>
      <div className="container">
            {values.map(addIndustry)}   
</div>
    </div>
  );
};
export default PercentageBar;
