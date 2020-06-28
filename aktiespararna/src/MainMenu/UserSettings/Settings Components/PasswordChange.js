import React, { useState } from "react";
import user from "../../../data/JSON/user.json";

const PasswordChange = () => {
  let [password, setPassword] = useState(user.password);
  console.log(password);

  const changePassword = (e) => {
    e.preventDefault();
    if (e.target.elements.currentPassword.value === password) {
      if (
        e.target.elements.newPassword.value ===
        e.target.elements.confirmPassword.value
      ) {
        setPassword(e.target.elements.newPassword.value);
      } else {
        alert("Password doesn't match")
      }
    } else {
      alert("Incorrect Password");
    }
  };
  return (
    <div id="passwordChange">
      <form onSubmit={changePassword}>
        <p>Nuvarande lösenord</p>
        <input id="currentPassword" type="text" required></input>
        <p>Nytt lösenord</p>
        <input id="newPassword" type="text" required></input>
        <p>Bekräfta nytt lösenord</p>
        <input id="confirmPassword" type="text" required></input>
        <button id="savePasswordChange">Spara</button>
      </form>
    </div>
  );
};
export default PasswordChange;
