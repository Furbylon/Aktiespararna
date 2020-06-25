import React from 'react';  
import Header from "../Components/Header"
import Portfolioframe from "../Min Portfolio/Portfolio Components/Portfolioframe"
import './Portfolio css/Portfolio.css'
import LastUpdate from "../Components/LastUpdate"

const Portfolio = () => {
    return (
      <div id = "portfolio">
      <Header head = {"Portfolio"}/>
      <LastUpdate/>
      <Portfolioframe/>
      </div>
    );
  }

export default Portfolio;
