import React, { useState } from "react";
import user from "../data/JSON/user.json";

const UserInformation = (props) => {
  let [username, setUsername] = useState(user.username);
  let [password, setPassword] = useState(user.password);
  let [email, setEmail] = useState(user.email);
};
export default UserInformation;
