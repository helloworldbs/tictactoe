import './App.css';
import Board from './components/Board';
import React, {useState} from 'react';

function App () {
  const[history, setHistory] = useState([{squares: Array(9).fill(null)}]);
  const [stepNext, setStepNext] = useState(0);
  const [xisNext,setXisNext] = useState(true);
  const calculationWinner = (squares) => {
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
    for (let i = 0; i < lines.length; i++) {
      const [a,b,c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  const current = history[stepNext];
  const winner = calculationWinner(current.squares);

  let status;
  if (winner) {
    status = 'Winner :' + winner;
  } else {
    status = `Next Player : ${xisNext? 'X' : 'O'}`;
  }
  const handleClick = (i) => {
    const newHistory = history.slice(0, stepNext +1);
    const newCurrent = newHistory[newHistory.length - 1];
    const newSquares = newCurrent.squares.slice();
    if (calculationWinner(newSquares) || newSquares[i]) {
      return;
    }

    newSquares[i] = xisNext ? 'X' : 'O';
    setHistory([...newHistory, {squares: newSquares}]); 
    setXisNext(current => !current);
    setStepNext(newHistory.length);
  }

  const moves = history.map((step, move) => {
    const desc = move ?
    'Go to move #' + move : 
    'Go to game start';
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    )
  })

  const jumpTo = (step) => {
    setStepNext(step);
    setXisNext((step % 2) === 0);
    }

  return (
    <div className="game">
      <div className='game-board'>
        <Board squares={current.squares} onClick={(i) =>handleClick(i)}/>
      </div>
      <div className='game-info'>
        <div className='status'>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  ); 
}
export default App;

