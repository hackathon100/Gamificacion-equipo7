import React from 'react'
import Button from '../components/buttons/button/Button';

const HistoryResults = ({history}) => {
    return (
        <div>
            <div className="container">
                <div className="row justify-content-center p-4">
                    <h1>Ranking</h1>
                </div>
                <div className="row justify-content-center p-4">
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Intervalo de tiempo
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            {/* eslint-disable-next-line  */}
                            <a class="dropdown-item" href="#">Semana</a>
                            {/* eslint-disable-next-line  */}
                            <a class="dropdown-item" href="#">Mes</a>
                            {/* eslint-disable-next-line  */}
                            <a class="dropdown-item" href="#">Año</a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center p-2">
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Puntaje</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Pepito Ramirez</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Juan Juarez</td>
                                <td>18</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>JK</td>
                                <td>15</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="row justify-content-center p-4">
                    <div class="col-sm-6">
                        <Button
                            text=" Volver"
                            onClick={() => history.push('/')}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HistoryResults