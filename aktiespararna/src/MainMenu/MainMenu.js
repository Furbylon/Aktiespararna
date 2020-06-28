import React,{useState} from "react";
import Home from "./Hem/Home";
import Portfolio from "./Min Portfolio/Portfolio";
import Settings from "./UserSettings/Settings";
import { Route } from "react-router-dom";
import Sidebar from "../MainMenu/Components/SideBar";

const MainMenu = (props) => {
 let [preferredValues, setPreferredValues] = useState()
  return (
    <div id="mainMenu">
      <Route path="/mainMenu" component={Sidebar} />
      <Route path="/mainMenu/home" component={Home} />
      <Route path="/mainMenu/portfolio" component={Portfolio} />
      <Route path="/mainMenu/settings" render={() => <Settings preferredValues={preferredValues} setPreferredValues={setPreferredValues} password ={props.password} setPassword={props.setPassword}/>}/>
    </div>
  );
};

export default MainMenu;
