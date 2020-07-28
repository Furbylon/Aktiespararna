import React, { useState } from "react";
import mock from "../../../data/JSON/mock.json";

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
  const showMore = (e) => {
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
    if (checkedIndustries.length <= 4 && checkedIndustries.length > 0) {
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

      const remaining = mock.filter((values) => {
        return !checkedIndustries.includes(values.Industry);
      });

      console.log(remaining);
      props.setPreferredIndustries(uniqueIndustry);
      props.setRemainingIndustries(remaining);
    } else {
      let newLine = "\r\n";
      let msg = "- Måste anges minst 1 industri";
      msg += newLine
      msg += "- Kan endast ange max 4 industrier"

      return alert(msg);
    }
  };

  return (
    <div>
      <form onSubmit={addPreferred}>
        <p>Mina prefererade industrier att investera inom:</p>
        <button id={"add"} type={"button"} value={max + 5} onClick={showMore}>
          Visa fler industrier
        </button>
        {industries.map(currentlyShown)}
        <br />
        <button onClick={ImplementBank} style={{ color: "blue" }}>
          Integrera bank
        </button>
        <input type="submit" value="Spara"></input>
      </form>
    </div>
  );
};
export default Preferences;
