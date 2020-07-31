import React from "react";
import Header from "../../Components/Header";
import LinkTo from "./LinkTo";
import IndustryGraph from "./IndustryGraph";
import Remaining from "./RemainingIndustries";
import LastUpdate from "../../Components/LastUpdate";
import { companyColours, borderColours } from "./GetColour";

let DefaultHoldings = (props) => {
  return (
    <div id="myHoldings" style={{ position: "relative" }}>
      <div>
        <div>
          <Header head={"Mitt Innehav"}> </Header>
          <div style={{ float: "left" }}>
            <LinkTo
              link={"/mainmenu/settings/preferences"}
              tag={"Preferenser"}
            />
          </div>
          <LinkTo link={"/mainmenu/portfolio"} tag={"Portfolio"} />
        </div>
        <hr />
        <p style={{ fontWeight: "bold", fontSize: "20px" }}>
          {props.total.toLocaleString()} SEK
        </p>
        <p style={{ fontWeight: "lighter" }}>Senast uppdaterad: </p>
          <LastUpdate time={props.time} />

        <IndustryGraph
          companyColours={companyColours}
          preferredIndustries={props.preferredIndustries}
          remainingIndustries={props.propremainingIndustries}
          borderColours={borderColours}
          sumOfRemaining={props.sumOfRemaining}
          sumOfTotal={props.total}
          IndustryBalance={props.IndustryBalance}
          randomColour={props.randomColour}
        />
        <p>Uppdatera dina preferenser i Inställningar</p>
        <canvas
          style={{
            backgroundColor: borderColours()[props.otherColour].colour,
            width: "10px",
            height: "30px",
            position: "absolute",
            left: "-10px",
          }}
        />
        <Remaining
          spacedSum={props.spacedSum}
          remainingIndustries={props.remainingIndustries}
        />
      </div>
    </div>
  );
};

export default DefaultHoldings;
