import React from 'react'
import FrontCard from '../components/card/FrontCard';
import BackCard from '../components/card/BackCard';
/* import Button from '../components/buttons/button/Button'; */
import { useEffect, useState } from 'react';

const Question = ({ history, match }) => {

    const [timeToWait, setTimeToWait] = useState(30)
    const winner = match.params.winner.split('-')[0];
    const who = match.params.winner.split('-')[1];

    useEffect(() => {
        let time = setInterval(() => {
            setTimeToWait(tw => tw - 1)
        }, 1000);
        return () => clearInterval(time)
    }, [])

    useEffect(() => {
        if (timeToWait === 0) history.push(winner === who ? '/v1/player2win' : '/v1/player1lose')
    }, [timeToWait, history])

    return (
        <div className="container">
            <div className="row justify-content-center">
                {
                    winner === who &&
                    <>
                        <h1>¡Perdiste en el cachipun y debes responder la pregunta!</h1>
                        <p>Selecciona la respuesta correcta para ganar la ronda</p>
                    </>
                }

                {
                    winner !== who &&
                    <h1>¡Ganaste en el cachipun y debes esperar que respondan la pregunta!</h1>
                }
            </div>
            <div className="row justify-content-center">
                <h1>{timeToWait} segundos</h1>
            </div>

            {
                winner === who && <div className="row justify-content-center text-center">
                    <div className="col-6">
                        <FrontCard title="Malón" idImg="1NwT0bq2eGItYLMZ8T7LD3N2eA-LItOEE" imgType="1weLaeKb9d8dzKUIJ8o7CGdRYqovq0LLZ" type="Piedra" medal="3" body="Eran ataques realizados por los mapuches a los españoles con la finalidad de robar caballos, mujeres, armas y alimentos" />
                    </div>
                    <div className="col-6">
                        <BackCard question="¿Qué busca obtener los mapuches con estos ataques?" answer1="Robar caballos, mujeres, armas y alimentos" answer2="Cansar a los soldados españoles" answer3="Solo armamentos" />
                    </div>
                </div>
            }

            {
                winner !== who && <div className="row justify-content-center text-center">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <FrontCard title="Malón" idImg="1NwT0bq2eGItYLMZ8T7LD3N2eA-LItOEE" imgType="1weLaeKb9d8dzKUIJ8o7CGdRYqovq0LLZ" type="Piedra" medal="3" body="Eran ataques realizados por los mapuches a los españoles con la finalidad de robar caballos, mujeres, armas y alimentos" />
                    </div>
                    <div className="col-3"></div>
                </div>
            }


        </div>
    )
}

export default Question