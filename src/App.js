import React, { Component } from "react";
import ScoreKeeper from './ScoreKeeper'
import IconList from './IconList'
import Lottery from './Lottery'
import './App.css';

function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery title='Mini Daily' maxNum={10} maxBalls={4} />
    </div>
  );
}

export default App;
