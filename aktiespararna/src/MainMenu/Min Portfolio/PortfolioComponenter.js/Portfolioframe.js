import React, { useState } from "react";
import PortfolioStructure from "./Folder Components/PortfolioValues";
import data from "../../../data/JSON/mock.json";

const PortfolioFrame = () => {
  const [currentData, setCurrentData] = useState(data.slice(0, 10));

  const [currentPage, setCurrentPage] = useState(10);

  let AmountOfPages = () => {
    let totalData = data.length;
    let divided = totalData / 10;
    let arr = [];
    for (let i = 1; i <= divided; i++) {
      arr.push(i);
    }
    let slides = [];
    slides = arr.map((value) => <option key={value}>{10 * value}</option>);

    return slides;
  };
  let updatePage = (e) => {
    setCurrentPage(e.target.value);
    setCurrentData(data.slice(e.target.value - 10, e.target.value));
  };
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
        <form>
          <select value={currentPage} onChange={updatePage}>
            <AmountOfPages />
          </select>
        </form>
        <p>Visar</p>
      </div>
    );
  } else {
    return (
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
        </table>
      </div>
    );
  }
};

export default PortfolioFrame;
