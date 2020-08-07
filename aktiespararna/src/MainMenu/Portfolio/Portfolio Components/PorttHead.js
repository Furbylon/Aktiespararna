import React from "react";

let PorttHead = () => {
    return(
        <thead>
        <tr id="firstRow">
        <td>Företag</td>
        <td>Aktietyp</td>
        <td>Innehav</td>
        <td>Antal Aktier</td>
        <td>Ägarandel</td>
        <td>Röstvärde</td>
        <td>Industri</td>
        <td>Ladda ner</td>
      </tr>
      </thead>
    )
}
let PorttHeadDataMissing = () => {
  return(
    <thead>
    <tr>
      <td>Företag</td>
      <td>Innehav</td>
      <td>Antal Aktier</td>
      <td>Industri</td>
    </tr>
  </thead>
  )
}
export {PorttHead, PorttHeadDataMissing}