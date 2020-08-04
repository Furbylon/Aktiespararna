import React from "react";

let AmountOfPages = (props) => {
    let divided = props.totalData / 10;
    let arr = [];
    for (let i = 1; i <= divided; i++) {
      arr.push(i);
    }
    let slides = [];
    slides = arr.map((value) => <option key={value}>{10 * value}</option>);
    return slides;
  };

  export default AmountOfPages;
