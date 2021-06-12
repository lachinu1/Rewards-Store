import React, {useState, useEffect} from 'react';
import "./styles.css";
import axios from 'axios';
import { usePagination } from '../../hooks';
import styled from 'styled-components';
import data from '../../data.json';

//Componentes
import ProductGrid from '../../common/ProductGrid';

//Imagenes
import ArrowLeft from '../../Images/arrow-left.svg';
import ArrowRight from '../../Images/arrow-right.svg';


//Material-ui
import Container from '@material-ui/core/Container';
// import Typography from '@material-ui/core/Typography';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import MenuItem from '@material-ui/core/MenuItem';
// import InputLabel from '@material-ui/core/InputLabel';
// import Chip from '@material-ui/core/Chip';


//Datos API 
const API_URI = "https://coding-challenge-api.aerolab.co";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGIxMDE4MDliNzc4MTAwMjA5YzVhYWQiLCJpYXQiOjE2MjIyMTI5OTJ9.SUFmuuHpeHt8ZnTP-gz0jxPam3vP-R4uJkVuM6Pwx4A";
const headers = {
  "Content-Type": "application/json",
  "Accept" : "application/json",
  Authorization: `Bearer ${API_KEY}`
}


/** function FilterSet hace el GET a la API para traer toda la info de los productos
 *  y luego realiza todos los filtrados, de acuerdo a la categoría o al rango
 *  de precio. 
 */



export function FilterSet() {

    //Estado de los items
    const [products, setProducts] = useState([]);
    //Estado de la lista de categorías
    const [categoryList, setCategoryList] = useState([]);
    //Estado de las categorías
    const [category, setCategory] = useState('');
    //Estado de los precios
    const [sortPrice, setSortPrice] = useState(''); // '' \ 'ASC' | 'DESC'
    //Estado de los filtros por Categoría
    const [categorySelected, setCategorySelected] = useState('');
    //Estado del filtro por categoría seleccionado
    const [selected, setSelected] = useState(true);


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
      getItems,
      nextPage,
      prevPage,
      itemsPerPage} = usePagination(products.filter(product => category ? product.category === category : true), 16, sortPrice);


    //Función para actualizar el estado de categorySelected
   function updateCategorySelected (categorySelected) {
    setCategorySelected(categorySelected)
    }


    //Filtro por precio
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

    //Cambia el modo del filtro por categoría
    const handleChange = () => {
      setSelected(selected === "btn-category");
    };
  
  

    return (
      <React.Fragment>
        {/* Filtros por categorías */}
        <div className="container-category">
          {/* Mapeo de los botones */}
          {
            data.categories.map((data, i) => (
              <div className="container-buttons">
                <button
                  key={i}
                  className={data.value === 1 && selected ? "btn-category active" : "btn-category"}
                  value={data.value}
                  onClick={() => { updateCategorySelected(data.category); handleChange(); }}>
                  <img className="icono" src={data.image_src} alt=""></img>
                    {data.name}
                </button>
              </div>
            ))
          }
        </div>
          {/* Paginador */}
            <Controls>
                <ControlsInner>
                <h6 className="paginas"> {itemsPerPage} de {getItems()}</h6>
                <VerticalDivider />
                <div className="container-filter">
                    <span className="filter-1">
                        <h3 className="text">Ordenar por:</h3>
                    </span>
                    {/* Filtros por precio */}
                    <button className="filter" clickable={false} variant={sortPrice === "DESC" ? "default" : "outlined"} onClick={() => handleClickSort('DESC')}>Menor precio</button>
                    <button className="filter" clickable={false} variant={sortPrice === "ASC" ? "default" : "outlined"} onClick={() => handleClickSort('ASC')}>Mayor precio</button>
                    <VerticalDivider />
                    <StyledArrow src={ArrowLeft} alt="arrow left" onClick={() => prevPage()} />
                    <StyledArrow src={ArrowRight} alt="arrow rigth" onClick={() => nextPage()} />
                </div>
                </ControlsInner>
            </Controls>
            {/* Grilla con los productos */}
            <ProductGrid products={getCurrentItems()} categorySelected={categorySelected}/>
      </React.Fragment>
    );
}

//Estilos
const Controls = styled(Container)`
  display: flex;
  padding: 0 6rem;
  margin-top: 1rem;
  align-items: center;
`

const ControlsInner = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem 0;
  border-bottom: 1px solid lightgray;
  align-items: baseline;
  justify-content: space-between;
`

const VerticalDivider = styled.div`
  height: 2rem;
  width: 1px;
  background-color: lightgray;
  margin: 0 6rem;
  align-self: flex-end;
`

const StyledArrow = styled.img`
  height: 35px;
  width: 35px;
  align-self: flex-end;
  cursor: pointer;
  background: #00000047;
  border-radius: 19px;
  border: 1px solid #f3f3f3;
` 