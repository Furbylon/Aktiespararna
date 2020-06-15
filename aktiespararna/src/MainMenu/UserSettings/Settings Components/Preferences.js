import React, { useState } from "react";
import mock from "../../../data/mock.json";

const Preferences = () => {
  let [industries, setIndustries] = useState(mock.slice(0, 1));

  let currentPreferences = (companies) => {
    return (
      <div id="preferences" key={companies.Company}>
        <p>Mina prefererade industrier att investera inom:</p>
        <form>
          <input type="checkbox"></input>
          {companies.Industry.slice(0,1)}
          <br/>
          <input type="checkbox"></input>
          {companies.Industry.slice(1,2)}
          <br/>
          <table></table>
          <input type="checkbox"></input>
          {companies.Industry.slice(1,3)}
          <br/>
          <input type="checkbox"></input>
          {companies.Industry.slice(2,4)}
          <br/>
          <input type="checkbox"></input>
          {companies.Industry.slice(3,5)}
          <br/>
          <input type="checkbox"></input>
          {companies.Industry.slice(4,6)}
          <br/>
          <button>Save</button>
        </form>
      </div>
    );
  };
  return <div>{industries.map(currentPreferences)}</div>;
};
export default Preferences;
