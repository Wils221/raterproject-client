import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getGames, deleteGame } from "../../managers/GameManager.js"
import "./game.css"

export const GameList = (props) => {
    const [ games, setGames ] = useState([])
    
    const navigate = useNavigate()

    useEffect(() => {
        getGames().then(data => setGames(data))
    }, [])  
    return (
        
        <article className="games">
            {
                games.map(game => {
                    return <section key={`game--${game.id}`} className="game">
                        <div className="game__name">Name: {game.name}</div>
                        <div className="game__description">Description: {game.description}</div>
                        <div className="game__genre"> Genre: {game.genre.genre}</div>
                        <div className="game__footer">
                            <button
                                onClick={() => {
                                    navigate({ pathname: `editgame/${game.id}`})
                                }}>Edit</button>
                        </div>
                        <div className="game__footer">
                            <button
                                onClick={() => {
                                    deleteGame(game.id)
                                    .then(window.location.reload(false))
                                }}>Delete</button>
                        </div>
        
                    </section>
                })
            }
        </article>
    )
}