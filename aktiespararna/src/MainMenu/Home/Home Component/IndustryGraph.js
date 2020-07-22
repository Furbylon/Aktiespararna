import React, { useState } from "react";
import { HorizontalBar } from "react-chartjs-2";

const PercentageBar = (props) => {
  console.log(props.companyColours);
  console.log(props.borderColours);
  console.log(props.remainingIndustries);
  console.log(props.preferredIndustries);
  console.log(props.sumOfRemaining);

  let industryName = props.preferredIndustries.map((values) => {
    return values.Industry;
  });
  let colours = props.companyColours.map((values) => {
    return values.colour;
  });
  let percentage = props.preferredIndustries.map((values) => {
    return values.Balance / props.sumOfRemaining * 100;
  });
  console.log(colours);
  const [data, setData] = useState({
    labels: industryName,
    datasets: [
      {
        data: percentage,
        backgroundColor: colours,
        borderWidth: 1,
      },
    ],
  });

  return (
    <div className="App">
      <div>
        <HorizontalBar
          data={data}
          options={{
            scales: {
              scaleShowLabels: "false",
              xAxes: [{stacked: true}],
              yAxes: [{stacked: true}]
            }
          }}
          legend={{
            display: false
          }}
        />
      </div>
    </div>
  );
};
export default PercentageBar;
