import React, { useState } from "react";
import "./App.css";

const TopRow = () => {
  
  const [homeScore, setHomeScore] = useState(20) // initialized scores at zero
  const [awayScore, setAwayScore] = useState (10) 
  // add functionality for touchdown buttons
  // const homeTouchdown = event => {
  //   setHomeScore(homeScore + 7)
  // }
  // const awayTouchdown = event => {
  //   setAwayScore(awayScore + 7)
  // }
  // // add functionality for field goal buttons
  // const homeFieldGoal= event => {
  //   setHomeScore(homeScore + 3)
  // }
  // const awayFieldGoal = event => {
  //   setAwayScore(awayScore + 3)
  // }
  return (
    <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>
            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
  );
};

export default TopRow;
