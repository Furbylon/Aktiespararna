import React, { useState } from "react";
import UserInformation from "../../../data/JSON/profil.json";
import LastUpdate from "../../Components/LastUpdate";

const VälkomstMeddelande = () => {
  const [name] = useState(UserInformation.slice(0, 1));

  const addName = (name) => {
    return (
      <div>
        <p>
          Välkommen {name.firstName} {name.lastName}, ditt innehav blev senast uppdaterat: <LastUpdate />
        </p>
      </div>
    );
  };
  return (
    <div id="välkomstMeddelande">
      <div>{name.map(addName)}</div>
    </div>
  );
};

export default VälkomstMeddelande;
