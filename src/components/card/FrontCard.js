import React from 'react'

const FrontCard = ({ title, idImg, type, medal, imgType, body }) => {
    return (
        <div class="card-container">
            <div class="card-background">
                <div class="card-frame">
                    <div class="frame-header">
                        <h5 class="name">{title}</h5>
                    </div>
                    <img class="frame-art width: 100%" src={`https://drive.google.com/uc?id=${idImg}`} alt="nissa art" />
                    <div class="frame-type-line">
                        <div className="container">
                            <div className="row justify-content-center text-center">
                                <div class="col-sm-6">
                                    <img src={`https://drive.google.com/uc?id=${imgType}`} id="mana-icon" />
                                    <p>{type}</p>
                                </div>
                                <div class="col-sm-6">
                                    <img src={`https://drive.google.com/uc?id=1XPwppdKawuOTVWdK5gqsBGwUvnHu7U2o`} id="mana-icon" />
                                    <p>X {medal}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="frame-text-box">
                        <p class="description ftb-inner-margin h6">{body}</p>
                    </div>
                    <div class="frame-bottom-info inner-margin">
                        <div class="fbi-center"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FrontCard