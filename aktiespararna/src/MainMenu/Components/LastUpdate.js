import React, { useEffect,useRef } from "react";

const LastUpdate = () => {
  let x = document.lastModified

  return (
    <div>
      <p>{x}</p>
    </div>
  );
};

export default LastUpdate;
