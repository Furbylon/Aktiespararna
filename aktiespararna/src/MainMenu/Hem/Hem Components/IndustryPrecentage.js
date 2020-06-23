import React, { useState } from "react";
import mock from "../../../data/JSON/mock.json";

let PercentageBar = () => {
  return (
    <div>
      <div className="container">
        <div className="shares first">90%</div>
        <div className="shares second">80%</div>
        <div className="shares third">65%</div>
        <div className="shares fourth">60%</div>
      </div>
    </div>
  );
};
export default PercentageBar;
