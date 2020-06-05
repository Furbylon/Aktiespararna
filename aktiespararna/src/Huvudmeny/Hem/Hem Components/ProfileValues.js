import React from "react";

 const ProfileValues = ({   
    picture,
    name,
    personalNumber,
    industries,
    telephoneNumber,
    email,
    address,
    postNumber,
    postTown }) => {
      return (
        <div>
          <div>
            <img
              id="profile"
              style={{ height: 100}}
              src={picture}
              alt={name}
            ></img>
            <h3>{name}</h3>
            <p>{personalNumber}</p>
          </div>
          <div>
            <p>{industries}</p>
          </div>
          <div>
            <p>Telefon: {telephoneNumber}</p>
            <p>Mail: {email} </p>
            <p>Adress: {address}</p>
            <p>Postnummer: {postNumber}</p>
            <p>Postort: {postTown}</p>
          </div>
        </div>
      );
    }
    export default ProfileValues;