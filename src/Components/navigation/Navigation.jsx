/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffec, useContext} from 'react';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import "./styles.css";

//Imagenes
import logo from '../../Images/aerolab-logo.svg';
import CoinIcon from '../../Images/coin.svg';
import AddIcon from '../../Images/add-circle.svg';
import HistoryMallIcon from '../../Images/history_mall.svg';

import { UserContext } from '../../context/UserContext';


//Datos API 
const API_URI = "https://coding-challenge-api.aerolab.co";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGIxMDE4MDliNzc4MTAwMjA5YzVhYWQiLCJpYXQiOjE2MjIyMTI5OTJ9.SUFmuuHpeHt8ZnTP-gz0jxPam3vP-R4uJkVuM6Pwx4A";
const headers = {
  "Content-Type": "application/json",
  "Accept" : "application/json",
  Authorization: `Bearer ${API_KEY}`
}



function Navigation() {

  //Recibe del contexto los parámetros
  const { name, points } = useContext(UserContext);

    
    return (
          <React.Fragment>
            <nav className="container-header">
              <NavLink to="/rewards-store">
                <img className="logo" src={logo} alt="logo"/>
              </NavLink>
                <div>
                    <div className="buttons">
                        <button className="btn-nav">
                            <Link to="/puntos"><img id="icon" src={AddIcon} alt=""></img>Puntos</Link>
                        </button>&nbsp;&nbsp;
                        <button className="btn-nav">
                            <Link to="/mi-historial"><img id="icon-2" src={HistoryMallIcon} alt=""></img>Mi Historial</Link>
                        </button>
                    </div>
                    <h3  className="user">{name}</h3>
                    <span className="puntos">
                        <h3 className="puntos">{points}</h3>
                        <img className="coin" src={CoinIcon} alt="coin" />
                    </span> 
                  </div>
            </nav>
          </React.Fragment> 
    );
}

export default Navigation;

