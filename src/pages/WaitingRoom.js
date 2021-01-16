import { useEffect, useState } from 'react';
import { db } from '../firebase/firebase';

const WaitingRoom = ({ history }) => {

    const [timeToWait, setTimeToWait] = useState(150)
    const [session, setSession] = useState({})

    useEffect(() => {
        let time = setInterval(() => {
            setTimeToWait(tw => tw - 1)
        }, 1000);
        return () => clearInterval(time)
    }, [])

    useEffect(() => {
        if (timeToWait === 0) history.push('/')
    }, [timeToWait, history])

    const getRooms = async () => {
        db.collection('rooms').onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach(doc => {
                docs.push({
                    ...doc.data(),
                    id: doc.id
                })
            })
            let currentSession = docs.filter((doc) => doc.players.length > 1)
            setSession(currentSession[0])
        })

    }

    useEffect(() => {
        console.log(session)
    }, [session])

    useEffect(() => {
        getRooms()
    }, [])

    return (
        <>
            <div className="container">
                <div className="row justify-content-center p-4">
                    <h1>Sala de espera</h1>
                </div>
                <div className="row justify-content-center p-2">
                    <p>¡Espera mientras tu amigo se une a la partida!</p>
                </div>
                <div className="row justify-content-center text-center p-5">
                    <p>Se debe de unir antes que el tiempo acabe o serás devuelto a la pantalla principal</p>
                </div>
                <div className="row justify-content-center text-center p-5">
                    <h1>{timeToWait} segundos</h1>
                </div>
            </div>
        </>
    )
}

export default WaitingRoom