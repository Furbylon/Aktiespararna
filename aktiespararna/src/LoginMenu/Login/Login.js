import React from "react";
import aktielogoo from "./img/aktielogoo.png";
import userData from "../../../src/data/user.json";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Login() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    if (
      JSON.stringify(data.username && data.password) ===
      JSON.stringify(userData.username && userData.password)
    ) {
      return(
        <Link to="/forgotpassword"/>
      )
    } else {
      alert("invalidinput");
    }
  };
  return (
    <div id="loginDiv" className="loginMenuPages">
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
        <br/>
        <Link to="/forgotpassword">Glömt lösenord</Link>
      </form>
    </div>
  );
}
