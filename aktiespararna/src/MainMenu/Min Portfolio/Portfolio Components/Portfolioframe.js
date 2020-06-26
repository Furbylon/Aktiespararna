import React, { useState } from "react";
import PortfolioStructure from "./PortfolioValues";
import data from "../../../data/JSON/mock.json";
import PageSwitch from "./PageSwitch";
import SelectBox from "./SelectBox";

const PortfolioFrame = () => {
  const shownData = 10;
  const [currentData, setCurrentData] = useState(data.slice(0, shownData));
  const [currentPage, setCurrentPage] = useState(10);

  let totalData = data.length;
  let divided = totalData / 10;
  let pagesArray = [];
  for (let i = 1; i <= divided; i++) {
    pagesArray.push(i *10);
  }
  
  if (currentData.length !== 0) {
    return (
      <div>
        <p>Visar {currentPage-9} - {currentPage} av {totalData}</p>
      <div className="portfolioFrames">
        <table className="portfolioTable" style={{ position: "relative" }}>
          <thead>
            <tr id="firstRow">
              <td>Företag</td>
              <td>Aktietyp</td>
              <td>Innehav</td>
              <td>Antal Aktier</td>
              <td>Ägarandel</td>
              <td>Röstvärde</td>
              <td>Industri</td>
              <td>Ladda ner</td>
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
        <div id="pageSwitch">
          <PageSwitch
            shownData={shownData}
            totalData={totalData}
            currentData={currentData}
            setCurrentData={setCurrentData}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            data={data}
          />
          <SelectBox
            totalData={totalData}
            currentData={currentData}
            setCurrentData={setCurrentData}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            data={data}
          />
        </div>
      </div>
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
