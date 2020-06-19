import React from "react";
import aktielogoo from "./img/aktielogoo.png";
import userData from "../../../src/data/JSON/user.json";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import css from "../Login/LoginStyle.css";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const onSubmit = (data) => {
    if (
      JSON.stringify(data.username && data.password) ===
      JSON.stringify(userData.username && userData.password)
    ) {
      console.log("Success");
      return history.push("/mainmenu/home");
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
          <br></br>
          <input
            type="text"
            name="username"
            placeholder="username"
            ref={register}
            required
          />
          <br></br>
          <label htmlFor="password">Password:</label>
          <br></br>
          <input
            type="password"
            name="password"
            placeholder="password"
            ref={register}
            required
          />
          <br></br>
          <input type="submit" value="Logga in" />
          <br></br>
          <p>Saknar konto?</p>
          <Link to="/registration">Registrera</Link>
          <br />
          <Link to="/forgotpassword">Glömt lösenord</Link>
        </form>
      </div>
    </div>
  );
}
