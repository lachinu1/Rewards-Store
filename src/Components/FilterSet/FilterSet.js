import React from 'react';
import "./styles.css";




function filterSet() {

    return (
        <>
            <div className="container-filter">
                <div className="line"></div>
                <span className="filter-1">
                    <h3 className="text">Ordenar por:</h3>
                </span>
                <button className="filter">Más recientes</button>
                <button className="filter">Menor precio</button>
                <button className="filter">Mayor precio</button>
            </div>
            <div className="container-category">



            </div>
        </>
    );
}


export default filterSet;