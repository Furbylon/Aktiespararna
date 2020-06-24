import React, { useState } from "react";
import mock from "../../../data/JSON/mock.json";
import {Link} from "react-router-dom";
import MittInnehav from "../../Hem/Hem Components/MittInnehav"

const Preferences = () => {
  let industries = mock;
  let max = 5;


  let handleSubmit = () => {
  }
 
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
      <form onSubmit= {handleSubmit}>
      <p>Mina prefererade industrier att investera inom:</p>
      {industries.map(currentPreferences)}
      <Link to={"/"} style = {{color: "blue"}}>Integrera bank</Link>
      <br/>
      <button>Spara</button>
      </form>
    </div>
  );
};
export default Preferences;
