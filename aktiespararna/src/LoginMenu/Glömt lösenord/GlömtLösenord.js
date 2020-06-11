import React, { useState } from "react";
import aktielogoo from "../Login/img/aktielogoo.png";
import userData from "../../../src/data/user.json";
import { useForm } from "react-hook-form";
import { BrowserRouter, Route, Link, Router } from "react-router-dom";

export default function ForgottenPassword() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    if (
      JSON.stringify(data) === JSON.stringify(userData.username, userData.email)
    ) {
      alert(JSON.stringify("Your Password is: ", userData.password));
    } else {
      alert(
        JSON.stringify(data),
        JSON.stringify(userData.username, userData.email)
      );
    }
  };
  return (
    <div id="forgottenPasswordDiv" className="loginMenuPages">
      <img id="logo" src={aktielogoo} alt="logo" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <label for="username">Username:</label>
        <br></br>
        <input
          type="text"
          name="username"
          placeholder="username"
          ref={register}
          required
        />
        <br></br>
        <label for="email">Email:</label>
        <br></br>
        <input
          type="text"
          name="email"
          placeholder="email"
          ref={register}
          required
        />
        <br></br>
        <input type="submit" value="Get Password" />
        <br></br>
      </form>
    </div>
  );
}
