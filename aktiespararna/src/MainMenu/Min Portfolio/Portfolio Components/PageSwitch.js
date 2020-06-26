import React,{useState} from "react";

const PageSwitch = (props) => {
    let [shownButtons, setShownButtons]= useState(5)
  let SetButtons = () => {
    let arr = [];
    for (let i = 1; i <= shownButtons; i++) {
      arr.push(i);
    }
    let buttons = [];
    buttons = arr.map((value) => (
      <button value={value * 10} onClick={UpdatePage} id="pageButton" key={value}>
        {value}
      </button>
    ));
    return buttons;
  };
  let UpdatePage = (e) => {
      console.log(e.target.value)
    props.setCurrentPage(e.target.value);
    props.setCurrentData(props.data.slice(e.target.value - 10, e.target.value));
  };

  return (
    <div style={{position: "absolute", right: "160px"}}>
      <form>
        <SetButtons />
      </form>
    </div>
  );
};
export default PageSwitch;
