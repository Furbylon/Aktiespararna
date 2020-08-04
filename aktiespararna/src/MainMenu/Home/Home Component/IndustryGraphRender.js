import React from "react";
import { Pie } from "react-chartjs-2";



let IndustryGraphRender = (props) => {
    return(
        <div className="App">
        <div style={{ width: "500px" }}>
          <Pie
            data={props.data}
            options={{
              legend: {
                display: false,
              },
              title: {
                display: true,
                text: "Föredragna industrier",
              },
            }}
          />
        </div>
      </div>
    )
}
export default IndustryGraphRender;
