import React, { useState } from "react";
import mock from "../../../data/JSON/mock.json";
import { Link } from "react-router-dom";

const Preferences = () => {
  let [max, setMax] = useState(5);
  let [industries, setIndustries] = useState(mock.slice(0, max));

  let ImplementBank = () => {
    alert("Integrera Bank :)");
  };

  let ShowMore = (e) => {
    let value = parseInt(e.target.value);
    setMax(value);
    setIndustries(mock.slice(0, max));
  };

  let currentPreferences = (companies) => {
    return (
      <div id="preferences" key={companies.id}>
        <input type="checkbox"></input>
        {companies.Industry}
        <br />
      </div>
    );
  };
  return (
    <div>
      <form>
        <p>Mina prefererade industrier att investera inom:</p>
        <button id={"add"} type={"button"} value={max + 5} onClick={ShowMore}>
          Visa fler industrier
        </button>
        {industries.map(currentPreferences)}
        <br />
        <Link onClick={ImplementBank} to={"/"} style={{ color: "blue" }}>
          Integrera bank
        </Link>
        <br />
        <button>Spara</button>
      </form>
    </div>
  );
};
export default Preferences;
