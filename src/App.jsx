import { useState } from 'react'
import './App.css'
import Dice from './components/Dice';
import Name from './components/Name';

function App() {
  const [player1, setPlayer1] = useState("Player 1");
  const [player1Dice, setPlayer1Dice] = useState(1);
  const [player2Dice, setPlayer2Dice] = useState(1);
  const [result, setResult] = useState("");
  const [rolling, setRolling] = useState(false);

  const rollDice = () => {
    setRolling(true);
    let rollInterval = setInterval(() => {
      setPlayer1Dice(Math.ceil(Math.random() * 6));
      setPlayer2Dice(Math.ceil(Math.random() * 6));
    }, 300);

    setTimeout(() => {
      clearInterval(rollInterval);
      const p1 = Math.ceil(Math.random() * 6);
      const p2 = Math.ceil(Math.random() * 6);
      setPlayer1Dice(p1);
      setPlayer2Dice(p2);

      if (p1 > p2) setResult(`${player1} Wins!`);
      else if (p1 < p2) setResult("Player 2 Wins!");
      else setResult("Draw!");

      setRolling(false);
    }, 5000);

    
  }
  return (
    <> 
       <div className="app">
       <div className="game">{result}</div>
      <Name name={player1} setName={setPlayer1} />
      
      <div className="container">
        <div>
          <div className="name">{player1}</div>
          <Dice number={player1Dice} />
        </div>
        <div>
          <div className="name">Player 2</div>
          <Dice number={player2Dice} />
        </div>
      </div>
      <button onClick={rollDice} disabled={rolling}>
        {rolling ? "Rolling" : "Roll Now"}
      </button>
    </div>
    </>
  )
}

export default App;
