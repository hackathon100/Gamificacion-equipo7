import React from 'react'
import FrontCard from '../components/card/FrontCard';
import Button from '../components/buttons/button/Button';
import { useEffect, useState } from 'react';
import { db } from '../firebase/firebase';

const Cards = () => {

    const [filteredCards, setFilteredCards] = useState([]);
    const [listCards, setListCards] = useState([]);
    const gamesNumber = 3;

    useEffect(() => {
        if (listCards.length > 0) {
            const generateRandomNumber = () => {
                return Math.floor(Math.random() * 16);
            }
            const generateCardList = () => {
                let cardList = []
                for (let x = 0; x < gamesNumber; x++) {
                    let index = generateRandomNumber()
                    if (cardList.filter(item => item.id === listCards[index].id).length === 0) {
                        cardList.push(listCards[index])
                    } else{
                    index = generateRandomNumber()
                    cardList.push(listCards[index]) 
                } 
                }
                setFilteredCards(cardList)
            }
            generateCardList()
        }
    }, [listCards])


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


    return (
        <div className="container">
            <div className="row justify-content-center">
                <h1>Selecciona una carta</h1>
            </div>
            <div className="row justify-content-center text-center">
                {
                    filteredCards.map(card => {
                        return (
                            <div className="col-sm-6" key={card.id}>
                                <FrontCard
                                    title={card.front.title}
                                    idImg={card.front.imageId}
                                    imgType="1NvdS-kZQJi3YeNobSGNuepZd59d8PCKC"
                                    type={card.front.cachipum}
                                    medal={card.front.medal}
                                    body={card.front.text}
                                />
                                <Button text="Seleccionar" />
                            </div>
                        )
                    })
                }
                {/*   <div className="col-sm-6">
                    <FrontCard title="Mestizaje" idImg="1ewOVypw29MFRbR2Ec_b1isl5GeMfVZLx" imgType="1NvdS-kZQJi3YeNobSGNuepZd59d8PCKC" type="Tijera" medal="3" body="Proceso mediante el cual españoles, indigenas y negros se mezclaron, dando origen a nuevos grupos raciales (mestizos, zambos y mulatos)." />
                    <Button text="Seleccionar"/>
                </div>
                <div className="col-sm-6">
                    <FrontCard title="Malón" idImg="1NwT0bq2eGItYLMZ8T7LD3N2eA-LItOEE" imgType="1weLaeKb9d8dzKUIJ8o7CGdRYqovq0LLZ" type="Piedra" medal="2" body="Eran ataques realizados por los mapuches a los españoles con la finalidad de robar caballos, mujeres, armas y alimentos." />
                    <Button text="Seleccionar"/>
                </div>
                <div className="col-sm-6">
                    <FrontCard title="Encomienda" idImg="18WU5KqCf6nHAZmsmevy1qskm3RxHxJCC" imgType="1gyolkdqyZDZ2LdFXBppZWnUaKTuDU050" type="Papel" medal="1" body="Sistema de trabajo indigena, donde un español obtenia un grupo de indigenas para realizar trabajos, el español a cambio les daba comida, ropa y techo." />
                    <Button text="Seleccionar"/>
                </div> */}
            </div>
        </div>
    )
}

export default Cards