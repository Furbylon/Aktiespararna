import React, { useState } from "react";
import data from "../../../data/JSON/mock.json";
import PageSwitch from "./PageSwitch";
import SelectBox from "./SelectBox";
import {PorttHead, PorttHeadDataMissing} from "./PorttHead";
import PorttBody from "./PorttBody";
import PageShownMsg from "./PagesShownMsg";
import PortDataMissingMessage from "./PortDataMissingMessage";

const PortfolioFrame = () => {
  const shownData = 10;
  let [currentData, setCurrentData] = useState(data.slice(0, shownData));
  let [currentPage, setCurrentPage] = useState(shownData);

  let totalData = data.length;
  let divided = totalData / shownData;
  let pagesArray = [];
  for (let i = 1; i <= divided; i++) {
    pagesArray.push(i * shownData);
  }

  if (currentData.length !== 0) {
    return (
      <div>
        <PageShownMsg currentPage={currentPage} totalData={totalData} />
        <div id="pageSwitch">
        <PageSwitch
          shownData={shownData}
          totalData={totalData}
          currentData={currentData}
          setCurrentData={setCurrentData}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          data={data}
          pagesArray={pagesArray}
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
        <div className="portfolioFrames">
          <table className="portfolioTable" style={{ position: "relative" }}>
            <PorttHead />
            <PorttBody currentData={currentData} />
          </table>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="portfolioFrames">
          <table className="portfolioTable" style={{ position: "relative" }}>
          <PorttHeadDataMissing/>
          </table>
        </div>
        <PortDataMissingMessage/>
      </div>
    );
  }
};

export default PortfolioFrame;
