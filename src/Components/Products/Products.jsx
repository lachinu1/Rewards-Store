import React, {useState, useEffect, Fragment} from 'react';
import "./styles.css";

//Componentes
import Card from "../Card/Card";



function Products() {


 //Maneja el estado de los productos
 const [productsItems, setProductsItems] = useState([]);

 //Maneja el estado de los filtros de Categorías
 const [categorySelected, setCategorySelected] = useState('');

      
 

    //Trae los productos  con el método GET
    useEffect(() => {
        let petition = fetch("https://coding-challenge-api.aerolab.co/products", {
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk",
            }
        });
        petition.then((response) => {
            return response.json();
        })
            .then((results) => {
                setProductsItems(results);
                console.log(results);
            })
    }, []);
    
    


    return (
        <Fragment>
            <div className="container-products">
                <Card productsItems={productsItems} setProductsItems={setProductsItems} categorySelected={categorySelected}/>
            </div>
        </Fragment> 
    );
}


export default Products;