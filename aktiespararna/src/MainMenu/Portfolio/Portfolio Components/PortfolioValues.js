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

  const downloadValue = () => {
    alert("Laddar ner data för " + companyName)
  } 
  return (
    <tr id="portfolioGrid">
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
      <td>
        <button onClick={downloadValue} id="downloadButton">
          Ladda ner
        </button>
      </td>
    </tr>
  );
};

export default portfolioValues;
