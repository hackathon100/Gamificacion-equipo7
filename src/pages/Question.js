import React from 'react'
import FrontCard from '../components/card/FrontCard';
import BackCard from '../components/card/BackCard';
/* import Button from '../components/buttons/button/Button'; */
import { useEffect, useState } from 'react';

const Question = ({ history }) => {

    const [timeToWait, setTimeToWait] = useState(30)

    useEffect(() => {
        let time = setInterval(() => {
            setTimeToWait(tw => tw - 1)
        }, 1000);
        return () => clearInterval(time)
    }, [])

    useEffect(() => {
        if (timeToWait === 0) history.push('/v1/Results')
    }, [timeToWait, history])

    return (
        <div className="container">
            <div className="row justify-content-center">
                <h1>¡Perdiste en el cachipun y debes responder la pregunta!</h1>
                <h1>¡Ganaste en el cachipun y debes esperar que respondan la pregunta!</h1>
                <p>Selecciona la respuesta correcta para ganar la ronda</p>
            </div>
            <div className="row justify-content-center">
                <h1>{timeToWait} segundos</h1>
            </div>
            <div className="row justify-content-center text-center">
                <div className="col-sm-6">
                    <FrontCard title="Mestizaje" idImg="1ewOVypw29MFRbR2Ec_b1isl5GeMfVZLx" imgType="1NvdS-kZQJi3YeNobSGNuepZd59d8PCKC" type="Tijera" medal="3" body="Proceso mediante el cual españoles, indigenas y negros se mezclaron, dando origen a nuevos grupos raciales (mestizos, zambos y mulatos)." />
                </div>
                <div className="col-sm-6">
                    <BackCard question="¿Cómo se llamó el grupo racial producto de la mezcla entre españoles e indigenas?" answer1="Se llamaban Mestizos" answer2="Eran los Zambos" answer3="Mulatos"/>
                </div>
            </div>
        </div>
    )
}

export default Question