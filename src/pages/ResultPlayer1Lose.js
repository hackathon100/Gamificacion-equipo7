import React from 'react'
import { useEffect, useState } from 'react';
import Button from '../components/buttons/button/Button';

const ResultPlayer1Lose = ({ history }) => {

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
                <h1>¡Has perdido!, ¡pero la próxima será la vencida!</h1>

                <p>Sigue jugando para subir en el ranking de puntos y seguir aprendiendo</p>
            </div>

            <div className="row justify-content-center">
                <p>Irás a la pantalla principal en: {timeToWait}</p>
            </div>
            <div className="row justify-content-center text-center">
                <div className="col-sm-6">
                    <p>Jugador 1</p>
                    <h4>0</h4>
                </div>
                <div className="col-sm-6">
                    <p>Jugador 2</p>
                    <h4>1</h4>
                </div>
            </div>
            <div className="row justify-content-center text-center">
                <Button
                    text="VOLVER"
                    onClick={() => history.push('/')}
                />
            </div>
        </div>
    )
}

export default ResultPlayer1Lose