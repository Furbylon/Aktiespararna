import React from "react";
import mock from "../../../data/JSON/mock.json";
import NoPreferencesSelected from "./NoPreferencesSelected";
import PreferencesSelected from "./PreferencesSelected";

const MyHoldings = (props) => {
  let sumOfRemaining = 0;
  if (props.remainingIndustries !== undefined) {
    console.log(props.remainingIndustries);
    props.remainingIndustries.map((values) => {
      return (sumOfRemaining += values.Balance);
    });
  }

  let total = 0;
  mock.map((values) => {
    return (total += values.Balance);
  });

  let IndustryBalance = (values) => {
    let totalBalance = values.Balance;
    mock.forEach((innerValues) => {
      if (values.Industry === innerValues.Industry) {
        return (totalBalance += innerValues.Balance);
      }
    });
    return totalBalance;
  };

  let spacedSum = sumOfRemaining.toLocaleString();

  let otherColour;
  if (props.preferredIndustries !== undefined) {
    otherColour = props.preferredIndustries.length;
  } else {
    otherColour = 0;
  }
  if (props.preferredIndustries !== undefined) {
    return (
      <PreferencesSelected
        total={total}
        preferredIndustries={props.preferredIndustries}
        remainingIndustries={props.remainingIndustries}
        sumOfRemaining={sumOfRemaining}
        IndustryBalance={IndustryBalance}
        spacedSum={spacedSum}
        otherColour={otherColour}
        time={props.time}
      />
    );
  } else {
    return (
      <NoPreferencesSelected
        total={total}
        preferredIndustries={props.preferredIndustries}
        remainingIndustries={props.remainingIndustries}
        sumOfRemaining={sumOfRemaining}
        IndustryBalance={IndustryBalance}
        spacedSum={spacedSum}
        otherColour={otherColour}
        time={props.time}
      />
    );
  }
};

export default MyHoldings;
