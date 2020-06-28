import React from "react";
import { Link } from "react-router-dom";

const LinkTo = (props) => {
  return (
    <div>
    <button id={"linkTo"}>
    <Link to = {props.link}> {props.tag}</Link>
  </button>
    </div>
  );
};

export default LinkTo;