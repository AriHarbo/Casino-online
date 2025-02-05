import React from 'react'
import { Link } from 'react-router-dom'

const GameCard = ({game}) => {
    return (
    <div className='gameCard'>
        <img className='gameImage' src={game.image} alt="Imagen del juego" />
        <h3 className='gameName'>{game.name}</h3>
        <Link className="playButton" to="#">Play Now</Link>
    </div>
  )
}

export default GameCard
