import React from "react";

let ImplementBank = () => {
  alert("Integrera Bank");
};
let ImplementBankButton = () => {
  return (
    <button onClick={ImplementBank} style={{ color: "blue" }}>
      Integrera bank
    </button>
  );
};
export default ImplementBankButton;
