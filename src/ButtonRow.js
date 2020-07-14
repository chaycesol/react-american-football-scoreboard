import React from "react";
import "./App.css";

function ButtonRow(props){
  const {keepScore} = props

  return (
    <section className="buttons">
      <div className="homeButtons">
        {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
        <button onClick ={() => keepScore('Home Team', 7)} className="homeButtons__touchdown">Home Touchdown</button>
        <button onClick ={() => keepScore('Home Team', 3)}  className="homeButtons__fieldGoal">Home Field Goal</button>
      </div>
      <div className="awayButtons">
        <button onClick ={() => keepScore('Away Team', 7)} className="awayButtons__touchdown">Away Touchdown</button>
        <button onClick ={() => keepScore('Away Team', 3)} className="awayButtons__fieldGoal">Away Field Goal</button>
      </div>
    </section>
  );
};

export default ButtonRow;
