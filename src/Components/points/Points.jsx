import React, { useState, useEffect, Fragment } from 'react';
import "./styles.css";

import coin from '../../Images/coin.svg';


function Points() {


    const [points, setPoints] = useState(0);




    //Trae los productos  con el método POST
    useEffect(() => {
        let petition = fetch("https://coding-challenge-api.aerolab.co/user/points", {
            method: 'POST',
            body : {
              "amount": 1000,
            },
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk",
            }
        });
        petition.then((response) => {
            return response.json();
        })
            .then((results) => {
                setPoints(results);
                console.log(results);
            })
    }, []);



    

    return (
        <Fragment>
            <div className="container-banner">
                <div className="header">
                    <h3>No te quedes sin puntos<img className="coin-points" src={coin} alt="coin" /></h3>
                    <h5 className="puntos">Cargá tus puntos siempre que necesites</h5>
                    <form method ="post"> 
                        <input type="text" className="points" placeholder="Usuario"></input>&nbsp;&nbsp;
                        <input type="password" className="points" placeholder="Contraseña"></input>&nbsp;&nbsp;
                        <button type="submit" className="btn-points" >Cargar Puntos</button>
                    </form> 
                    <div className="img"></div>
                </div>
            </div>
        </Fragment>  
       
    );
}

  

export default Points