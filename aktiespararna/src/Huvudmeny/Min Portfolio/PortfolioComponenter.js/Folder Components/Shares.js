import React from 'react'; 


const shares = (props) => {
  return (
    <div id = "shares">
    <p>Aktier</p>
    <p>{props.shares}</p>
    </div>
  )
}

export default shares;