import React, { useState } from "react";
import "./App.css";

const BottomRow = () => {
  const [currentQuarter, setQuarter] = useState(1)
  const quarters = event =>{
    setQuarter(currentQuarter < 4 ? currentQuarter +1 : currentQuarter -3)
  } 
  const [currentDown, setDowns] = useState(1)
  const downsUp = event =>{
    setDowns(currentDown < 4 ? currentDown +1 : currentDown -3)
  } 
  const downsDown = event =>{
    setDowns( currentDown > 0 ? currentDown -1 : currentDown + 1)
  } 
  
  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{currentDown}</div>
        <button onClick={() => downsUp(currentDown + 1)}>^ Downs</button>
        <button onClick={() => downsDown(currentDown - 1)}>\/ Downs</button>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">7</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">21</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{currentQuarter}</div>
        <button onClick={() => quarters(currentQuarter + 1)}>Next Quarter</button>
      </div>
    </div>
  );
};

export default BottomRow;
