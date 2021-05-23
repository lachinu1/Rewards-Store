import React, { Fragment } from 'react';
import "./styles.css";

import logo from '../../Images/aerolab-logo.svg';
import coin from '../../Images/coin.svg';
    


function Header({ data }) {

    return (
      
        <Fragment>
            <div className="container-header">
            <img className="logo" src={logo} alt="logo" />
                <div>
        
                <h3  className="user">{data.name}</h3>
                <span className="puntos">
                    <h3 className="puntos">{data.points}</h3>
                    <img className="coin" src={coin} alt="coin" />
                </span> 
          
            
            </div>
        </div>
        </Fragment>  
       
    );
}

  

    export default Header;

