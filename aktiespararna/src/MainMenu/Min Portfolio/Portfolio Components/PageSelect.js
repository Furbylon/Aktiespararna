import React, { useState } from "react";

const PageSelect = (props) => {
  const [currentPage, setCurrentPage] = useState(10);

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
    setCurrentPage(e.target.value);
    console.log(e.target.value);
    props.setCurrentData(props.data.slice(e.target.value - 10, e.target.value));
  };

  return (
    <div>
      <form id="portfolioForm">
        <select value={currentPage} onChange={UpdatePage}>
          <AmountOfPages />
        </select>
      </form>
      <p>
        Visar {currentPage - 9} - {currentPage} av {props.totalData}
      </p>
    </div>
  );
};
export default PageSelect;
