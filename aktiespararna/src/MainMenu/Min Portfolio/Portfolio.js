import React from 'react';  
import Header from "../Components/Header"
import Portfolioframe from './PortfolioComponenter.js/Portfolioframe'
import './Portfolio css/Portfolio.css'


const Portfolio = () => {
    return (
      <div id = "portfolio">
      <Header head = {"Portfolio"}/>
      <Portfolioframe/>
      </div>
    );
  }

export default Portfolio;
