import React from 'react';  
import PortfolioHeader from './PortfolioComponenter.js/PortfolioHeader'
import Portfolioframe from './PortfolioComponenter.js/Portfolioframe'
import './Portfolio css/Portfolio.css'

const Portfolio = () => {

    return (
      <div id = "portfolio" style = {{display: "none"}}>
      <PortfolioHeader/>
      <Portfolioframe/>
      </div>
    );
  }

export default Portfolio;
