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
            if (mySession.players.length > 1 ) {
                setMySession({})
                history.push(`/v1/cards/${code}-${gamesNumber}`)
            }
        }
         /* JSON.stringify(mySession) !== '{}' && mySession.players.length > 1  && history.push(`/v1/cards/${code}`) */
    }, [mySession, history, code, gamesNumber])

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
                let currentSession = docs.filter((doc) => doc.code === code)
                console.log(currentSession)
                currentSession.length > 0 && setMySession(currentSession[0])
            })
        }
        getRooms()
    }, [code])

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