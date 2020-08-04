const openCloseNavigation = () => {
    if (document.getElementById("sidebarButton").innerHTML === "Öppna sidofält") {
      document.getElementById("mySideBar").style.width = "150px";
      document.getElementById("mainMenu").style.marginLeft = "150px";
      document.getElementById("sidebarButton").innerHTML = "Stäng";
    } else {
      document.getElementById("mySideBar").style.width = "0px";
      document.getElementById("mainMenu").style.marginLeft = "0px";
      document.getElementById("sidebarButton").innerHTML = "Öppna sidofält";

    }
  };

export default openCloseNavigation