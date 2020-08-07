import mock from "../../../data/JSON/mock.json";

let totalCompanies = (values) => {
    let totalCompanies = [];
    mock.forEach((innerValues) => {
      if (values.Industry === innerValues.Industry) {
        return totalCompanies.push(innerValues.Company);
      }
    });
    console.log(totalCompanies);
    return totalCompanies;
  };

  export  {totalCompanies};
