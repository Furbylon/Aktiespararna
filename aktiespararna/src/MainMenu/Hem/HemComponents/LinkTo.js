import React from "react";
import { Link, useHistory } from "react-router-dom";

const LinkTo = (props) => {
  const history = useHistory();
  const handleClick = () => {
    history.push(props.link);
  };
  return (
    <div>
      <button id={"linkTo"} onClick={handleClick}>
        <Link className="links" to={props.link}>
          {" "}
          {props.tag}
        </Link>
      </button>
    </div>
  );
};

export default LinkTo;
