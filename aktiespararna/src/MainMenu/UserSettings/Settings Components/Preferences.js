import React, { useState } from "react";
import mock from "../../../data/JSON/mock.json";
import { Link } from "react-router-dom";

const Preferences = (props) => {
  let [max, setMax] = useState(5);
  let [industries, setIndustries] = useState(mock.slice(0, max));


  let ImplementBank = () => {
    alert("Integrera Bank :)");
  };

  const ShowMore = (e) => {
    let value = parseInt(e.target.value);
    setMax(value);
    setIndustries(mock.slice(0, max));
  };


  let currentlyShown = (companies) => {
    return (
      <div id="preferences" key={companies.id} value={companies.Industry}>
        <input id="preferenceBox" type="checkbox" value={companies.Industry}/>
        {companies.Industry}
        <br />
      </div>
    );
  };
  let addPreferred = (e) => {
    let checkbox = document.getElementById("preferenceBox")
    console.log(checkbox.checked)
    if(checkbox.checked) {
      console.log(checkbox)
      props.setPreferredValues(checkbox.value);
    }
  };
  return (
    <div>
      <form>
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
        <input type="button" value="Spara" onClick={addPreferred}></input>
      </form>
    </div>
  );
};
export default Preferences;
