import React from 'react'; 
import Företag from './Folder Components/Företag'
import Innehav from './Folder Components/Innehav'
import Aktier from './Folder Components/Aktier'
import Industri from './Folder Components/Företag'


class PortfolioFrame extends React.Component {
    render(){
      return(
        <div className = "portfolioFrames" style = {{position: "relative"}}>
        <div> <Företag/> </div>
        <div><Innehav/></div>
        <div><Aktier/></div>
        <div><Industri/></div>
        </div>
      )
    }
  }

export default PortfolioFrame;