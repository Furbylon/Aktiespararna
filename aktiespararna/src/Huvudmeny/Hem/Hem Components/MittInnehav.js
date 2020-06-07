import React from 'react'; 

class MittInnehav extends React.Component {
    render(){
      return(
        <div id = "mittInnehav" style = {{position: "relative"}}>
        <div>
        <header>Mitt Innehav</header>
        <button>Portfolio</button>
        </div>
        <h1>0 SEK</h1>
        <h2>Inget innehav tillagt ännu</h2>
        </div>
      )
    }
  }

export default MittInnehav;
