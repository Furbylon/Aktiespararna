import React, { useState } from "react";

const PageSwitch = (props) => {
  let [shownButtons, setShownButtons] = useState(5);

  let SetButtons = () => {
    let arr = [];
    for (let i = 1; i <= shownButtons; i++) {
      arr.push(i);
    }
    let buttons = [];
    buttons = arr.map((value) => (
      <button
        value={value * 10}
        onClick={UpdatePage}
        id="pageButton"
        key={value}
      >
        {value}
      </button>
    ));

    return buttons;
  };
  let UpdatePage = (e) => {
    if (e.target.value === "back") {
      props.setCurrentPage(props.currentPage - 10);
      props.setCurrentData(props.currentPage - 10, props.currentPage);
    }
    if (e.target.value === "forward") {
      props.setCurrentPage();
      props.setCurrentData();
    } else {
      props.setCurrentPage(e.target.value);
      props.setCurrentData(
        props.data.slice(e.target.value - 10, e.target.value)
      );
    }
  };
  if (props.totalData === shownButtons) {
    return (
      <div style={{ position: "absolute", right: "160px" }}>
        <form onSubmit={UpdatePage}>
          <button value={"back"}>Left</button>
          <SetButtons />
          <button value={"forward"}>Right</button>
        </form>
      </div>
    );
  } else {
    return (
      <div style={{ position: "absolute", right: "160px" }}>
        <form onSubmit={UpdatePage}>
          <button value={"back"}>Left</button>
          <SetButtons />
          <button>...</button>
          <button value={"forward"}>Right</button>
        </form>
      </div>
    );
  }
};
export default PageSwitch;
