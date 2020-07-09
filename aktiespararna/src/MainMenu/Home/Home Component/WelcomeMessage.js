import React, { useState } from "react";
import UserInformation from "../../../data/JSON/profil.json";
import LastUpdate from "../../Components/LastUpdate";

const WelcomeMessage = () => {
  const [name] = useState(UserInformation.slice(0, 1));

  const addName = (name) => {
    return (
      <div key={name.id}>
        <p>
          Välkommen {name.firstName} {name.lastName}! Ditt innehav blev senast uppdaterat: 
        </p>
        <LastUpdate />
      </div>
    );
  };
  return (
    <div id="welcomMessage">
      <div>{name.map(addName)}</div>
    </div>
  );
};

export default WelcomeMessage;
