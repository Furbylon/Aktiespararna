import React from "react";
import PasswordChangeForm from "./PasswordChangeForm";

const PasswordChange = (props) => {
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
  return <PasswordChangeForm changePassword={changePassword} />;
};
export default PasswordChange;
