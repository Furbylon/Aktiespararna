import React, { useState } from "react";
import { Pie } from "react-chartjs-2";

const PercentageBar = (props) => {
  let industryName = props.preferredIndustries.map((values) => {
    return values.Industry;
  });
  industryName.push("Övrigt");

  let colours = props.companyColours.map((values) => {
    console.log(values.colour);
    return values.colour;
  });
  colours.push();

  let percentage = props.preferredIndustries.map((values) => {
    return (props.IndustryBalance(values) / props.sumOfTotal) * 100;
  });

  percentage.push((props.sumOfRemaining / props.sumOfTotal) * 100);

  console.log(percentage);

  const [data] = useState({
    labels: industryName,
    datasets: [
      {
        data: percentage,
        backgroundColor: colours,
        hoverBorderColor: "gray",
        borderWidth: 1,
      },
    ],
  });

  return (
    <div className="App">
      <div>
        <Pie
          data={data}
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
  );
};
export default PercentageBar;
