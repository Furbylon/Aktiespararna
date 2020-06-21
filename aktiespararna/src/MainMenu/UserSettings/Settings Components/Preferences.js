import React, { useState } from "react";
import mock from "../../../data/JSON/mock.json";

const Preferences = () => {
  let [industries, setIndustries] = useState(mock.slice(0, 5));

  let currentPreferences = (companies) => {
    return (
      <div id="preferences" key={companies.Company}>
          <input type="checkbox"></input>
          {companies.Industry}
          <br />
      </div>
    );
  };
  return (
    <div>
      {" "}
      <form>
      <p>Mina prefererade industrier att investera inom:</p>
      {industries.map(currentPreferences)}
      <button>Spara</button>
      </form>
    </div>
  );
};
export default Preferences;
