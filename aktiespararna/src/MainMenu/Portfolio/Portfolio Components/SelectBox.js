import React from "react";

const PageSelect = (props) => {
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
    console.log(e.target.value);
    props.setCurrentData(props.data.slice(e.target.value - 10, e.target.value));
  };

  return (
    <div>
      <form>
        <select value={props.currentPage} onChange={UpdatePage}>
          <AmountOfPages />
        </select>
      </form>
    </div>
  );
};
export default PageSelect;
