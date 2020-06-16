import React from "react";

const portfolioValues = ({
  companyName,
  stockSector,
  balance,
  shares,
  ownership,
  votingPower,
  industry,
}) => {
  return (
    <tr>
      <td>
        <p>{companyName}</p>
      </td>
      <td>
        <p>{stockSector}</p>
      </td>
      <td>
        <p>{balance}</p>
      </td>
      <td>
        <p>{shares}</p>
      </td>
      <td>
        <p>{ownership}%</p>
      </td>
      <td>
        <p>{votingPower}%</p>
      </td>
      <td>
        <p>{industry}</p>
      </td>
    </tr>
  );
};

export default portfolioValues;
