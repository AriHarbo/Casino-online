import React, { useEffect, useState } from 'react'
import GameCard from './GameCard'

const GameCardContainer = () => {

    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch('src/data/topGames.json')
            .then((response) => response.json())
            .then((data) => setGames(data))
            .catch((error) => console.error('Error cargando juegos:', error));
    }, []);
    console.log(games)

    return (
        <>
            {games?.map((e) => {
                return (
                    <GameCard key={e.id} game={e} />
                )
            })}
        </>
    )
}

export default GameCardContainer
