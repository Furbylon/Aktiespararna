import React from "react";

const PasswordChange = () => {
  return (
    <div id="passwordChange">
      <p>Nuvarande lösenord</p>
      <input id="currentPassword"></input>
      <p>Nytt lösenord</p>
      <input id="newPassword"></input>
      <p>Bekräfta nytt lösenord</p>
      <input id="confirmPassword"></input>
      <button id="savePasswordChange">Spara</button>
    </div>
  );
};
export default PasswordChange;
