import React from 'react'
import "./Squares.css";
function Square(props) {
  return (
    <div className='Square' onClick={props.onClick}> 
    <h5 className='valueName'>{props.value}</h5></div>
  )
}

export default Square