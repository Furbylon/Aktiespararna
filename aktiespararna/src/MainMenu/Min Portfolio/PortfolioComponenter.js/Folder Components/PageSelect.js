import React from "react";

const PageSelect = (currentPage, updatePage, totalData) => {
    
  let AmountOfPages = () => {
    let divided = totalData / 10;
    let arr = [];
    for (let i = 1; i <= divided; i++) {
      arr.push(i);
    }
    let slides = [];
    slides = arr.map((value) => <option key={value}>{10 * value}</option>);
    return slides;
  };

  return (
    <div>
      <form>
        <select value={currentPage} onChange={updatePage}>
          <AmountOfPages />
        </select>
      </form>
      <p>Visar antal utav {totalData}</p>
    </div>
  );
};
export default PageSelect;
