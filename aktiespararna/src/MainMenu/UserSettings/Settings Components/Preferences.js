import React, { useState } from "react";
import mock from "../../../data/JSON/mock.json";
import { Link } from "react-router-dom";

const Preferences = () => {
  let [max, setMax] = useState(5);
  let [min, setMin] = useState(0);
  let [industries, setIndustries] = useState(mock.slice(min, max));

  let handleSubmit = () => {};

  let ImplementBank = () => {
    alert("Integrera Bank :)");
  };

  let ShowMore = (e) => {
    e.preventDefault();
    let value = parseInt(e.target.value);
    console.log(value);

    setMax(value);
    setIndustries(mock.slice(min, max));
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
        <button type={"button"} onClick={ShowMore} value={parseInt(max + 5)}>
          Visa mer
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
