import React from 'react'; 



const holding = (props) => {
  return (
    <div id = "holding">
    <p>Innehav</p>
    <p>{props.holding}</p>
    </div>
  )
}

export default holding;