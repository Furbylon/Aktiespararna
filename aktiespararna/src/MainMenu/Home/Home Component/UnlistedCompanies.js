import mock from "../../../data/JSON/mock.json";

  let unlistedCompanies = (values) => {
    let totalCompanies = [];
    mock.forEach((innerValues) => {
      if (values.Industry === innerValues.Industry) {
        totalCompanies.push(innerValues.Company);
      }
    });
    if (totalCompanies.length - 2 >= 1) {
      let remain = totalCompanies.length - 2;
      remain.toString();

      return "+" + remain;
    }
  };
  export {unlistedCompanies}