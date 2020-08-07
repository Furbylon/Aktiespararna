import React from "react";

let PasswordChangeForm = (props) => {
    return(
        <div id="passwordChange">
        <form onSubmit={props.changePassword}>
          <p>Nuvarande lösenord</p>
          <input id="currentPassword" type="text" required />
          <p>Nytt lösenord</p>
          <input id="newPassword" type="text" required />
          <p>Bekräfta nytt lösenord</p>
          <input id="confirmPassword" type="text" required />
          <button id="savePasswordChange">Spara</button>
        </form>
      </div>
    )
}

export default PasswordChangeForm