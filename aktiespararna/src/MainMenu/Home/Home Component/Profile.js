import React from "react";
import Header from "../../Components/Header";
import LinkTo from "./LinkTo";

let ProfileRender = (props) => {
    return (
        <div id="homeProfile" style={{ position: "relative" }}>
          <Header head={"Min Profil"}> </Header>
          <LinkTo link={"/mainmenu/settings/profile"} tag={"Redigera"} />
          <hr/>
          <div id="profileInformation">{props.showProfile()}</div>
        </div>
      );
}

export default ProfileRender