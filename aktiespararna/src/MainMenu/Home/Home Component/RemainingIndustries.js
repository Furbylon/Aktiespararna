import React from "react";

const Hem = (props) => {

  let companies = props.remainingIndustries.map((values) => {
    return values.Company
  })


  return (
    <div>
    <p style={{fontWeight: "bold"}}>Övrigt</p>
    <p>Företag: {companies[0]}, {companies[1]} +{companies.length} </p>
      <p>Innehav: {props.spacedSum} SEK</p>
      <p></p>
    </div>
  );
};

export default Hem;
