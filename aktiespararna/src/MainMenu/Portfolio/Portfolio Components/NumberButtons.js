import React from "react";

let NumberButtons = (props) => {
  console.log(props.currentPage);
  props.pagesArray.map((value, index) => {
    return props.buttonArr.push(index);
  });
  console.log(props.buttonArr);
  if (!props.buttonArr.includes(props.currentPage / 10)) {
    props.buttonArr.push(props.currentPage / 10);
  }
  console.log(props.buttonArr);
  props.setNumberButtons(props.buttonArr);
  return <div></div>;
};

export default NumberButtons;
