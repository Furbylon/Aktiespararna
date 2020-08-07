import React from "react";

const FirstPageButton = (props) => {
  return (
    <button id={"back"} type={"button"} value={props.pagesArray[0]}>
      {"<<"}
    </button>
  );
};

const LastPageButton = (props) => {
  return (
    <button id={"back"} type={"button"} value={props.lastPage}>
      {">>"}
    </button>
  );
};

export {FirstPageButton, LastPageButton}