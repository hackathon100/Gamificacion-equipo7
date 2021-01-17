import React from 'react'

const BackCard = ({ question, answer1, answer2, answer3 }) => {
    return (
        <div className="card-container">
            <div className="card-background">
                <div className="card-frame">
                    <div className="frame-text-box-back">
                        <div className="container d-flex">
                            <div className="row justify-content-center text-center">
                                <p>Preguntas</p>
                            </div>
                            <div className="row justify-content-center text-center">
                                <p>{question}</p>
                            </div>
                            <div className="row justify-content-center text-center text-justify">
                                <p>{answer1}</p>
                            </div>
                            <div className="row justify-content-center text-center text-justify">
                                <p>{answer2}</p>
                            </div>
                            <div className="row justify-content-center text-center text-justify">
                                <p>{answer3}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BackCard