import React from 'react'
import { useHistory } from 'react-router-dom';

const BackCard = ({ question, answer1, answer2, answer3}) => {

    const history = useHistory()

    return (
        <div className="card-container">
            <div className="card-background">
                <div className="card-frame">
                    <div className="frame-text-box-back">
                        <div className="container">
                            <div className="row justify-content-center text-center">
                                <p>Pregunta</p>
                            </div>
                            <div className="row justify-content-center text-center">
                                <p>{question}</p>
                            </div>
                            <div className="row justify-content-center text-center text-justify">
                                <ul class="list-group">
                                    <button type="button" onClick={() => history.push('/v1/player2win')} class="list-group-item list-group-item-action">{answer1}</button>
                                    <button type="button" class="list-group-item list-group-item-action">{answer2}</button>
                                    <button type="button" class="list-group-item list-group-item-action">{answer3}</button>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BackCard