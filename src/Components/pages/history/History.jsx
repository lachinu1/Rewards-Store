import React, { useState, useEffect} from 'react';
import "./styles.css";
import axios from 'axios';
import { usePagination } from '../../../hooks';
import ItemGrid from '../../../common/ItemGrid';
import styled from 'styled-components';

//Material-ui
import Container from '@material-ui/core/Container';

//Imagenes
import ArrowLeft from '../../../Images/arrow-left.svg';
import ArrowRight from '../../../Images/arrow-right.svg';

//Datos API 
const API_URI = "https://coding-challenge-api.aerolab.co";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGIxMDE4MDliNzc4MTAwMjA5YzVhYWQiLCJpYXQiOjE2MjIyMTI5OTJ9.SUFmuuHpeHt8ZnTP-gz0jxPam3vP-R4uJkVuM6Pwx4A";
const headers = {
  "Content-Type": "application/json",
  "Accept" : "application/json",
  Authorization: `Bearer ${API_KEY}`
}


/** function History es la sección que guarda
 *  todas las compras realizadas.  
 */


export function History() {

    //Maneja los estados de los items
    const [ items, setItems ] = useState([]);
  

    //Hace el GET a la API de Historial para traer la info de los items
    useEffect(() => {
        const getItems = async () => {
          try {
            const itemsFromAPI = await axios.get(`${API_URI}/user/history`, { headers });
            setItems(itemsFromAPI.data);
          } catch (error) {
            console.error(error);
          }
        }
        getItems();
    }, [])
    

  //Paginador
    const { 
        getCurrentItems,
        getItems,
        nextPage,
        prevPage,
        itemsPerPage} = usePagination(items, 10, "");
    

  
    return (
      <HistoryWrapper>
        <div className="history-header">
            <h1 className="title">Mi Historial</h1>
            <div className="img-banner"></div>
        </div>
        <Controls>
            <ControlsInner>
                {itemsPerPage} de {getItems()}
                <VerticalDivider />
                <StyledArrow src={ArrowLeft} alt="arrow-left" onClick={() => prevPage()} />
                <StyledArrow src={ArrowRight} alt="arrow-rigth" onClick={() => nextPage()} />
            </ControlsInner>
        </Controls>
        <ItemGrid items={getCurrentItems()} />
      </HistoryWrapper>
    )
}


//Estilos styled
const HistoryWrapper = styled.main`
  display: flex;
  flex-flow: column nowrap;
`

const Controls = styled(Container)`
  display: flex;
  padding: 0 6rem;
  margin-top: 1rem;
  align-items: center;
  align-self: flex-end;
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
  margin: 0 2rem;
  align-self: flex-end;
  margin-top: -25px;
  margin-left: 111px;
`

const StyledArrow = styled.img`
  height: 35px;
  width: 35px;
  align-self: center;
  cursor: pointer;
  margin-right: 1rem;
  background: #00000047;
  border-radius: 19px;
  border: 1px solid #f3f3f3;
` 
