import React from "react";

const portfolioValues = ({company, holding, shares, industry}) => {
  return (
          <tr>
            <td>
              <p>{company}</p>
            </td>
            <td>
              <p>{holding}</p>
            </td>
            <td>
              <p>{shares}</p>
            </td>
            <td>
              <p>{industry}</p>
            </td>
          </tr>
  );
};

export default portfolioValues;
