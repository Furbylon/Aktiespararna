import mock from "../../../data/JSON/mock.json";
let addPreferences = (
  e,
  setPreferredIndustries,
  setRemainingIndustries,
  setTime
) => {
  e.preventDefault();
  let checkbox = document.querySelectorAll('input[name="checkbox"]:checked');
  let checkedIndustries = [];
  checkbox.forEach((checkbox) => {
    checkedIndustries.push(checkbox.value);
  });
  if (checkedIndustries.length <= 4 && checkedIndustries.length > 0) {
    let check = [];
    check = mock.filter((values) => {
      return checkedIndustries.includes(values.Industry);
    });

    const uniqueIndustry = Array.from(
      new Set(check.map((a) => a.Industry))
    ).map((Industry) => {
      return check.find((a) => a.Industry === Industry);
    });

    const remaining = mock.filter((values) => {
      return !checkedIndustries.includes(values.Industry);
    });
    alert("Nya industrier har lagts till som preferens")
    setPreferredIndustries(uniqueIndustry);
    setRemainingIndustries(remaining);
    let newDate = new Date();
    setTime(newDate.toLocaleDateString());
  } else {
    let newLine = "\r\n";
    let msg = "- Måste anges minst 1 industri";
    msg += newLine;
    msg += "- Kan endast ange max 4 industrier";

    return alert(msg);
  }
};

export default addPreferences;
