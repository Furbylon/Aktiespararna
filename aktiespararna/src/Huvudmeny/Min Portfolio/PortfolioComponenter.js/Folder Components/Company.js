import React from 'react'; 


const company = (props) => {
      return (
        <div id = "company">
        <p>Företag</p>
        <p>{props.companyName}</p>
        </div>
      )
    }

export default company;