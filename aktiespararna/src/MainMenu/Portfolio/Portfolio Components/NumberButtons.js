import React from "react";

let NativeButtons = (props) => {
  console.log(props.buttonArr);
  if (props.pagesArray.length <= 5) {
    props.pagesArray.map((value, index) => {
      return props.buttonArr.push(index);
    });
    if (!props.buttonArr.includes(props.currentPage / 10)) {
      props.buttonArr.push(props.currentPage / 10);
    }
    props.setNumberButton(
      props.buttonArr.map((value) => (
        <button value={props.shownData * value} className="pageButton" key={value}>
          {value}
        </button>
      ))
    );
    return props.numberButtons;
  } else {
    props.pagesArray.map((value, index) => {
      return props.buttonArr.push(index);
    });
    if (!props.buttonArr.includes(props.currentPage / 10)) {
      props.buttonArr.push(props.currentPage / 10);
    }
    props.setNumberButton(
      props.buttonArr.map((value) => (
        <button value={props.shownData * value} className="pageButton" key={value}>
          {value}
        </button>
      ))
    );
    return props.numberButtons;
  }
};

export default NativeButtons;
