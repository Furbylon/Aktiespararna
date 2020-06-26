import React, { useState } from "react";

const SelectBox = (props) => {
  let AmountOfPages = () => {
    let divided = props.totalData / 10;
    let arr = [];
    for (let i = 1; i <= divided; i++) {
      arr.push(i);
    }
    let slides = [];
    slides = arr.map((value) => <option key={value}>{10 * value}</option>);
    return slides;
  };

  let UpdatePage = (e) => {
    props.setCurrentPage(e.target.value);
    props.setCurrentData(props.data.slice(e.target.value - 10, e.target.value));
  };

  return (
    <div style={{ position: "absolute", right: "0" }}>
      <form>
        <select value={props.currentPage} onChange={UpdatePage}>
          <AmountOfPages />
        </select>
      </form>
      <p style={{ fontWeight: "bold" }}>
        Visar {props.currentPage - 9} - {props.currentPage} av {props.totalData}
      </p>
    </div>
  );
};
export default SelectBox;
