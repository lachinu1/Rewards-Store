import React, {useState, useEffect, Fragment} from 'react';
import "./styles.css";

//Componentes

import FilterSet from '../filterSet/FilterSet';
import Card from "../card/Card";
import Pagination from "../pagination/Pagination";



function Products() {

    //Maneja el estado de los productos
    const [productsItems, setProductsItems] = useState([]);

    //Maneja el estado de los filtros de Categorías
    const [categorySelected, setCategorySelected] = useState('');


    // paginador
    const [pageIndex, setPageIndex] = useState(1);
    const [pageSize, setPageSize] = useState(16);

    const [visibility, setVisivility] = useState(false);

    // Paginadores
    function prevPage(e) {
        setPageIndex(prevState => (
            {pageIndex: prevState.pageIndex > 0 ? prevState.pageIndex - 1 : 0}
        ));
    };

    function nextPage(e) {
        setPageSize(prevState => (
            { pageIndex: prevState.pageIndex < Math.floor(prevState.dataRows.length / prevState.pageSize) ? prevState.pageIndex + 1 : prevState.pageIndex }
        ));
    };
    
 
        
   


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
            <div style={{display: visibility ? '' : 'none'}}>
                <label> {productsItems.length === 0 ? '' : 
                    "16" + " de " + `${productsItems.length}` + "productos" }</label>
            </div>
            <Pagination
                // pageSelected={pageSelected}
                // currentPage={currentPage}
                // itemsPage={itemsPage}
                totalItems={productsItems.length}/>
            <FilterSet
                productsItems={productsItems}
                updateCategorySelected={updateCategorySelected} />
            <div className="container-products" pageOne={16} pageTwo={32}>
                <Card productsItems={productsItems} setProductsItems={setProductsItems} categorySelected={categorySelected}/>
            </div>
        </Fragment> 
    );
}


export default Products;