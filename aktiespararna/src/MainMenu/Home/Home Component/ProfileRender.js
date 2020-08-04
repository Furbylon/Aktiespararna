import React from "react";

const ProfileRender = ({
  picture,
  firstName,
  lastName,
  personalNumber,
  industry,
  telephoneNumber,
  email,
  address,
  postNumber,
  postTown,
}) => {
  let industries
  if(industry !== undefined) {
     industries = industry.map((val) => {
      return val.Industry;
    });
  

  return (
    <div>
      <div>
        <img
          id="profile"
          style={{ height: 150 }}
          src={picture}
          alt="Ingen profilbild tillagd"
        ></img>
        <h3>
          {firstName} {lastName}
        </h3>
        <br/>
        <h5>Person Nr/Organisations Nr:</h5>
        <p>{personalNumber}</p>
        <br/>
      </div>
      <div>
        <h4>Föredragna industrier:</h4>
        <p style={{whiteSpace: "pre-line"}}>{industries.join(",\n")}</p>
      </div>
      <div>
        <br />
        <h4>Kontaktuppgifter:</h4>
        <p>Telefon: {telephoneNumber}</p>
        <br />
        <p>Mail: {email} </p>
        <br />
        <p>Adress: {address}</p>
        <br />
        <p>Postnummer: {postNumber}</p>
        <br />
        <p>Postort: {postTown}</p>
        <br />
      </div>
    </div>
  );
} else {
  return(
    <div>
    <div>
      <img
        id="profile"
        style={{ height: 150 }}
        src={picture}
        alt="Ingen profilbild tillagd"
      ></img>
      <h3>
        {firstName} {lastName}
      </h3>
      <br/>
      <h5>Person Nr/Organisations Nr:</h5>
      <p>{personalNumber}</p>
      <br/>
    </div>
    <div>
      <h4>Föredragna industrier:</h4>
    </div>
    <div>
      <br />
      <h4>Kontaktuppgifter:</h4>
      <p>Telefon: {telephoneNumber}</p>
      <br />
      <p>Mail: {email} </p>
      <br />
      <p>Adress: {address}</p>
      <br />
      <p>Postnummer: {postNumber}</p>
      <br />
      <p>Postort: {postTown}</p>
      <br />
    </div>
  </div>
  ) 
}
};
export default ProfileRender;
