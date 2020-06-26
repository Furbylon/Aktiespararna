import React from "react";

const PageSwitch = (props) => {
  let SetButtons = () => {
    let arr = [];
    for (let i = 1; i <= 5; i++) {
      arr.push(i);
    }
    let buttons = [];
    buttons = arr.map((value) => (
      <button
        type={"button"}
        value={props.shownData * value}
        id="pageButton"
        key={value}
      >
        {value}
      </button>
    ));
    return buttons;
  };

  let UpdatePage = (e) => {
    console.log(props.pagesArray);
    let value = parseInt(e.target.value);
    if(props.pagesArray.includes(value)) {
      props.setCurrentPage(value);
      props.setCurrentData(props.data.slice(value - props.shownData, value));
    }
  };

  if (props.totalData === 5) {
    return (
      <div style={{ position: "absolute", right: "160px" }}>
        <form onSubmit={UpdatePage} id={"nativePageSwitchForm"}>
          <button
            id={"back"}
            type={"button"}
            value={props.currentPage - props.shownData}
            form={"nativePageswitchForm"}
          >
            {"<"}
          </button>
          <SetButtons />
          <button
            id={"forward"}
            type={"button"}
            value={props.currentPage + props.shownData}
            form={"nativePageSwitchForm"}
          >
            {">"}
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <form onClick={UpdatePage} id={"pageSwitchForm"}>
          <button
            id={"back"}
            type={"button"}
            value={props.currentPage - props.shownData}
            form={"pageSwitchForm"}
          >
            {"<"}
          </button>
          <SetButtons />
          <button type={"button"} form={"pageSwitchForm"}>
            ...
          </button>
          <button
            id={"foward"}
            type={"button"}
            value={props.currentPage + props.shownData}
            form={"pageSwitchForm"}
          >
            {">"}
          </button>
        </form>
      </div>
    );
  }
};
export default PageSwitch;
