import React, { useEffect, useState } from 'react'

const Counter = () => {
    // let count = 100

    /*
        let/const [state_variable, function] = useState(initial value)
        state_variable - name of the variable
        function - method to update state variable
        initial value - starting value of state variable
                0-9 : number
                ' ' : string
                [ ] : array
                {  } : object
    */

    /*
    useEffect(function, [dependencies])
        function : effects to be shown, ()=>{}
        dependencies : state variables that trigger the function
            [] -> shows effect on page load only 
            [var1, var2] -> shows effect on page load and changes in var1, var2
            null -> no array is passed -> shows effect on page load and every changes in state variable
    */
    let [count, setCount] = useState(100)
    let [data, setData] = useState(1000)

    useEffect(()=>{
        window.alert("Value changed")
    },[count])

    const increase_count = () => {
        setCount(++count)
    }
    const decrease_count = () => {
        setCount(--count)
    }
    const reset = () => {
        setCount(100)
    }
    const increase_data = () => {
        setData(data+100)
    }
    const decrease_data = () => {
        setData(data-100)
    }
    const reset_data = () => {
        setData(1000)
    }

    return (
        <>
            <div className='d-flex align-items-center flex-column' style={{ height: "100vh" }}>
                <h1 className='text-center w-100'>Counter: {count}</h1>
                <div className='btn-group'>
                    {
                    count<110 
                    && 
                    <button className='btn btn-warning' onClick={increase_count}>Increase count</button>
                    }
                    <button className='btn btn-danger' onClick={decrease_count}>Decrease count</button>
                    <button className='btn btn-info' onClick={reset}>Reset Count</button>
                </div>
                <h1 className='w-100 text-center'>Data: {data}</h1>
                <div className='btn-group'>
                    <button className='btn btn-warning' onClick={increase_data}>Increase Data</button>
                    <button className='btn btn-danger' onClick={decrease_data}>Decrease Data</button>
                    <button className='btn btn-info' onClick={reset_data}>Reset Data</button>
                </div>
            </div>
        </>
    )
}

export default Counter