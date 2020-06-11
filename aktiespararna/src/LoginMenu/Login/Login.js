import React, { useState } from "react";
import aktielogoo from "./img/aktielogoo.png";
import css from "./LoginStyle.css";
import userData from "../../../src/data/user.json";
import { useForm } from "react-hook-form";

export default function Login() {
  const { register, handleSubmit } = useForm();

  const openMenu = () => {
    console.log("menu");
    document.getElementsByClassName("menu").style.display = "block";
    document.getElementById("loginDiv").style.display = "none";
  };
  const onSubmit = (data) => {
    if (JSON.stringify(data) === JSON.stringify(userData)) {
      alert("you fucking made it");
      console.log(data, userData);
    } else {
      console.log(data, userData);
    }
  };

  return (
    <div id="loginDiv" className="loginMenuPages">
      <img id="logo" src={aktielogoo} alt="logo" />
      <form name="userinput" onSubmit={handleSubmit(onSubmit)}>
        <label for="username">Username:</label>
        <br></br>
        <input
          type="text"
          name="username"
          placeholder="username"
          ref={register}
        />
        <br></br>
        <label for="password">Password:</label>
        <br></br>
        <input
          type="password"
          name="password"
          placeholder="password"
          ref={register}
        />
        <br></br>
        <input type="submit" value="Logga in" />
        <br></br>
        <p>Dont have an account?</p>
        <a href="www.google.com">Register now!</a>
      </form>
    </div>
  );
}
