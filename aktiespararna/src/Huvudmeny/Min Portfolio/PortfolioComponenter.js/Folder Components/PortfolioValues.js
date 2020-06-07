import React from "react";

const portfolioValues = ({
  company,
  holding,
  shareType,
  shareQuantity,
  shareNumber,
  ownership,
  votingPower,
  industry,
  download,
}) => {
  return (
    <tr>
      <td>
        <p>{company}</p>
      </td>
      <td>
        <p>{holding}</p>
      </td>
      <td>
        <p>{shareType}</p>
      </td>
      <td>
        <p>{shareQuantity}</p>
      </td>
      <td>
        <p>{shareNumber}</p>
      </td>
      <td>
        <p>{ownership}</p>
      </td>
      <td>
        <p>{votingPower}</p>
      </td>
      <td>
      <p>{industry}</p>
    </td>
    </tr>
  );
};

export default portfolioValues;
