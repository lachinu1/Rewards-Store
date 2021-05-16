import React from 'react';
import "./styles.css";

import logo from '../../Images/aerolab-logo.svg';
import header from '../../Images/header-x1.png';
import coin from '../../Images/coin.svg';
    
function Header() {
    return (
        <div className="container">
            <div className="box">
                <img className="logo" src={logo} alt="logo" />
                <div>
                    <h3 className="user">John Kaite</h3>
                    <span className="puntos">
                        <h3 className="puntos">6000</h3>
                        <img className="coin" src={coin} alt="coin" />
                    </span>
                </div>
            </div>
            <div className="header">
                <h1>Electronics</h1>
                <div className="img">
                    {/* <img className="img1" src={header} alt=""/> */}
                </div>
                
            </div>
        </div>
    );
  }





    export default Header;

