import React from 'react'
import {useState} from 'react'

const CounterFBC = () => {
    let[count,setCount]=useState(0)
    let handleIncrement=()=>{
        setCount(count+1)
    }
    let handleDecrement=()=>{
        setCount(count-1)
    }
    let handleReset=()=>{
        setCount(0)
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={handleIncrement}>+increment</button>
        <button onClick={handleDecrement}>-decrement</button>
        <button onClick={handleReset}>reset</button>
    </div>
  )
}

export default CounterFBC