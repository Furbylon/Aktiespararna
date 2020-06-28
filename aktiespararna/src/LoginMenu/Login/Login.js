import React from "react";
import aktielogoo from "./img/aktielogoo.png";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import "../Login/Login.css";

const Login = (props) => {
  const { register, handleSubmit } = useForm();

  const history = useHistory();

  const onSubmit = (data) => {
    if (
      (data.username && data.password) === (props.username && props.password)
    ) {
      return history.push("/mainMenu/home");
    } else {
      alert("Wrong username/password");
    }
  };

  return (
    <div id="loginDiv" className="loginMenuPages">
      <div id="loginForm">
        <img id="logo" src={aktielogoo} alt="logo" />
        <form name="userinput" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="username">Username:</label>
          <br />
          <input type="text" name="username" ref={register} required />
          <br />
          <label htmlFor="password">Password:</label>
          <br />
          <input type="password" name="password" ref={register} required />
          <br />
          <input type="submit" value="Logga in" />
          <br />
          <p>Saknar konto?</p>
          <Link to="/registration">Registrera</Link>
          <br />
          <Link to="/forgotpassword">Glömt lösenord</Link>
        </form>
      </div>
    </div>
  );
};
export default Login;
