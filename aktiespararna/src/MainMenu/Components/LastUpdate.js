import React from "react";

const LastUpdate = (element) => {
  let x = document.lastModified;
  return <p>{x}</p>;
};

export default LastUpdate;
