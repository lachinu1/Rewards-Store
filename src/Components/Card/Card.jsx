import React from 'react';
import "./styles.css";

//Proveedor
import { ProductContext } from '../../Context/ProductContext';


//Imagenes
// import blue from '../../Images/buy-blue.svg';
// import white from '../../Images/buy-white.svg';
import coin from '../../Images/coin.svg';
import img from '../../Images/product-pics/AcerAspire-x1.png';


function Card() {

    const { data, setData } = React.useContext(ProductContext);
    // const { products, setProducts } = React.useContext(ProductContext);


    return (
           
        <div  className="container-card">
            {/* <span className="buy-blue">
                <img src={blue} alt=""></img>
            </span> */}
            {/* <span className="buy-white">
                <img src={white} alt=""></img>
            </span> */}
            <span className="points">
                <h3 id="points">You need 8000</h3>
                <figure>
                    <img className="coins" src={coin} alt="coin" />
                </figure>
            </span>
            <div className="container-img">
                <figure>
                    <img src={data.img} alt={data.name} />
                </figure>
            </div>
            <hr></hr>
            <h5>{data.category}</h5>
            <h6>{data.name}</h6>
        </div>
    )
}


export default Card;