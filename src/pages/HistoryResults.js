import React from 'react'
import Button from '../components/buttons/button/Button';
import { useEffect, useState } from 'react';
import { db } from '../firebase/firebase';

const HistoryResults = ({history}) => {

    const [listUsers, setListUsers] = useState([]);

    useEffect(() => {
        console.log(listUsers)
    }, [listUsers])

    useEffect(() => {
        const getUsers = async () => {
            db.collection('users').onSnapshot((querySnapshot) => {
                const users = [];
                querySnapshot.forEach(user => {
                    users.push({
                        ...user.data(),
                        id: user.id
                    })
                })
                setListUsers(users)
            })
        }
        getUsers()
    }, [])

    return (
        <div>
            <div className="container">
                <div className="row justify-content-center p-4">
                    <h1>Ranking</h1>
                </div>
                <div className="row justify-content-center p-4">
                    <div className="dropdown">
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            {/* eslint-disable-next-line  */}
                            <a className="dropdown-item" href="#">Semana</a>
                            {/* eslint-disable-next-line  */}
                            <a className="dropdown-item" href="#">Mes</a>
                            {/* eslint-disable-next-line  */}
                            <a className="dropdown-item" href="#">Año</a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center p-2">
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Puntaje</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>sacm1046</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Martín Antúnez</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Juan Pablo</td>
                                <td>5</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="row justify-content-center p-4">
                    <div className="col-sm-6">
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