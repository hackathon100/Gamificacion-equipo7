import FrontCard from '../components/card/FrontCard';
import { useEffect, useState } from 'react';
import { db } from '../firebase/firebase';

const Cachipun = ({ history, match }) => {

    const [timeToWait, setTimeToWait] = useState(10)
    const [winner, setWinner] = useState(2)
    const code = match.params.numberRoom.split('-')[0];
    const who = match.params.numberRoom.split('-')[1];
    const [mySession, setMySession] = useState({});


    const handleWinner = async (index, player) => {

        console.log(player.card.front.cachipum.type)

        let values = []

        values.push(player.card.front.cachipum.type)

        console.log(values)

        /* const result = {
            ""
        }[player.card.front.cachipum.type] */


        /* const body = { ...mySession }
        Object.assign(body.players[index], { card: card })

        await db.collection('rooms').doc(mySession.id).update(body); */
        /* history.push(`/v1/cachipun/${code}`) */
        /* 
                console.log(values) */
    }

    useEffect(() => {
        let time = setInterval(() => {
            setTimeToWait(tw => tw - 1)
        }, 1000);
        return () => clearInterval(time)
    }, [])

    useEffect(() => {
        if (timeToWait === 0) history.push(`/v1/Question/${winner}-${who}`)
    }, [timeToWait, history])

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
                console.log(currentSession[0])
                setMySession(currentSession[0])
            })
        }
        if (code) {
            getRooms()
        }
    }, [code])

    return (
        <div className="container">
            <div className="row justify-content-center">
                <h1>{timeToWait} Segundos</h1>
            </div>
            <div className="row justify-content-center">
                <h1>Cartas seleccionadas</h1>
                <h2>¡En caso de empate se definirá en que carta tenga mas medallas!</h2>
            </div>
            <div className="row justify-content-center text-center">
                {/* {
                    !!mySession.players && !!mySession.players[0] && !!mySession.players[0].card.front &&
                    <FrontCard
                        title={mySession.players[0].card.front.title}
                        idImg={mySession.players[0].card.front.imageId}
                        imgType={mySession.players[0].card.front.cachipum.img}
                        type={mySession.players[0].card.front.cachipum.type}
                        medal={mySession.players[0].card.front.medal}
                        body={mySession.players[0].card.front.text}
                    />
                }
                <h1>VS</h1>
                {
                    !!mySession.players && !!mySession.players[1] && !!mySession.players[1].card.front &&
                    <FrontCard
                        title={mySession.players[1].card.front.title}
                        idImg={mySession.players[1].card.front.imageId}
                        imgType={mySession.players[1].card.front.cachipum.img}
                        type={mySession.players[1].card.front.cachipum.type}
                        medal={mySession.players[1].card.front.medal}
                        body={mySession.players[1].card.front.text}
                    />
                } */}


                <div className="col">
                    <FrontCard title="Mestizaje" idImg="1ewOVypw29MFRbR2Ec_b1isl5GeMfVZLx" imgType="1NvdS-kZQJi3YeNobSGNuepZd59d8PCKC" type="Tijera" medal="3" body="Proceso mediante el cual españoles, indigenas y negros se mezclaron, dando origen a nuevos grupos raciales (mestizos, zambos y mulatos)." />
                </div>
                <h1>VS</h1>
                <div className="col">
                    <FrontCard title="Malón" idImg="1NwT0bq2eGItYLMZ8T7LD3N2eA-LItOEE" imgType="1weLaeKb9d8dzKUIJ8o7CGdRYqovq0LLZ" type="Piedra" medal="2" body="Eran ataques realizados por los mapuches a los españoles con la finalidad de robar caballos, mujeres, armas y alimentos." />
                </div>



                {/* 
                {JSON.stringify(mySession) !== '{}' &&
                    mySession.players.length > 0 &&
                    mySession.players.map((player, i) => {
                        if (!!player.card) {

                            mySession.players.length === 2 && handleWinner(i, player)
                            return (
                                <>
                                    <FrontCard
                                        key={player.email}
                                        title={player.card.front.title}
                                        idImg={player.card.front.imageId}
                                        imgType={player.card.front.cachipum.img}
                                        type={player.card.front.cachipum.type}
                                        medal={player.card.front.medal}
                                        body={player.card.front.text}
                                    />
                                    {
                                        i === 1 && <h1>VS</h1>
                                    }
                                </>
                            )
                        }
                        return null;
                    })
                } */}
            </div>
        </div>
    )
}

export default Cachipun