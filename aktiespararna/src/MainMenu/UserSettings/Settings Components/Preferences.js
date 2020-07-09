import React, { useState } from "react";
import mock from "../../../data/JSON/mock.json";
import { Link } from "react-router-dom";

const Preferences = (props) => {
  let [max, setMax] = useState(5);
  let [industries, setIndustries] = useState(mock.slice(0, max));
  let all = mock
  let ImplementBank = () => {
    alert("Integrera Bank");
  };

  const ShowMore = (e) => {
    let value = parseInt(e.target.value);
    setMax(value);
    setIndustries(mock.slice(0, max));
  };

  let currentlyShown = (companies) => {
    return (
      <div id={companies.id} key={companies.id}>
        <input type="checkbox" name="checkbox" value={companies.Industry} />
        <label htmlFor={companies.id}>{companies.Industry}</label>
        <br />
      </div>
    );
  };

  let addPreferred = (e) => {
    e.preventDefault();

    let checkbox = document.querySelectorAll('input[name="checkbox"]:checked');
    let checkedIndustries = [];
    checkbox.forEach((checkbox) => {
      checkedIndustries.push(checkbox.value);
    });
    let newPreferred = []
    let add = all.filter((values) => values.Industry.includes(checkedIndustries))
    
    console.log(newPreferred)
    props.setPreferredValues(newPreferred)
  };

  return (
    <div>
      <form onSubmit={addPreferred}>
        <p>Mina prefererade industrier att investera inom:</p>
        <button id={"add"} type={"button"} value={max + 5} onClick={ShowMore}>
          Visa fler industrier
        </button>
        {industries.map(currentlyShown)}
        <br />
        <Link onClick={ImplementBank} to={"/"} style={{ color: "blue" }}>
          Integrera bank
        </Link>
        <br />
        <input type="submit" value="Spara"></input>
      </form>
    </div>
  );
};
export default Preferences;
