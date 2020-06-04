import React from "react";

const portfolioValues = (props) => {
  return (
    <div className="portfolioValues">
      <table id="portfoliotable">
      <tbody>
        <tr>
          <td>Företag</td>
          <td>Innehav</td>
          <td>Aktier</td>
          <td>Inudstry</td>
        </tr>
        </tbody>
        <tbody className="valueBody">
        <tr>
          <td><p>{props.values.company}</p></td>
          <td><p>{props.values.holding}</p></td>
          <td><p>{props.values.shares}</p></td>
          <td><p>{props.values.industry}</p></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default portfolioValues;
