import React from 'react';  
class PasswordChange extends React.Component {
    render() {
      return <div id = "passwordChange" style = {{display: "none"}}>
      <p>Nuvarande lösenord</p>
      <input id = "currentPassword"></input>
      <p>Nytt lösenord</p>
      <input id = "newPassword"></input>
      <p>Bekräfta nytt lösenord</p>
      <input id= "confirmPassword"></input>
      <button id= "savePasswordChange">Spara</button>
      </div>;
    }
  }
  export default PasswordChange;