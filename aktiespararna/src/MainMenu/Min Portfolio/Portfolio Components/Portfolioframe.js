import React, { useState } from "react";
import PortfolioStructure from "./PortfolioValues";
import data from "../../../data/JSON/mock.json";
import PageSelect from "./PageSelect";

const PortfolioFrame = () => {
  const [currentData, setCurrentData] = useState(data.slice(0, 10));

  let totalData = data.length;


  if (currentData.length !== 0) {
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
        <PageSelect
          totalData={totalData}
          currentData={currentData}
          setCurrentData={setCurrentData}
          data={data}
        />
      </div>
    );
  } else {
    return (
      <div>
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
            <tbody></tbody>
          </table>
        </div>
        <h1>Inget innehav tillagt ännu</h1>
      </div>
    );
  }
};

export default PortfolioFrame;
