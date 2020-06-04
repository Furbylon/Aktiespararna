import React from 'react'; 
import Company from './Folder Components/Company'
import Innehav from './Folder Components/Holding'
import Aktier from './Folder Components/Shares'
import Industri from './Folder Components/Industry'


class PortfolioFrame extends React.Component {
    render(){
      return(
        <div className = "portfolioFrames" style = {{position: "relative"}}>
        <div> <Company/> </div>
        <div><Innehav/></div>
        <div><Aktier/></div>
        <div><Industri/></div>
        </div>
      )
    }
  }

export default PortfolioFrame;