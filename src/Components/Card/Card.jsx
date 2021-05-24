import React, { Fragment } from 'react';
import "./styles.css";



//Imagenes
// import blue from '../../Images/buy-blue.svg';
// import white from '../../Images/buy-white.svg';
import coin from '../../Images/coin.svg';



function Card({ productsItems, categorySelected }) {


    return (
        <Fragment>
            {productsItems.filter((value) => {
                // Filtro por categorías
                return categorySelected === '' || categorySelected === 'TODAS' || value.category === categorySelected
            }).map((product, i) => (
                    <div key={i} className="container-card">
                        {/* <span className="buy-blue">
                        <img src={blue} alt=""></img>
                    </span> */}
                        {/* <span className="buy-white">
                        <img src={white} alt=""></img>
                    </span> */}
                        <span className="points">
                            <h3 id="points">You need {product.cost}</h3>
                            <figure>
                                <img className="coins" src={coin} alt="coin" />
                            </figure>
                        </span>
                        <div className="container-img">
                            <figure>
                                <img className="product-img" src={product.img.url} alt={product.name} />
                            </figure>
                        </div>
                        <hr></hr>
                        <div>
                            <h5>{product.category}</h5>
                            <h6>{product.name}</h6>
                        </div>
                    </div>
                ))
            }
      
        </Fragment>
    )
}


export default Card;