import React from "react";
import PortfolioValues from "./Folder Components/PortfolioValues";
import actors from "../../../data/profil.json"

class PortfolioFrame extends React.Component {
  state = {
    mock: [],
  };

  componentDidMount() {
    const slicedArr = actors.slice(0, 1);
    this.setState({
      mock: slicedArr,
    });
  }
  render() {
    return (
      <div className="portfolioFrames">
        <table className="portfolioTable" style={{ position: "absolute" }}>
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
            {this.state.mock.map((mock) => {
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
}

export default PortfolioFrame;
