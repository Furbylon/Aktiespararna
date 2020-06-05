import React from "react";
import PortfolioValues from "./Folder Components/PortfolioValues";
import actors from "./Folder Components/mock.json";

const maxShown = 5;
class PortfolioFrame extends React.Component {
  state = {
    mock: [],
  };

  componentDidMount() {
    const slicedArr = actors.slice(0, maxShown);
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
            <td>Aktier</td>
            <td>Industri</td>
            </tr>
            </thead>
          <tbody>
            {this.state.mock.map((mock) => {
              return (
                <PortfolioValues key={mock.name}
                company={mock.name}
                holding={mock.popularity}
                shares={mock.popularity}
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
