import React, { useState } from "react";
import mock from "../../../data/JSON/mock.json";

const Preferences = () => {
  let [industries, setIndustries] = useState(mock.slice(0, 5));

  let currentPreferences = (companies) => {
    return (
      <div id="preferences" key={companies.Company}>
        <form>
          <input type="checkbox"></input>
          {companies.Industry}
          <br />
        </form>
      </div>
    );
  };
  return (
    <div>
      {" "}
      <p>Mina prefererade industrier att investera inom:</p>
      {industries.map(currentPreferences)}
      <button>Save</button>
    </div>
  );
};
export default Preferences;
