import React from "react";
import PortfolioStructure from "./PortfolioValues"

let PorttBody = (props) => {
  return (
    <tbody>
      {props.currentData.map((company, key) => {
        return (
          <PortfolioStructure
            key={key}
            companyName={company.Company}
            stockSector={company.StockSector}
            balance={company.Balance}
            shares={company.Shares}
            ownership={company.Ownership}
            votingPower={company.VotingPower}
            industry={company.Industry}
          />
        );
      })}
    </tbody>
  );
};
export default PorttBody;
