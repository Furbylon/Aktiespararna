import React, { useState } from "react";
import mock from "../../../data/JSON/mock.json";
import { Link } from "react-router-dom";

const Preferences = (props) => {
  let [max, setMax] = useState(5);
  let [industries, setIndustries] = useState(mock.slice(0, max));
  let all = mock;
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
    console.log(checkedIndustries);
    if (checkedIndustries.length <= 4) {
      let check = mock.filter((values) => {
        if (checkedIndustries.includes(values.Industry)) return values;
      });
      props.setPreferredValues(check)
      console.log(props.preferredValues)
    } else {
      return alert("Kan bara ha max 4 prefererade industrier i taget");
    }
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
