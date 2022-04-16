import React, { useReducer, useState } from 'react';
import reducer from './reducer'

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const [intervalId, setIntervalId] = useState('')
  const handleSelfIncrease = () => {
    if (!intervalId) {
      setIntervalId(setInterval(() => {
        dispatch({ type: "SELF_INCREASE" })
      }, 1000))
    }
    else {
      setIntervalId('')
      clearInterval(intervalId)
    }
  }
  return (
    <>
      <section style={{ margin: '4rem 0' }}>
        <h2>regular counter</h2>
        <h1>{state.count}</h1>
        <button className='btn' onClick={(e) => dispatch({ type: "DECREASE", payload: e.target.value })}>
          decrease
        </button>
        <button className='btn' onClick={(e) => dispatch({ type: "RESET", payload: e.target.value })}>
          reset
        </button>
        <button className='btn' onClick={(e) => dispatch({ type: "INCREASE", payload: e.target.value })}>
          increase
        </button>
        <button className='btn' onClick={handleSelfIncrease}>{intervalId ? 'Stop' : 'Self Increase'}</button>
      </section>
    </>
  );
};

export default Counter;
