import React from 'react'
import GameCard from '../components/GameCard'
import GameCardContainer from '../components/GameCardContainer'

const Home = () => {
  return (
    <div className='home'>
      <div className='hero-container'>
        <img src="/images/jackpo.PNG" alt="Casino Banner" className="hero-image" />
      </div>
      <div className='topGames'>
        <h2><span className='colorSecundario'>Top</span> Games</h2>
        <div className='gameCarrousel'>
          <GameCardContainer></GameCardContainer>
        </div>
      </div>
    </div>
  )
}

export default Home
