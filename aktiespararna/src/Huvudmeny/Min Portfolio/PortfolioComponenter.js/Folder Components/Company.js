import React from 'react'; 


const company = (props) => {
      return (
        <div id = "företag">
        <p>Företag</p>
        <p>{props.company}</p>
        </div>
      )
    }

export default company;