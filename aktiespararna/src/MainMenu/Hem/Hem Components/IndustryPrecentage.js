import React, { useState } from "react";
import mock from "../../../data/JSON/mock.json";


let PercentageBar = () => {    
    let [firstIndustry, setFirstIndustry] = useState(mock)
    
    return(
        <div id="myProgress" style={{height: "100%", backgroundColor: "white"}}>
        <div id="Industry1" style={{width: "20%", height: "20px", backgroundColor: "green"}} />
        <div id="Industry2" style={{width: "20%", height: "20px", backgroundColor: "red"}} />
        <div id="Industry3" style={{width: "20%", height: "20px", backgroundColor: "blue"}} />
        <div id="Industry4" style={{width: "20%", height: "20px", backgroundColor: "yellow"}} />

        <br/>
        </div>
    )
}
export default PercentageBar;
