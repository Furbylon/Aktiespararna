import React from 'react'; 
import HemProfil from './HemComponents/HemProfil'
import MittInnehav from './HemComponents/MittInnehav'
import VälkomstMeddelande from './HemComponents/VälkomstMeddelande'
import HemHeader from './HemComponents/HemHeader'
const Hem = () => {
    return (
      <div id = "hem">
      <HemHeader/>
      <VälkomstMeddelande/>
      <div className = "profilOchInnehav">
      <HemProfil/>
      <MittInnehav/>
      </div>
      </div>
    );
  }

export default Hem;
