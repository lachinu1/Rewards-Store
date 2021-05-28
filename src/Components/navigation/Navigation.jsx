/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect} from 'react';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import "./styles.css";

//Imagenes
import logo from '../../Images/aerolab-logo.svg';
import coin from '../../Images/coin.svg';
import AddIcon from '../../Images/add-circle.svg';
import HistoryMallIcon from '../../Images/history_mall.svg';

//Datos API 
const API_URI = "https://coding-challenge-api.aerolab.co";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk";
const headers = {
  "Content-Type": "application/json",
  "Accept" : "application/json",
  Authorization: `Bearer ${API_KEY}`
}



function Navigation() {
  

  const [ userInfo, setUserInfo ] = useState(() => ({
    _id: null,
    name: null,
    points: null,
    redeemHistory: [],
    createDate: null,
    getUserInfo: () => getUserInfo()
  }))

  const getUserInfo = async () => {
    const userInfoFromAPI = await axios.get(`${API_URI}/user/me`, { headers })
    setUserInfo(s => ({...s, ...userInfoFromAPI.data}))
  }

  useEffect(() => {
    getUserInfo();
  }, [])


    
    return (
          <React.Fragment>
            <nav className="container-header">
              <NavLink to="/">
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
                    <h3  className="user">{userInfo.name}</h3>
                    <span className="puntos">
                        <h3 className="puntos">{userInfo.points}</h3>
                        <img className="coin" src={coin} alt="coin" />
                    </span> 
                  </div>
            </nav>
          </React.Fragment> 
    );
}

export default Navigation;

