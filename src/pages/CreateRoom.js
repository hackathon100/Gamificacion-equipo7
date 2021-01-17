import React, { useContext, useEffect, useState } from 'react';
import Button from '../components/buttons/button/Button';
import { Context } from '../context/appContext';
import { db } from '../firebase/firebase';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const CreateRoom = ({ match, history }) => {

    const { store } = useContext(Context);
    const { gamesNumber } = match.params;
    const [codeRoom, setCodeRoom] = useState('');
    const [date, setDate] = useState('');
    const [currentRoom, setCurrentRoom] = useState({});


    const [copy, setCopy] = useState({
        value: '',
        copied: false
    })


    const postRoom = async (e) => {
        await db.collection('rooms').doc().set(currentRoom)
        history.push(`/v1/waitingroom/${codeRoom}-${gamesNumber}`)
    }

    useEffect(() => {
        setCurrentRoom({
            players: [
                store.currentUser
            ],
            games: gamesNumber,
            date: date,
            code: codeRoom,
            isActive: true
        })
        setCopy(v => ({ ...v, value: codeRoom}))
    }, [date, codeRoom, store, gamesNumber])

    useEffect(() => {
        const setCurrentDate = () => {
            const date = new Date();
            setDate(`${date.getDay()}/${date.getMonth() + 1}/${date.getFullYear()}`)
        }
        setCurrentDate()
    }, [])

    useEffect(() => {
        const generateRandomNumber = () => {
            return Math.floor(Math.random() * 10);
        }
        const generateCodeRoom = () => {
            let code = []
            for (let x = 0; x < 6; x++) {
                code.push(generateRandomNumber())
            }
            setCodeRoom(code.join(''))
        }
        generateCodeRoom()
    }, [])


    return (
        <>
            <div className="container">
                <div className="row justify-content-center p-4">
                    <h1>Crear sala de {gamesNumber} partidas</h1>
                </div>
                <div className="row justify-content-center p-2">
                    <p>¡Comparte el siguiente código para jugar!</p>
                </div>
                <div className="row justify-content-center text-center p-5">
                    <h1>{codeRoom}</h1>
                </div>


                <div className="row justify-content-center text-center">
                    <CopyToClipboard text={copy.value}
                        onCopy={() => setCopy({ ...copy, copied: true })}>
                        <button className="btn btn-danger" >Compartir</button>
                    </CopyToClipboard>
                    {copy.copied ? <span style={{ color: 'red' }}>Copiado</span> : null}
                </div>


                <div className="row justify-content-center text-center">
                    <Button
                        text="Ir a la sala de espera"
                        onClick={postRoom}
                    />
                </div>
            </div>
        </>
    )
}

export default CreateRoom;