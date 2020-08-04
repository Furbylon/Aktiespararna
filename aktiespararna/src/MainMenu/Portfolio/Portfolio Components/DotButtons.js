import React from "react";

let DotBackButton = (props) => {
    if (props.currentPage !== props.pagesArray[0]) {
      return (
        <button type={"button"} value={props.currentPage - props.shownData}>
          ...
        </button>
      );
    } else return <div />;
  };
  let DotForwardButton = (props) => {
    if (props.currentPage !== props.pagesArray[props.pagesArray.length - 1]) {
      return (
        <button type={"button"} value={props.currentPage + props.shownData}>
          ...
        </button>
      );
    } else return <div />;
  };

  export {DotBackButton, DotForwardButton}