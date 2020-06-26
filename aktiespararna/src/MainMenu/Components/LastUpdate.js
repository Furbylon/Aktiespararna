import React, { useEffect,useRef } from "react";

const LastUpdate = () => {
  let x = document.lastModified
  return(
    <p>{x}</p>
  )
};

export default LastUpdate;
