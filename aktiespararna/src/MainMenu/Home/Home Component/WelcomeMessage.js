import React from "react";
import LastUpdate from "../../Components/LastUpdate";
import mock from "../../../data/JSON/mock.json"

const WelcomeMessage = (props) => {
  let data = mock.map((val) => {
    return val
  })
  if(data.length > 0) {
    return (
      <div id="welcomeMessage">
      <p>
      Välkommen {props.profile.firstName} {props.profile.lastName}! Ditt innehav blev senast uppdaterat: 
    </p>
    <LastUpdate time={props.time} />
      </div>
    );
  }
  else {
    return (
      <div id="welcomeMessage">
      <p>
      Välkommen {props.profile.firstName} {props.profile.lastName}! Du har inget innehav tillagt ännu. Du får ett mail såfort det är uppdaterat! 
    </p>
      </div>
    );
  }
};

export default WelcomeMessage;
