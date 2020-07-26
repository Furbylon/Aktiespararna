import React, { useState } from "react";
import mock from "../../../data/JSON/mock.json";
import { Link } from "react-router-dom";

const Preferences = (props) => {
  let IndustryArr = [];
  IndustryArr = mock.map((value) => {
    return value.Industry;
  });
  let uniqueIndustryArr = Array.from(new Set(IndustryArr));
  let [max, setMax] = useState(5);
  let [industries, setIndustries] = useState(uniqueIndustryArr.slice(0, max));
  let ImplementBank = () => {
    alert("Integrera Bank");
  };

  const ShowMore = (e) => {
    let value = parseInt(e.target.value);
    setMax(value);
    setIndustries(uniqueIndustryArr.slice(0, max));
  };

  let currentlyShown = (companies, index) => {
    return (
      <div id={index} key={index}>
        <input type="checkbox" name="checkbox" value={companies} />
        <label>{companies}</label>
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
    if (checkedIndustries.length <= 4) {
      let check = [];
      check = mock.filter((values) => {
        return checkedIndustries.includes(values.Industry);
      });

      console.log(check);

      const uniqueIndustry = Array.from(
        new Set(check.map((a) => a.Industry))
      ).map((Industry) => {
        return check.find((a) => a.Industry === Industry);
      });

      console.log(uniqueIndustry);

      let remaining = mock.filter((values) => {
        return !checkedIndustries.includes(values.Industry);
      });
      props.setPreferredIndustries(uniqueIndustry);
      props.setRemainingIndustries(remaining);
    } else {
      return alert("Det kan endast finnas max fyra prefererade företag ");
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
