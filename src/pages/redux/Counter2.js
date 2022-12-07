import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Counter2 = () => {
    let count_store = useSelector(store=>store.counterStore)
    let count = count_store.counter

    let dispatch = useDispatch()

    // let count = useSelector(store=> store.counter)
    return (
        <>
            <div className='d-flex align-items-center flex-column' style={{ height: "100vh" }}>
                <h1 className='text-center w-100'>Counter: {count}</h1>

                <button className='btn btn-info' onClick={()=>{
                    return dispatch({type: "INCREASE_COUNT"})
                }}>Increase Count</button>
            </div>
        </>
    )
}

export default Counter2