import React, { useState } from "react";

const PageSwitch = (props) => {
  let [numberButtons, setNumberButton] = useState();
  let buttonArr = [];
  let lastPage = props.pagesArray[props.pagesArray.length - 1]

  let NativeButtons = () => {
    while (props.pagesArray.length <= 5) {
      for (let i = 1; i <= props.pagesArray.length; i++) {
        buttonArr.push(i);
      }
      if (!buttonArr.includes(props.currentPage / 10)) {
        buttonArr.push(props.currentPage / 10);
      }
      numberButtons = buttonArr.map((value) => (
        <button value={props.shownData * value} id="pageButton" key={value}>
          {value}
        </button>
      ));
      return numberButtons;
    }
    if (props.pagesArray.length > 5) {
      for (let i = 1; i <= 5; i++) {
        buttonArr.push(i);
      }
      if (!buttonArr.includes(props.currentPage / 10)) {
        buttonArr.push(props.currentPage / 10);
      }
      numberButtons = buttonArr.map((value) => (
        <button value={props.shownData * value} id="pageButton" key={value}>
          {value}
        </button>
      ));
      return numberButtons;
    }
  };
  let UpdatePage = (e) => {
    let value = parseInt(e.target.value);
    if (e.target.id === "update") {
      setNumberButton(
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

  if (props.totalData === 5) {
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
          <NativeButtons />
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
