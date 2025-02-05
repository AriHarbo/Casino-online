import React, { useEffect, useState } from 'react'
import GameCard from './GameCard'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GameCardContainer = () => {

    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch('src/data/topGames.json')
            .then((response) => response.json())
            .then((data) => setGames(data))
            .catch((error) => console.error('Error cargando juegos:', error));
    }, []);
    console.log(games)

    //Settings para que funcione el slider de la libreria
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1
      };

    return (
        <div style={{ maxWidth: "100%", overflow: "hidden", padding: "15px 50px", margin: "0 10rem" }}>
               <Slider {...settings}>
            {games?.map((e) => {
                return (
                    <GameCard key={e.id} game={e} style={{ padding: "0 10px" }}/>
                )
            })}
            </Slider>
        </div>
    )
}

export default GameCardContainer
