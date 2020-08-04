import mock from "../../../data/JSON/mock.json";

let IndustryBalance = (values) => {
    let totalBalance = values.Balance;
    mock.forEach((innerValues) => {
      if (values.Industry === innerValues.Industry) {
        return (totalBalance += innerValues.Balance);
      }
    });
    return totalBalance;
  };

export default IndustryBalance;
