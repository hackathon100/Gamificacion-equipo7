import React from 'react'

const FrontCard = ({ title, idImg, type, medal, imgType, body }) => {
    return (
        <div className="card-container">
            <div className="card-background">
                <div className="card-frame">
                    <div className="frame-header">
                        <h5 className="name">{title}</h5>
                    </div>
                    <img className="frame-art width: 100%" src={`https://drive.google.com/uc?id=${idImg}`} alt="img" />
                    <div className="frame-type-line">
                        <div className="container">
                            <div className="row justify-content-center text-center">
                                <div className="col-sm-6">
                                    <img src={`https://drive.google.com/uc?id=${imgType}`} id="mana-icon" alt="NotFound" />
                                    <p>{type}</p>
                                </div>
                                <div className="col-sm-6">
                                    <img src={`https://drive.google.com/uc?id=1XPwppdKawuOTVWdK5gqsBGwUvnHu7U2o`} id="mana-icon" alt="NotFound" />
                                    <p>X {medal}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="frame-text-box">
                        <p className="description ftb-inner-margin h6">{body}</p>
                    </div>
                    <div className="frame-bottom-info inner-margin">
                        <div className="fbi-center"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FrontCard