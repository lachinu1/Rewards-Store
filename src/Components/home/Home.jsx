import React, { Fragment } from 'react';
import "./styles.css";


//Componentes
// import FilterSet from '../filterSet/FilterSet';
import Products from '../products/Products';




function Home() {
    return (
        <Fragment>
            <div className="container-home">
                <div className="header">
                    <h1>Electronics</h1>
                    <div className="banner"></div>
                </div>
            </div>
            {/* <FilterSet/> */}
           <Products /> 
        </Fragment>  
    );
}

export default Home;

