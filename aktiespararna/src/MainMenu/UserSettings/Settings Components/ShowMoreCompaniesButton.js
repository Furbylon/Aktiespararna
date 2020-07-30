import React from "react";

let ShowMoreCompaniesButton = (props) => {
  const showMore = (e) => {
    let value = parseInt(e.target.value);
    props.setMax(value);
    props.setIndustries(props.uniqueIndustryArr.slice(0, props.max));
  };
  return (
    <button
      id={"add"}
      type={"button"}
      value={props.max + 5}
      onClick={showMore}
    >Visa fler industrier</button>
  );
};
export default ShowMoreCompaniesButton;
