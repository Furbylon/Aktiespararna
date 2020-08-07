import React, { useState } from "react";
import companies from "../data/JSON/mock.json";
import MainMenuRoutes from "./MainMenuRoutes";

const MainMenu = (props) => {
  let max = companies.length;
  let profilePicture;
  let firstName;
  let lastName;
  let personalNumber;
  let address;
  let postTown;
  let postNumber;
  let phoneNumber;
  let email;

  let [profile, setProfile] = useState([
    {
      profilePicture,
      firstName,
      lastName,
      personalNumber,
      address,
      postTown,
      postNumber,
      phoneNumber,
      email,
    },
  ]);
  let [time, setTime] = useState("Inga uppdateringar har tidigare gjorts.");

  let [preferredIndustries, setPreferredIndustries] = useState();
  let [remainingIndustries, setRemainingIndustries] = useState(
    companies.slice(0, max)
  );

  return (
    <MainMenuRoutes
      profile={profile}
      setProfile={setProfile}
      time={time}
      setTime={setTime}
      preferredIndustries={preferredIndustries}
      setPreferredIndustries={setPreferredIndustries}
      remainingIndustries={remainingIndustries}
      setRemainingIndustries={setRemainingIndustries}
      password={props.password}
      setPassword={props.setPassword}
    />
  );
};

export default MainMenu;
