import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';

import "./styles.css";

import logo from '../../Images/aerolab-logo.svg';
import coin from '../../Images/coin.svg';
    


function Navigation() {

    const [userData, setUserData] = useState([]);


    //Trae los usuarios con el método GET
  useEffect(() =>{
    let petition = fetch("https://coding-challenge-api.aerolab.co/user/me",{
      headers: {
        "Content-type": "application/json",
        "Accept" : "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk",
      }
    });
    petition 
    .then((response) => {
      return response.json();
    })
    .then((results) => {
      setUserData(results);
      console.log(results);
    })
  });



    
    return (
        <Fragment>
            <nav className="container-header">
                <img className="logo" src={logo} alt="logo" />
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li> 
                        <li>
                            <Link to="/puntos">Puntos</Link>
                        </li> 
                        <li>
                            <Link to="/mi-historial">Mi Historial</Link>
                        </li>
                    </ul>
                    <h3  className="user">{userData.name}</h3>
                    <span className="puntos">
                        <h3 className="puntos">{userData.points}</h3>
                        <img className="coin" src={coin} alt="coin" />
                    </span> 
                </div>
            </nav>
        </Fragment>  
       
    );
}

export default Navigation;

