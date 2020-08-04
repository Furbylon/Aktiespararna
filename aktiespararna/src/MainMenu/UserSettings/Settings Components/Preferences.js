import React, { useState } from "react";
import mock from "../../../data/JSON/mock.json";
import ShowMore from "./ShowMoreCompaniesButton";

const Preferences = (props) => {

  let IndustryArr = mock.map((value) => {
    return value.Industry;
  });
  
  let uniqueIndustryArr = Array.from(new Set(IndustryArr));
  let [max, setMax] = useState(5);
  let [industries, setIndustries] = useState(uniqueIndustryArr.slice(0, max));
  let ImplementBank = () => {
    alert("Integrera Bank");
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

  let addPreferences = (e) => {
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


      const uniqueIndustry = Array.from(
        new Set(check.map((a) => a.Industry))
      ).map((Industry) => {
        return check.find((a) => a.Industry === Industry);
      });

      const remaining = mock.filter((values) => {
        return !checkedIndustries.includes(values.Industry);
      });

      props.setPreferredIndustries(uniqueIndustry);
      props.setRemainingIndustries(remaining);
      let newDate = new Date();
      props.setTime(newDate.toLocaleDateString());
    } else {
      let newLine = "\r\n";
      let msg = "- Måste anges minst 1 industri";
      msg += newLine;
      msg += "- Kan endast ange max 4 industrier";

      return alert(msg);
    }
  };

  return (
    <div>
      <form onSubmit={addPreferences}>
        <p>Mina prefererade industrier att investera inom:</p>
        <ShowMore
          setMax={setMax}
          setIndustries={setIndustries}
          uniqueIndustryArr={uniqueIndustryArr}
          max={max}
        />
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
