import React from "react";

const StepBackButton = (props) => {
  return (
    <button
      id={"back"}
      type={"button"}
      value={props.currentPage - props.shownData}
    >
      {"<"}
    </button>
  );
};

const StepForwardButton = (props) => {
  return (
    <button
      id={"forward"}
      type={"button"}
      value={props.currentPage + props.shownData}
    >
      {">"}
    </button>
  );
};

export { StepBackButton, StepForwardButton };
