import React, { useState } from "react";
import PortfolioValues from "./Folder Components/PortfolioValues";
import profileList from "../../../data/profil.json";
import data from "../../../data/mock.json";

const PortfolioFrame = () => {
  let [portfolioValues, setPortfolioValues] = useState(data.slice(0, 1));

  return (
    <div className="portfolioFrames">
      <table className="portfolioTable" style={{ position: "relative" }}>
        <thead>
          <tr>
            <td>Företag</td>
            <td>Aktietyp</td>
            <td>Innehav</td>
            <td>Antal Aktier</td>
            <td>Ägarandel %</td>
            <td>Röstvärde %</td>
            <td>Industri</td>
          </tr>
        </thead>
        <tbody>
          {portfolioValues.map((mock) => {
            return (
              <PortfolioValues
                company={mock.Company[0]}
                stockSector={mock.StockSector[0]}
                balance={mock.Balance[0]}
                shareQuantity={mock.Shares[0]}
                ownership={mock.Ownership[0]}
                votingPower={mock.VotingPower[0]}
                industry={mock.Industry[0]}
              />
            );
          })}

          {portfolioValues.map((mock) => {
            return (
              <PortfolioValues
                company={mock.Company[1]}
                stockSector={mock.StockSector[1]}
                balance={mock.Balance[1]}
                shareQuantity={mock.Shares[1]}
                ownership={mock.Ownership[1]}
                votingPower={mock.VotingPower[1]}
                industry={mock.Industry[1]}
              />
            );
          })}

          {portfolioValues.map((mock) => {
            return (
              <PortfolioValues
                company={mock.Company[2]}
                stockSector={mock.StockSector[2]}
                balance={mock.Balance[2]}
                shareQuantity={mock.Shares[2]}
                ownership={mock.Ownership[2]}
                votingPower={mock.VotingPower[2]}
                industry={mock.Industry[2]}
              />
            );
          })}

          {portfolioValues.map((mock) => {
            return (
              <PortfolioValues
                company={mock.Company[3]}
                stockSector={mock.StockSector[3]}
                balance={mock.Balance[3]}
                shareQuantity={mock.Shares[3]}
                ownership={mock.Ownership[3]}
                votingPower={mock.VotingPower[3]}
                industry={mock.Industry[3]}
              />
            );
          })}

          {portfolioValues.map((mock) => {
            return (
              <PortfolioValues
                company={mock.Company[4]}
                stockSector={mock.StockSector[4]}
                balance={mock.Balance[4]}
                shareQuantity={mock.Shares[4]}
                ownership={mock.Ownership[4]}
                votingPower={mock.VotingPower[4]}
                industry={mock.Industry[4]}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PortfolioFrame;
