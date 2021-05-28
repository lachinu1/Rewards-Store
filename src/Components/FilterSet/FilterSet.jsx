import React, {useState, useEffect} from 'react';
import "./styles.css";
import axios from 'axios';
import { usePagination } from '../../hooks';
import styled from 'styled-components';

//Componentes
import ProductGrid from '../../common/ProductGrid';

//Imagenes
import ArrowLeft from '../../Images/arrow-left.svg';
import ArrowRight from '../../Images/arrow-right.svg';


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




export function FilterSet() {

    //Maneja el estado de los items
    const [products, setProducts] = useState([]);
    //Maneja el estado de la lista de categorías
    const [categoryList, setCategoryList] = useState([]);
    //Maneja el estado de las categorías
    const [ category, setCategory ] = useState('');
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
    // const handleChangeCategory = (e) => {
    //     setCategory(e.target.value)
    // }


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
             {/* Filtros por categorías */}
             <div className="container-category">
                <div className="container-buttons">
                    <button className="btn-category" key="All" value={category} onClick={() => updateCategorySelected(category)}>
                        <img className="icono" src="https://image.flaticon.com/icons/png/512/1077/1077969.png" alt=""></img>
                        TODAS
                    </button>
                    <button className="btn-category" key="Laptops" value={category} onClick={() => updateCategorySelected(category)}>
                        <img className="icono" src="https://image.flaticon.com/icons/png/512/595/595355.png" alt=""></img>
                        LAPTOPS
                    </button>
                    <button className="btn-category">
                        <img className="icono" src="https://image.flaticon.com/icons/png/512/2972/2972490.png" alt=""></img>
                        CÁMARAS
                    </button>
                    <button className="btn-category">
                        <img className="icono" src="https://image.flaticon.com/icons/png/512/4463/4463326.png" alt=""></img>
                        SMART HOME
                    </button>
                    <button className="btn-category">
                        <img className="icono" src="https://image.flaticon.com/icons/png/512/2972/2972413.png" alt=""></img>
                        AUDIO
                    </button>
                    <button className="btn-category">
                        <img className="icono" src="https://image.flaticon.com/icons/png/512/2972/2972463.png" alt=""></img>
                        MONITORES Y TV
                    </button>
                    <button className="btn-category">
                        <img className="icono" src="https://image.flaticon.com/icons/png/512/2972/2972418.png" alt=""></img>
                        ACCESORIOS PC
                    </button>
                    <button className="btn-category">
                        <img className="icono" src="https://image.flaticon.com/icons/png/512/2972/2972351.png" alt=""></img>
                        GAMING
                    </button>
                    <button className="btn-category">
                        <img className="icono" src="https://image.flaticon.com/icons/png/512/1530/1530273.png" alt=""></img>
                        TABLETS Y E-READERS
                    </button>
                    <button className="btn-category">
                        <img className="icono" src="https://image.flaticon.com/icons/png/512/2972/2972487.png" alt=""></img>
                        TELÉFONOS
                    </button>
                    <button className="btn-category">
                        <img className="icono" src="https://image.flaticon.com/icons/png/512/2972/2972342.png" alt=""></img>
                        DRONES
                    </button>
                    <button className="btn-category">
                        <img className="icono" src="https://image.flaticon.com/icons/png/512/2972/2972485.png" alt=""></img>
                        ACCESORIOS TELÉFONO
                    </button>
                </div>
            </div>
            <Controls>
                <ControlsInner>
                <h6 className="paginas">Página {activePage} de {pagesTotal}</h6>
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
            <ProductGrid products={getCurrentItems()} categorySelected={categorySelected}/>
        </React.Fragment>
    );
}


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
` 