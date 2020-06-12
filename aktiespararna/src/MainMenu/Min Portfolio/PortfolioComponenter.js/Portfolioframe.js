import React,{useState} from "react";
import PortfolioValues from "./Folder Components/PortfolioValues";
import profileList from "../../../data/profil.json";

const PortfolioFrame = () => {

  let [portfolioValues, setPortfolioValues] = useState(profileList.slice(0, 1));

  
    return (
      <div className="portfolioFrames">
        <table className="portfolioTable" style={{ position: "relative" }}>
        <thead>
        <tr>
            <td>Företag</td>
            <td>Innehav</td>
            <td>AktieTyp</td>
            <td>Antal Aktier</td>
            <td>Aktienummer</td>
            <td>Ägarandel</td>
            <td>Röstvärde</td>
            <td>Industri</td>
            </tr>
            </thead>
          <tbody>
            {portfolioValues.map((mock) => {
              return (
                <PortfolioValues 
                key={mock.name}
                company={mock.name}
                holding={mock.name}
                shareType={mock.name}
                shareQuantity={mock.name}
                shareNumber={mock.name}
                ownership={mock.name}
                votingPower={mock.name}
                industry={mock.name}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

export default PortfolioFrame;
