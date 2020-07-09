import React from "react";

const ProfileValues = ({
  picture,
  firstName,
  lastName,
  personalNumber,
  industry1,
  industry2,
  industry3,
  industry4,
  telephoneNumber,
  email,
  address,
  postNumber,
  postTown,
}) => {
  return (
    <div>
      <div>
        <img
          id="profile"
          style={{ height: 150 }}
          src={picture}
          alt={firstName}
        ></img>
        <h3>
          {firstName} {lastName}
        </h3>
        <h5>Person Nr/Organisations Nr:</h5>
        <p>{personalNumber}</p>
      </div>
      <div>
        <h4>Föredragna industrier:</h4>
        {industry1}
        <br/>
        {industry2}
        <br/>
        {industry3}
        <br/>
        {industry4}
      </div>
      <div>
        <br />
        <h4>Kontaktuppgifter:</h4>
        <p>Telefon: {telephoneNumber}</p>
        <p>Mail: {email} </p>
        <p>Adress: {address}</p>
        <p>Postnummer: {postNumber}</p>
        <p>Postort: {postTown}</p>
      </div>
    </div>
  );
};
export default ProfileValues;
