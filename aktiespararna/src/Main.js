import React, { useState } from "react";
import "./App.css";
import Login from "./LoginMenu/Login/Login";
import Registrering from "./LoginMenu/Register/Register";
import ForgottenPassword from "./LoginMenu/ForgottenPassword/ForgottenPassword";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Mainmenu from "./MainMenu/MainMenu";

const Main = () => {
  let [username, setUsername] = useState();
  let [password, setPassword] = useState();
  let [email, setEmail] = useState();

  const MissingPage = () => (
    <div>
      404 -{" "}
      <button>
        <Link to="/">Missing page </Link>
      </button>
    </div>
  );

  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          render={() => <Login username={username} password={password} />}
          exact={true}
        />
        <Route
          path="/registration"
          render={() => (
            <Registrering
              username={username}
              setUsername={setUsername}
              setPassword={setPassword}
              setEmail={setEmail}
            />
          )}
        />
        <Route
          path="/forgotpassword"
          render={() => (
            <ForgottenPassword
              username={username}
              password={password}
              email={email}
            />
          )}
        />
        <Mainmenu
          MissingPage={MissingPage}
          password={password}
          setPassword={setPassword}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Main;
