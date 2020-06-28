import React from "react";
import aktielogoo from "../Login/img/aktielogoo.png";
import userData from "../../../src/data/JSON/user.json";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "../Glömt lösenord/ForgottenPassword.css";

const ForgottenPassword = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    if (
      JSON.stringify(data.username && data.email) ===
      JSON.stringify(userData.username && userData.email)
    ) {
      alert(JSON.stringify("Your Password is: " + userData.password));
    } else {
      alert("No username Found");
    }
  };
  return (
    <div id="forgottenPasswordDiv" className="loginMenuPages">
      <img id="logo" src={aktielogoo} alt="logo" />
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <label htmlFor="email">Email:</label>
        <br></br>
        <input
          type="text"
          name="email"
          placeholder="Email"
          ref={register}
          required
        />
        <br></br>
        <div id="button">
          <input type="submit" value="Retrieve Password" />
        </div>
        <br></br>
      </form>
      <br></br>
      <div id="link">
        <Link to="/">Start page</Link>
      </div>
    </div>
  );
};

export default ForgottenPassword;
