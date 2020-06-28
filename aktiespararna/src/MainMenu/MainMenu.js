import React,{useState} from "react";
import Home from "./Hem/Home";
import Portfolio from "./Min Portfolio/Portfolio";
import Settings from "./UserSettings/Settings";
import { Route } from "react-router-dom";
import Sidebar from "../MainMenu/Components/SideBar";
import data from "../data/JSON/profil.json"

const MainMenu = (props) => {
 let [preferredValues, setPreferredValues] = useState(0,4)
 let [profile, setProfile] = useState(data.slice(0,1))
  return (
    <div id="mainMenu">
      <Route path="/mainMenu" component={Sidebar} />
      <Route path="/mainMenu/home" render={() => <Home profile={profile} preferredValues={preferredValues}/>} />
      <Route path="/mainMenu/portfolio" component={Portfolio} />
      <Route path="/mainMenu/settings" render={() => <Settings profile={profile} setProfile={setProfile} preferredValues={preferredValues} setPreferredValues={setPreferredValues} password ={props.password} setPassword={props.setPassword}/>}/>
    </div>
  );
};

export default MainMenu;
