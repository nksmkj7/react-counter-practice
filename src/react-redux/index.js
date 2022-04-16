import React, { useReducer, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, reset } from './features/counter/counterSlice'
import { Link } from 'react-router-dom'

const Counter = () => {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    const [intervalId, setIntervalId] = useState('')
    const handleSelfIncrease = () => {
        if (!intervalId) {
            setIntervalId(setInterval(() => {
                dispatch(increment())
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
                <h2>regular counter (React-Redux)</h2>
                <h1>{count}</h1>
                <button className='btn' onClick={() => dispatch(decrement())}>
                    decrease
                </button>
                <button className='btn' onClick={(e) => dispatch(reset())}>
                    reset
                </button>
                <button className='btn' onClick={(e) => dispatch(increment())}>
                    increase
                </button>
                <button className='btn' onClick={handleSelfIncrease}>{intervalId ? 'Stop' : 'Self Increase'}</button>
            </section>
            <section>
                <button className='btn'><Link to='/'>Go To Menu</Link></button>
            </section>
        </>
    );
};

export default Counter;
