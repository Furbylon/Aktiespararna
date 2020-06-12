import React, { useState, useEffect} from 'react'; 
import portfolio from '../../Min Portfolio/Portfolio'
import portfolioFrame from '../../Min Portfolio/PortfolioComponenter.js/Portfolioframe'
import profileList from "../../../data/profil.json";


const MittInnehav = () => {

  let [values, setValues]= useState(profileList)
  console.log(values.length)
  const CheckIfValuesExist = () => {
    if(values.length !== 0){
      return(
        <div>
        <p>Industri 1</p>
        <p>Industri 2</p>
        <p>Industri 3</p>
        <p>Industri 4</p>
        <p>Industri 5</p>
        </div>
      )
    }
    else{
      return(
      <div>
      <h2>inget innehav tillagt ännu</h2>
      </div>
      )
    }
  }
      return(
        <div id = "mittInnehav" style = {{position: "relative"}}>
        <div>
        <header>Mitt Innehav</header>
        <button>Min portfölj</button>
        <h1>SEK</h1> 
        <p>Senast uppdaterad: </p>
        <CheckIfValuesExist/>
        </div>  
        </div>
      )
    }

export default MittInnehav;
