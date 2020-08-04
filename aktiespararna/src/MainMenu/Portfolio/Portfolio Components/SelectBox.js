import React from "react";
import AmountOfPages from "./AmountOfPages";

const PageSelect = (props) => {

  let updatePage = (e) => {
    props.setCurrentPage(e.target.value);
    console.log(e.target.value);
    props.setCurrentData(props.data.slice(e.target.value - 10, e.target.value));
  };

  return (
    <div>
      <form>
        <select value={props.currentPage} onChange={updatePage}>
          <AmountOfPages totalData={props.totalData} />
        </select>
      </form>
    </div>
  );
};
export default PageSelect;
