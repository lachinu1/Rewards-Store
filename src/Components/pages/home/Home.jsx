import React from 'react';
import "./styles.css";

//Componentes
import { FilterSet } from '../../filterSet/FilterSet';



export function Home() {
    return (
        <React.Fragment>
            <div className="container-home">
                <div className="header">
                    <h1>Electronics</h1>
                    <div className="banner"></div>
                </div>
            </div>
          <div className="container-products">
              <FilterSet/>
          </div>
        </React.Fragment>  
    )
}


