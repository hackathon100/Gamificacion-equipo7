import { useEffect, useState } from 'react';
import { db } from '../firebase/firebase';

const WaitingRoom = ({ history, match }) => {

    const { numberRoom } = match.params;
    const [timeToWait, setTimeToWait] = useState(150)
    const [mySession, setMySession] = useState({})
    const code = numberRoom.split('-')[0]
    const gamesNumber = numberRoom.split('-')[1]

    useEffect(() => {
        let time = setInterval(() => {
            setTimeToWait(tw => tw - 1)
        }, 1000);
        return () => clearInterval(time)
    }, [])

    useEffect(() => {
        if (timeToWait === 0) {
            history.push('/')
        }
    }, [timeToWait, history])

    useEffect(() => {
        if (JSON.stringify(mySession) !== '{}') {
            if (mySession.players.length === 2) {
                console.log(mySession.players.length)
                setMySession({})
            }
        }
        /*  JSON.stringify(mySession) !== '{}' && mySession.players.length && history.push(`/v1/cards/${code}`) */
    }, [mySession])

    useEffect(() => {
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
                console.log(currentSession)
                currentSession.length > 0 && setMySession(currentSession[0])
            })
        }
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