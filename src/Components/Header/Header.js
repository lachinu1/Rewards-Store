import React from 'react';
import "./styles.css";

import logo from '../../Images/aerolab-logo.svg';
import coin from '../../Images/coin.svg';
    


function Header() {

    // function User(data){ 
    return (
        <div className="container-header">
    
            <img className="logo" src={logo} alt="logo" />
            <div>
                <h3 className="user">John Kite</h3>
                {/* <h3 className="user">{data.name}</h3> */}
                <span className="puntos">
                    <h3 className="puntos">6000</h3>
                    {/* <h3 className="puntos">{data.points}</h3> */}
                    <img className="coin" src={coin} alt="coin" />
                </span>
            </div>
        </div>
    );
}

    // return ( 
    //     <div>
    //       {/* Mapeo de los Users */}
    //       {data.map((user, i) => {
    //         return <User key={i} {...user} />;
    //         })}
    //     </div>
    //   );
    // }

  




    export default Header;

