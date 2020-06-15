import React, { useState } from "react";
import mock from "../../../data/mock.json";


let PercentageBar = () => {    
    let [firstIndustry, setFirstIndustry] = useState(mock)
    
    return(
        <div id="myProgress" style={{height: "100%", backgroundColor: "white"}}>
        <div id="firstIndustry" style={{width: "100%", height: "20px", backgroundColor: "#4CAF50"}}/>
        <br/>
        </div>
    )
}
export default PercentageBar;
