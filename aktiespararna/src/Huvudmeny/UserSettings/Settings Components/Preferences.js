import React from "react";
class Preferences extends React.Component {
  render() {
    return <div id= "preferences" style = {{display: "block"}}>
    <p>Mina prefererade industrier att investera inom:</p>
    <input type="checkbox"></input>
    <p>Industri X</p>
    <input type="checkbox"></input>
    <p>Industri X</p>
    <input type="checkbox"></input>
    <p>Industri X</p>
    <input type="checkbox"></input>
    <p>Industri X</p>
    <input type="checkbox"></input>
    <p>Industri X</p>
    <input type="checkbox"></input>
    <p>Industri X</p>
    
    <button>Save</button>
    </div>;
  }
}
export default Preferences;