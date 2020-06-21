import React,{useEffect}from 'react';  

const LastUpdate = () => {

   useEffect (() => {
    let x = document.lastModified
    document.getElementById("date").innerHTML = x
  }, [])
  
  return (
      <div id = "date">
      </div>
    );
  }

export default LastUpdate;
