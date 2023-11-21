import React, { Component, useState } from 'react'
import Sqaure from './Sqaure'
import "./Board.css";


 const Board = ({squares, onClick}) => {
    // const [sqaures, setSqaures] = useState(Array(9).fill(null));
    // 둘 중에 누군가 이기면 더 이상 클릭 못 함 또는 이미 스퀘어 채워져있으면 클릭 못하게 해달라 
    const renderSquare = (i) => {
      return <Sqaure 
      value={squares[i]} 
      onClick = {() => onClick(i)} />
    }
    
    return (
      <div>
        <div className='board-row'>
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
        </div>
        <div className='board-row'>
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
        </div>
        <div className='board-row'>
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
        </div>
      </div>
    )
  }
export default Board
