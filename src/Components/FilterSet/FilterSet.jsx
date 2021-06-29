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
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel'


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
      activePage,
      nextPage,
      prevPage,
      pagesTotal} = usePagination(products.filter(product => category ? product.category === category : true), 16, sortPrice);



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

  //Cambio de Categoría
  const handleChangeCategory = (e) => {
    setCategory(e.target.value)
  }
  

    return (
      <React.Fragment>
        {/* Paginador */}
        <Controls className="MuiContainer-root-2">
          <ControlsInner>
            Página {activePage} de {pagesTotal}
            <VerticalDivider />
              <span className="filter-1">
                  <h3 className="text">Filtrar por:</h3>
              </span>
            <FormControl >
              <StyledInputLabel id="demo-simple-select-label">Categoría</StyledInputLabel>
              <StyledSelect
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                defaultValue="Todas"
                onChange={handleChangeCategory}
              >
                <MenuItem key="All" value="">Todas</MenuItem>
                {categoryList.map(cat => <MenuItem key={cat} value={cat}>{cat}</MenuItem>)}
              </StyledSelect>
            </FormControl >
            {/* Filtros por precio */}
              <button className="filter" clickable={false} variant={sortPrice === "DESC" ? "default" : "outlined"} onClick={() => handleClickSort('DESC')}>Menor precio</button>
              <button className="filter" clickable={false} variant={sortPrice === "ASC" ? "default" : "outlined"} onClick={() => handleClickSort('ASC')}>Mayor precio</button>
              <VerticalDivider />
              <StyledArrow src={ArrowLeft} alt="arrow left" style={{ marginLeft: '-1rem' }} onClick={() => prevPage()} />
              <StyledArrow src={ArrowRight} alt="arrow rigth" style={{ marginLeft: '1rem' }} onClick={() => nextPage()} />
          </ControlsInner>
        </Controls>
        {/* Grilla con los productos */}
          <ProductGrid products={getCurrentItems()} />
        
        {/* Paginador */}
        <Controls className="MuiContainer-root-2">
          <ControlsInner>
            Página {activePage} de {pagesTotal}
            <VerticalDivider />
            <StyledArrow src={ArrowLeft} alt="arrow left" style={{ marginLeft: '44rem' }} onClick={() => prevPage()} />
            <StyledArrow src={ArrowRight} alt="arrow rigth" style={{ marginLeft: '1rem' }} onClick={() => nextPage()} />
          </ControlsInner>
        </Controls>
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
  align-items: center;
  justify-content: flex-start;
  font-family: 'Source Sans Pro';
  color: #616161;
  font-size: 18px;
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

const StyledInputLabel = styled(InputLabel)`
  margin-left: 1rem;
`
const StyledSelect = styled(Select)`
  width: 10rem;
  margin-left: 1rem;
`