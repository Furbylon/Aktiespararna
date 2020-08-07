import React from "react";

let currentlyShown = (companies, index) => {
  return (
    <div id={index} key={index}>
      <input type="checkbox" name="checkbox" value={companies} />
      <label>{companies}</label>
      <br />
    </div>
  );
};

export default currentlyShown;
