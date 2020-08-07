import React from "react";

let PagesShownMsg = (props) => {
    return(
        <p>
        Visar {props.currentPage - 9} - {props.currentPage} av {props.totalData}
        </p>
    )
}

export default PagesShownMsg; 