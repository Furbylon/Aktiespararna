import React from 'react';  
import PortfolioHeader from './PortfolioComponenter.js/PortfolioHeader'
import Portfolioframe from './PortfolioComponenter.js/Portfolioframe'
import './Portfolio css/Portfolio.css'
import SidebarButton from "../Components/SidebarButton"

const Portfolio = () => {
    return (
      <div id = "portfolio">
      <PortfolioHeader/>
      <SidebarButton/>
      <Portfolioframe/>
      </div>
    );
  }

export default Portfolio;
