import React from "react";
import { DotForwardButton, DotBackButton } from "./DotButtons";
import { FirstPageButton, LastPageButton } from "./FirstAndLastPageButtons";
import { StepBackButton, StepForwardButton } from "./StepBackAndForwardButtons";

let RenderPageSwitch = (props) => {
  if (props.lastPage <= 50) {
    return (
      <div>
        <form onClick={props.updatePage} id={"nativePageSwitchForm"}>
          <FirstPageButton pagesArray={props.pagesArray} />
          <StepBackButton />
          <props.NativeButtons
            pagesArray={props.pagesArray}
            buttonArr={props.buttonArr}
            numberButtons={props.numberButtons}
            currentPage={props.currentPage}
            setNumberButton={props.setNumberButtons}
          />
          <StepForwardButton />
          <LastPageButton lastPage={props.lastPage} />
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <form onClick={props.updatePage} id={"pageSwitchForm"}>
          <FirstPageButton pagesArray={props.pagesArray} />
          <StepBackButton currentPage={props.currentPage} shownData={props.shownData}/>
          <DotBackButton
            currentPage={props.currentPage}
            pagesArray={props.pagesArray}
            shownData={props.shownData}
          />
          <props.NativeButtons
            pagesArray={props.pagesArray}
            buttonArr={props.buttonArr}
            numberButtons={props.numberButtons}
            currentPage={props.currentPage}
            setNumberButton={props.setNumberButtons}
          />
          <DotForwardButton
            currentPage={props.currentPage}
            shownData={props.shownData}
            pagesArray={props.pagesArray}
          />
          <StepForwardButton currentPage={props.currentPage} shownData={props.shownData}/>
          <LastPageButton lastPage={props.lastPage} />
        </form>
      </div>
    );
  }
};

export default RenderPageSwitch;
