import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Games = () => {
    const game_name = useSelector(store => store.gameStore.game)
    const player_name = useSelector(store => store.gameStore.player)
    const [game, setGame] = useState('')
    const [player, setPlayer] = useState('')

    const dispatch = useDispatch()

    return (
        <>
            <h1 className='text-center mt-5'>Game: {game_name}</h1>
            <h1 className='text-center mt-5'>Player: {player_name}</h1>

            <form className='w-50 m-auto text-center'>
                <input type='text' className='form-control' onChange={e=>setGame(e.target.value)}/>
                <button className='btn btn-warning' onClick={(e)=>{
                    e.preventDefault()
                    return dispatch({type: "UPDATE_GAME", payload: game})
                }}>Update Game</button>
            </form>

            <form className='w-50 m-auto text-center'>
                <input type='text' className='form-control' onChange={e=>setPlayer(e.target.value)}/>
                <button className='btn btn-warning' onClick={(e)=>{
                    e.preventDefault()
                    return dispatch({type: "UPDATE_PLAYER", payload: player})
                }}>Update Game</button>
            </form>
        </>
    )
}

export default Games