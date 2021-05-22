import React from 'react';
import "./styles.css";


//Imagenes
// import blue from '../../Images/buy-blue.svg';
// import white from '../../Images/buy-white.svg';
import coin from '../../Images/coin.svg';
import img from '../../Images/product-pics/AcerAspire-x1.png';


function Card() {

    return (
        <div className="container-card">
            {/* <span className="buy-blue">
                <img src={blue} alt=""></img>
            </span> */}
            {/* <span className="buy-white">
                <img src={white} alt=""></img>
            </span> */}
            <span className="points">
                <h3 id="points">You need 8000</h3>
                <img className="coins" src={coin} alt="coin" />
            </span>
            <div className="container-img">
                <img src={img} alt="producto" />
            </div>
            <hr></hr>
            <h5>Phones</h5>
            <h6>iPhone8</h6>
        </div>
    );
}


export default Card;