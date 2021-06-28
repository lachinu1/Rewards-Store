import React from 'react';
import styled from 'styled-components';

//Material-ui
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';



/** function ItemCard muestra la información 
 *  de historial de compra
 */


function ItemCard({ item }) {
  
  const { category, cost, createDate, img, name, productId } = item;

  return (
    <Grid item xs={12} >
      <StyledPaper>
        <HorizontalContainer>
          <StyledImage src={img.hdUrl} alt="purchased item" />
          <VerticalContainer>
            <TypographyContainer variant="h4">{name}</TypographyContainer>
            <TypographyContainer variant="h6">Fecha y Hora: {createDate.slice(0,10)} {createDate.slice(11,16)}</TypographyContainer>
            <TypographyContainer variant="h5">Categoría: {category}</TypographyContainer>
            <TypographyContainer variant="h5">$ {cost}</TypographyContainer>
            <Typography variant="body1">Producto ID: {productId}</Typography>
          </VerticalContainer>
        </HorizontalContainer>
      </StyledPaper>
    </Grid>
  )
}



//Estilos styled
const StyledPaper = styled(Paper)`
  display: flex;
  flex-flow: column nowrap;
  padding: 1rem;
  height: 20rem;
`
const HorizontalContainer = styled(Container)`
  display: flex;
`

const VerticalContainer = styled(Container)`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  padding: 2rem 0 2rem 2rem;
`

const StyledImage = styled.img`
  width: 25rem;
`

const TypographyContainer = styled(Container)`
  display: flex;
  justify-content: flex-end;
  font-size: 2.100rem;
  font-family: 'Source Sans Pro';
  font-weight: 400;
  line-height: 1.235;
  letter-spacing: 0.00735em;
  margin: 0;
`




export default ItemCard;