import React from 'react';  
import PortfolioHeader from './PortfolioComponenter.js/PortfolioHeader'
import Portfolioframe from './PortfolioComponenter.js/Portfolioframe'
import './Portfolio css/Portfolio.css'
import AddDate from "../Components/LastUpdate"


const Portfolio = () => {
    return (
      <div id = "portfolio">
      <AddDate/>
      <PortfolioHeader/>
      <Portfolioframe/>
      </div>
    );
  }

export default Portfolio;
