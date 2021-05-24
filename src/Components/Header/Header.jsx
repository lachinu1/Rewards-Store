import React, { Fragment } from 'react';
import "./styles.css";

import logo from '../../Images/aerolab-logo.svg';
import coin from '../../Images/coin.svg';
    


function Header({ userData }) {

    return (
      
        <Fragment>
            <div className="container-header">
            <img className="logo" src={logo} alt="logo" />
                <div>
                <h3  className="user">{userData.name}</h3>
                <span className="puntos">
                    <h3 className="puntos">{userData.points}</h3>
                    <img className="coin" src={coin} alt="coin" />
                </span> 
            </div>
        </div>
        </Fragment>  
       
    );
}

  

    export default Header;

