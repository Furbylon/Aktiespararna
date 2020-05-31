import React from 'react'; 
import Företag from './folderComponents/Företag'
import Innehav from './folderComponents/Innehav'
import Aktier from './folderComponents/Aktier'
import Industri from './folderComponents/Företag'


class PortfolioFrame extends React.Component {
    render(){
      return(
        <div class = "portfolioFrames" style = {{position: "relative"}}>
        <div> <Företag/> </div>
        <div><Innehav/></div>
        <div><Aktier/></div>
        <div><Industri/></div>
        </div>
      )
    }
  }

export default PortfolioFrame;