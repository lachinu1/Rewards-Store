import React, {useState, useEffect, Fragment} from 'react';
import "./styles.css";

//Componentes

import FilterSet from '../filterSet/FilterSet';
import Card from "../card/Card";



function Products() {

    //Maneja el estado de los productos
    const [productsItems, setProductsItems] = useState([]);

    //Maneja el estado de los filtros de Categorías
    const [categorySelected, setCategorySelected] = useState('');


    //Maneja el Ppaginador
    const [pageSize]=useState(16);
    const [pageIndex,setPageIndex]=useState(0);

    const prevPage = (e) => {setPageIndex(pageIndex > 0 ? pageIndex - 1 : 0);
    }
    const nextPage = (e) => {
        setPageIndex(pageIndex < Math.floor(productsItems.length / pageSize) ? pageIndex + 1 : pageIndex);
    }


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


    //Función para actualizar el estado de categorySelected
   function updateCategorySelected (categorySelected) {
    setCategorySelected(categorySelected)
    }
    

    return (
        <Fragment>
            <FilterSet productsItems={productsItems} updateCategorySelected={updateCategorySelected}/>
            <div className="container-products" pageOne={16} pageTwo={32}>
                <Card productsItems={productsItems} setProductsItems={setProductsItems} categorySelected={categorySelected}/>
            </div>
        </Fragment> 
    );
}


export default Products;