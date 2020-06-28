import React from "react";

const PasswordChange = (props) => {
  console.log(props.password);

  const changePassword = (e) => {
    e.preventDefault();
    if (e.target.elements.currentPassword.value === props.password) {
      if (
        e.target.elements.newPassword.value ===
        e.target.elements.confirmPassword.value
      ) {
        props.setPassword(e.target.elements.newPassword.value);
      } else {
        alert("Password doesn't match");
      }
    } else {
      alert("Incorrect Password");
    }
  };
  return (
    <div id="passwordChange">
      <form onSubmit={changePassword}>
        <p>Nuvarande lösenord</p>
        <input id="currentPassword" type="text" required />
        <p>Nytt lösenord</p>
        <input id="newPassword" type="text" required />
        <p>Bekräfta nytt lösenord</p>
        <input id="confirmPassword" type="text" required />
        <button id="savePasswordChange">Spara</button>
      </form>
    </div>
  );
};
export default PasswordChange;
