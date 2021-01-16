import React from 'react'
import FrontCard from '../components/card/FrontCard';
import Button from '../components/buttons/button/Button';

const Cards = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <h1>Selecciona una carta</h1>
            </div>
            <div className="row justify-content-center text-center">
                <div class="col-sm-6">
                    <FrontCard title="Mestizaje" idImg="1ewOVypw29MFRbR2Ec_b1isl5GeMfVZLx" imgType="1NvdS-kZQJi3YeNobSGNuepZd59d8PCKC" type="Tijera" medal="3" body="Proceso mediante el cual españoles, indigenas y negros se mezclaron, dando origen a nuevos grupos raciales (mestizos, zambos y mulatos)." />
                    <Button text="Seleccionar"/>
                </div>
                <div class="col-sm-6">
                    <FrontCard title="Malón" idImg="1NwT0bq2eGItYLMZ8T7LD3N2eA-LItOEE" imgType="1weLaeKb9d8dzKUIJ8o7CGdRYqovq0LLZ" type="Piedra" medal="2" body="Eran ataques realizados por los mapuches a los españoles con la finalidad de robar caballos, mujeres, armas y alimentos." />
                    <Button text="Seleccionar"/>
                </div>
                <div class="col-sm-6">
                    <FrontCard title="Encomienda" idImg="18WU5KqCf6nHAZmsmevy1qskm3RxHxJCC" imgType="1gyolkdqyZDZ2LdFXBppZWnUaKTuDU050" type="Papel" medal="1" body="Sistema de trabajo indigena, donde un español obtenia un grupo de indigenas para realizar trabajos, el español a cambio les daba comida, ropa y techo." />
                    <Button text="Seleccionar"/>
                </div>
            </div>
        </div>
    )
}

export default Cards