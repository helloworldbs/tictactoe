import React, { Component } from 'react'
import "./Square.css";

const Sqaure = ({onClick,value}) => {

    return (
      <button 
      className='Square' 
      onClick= {onClick}>
        {value}
      </button>
    )
}
export default Sqaure