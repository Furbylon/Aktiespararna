import React, { useState } from "react";
import "./App.css";
import Login from "./LoginMenu/Login/Login";
import Registrering from "./LoginMenu/Register/Registration";
import ForgottenPassword from "./LoginMenu/ForgottenPassword/ForgottenPassword";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Mainmenu from "./MainMenu/MainMenu";

const Main = () => {
  let [username, setUsername] = useState();
  let [password, setPassword] = useState();
  let [email, setEmail] = useState();


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
          exact={true}
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
          exact={true}
        />
        <Mainmenu
          password={password}
          setPassword={setPassword}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Main;
