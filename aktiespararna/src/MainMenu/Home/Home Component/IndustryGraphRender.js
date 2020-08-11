import React from "react";
import { Pie } from "react-chartjs-2";

let IndustryGraphRender = (props) => {
  return (
    <div className="App">
      <div
        style={{
          width: "800px",
          float: "right",
        }}
      >
        <Pie
          data={props.data}
          options={{
            legend: {
              display: false,
            },
            title: {
              display: false,
            },
          }}
        />
      </div>
    </div>
  );
};
export default IndustryGraphRender;
