import React from 'react'
import FrontCard from '../components/card/FrontCard';
import Button from '../components/buttons/button/Button';
import { useEffect, useState } from 'react';

const Cachipun = ({history}) => {

    const [timeToWait, setTimeToWait] = useState(8)

    useEffect(() => {
        let time = setInterval(() => {
            setTimeToWait(tw => tw - 1)
        }, 1000);
        return () => clearInterval(time)
    }, [])

    useEffect(() => {
        if (timeToWait === 0) history.push('/v1/Question')
    }, [timeToWait, history])

    return (
        <div className="container">
            <div className="row justify-content-center">
                <h1>Cartas seleccionadas</h1>
                <h2>¡En caso de empate se definirá en que carta tenga mas medallas!</h2>
            </div>
            <div className="row justify-content-center text-center">
                <div class="col">
                    <FrontCard title="Mestizaje" idImg="1ewOVypw29MFRbR2Ec_b1isl5GeMfVZLx" imgType="1NvdS-kZQJi3YeNobSGNuepZd59d8PCKC" type="Tijera" medal="3" body="Proceso mediante el cual españoles, indigenas y negros se mezclaron, dando origen a nuevos grupos raciales (mestizos, zambos y mulatos)." />
                </div>
                <div>
                    <h1>VS</h1>
                </div>
                <div class="col">
                    <FrontCard title="Malón" idImg="1NwT0bq2eGItYLMZ8T7LD3N2eA-LItOEE" imgType="1weLaeKb9d8dzKUIJ8o7CGdRYqovq0LLZ" type="Piedra" medal="2" body="Eran ataques realizados por los mapuches a los españoles con la finalidad de robar caballos, mujeres, armas y alimentos." />
                </div>
            </div>
        </div>
    )
}

export default Cachipun