import React, {useState, useEffect} from 'react';
import "./styles.css";
import axios from 'axios';
import { usePagination } from '../../../hooks';
import styled from 'styled-components';

//Componentes
// import Products from '../products/Products';
import { FilterSet } from '../../filterSet/FilterSet';
// import ProductGrid from '../common/ProductGrid';

//Imagenes
import ArrowLeft from '../../../Images/arrow-left.svg';
import ArrowRight from '../../../Images/arrow-right.svg';

//Material-ui
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Chip from '@material-ui/core/Chip';


//Datos API 
const API_URI = "https://coding-challenge-api.aerolab.co";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGIxMDE4MDliNzc4MTAwMjA5YzVhYWQiLCJpYXQiOjE2MjIyMTI5OTJ9.SUFmuuHpeHt8ZnTP-gz0jxPam3vP-R4uJkVuM6Pwx4A";
const headers = {
  "Content-Type": "application/json",
  "Accept" : "application/json",
  Authorization: `Bearer ${API_KEY}`
}


export function Home() {

    const [ products, setProducts ] = useState([]);
    const [ categoryList, setCategoryList ] = useState([]);
    const [category, setCategory] = useState('');
    
    //Estado de los precios
    const [ sortPrice, setSortPrice ] = useState(''); // '' \ 'ASC' | 'DESC'
    //Maneja el estado de los filtros de Categorías
    const [categorySelected, setCategorySelected] = useState('');


    //GET a la API para traer toda la info de los productos
    useEffect(() => {
        const getProducts = async () => {
          try {
            const productsFromAPI = await axios.get(`${API_URI}/products`, { headers });
            const categories = productsFromAPI.data.map(product => product.category).filter((item, index, array) => array.indexOf(item) === index);
            setCategoryList(categories);
            setProducts(productsFromAPI.data);
          } catch (error) {
            console.error(error);
          }
        }
        getProducts();
    }, [])
    

    //Paginador
    const { 
        getCurrentItems,
        nextPage,
        prevPage,
        activePage,
        pagesTotal } = usePagination(products.filter(product => category ? product.category === category : true), 16, sortPrice);


    //Función para actualizar el estado de categorySelected
   function updateCategorySelected (categorySelected) {
    setCategorySelected(categorySelected)
    }

    //Cambio de categoría
    const handleChangeCategory = (e) => {
        setCategory(e.target.value)
    }

    //Filtro de precio
      const handleClickSort = (order) => {
        if (order === "ASC") {
          if (sortPrice === "ASC") {
            setSortPrice("")
          } else {
            setSortPrice("ASC")
          }
        }
    
        if (order === "DESC") {
          if (sortPrice === "DESC") {
            setSortPrice("")
          } else {
            setSortPrice("DESC")
          }
        }
    }
        
    
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


