import React, { useState } from "react";
import RenderPageSwitch from "./RenderPageSwitch";

const PageSwitch = (props) => {
  let [numberButtons, setNumberButtons] = useState(0);
  let buttonArr = [];
  let lastPage = props.pagesArray[props.pagesArray.length - 1];

  let NativeButtons = () => {
    if (props.pagesArray.length <= 5) {
      props.pagesArray.map((value) => {
        return props.buttonArr.push(value / 10);
      });
    } else {
      for (let i = 1; i <= 5; i++) {
        buttonArr.push(i);
      }
    }
    if (!buttonArr.includes(props.currentPage / 10)) {
      buttonArr.push(props.currentPage / 10);
    }
    let buttons = buttonArr.map((value) => {
      return (
        <button value={props.shownData * value} id="pageButton" key={value}>
          {value}
        </button>
      );
    });
    return buttons;
  };

  let updatePage = (e) => {
    let value = parseInt(e.target.value);
    if (e.target.id === "update") {
      setNumberButtons(
        buttonArr.map((value) => (
          <button
            value={props.shownData * value * 2}
            id="pageButton"
            key={value * 2}
          >
            {value * 2}
          </button>
        ))
      );
    }
    if (props.pagesArray.includes(value)) {
      props.setCurrentPage(value);
      props.setCurrentData(props.data.slice(value - props.shownData, value));
    }
  };

  return (
    <RenderPageSwitch
      updatePage={updatePage}
      pagesArray={props.pagesArray}
      buttonArr={buttonArr}
      lastPage={lastPage}
      numberButtons={numberButtons}
      setNumberButtons={setNumberButtons}
      NativeButtons={NativeButtons}
      currentPage={props.currentPage}
      shownData={props.shownData}
    />
  );
};
export default PageSwitch;
