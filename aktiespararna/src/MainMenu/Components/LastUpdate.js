import React,{useEffect}from 'react';  

const LastUpdate = () => {

   useEffect (() => {
    let x = document.lastModified
    document.getElementById("date").innerHTML = x
  })
 
  return (
      <div id = "lastUpdate">
      <p id = "date"></p>
      </div>
    );
  }

export default LastUpdate;
