//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import BottomRow from "./BottomRow";
import ButtonRow from "./ButtonRow";
import "./App.css";

function App(props) {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  
  //initialize scores
  const [homeScore, setHomeScore] = useState(21) // initialized scores at zero
  const [awayScore, setAwayScore] = useState (10) 
  
  // add functionality for touchdown buttons


  function keepScore(team, score){
    if(team === 'Home Team'){
      setHomeScore(homeScore + score)
    } else if(team === 'Away Team') {
      setAwayScore(awayScore + score)
    }
  }
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <ButtonRow keepScore={keepScore} />
    </div>
  );
}

export default App;
