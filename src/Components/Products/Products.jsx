import React from 'react';
import "./styles.css";

//Componentes
import Card from "../Card/Card";

//Proveedor
import { ProductProvider } from '../../Context/ProductContext';



function Products({ data, setData, products, setProducts}) {


    return (
        <ProductProvider>
            <div className="container-products">
               <Card />
            </div>
        </ProductProvider> 
    );
}


export default Products;