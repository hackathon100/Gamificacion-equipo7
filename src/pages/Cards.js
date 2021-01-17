import React, { useContext } from 'react';
import FrontCard from '../components/card/FrontCard';
import Button from '../components/buttons/button/Button';
import { useEffect, useState } from 'react';
import { db } from '../firebase/firebase';
import { Context } from '../context/appContext';

const Cards = ({ match, history }) => {

    const { store, actions } = useContext(Context);
    const [filteredCards, setFilteredCards] = useState([]);
    const [listCards, setListCards] = useState([]);
    const [mySession, setMySession] = useState({});
    const [player, setPlayer] = useState(null);
    const { gamesNumber } = match.params;
    const code = gamesNumber.split('-')[0];
    const games = gamesNumber.split('-')[1];

    const selectCard = async (player, card) => {

        const body = { ...mySession }
        Object.assign(body.players[player - 1], { card: card })

        await db.collection('rooms').doc(mySession.id).update(body);
        actions.setCardPlayer(player, card)
        history.push(`/v1/cachipun/${code}`)
    }

    useEffect(() => {
        if (JSON.stringify(mySession) !== '{}') {
            const checkPlayer = () => {
                const email = store.currentUser.email;
                let currentPlayer = mySession.players.findIndex((player) => player.email === email);
                setPlayer(currentPlayer + 1);
            }
            checkPlayer()
        }

    }, [mySession, store.currentUser.email])

    useEffect(() => {
        if (listCards.length > 0) {
            const generateRandomNumber = () => {
                return Math.floor(Math.random() * 16);
            }
            const generateCardList = () => {
                let cardList = []
                for (let x = 0; x < games; x++) {
                    let index = generateRandomNumber()
                    if (cardList.filter(item => item.id === listCards[index].id).length === 0) {
                        cardList.push(listCards[index])
                    } else {
                        index = generateRandomNumber()
                        cardList.push(listCards[index])
                    }
                }
                setFilteredCards(cardList)
            }
            generateCardList()
        }
    }, [listCards, games])


    useEffect(() => {
        console.log(listCards)
    }, [listCards])

    useEffect(() => {
        const getCards = async () => {
            db.collection('cards').onSnapshot((querySnapshot) => {
                const docs = [];
                querySnapshot.forEach(doc => {
                    docs.push({
                        ...doc.data(),
                        id: doc.id
                    })
                })
                setListCards(docs)
            })
        }
        getCards()
    }, [])

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
                <h1>Selecciona una carta</h1>

                {/*   <button onClick={checkPlayer}>asd</button> */}
            </div>
            {
                player && <h1 className="text-center font-weight">Jugador {player}</h1>

            }

            <div className="row justify-content-center text-center">
                {/*               {
                    filteredCards.map(card => {
                        return (
                            <div className="col-sm-6" key={card.id}>
                                <FrontCard
                                    title={card.front.title}
                                    idImg={card.front.imageId}
                                    imgType={card.front.cachipum.img}
                                    type={card.front.cachipum.type}
                                    medal={card.front.medal}
                                    body={card.front.text}
                                />
                                <Button text="Seleccionar" onClick={() => selectCard(player, card)} />
                            </div>
                        )
                    })
                } */}

                {
                    player === 1 &&
                    <div className="col-sm-6">
                        <FrontCard title="Mestizaje" idImg="1ewOVypw29MFRbR2Ec_b1isl5GeMfVZLx" imgType="1NvdS-kZQJi3YeNobSGNuepZd59d8PCKC" type="Tijera" medal="3" body="Proceso mediante el cual españoles, indigenas y negros se mezclaron, dando origen a nuevos grupos raciales (mestizos, zambos y mulatos)." />
                        <Button text="Seleccionar" onClick={()=>history.push(`/v1/cachipun/${code}-${player}`)}/>
                    </div>
                }


                {
                    player === 2 &&
                    <div className="col-sm-6">
                        <FrontCard title="Malón" idImg="1NwT0bq2eGItYLMZ8T7LD3N2eA-LItOEE" imgType="1weLaeKb9d8dzKUIJ8o7CGdRYqovq0LLZ" type="Piedra" medal="2" body="Eran ataques realizados por los mapuches a los españoles con la finalidad de robar caballos, mujeres, armas y alimentos." />
                        <Button text="Seleccionar" onClick={()=>history.push(`/v1/cachipun/${code}-${player}`)}/>
                    </div>
                }




                {/* 
                
                <div className="col-sm-6">
                    <FrontCard title="Encomienda" idImg="18WU5KqCf6nHAZmsmevy1qskm3RxHxJCC" imgType="1gyolkdqyZDZ2LdFXBppZWnUaKTuDU050" type="Papel" medal="1" body="Sistema de trabajo indigena, donde un español obtenia un grupo de indigenas para realizar trabajos, el español a cambio les daba comida, ropa y techo." />
                    <Button text="Seleccionar"/>
                </div> */}
            </div>
        </div>
    )
}

export default Cards