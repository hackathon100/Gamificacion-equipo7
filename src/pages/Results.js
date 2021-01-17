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
                    <h1>Felicidades ganaste la ronda 1, prepárate para las 2 rondas restantes.</h1>
                    <h1>¡Esa no era la respuesta correcta!, aún quedan 2 rondas más.</h1>
                    <h1>¡Empate!, ¡cada uno gana un punto!</h1>
                    <h1>Felicitaciones, ¡has ganado!</h1>
                    <h1>¡Has perdido!, ¡pero la próxima será la vencida!</h1>
                    <h1>¡Han empatado!, vuelvan a jugar para sumar puntos</h1>
                    <p>Sigue jugando para subir en el ranking de puntos</p>
                </div>
                <div className="row justify-content-center">
                    <p>La ronda 2 comienza en: {timeToWait}</p>
                </div>
                <div className="row justify-content-center text-center">
                    <div className="col-sm-6">
                        <p>Jugador 1</p>
                        <h4>1</h4>
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