import React from "react";
import PortfolioValues from './Folder Components/PortfolioValues'
import actors from './Folder Components/mock.json'

class PortfolioFrame extends React.Component {
  render() {
    return (
      <div className="portfolioFrames" style={{ position: "relative" }}>
      {actors.map((actors) => {
        return(
          <div key= {actors.name}>
          <PortfolioValues values = {{company: actors.name}}/>
          </div>
        )
      })}
      </div>
    );
  }
}

export default PortfolioFrame;
