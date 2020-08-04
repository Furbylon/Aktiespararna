import React, { useState } from "react";
import { DotForwardButton, DotBackButton } from "./DotButtons";
import NumberButtons from "./NumberButtons";

const PageSwitch = (props) => {
  let [numberButtons, setNumberButtons] = useState(0);
  let buttonArr = [];
  let lastPage = props.pagesArray[props.pagesArray.length - 1];

  let NativeButtons = () => {
    console.log(props.pagesArray.len);
    if (props.pagesArray.length <= 5) {
      props.pagesArray.map((value) => {
        return buttonArr.push(value / 10);
      });
    } else {
      for (let i = 1; i <= 5; i++) {
        buttonArr.push(i);
      }
    }
    console.log(buttonArr);
    if (!buttonArr.includes(props.currentPage / 10)) {
      buttonArr.push(props.currentPage / 10);
    }
    numberButtons = buttonArr.map((value) => {
      return (
        <button value={props.shownData * value} id="pageButton" key={value}>
          {value}
        </button>
      );
    });
    console.log(numberButtons);
    return numberButtons;
  };

  let UpdatePage = (e) => {
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
  console.log(lastPage);
  if (lastPage <= 50) {
    return (
      <div>
        <form onClick={UpdatePage} id={"nativePageSwitchForm"}>
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
          <NumberButtons
            pagesArray={props.pagesArray}
            buttonArr={buttonArr}
            numberButtons={numberButtons}
            currentPage={props.currentPage}
            setNumberButton={setNumberButtons}
          />
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
  } else {
    return (
      <div>
        <form />
        <form onClick={UpdatePage} id={"pageSwitchForm"}>
          <button id={"back"} type={"button"} value={props.pagesArray[0]}>
            {"<<"}
          </button>
          <button
            id={"back"}
            type={"button"}
            value={props.currentPage - props.shownData}
          >
            {"<"}
          </button>
          <DotBackButton
            currentPage={props.currentPage}
            pagesArray={props.pagesArray}
            shownData={props.shownData}
          />
          <NativeButtons />
          <DotForwardButton
            currentPage={props.currentPage}
            shownData={props.shownData}
            pagesArray={props.pagesArray}
          />
          <button
            id={"foward"}
            type={"button"}
            value={props.currentPage + props.shownData}
          >
            {">"}
          </button>
          <button id={"back"} type={"button"} value={lastPage}>
            {">>"}
          </button>
        </form>
      </div>
    );
  }
};
export default PageSwitch;
