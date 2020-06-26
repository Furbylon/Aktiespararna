import React, { useState } from "react";

const PageSwitch = (props) => {
  let divide = props.totalData / 10;
  let [shownButtons, setShownButtons] = useState(divide / 2);
  let SetButtons = () => {
    let arr = [];
    for (let i = 1; i <= shownButtons; i++) {
      arr.push(i);
    }
    let buttons = [];
    buttons = arr.map((value) => (
      <button
        type={"button"}
        value={value * props.shownData}
        id="pageButton"
        key={value}
      >
        {value}
      </button>
    ));

    return buttons;
  };

  let UpdatePage = (e) => {
    props.setCurrentPage(e.target.value);
    props.setCurrentData(
      props.data.slice(e.target.value - props.shownData, e.target.value)
    );
    console.log(e.target.value);
  };

  if (props.totalData === shownButtons) {
    return (
      <div>
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
          <button
            type={"button"}
            value={props.currentPage + props.shownData}
            form={"pageSwitchForm"}
          >
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
