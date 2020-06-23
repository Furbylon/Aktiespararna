import React, { useState } from "react";
import PortfolioStructure from "./Folder Components/PortfolioValues";
import data from "../../../data/JSON/mock.json";

const PortfolioFrame = () => {
  const currentData = data.slice(0, 10);
  if(currentData.length !== 0) {
    return (
      <div className="portfolioFrames">
        <table className="portfolioTable" style={{ position: "relative" }}>
          <thead>
            <tr>
              <td>Företag</td>
              <td>Aktietyp</td>
              <td>Innehav</td>
              <td>Antal Aktier</td>
              <td>Ägarandel</td>
              <td>Röstvärde</td>
              <td>Industri</td>
            </tr>
          </thead>
          <tbody>
            {currentData.map((company, key) => {
              if (currentData.length === 0) {
                return <h1>Inget innehav tillagt ännu</h1>;
              }
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
        </table>
      </div>
    );
  } else {
    return(
      <div className="portfolioFrames">
      <table className="portfolioTable" style={{ position: "relative" }}>
        <thead>
          <tr>
            <td>Företag</td>
            <td>Innehav</td>
            <td>Antal Aktier</td>
            <td>Industri</td>
          </tr>
        </thead>
        <h1>hej hej</h1>
      </table>
    </div>
    )
  }
};

export default PortfolioFrame;
