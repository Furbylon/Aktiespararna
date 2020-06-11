import React from "react";
import { BrowserRouter, Route, Switch, Link} from "react-router-dom";

class LogoutButton extends React.Component {
    render() {
      return (
        <div>
        <Link to = "/login" exact= {true}>Logout</Link>
        </div>
      );
    }
  }

  export default LogoutButton;
