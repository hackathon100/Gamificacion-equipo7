import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    body, html {
        padding: 0;
        margin: 0;
        height: 100%;
        width: 100%;
        font-family: Helvetica, sans-serif;
    }
    
    #root{
        min-height: 100vh;
        display: grid;
        grid-template-rows: auto 1fr;
        grid-template-columns: 100%;
    }
    
    *, *::before, *::after {
        box-sizing: border-box;
    }

    .d-none{
        display: none;
    }

    .card-container {
        border: 1px solid black;
        width: 500px;
        height: 700px;
        margin: 0 auto;
        margin-top: 56px;
        border-radius: 25px;
        box-sizing: border-box;
        box-shadow: -8px 9px 16px -3px gray;
        background: #171314;  
    }
     .card-background {
        height: 600px;
        margin: 20px 20px 0 20px;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        border-bottom-left-radius: 8%;
        border-bottom-right-radius: 8%;
        background-image: url(https://image.ibb.co/e1XKAS/green_background.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        background-color: #bbb;
        z-index: 0;
    }
    
    .frame-header,
    .frame-type-line {
        border-bottom: 4px solid #a9a9a9;
        border-left: 2px solid #a9a9a9;
        border-top: 1px solid #fff;
        border-right: 1px solid #fff;
    }
    
    .frame-header,
    .frame-art,
    .frame-type-line {
        box-shadow: 
            0 0 0 2px #171314,
            0 0 0 5px #26714A,
            -3px 3px 2px 5px #171314;
    
        margin-bottom: 7px;
    }
    
    .frame-text-box {
        box-shadow: 
            0 0 0 5px #26714A,
            -3px 3px 2px 5px #171314;
    }
    
    .frame-header,
    .frame-type-line,
    .frame-text-box {
        overflow: hidden;
    }
    
    .card-frame {
        z-index: 1;
        position: relative;
        height: 108%;
        max-width: 97%;
        left: 1%;
        top: 0.5%;
        left: 1.2%;
        display: flex;
        flex-direction: column;
    }
    
    .frame-header,
    .frame-type-line {
        background: 
            linear-gradient( 0deg, rgba(201, 216, 201, .3), rgba(201, 216, 209, .3) ), 
            url(https://image.ibb.co/jKByZn/tile_bg_1.jpg);     
        display: flex;
        margin-top: 10px;
        margin-left: 5px;
        margin-right: 5px;
        padding: 8px 0;
        display: flex;
        justify-content: space-between;
        border-radius: 18px/40px;
    }

    .name,
    .type {
        font-size: 1.3em;
        margin-left: 10px;
        align-self: baseline;
        font-weight: 600;
    }
    
    #mana-icon {
        font-size: 1.4em;
        background: #ADD3AC;
        border-radius: 50%;
        box-sizing: border-box;
        box-shadow: -0.05em 0.12em 0px 0 black;
        background-image: url(https://drive.google.com/uc?id=1NvdS-kZQJi3YeNobSGNuepZd59d8PCKC);
        margin-right: 5px;
        height: 30px;
        align-self: center;
    }
    .frame-art {
        height: 50%;
        margin: 0 10px; 
    }
    
    #set-icon {
        height: 9%;
        width: 6%;
        overflow: hidden;
        margin-right: 10px;
        align-self: center;
    } 
    .frame-type-line {
        margin-top: 0;
    } 
    
    .frame-text-box {
        margin: 0 10px;
        background: #d3ded6;
        background-image: url(https://image.ibb.co/dFcNx7/tile_bg_2.jpg);
        display: flex;
        flex-direction: column;
        justify-content: space-around;    
        padding: 60px 6px;
        font-size: 1.2em;
    }
    
    .flavour-text {
        font-style: italic;
        padding: 10px 0;
    }
    
    p {
        margin-bottom: 5px;
    }
    
    .ftb-inner-margin {
        margin: 5px 1px;
    }
    
    .frame-bottom-info {
        color: white;
        display: flex;
        justify-content: space-between;
        margin: 5px 15px 0 15px; 
    }
    
    fbi-left {
        flex: 1;
    } 
    .fbi-left p:first-of-type {
        margin-bottom: 1px;
    }
    .fbi-left,
    .fbi-right {
        font-size: 10px;
        position: relative;
        top: 6px;
    }
    
    .fbi-center {
        border-radius: 60%;
        flex-basis: 41px;
        height: 21px;
        position: relative;
        bottom: 11px;
        z-index: 2;
        background: lightgray;
        background-image: url(https://image.ibb.co/jyq34n/holofoil_texture_2.jpg);
        box-shadow: 
            0 0 0 4px #171314;
    }
    .inner-margins {
        margin: 0 10px;
    }

     .frame-bottom-info img {
        overflow: hidden;
        max-width: 10px;
    }

    .frame-text-box-back {
        background-image: url(https://image.ibb.co/dFcNx7/tile_bg_2.jpg);
          height: 100%;
          width: 103%;
        font-size: 1.2em;
    }

    #cloud__container {
        background-image: url('https://drive.google.com/uc?id=18iZj3fhxsJRzMJRdUfq4bPx626wiCztC');
        background-repeat: no-repeat;
        background-size: 100vw 100vh;
        background-position: center;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        color: green;
        & h3 {
            font-size: 50px;
            font-family: 'Lucida Sans', Verdana;
            font-weight: 900; 
        }
    }
`