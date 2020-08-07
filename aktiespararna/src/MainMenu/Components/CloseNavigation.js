
const CloseNavigation = () => {
    document.getElementById("mySideBar").style.width = "0px";
    document.getElementById("mainMenu").style.marginLeft = "0px";
    document.getElementById("sidebarButton").innerHTML = "Öppna sidofält";
  };

  export default CloseNavigation