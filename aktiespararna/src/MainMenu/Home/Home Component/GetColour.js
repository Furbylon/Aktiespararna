let randomColour = () => {
  let red = Math.floor(Math.random() * 256).toString();
  let green = Math.floor(Math.random() * 256).toString();
  let blue = Math.floor(Math.random() * 256).toString();
  let colour = `rgb(${red}, ${green}, ${blue})`;
  console.log(colour)
  return colour;
};

let companyColours = () => {
  return [
    { colour: "rgba(54, 162, 235, 0.2)" },
    { colour: "rgba(255, 206, 86, 0.2)" },
    { colour: "rgba(75, 192, 192, 0.2)" },
    { colour: "rgba(153, 102, 255, 0.2)" },
    { colour: "rgba(255, 99, 132, 0.2)" },
  ];
};
let borderColours = () => {
  return [
    { colour: "rgba(54, 162, 235, 1)" },
    { colour: "rgba(255, 206, 86, 1)" },
    { colour: "rgba(75, 192, 192, 1)" },
    { colour: "rgba(153, 102, 255, 1)" },
    { colour: "rgba(255, 99, 132, 1)" },
    { colour: "rgba(255, 99, 132, 1)" },

  ];
};

export { companyColours, borderColours, randomColour };
