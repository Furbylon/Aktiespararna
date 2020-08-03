import React from "react";

const Portfolio = (props) => {
  return (
    <div>
    <form onClick={props.UpdatePage} id={"nativePageSwitchForm"}>
      <button id={"back"} type={"button"} value={props.pagesArray[0]}>
        {"<<"}
      </button>
      <button
        id={"back"}
        type={"button"}
        value={props.currentPage - props.shownData}
        form={"nativePageswitchForm"}
      >
        {"<"}
      </button>
      <NativeButtons />
      <button
        id={"update"}
        type={"button"}
        value={props.currentPage + props.shownData}
      >
        ...
      </button>
      <button
        id={"forward"}
        type={"button"}
        value={props.currentPage + props.shownData}
        form={"nativePageSwitchForm"}
      >
        {">"}
      </button>
      <button id={"back"} type={"button"} value={lastPage}>
        {">>"}
      </button>
    </form>
  </div>
  );
};

export default Portfolio;
