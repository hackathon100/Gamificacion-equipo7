import React from 'react'
import { useEffect, useState } from 'react';

const Results = ({history}) => {

    const [timeToWait, setTimeToWait] = useState(10)

    useEffect(() => {
        let time = setInterval(() => {
            setTimeToWait(tw => tw - 1)
        }, 1000);
        return () => clearInterval(time)
    }, [])

    useEffect(() => {
        if (timeToWait === 0) history.push('/')
    }, [timeToWait, history])

    return (
        <div className="container">
                <div className="row justify-content-center">
                    <h1>¡Empate!, ¡ha sido una partida muy reñida!</h1>
                    <p>¡!</p>
                </div>
                <div className="row justify-content-center">
                    <p>Volverás al menú en: {timeToWait}</p>
                </div>
                <div className="row justify-content-center text-center">
                    <div className="col-sm-6">
                        <p>Jugador 1</p>
                        <h4>0</h4>
                    </div>
                    <div className="col-sm-6">
                        <p>Jugador 2</p>
                        <h4>0</h4>
                    </div>
                </div>
            </div>
    )
}

export default Results