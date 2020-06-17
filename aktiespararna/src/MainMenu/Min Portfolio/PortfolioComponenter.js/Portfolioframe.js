import React, { useState, useEffect} from "react";
import PortfolioValues from "./Folder Components/PortfolioValues";
import profileList from "../../../data/JSON/profil.json";
import data from "../../../data/JSON/mock.json"

const PortfolioFrame = () => {
  let [currentData, setPortfolioValues] = useState(data.slice(0, 1));


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
              <PortfolioValues
                key={key}
                companyName={company.Company}
                stockSector={company.stockSector}
                balance={company.balance}
                shares={company.shares}
                ownership={company.ownership}
                votingpower={company.votingpower}
                industry={company.industry}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PortfolioFrame;
