import React, { useState, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';

//Material-ui
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

//Contexto
import { UserContext } from '../context/UserContext';

//Imagenes
import { ReactComponent as BuyIconBlue } from '../Images/buy-blue.svg';
import { ReactComponent as BuyIconWhite } from '../Images/buy-white.svg'
import CoinIconSVG, { ReactComponent as CoinIcon } from '../Images/coin.svg';
import Smiling  from '../Images/smiling.png';
import Confused  from '../Images/confused.png';

//Datos API 
const API_URI = "https://coding-challenge-api.aerolab.co";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGIxMDE4MDliNzc4MTAwMjA5YzVhYWQiLCJpYXQiOjE2MjIyMTI5OTJ9.SUFmuuHpeHt8ZnTP-gz0jxPam3vP-R4uJkVuM6Pwx4A";
const headers = {
  "Content-Type": "application/json",
  "Accept" : "application/json",
  Authorization: `Bearer ${API_KEY}`
}


/**
 * function ProductCard, recibe como parámetro los datos del producto
 * para luego mapear las cards.
 * Desde acá, se realiza el POST a la API de redeem para enviar la info.
 */


function ProductCard({ product }) {

  const [ active, setActive ] = useState(false);
  const [ dialogMessage, setDialogMessage ] = useState("success");
  const [ dialogOpen, setDialogOpen ] = useState(false);
  const { category, img, name, cost, _id } = product;

  //Recibe los parámetros desde Context
  const { points, getUserInfo } = useContext(UserContext);

  //POST a la API de redeem para enviar la info   
  const handleClick = async (productId) => {
    try {
      const response = await axios.post(`${API_URI}/redeem`, { productId }, { headers });
      const redeemMessage = response.data;
      if (redeemMessage) {
        setDialogMessage("success");
        setDialogOpen(true);
      }
    } catch (error) {
      setDialogMessage("error");
      console.error(error);
    }
  }
    
  //Mensaje en caso de necesitar más puntos
  const handleDialogClose = () => {
    setDialogOpen(false);
    getUserInfo();
  } 

  if (cost > points) {
    return (
      <Grid item xs={3}>
        <StyledPaper>
          <StyledChip label={`Necesitas ${cost-points}`} avatar={<Avatar src={CoinIconSVG} />} />
          <figure>
            <ImgWrapper src={img.url} alt={name} />
            <figcaption>
              <Typography variant="caption" style={{ color: "gray" }}>{category}</Typography>
              <Typography variant="subtitle2">{name}</Typography>
            </figcaption>
          </figure>
        </StyledPaper>
      </Grid>
    )
  }
    
  
// Cards de los productos
  return (
    <Grid item xs={3} >
      <StyledPaper onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)} style={ active ? { transform: "translateY(-10px)" } : { transform: "none" }}>
      {active ?
        <ActivePaper>
          <IconWrapper>
            <BuyIconWhite/>
          </IconWrapper>
          <StyledContainer>
            <CoinIcon />
            <Typography variant="h5" style={{ color: "#fafafa", fontWeight: "bold" }}>{cost}</Typography>
          </StyledContainer>
          <StyledButton variant="contained" style={{ color: "#dadada", borderRadius: "20.5px" }} onClick={() => handleClick(_id)} >
            Comprar
          </StyledButton>
        </ActivePaper>
        : null
      }
      { active ? null :
        <IconWrapper>
          <BuyIconBlue/>
        </IconWrapper>
      }
        <figure>
          <ImgWrapper src={img.url} alt={name} />
          <figcaption>
            <TypographyText variant="caption" style={{ color: "gray" }}>{category}</TypographyText>
            <TypographyText variant="subtitle2">{name}</TypographyText>
          </figcaption>
        </figure>
      </StyledPaper>

      {/* Mensaje de la compra */}
      <Dialog
        open={dialogOpen}
        onClose={handleDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title"> {dialogMessage === "success" ? "¡Genial!" : "¡Error!"}</DialogTitle>
        <DialogContent>
          {dialogMessage === "success" ? <Avatar src={Smiling} /> : <Avatar src={Confused} />}
          <DialogContentText id="alert-dialog-description">
          {
              dialogMessage === "success" ?
              "La compra se realizó con éxito" 
            :
              "Hubo un problema con la compra, intentá de nuevo"
               
          }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Seguir comprando
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  )
}


//Estilos
const StyledPaper = styled(Paper)`
  display: flex;
  flex-flow: column nowrap;
  padding: 1rem;
  position: relative;
`
const ActivePaper = styled(Paper)`
  display: flex;
  flex-flow: column nowrap;
  background-color: rgba(37,187,241, 0.85);
  z-index: 1;
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 2rem;
`

const ImgWrapper = styled.img`
  width: 100%;
  border-bottom: 1px solid lightgray;
`
const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
`

const IconWrapper = styled.div`
  height: 2.5rem;
  width: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 1rem;
  top: 1rem;
`

const StyledChip = styled(Chip)`
  position: absolute;
  right: 1rem;
  top: 1rem;
  background-color: rgba(0,0,0,0.5);
  color: #fafafa;
`

const StyledButton = styled(Button)`
  background-color: "#fafafa";
  border-radius: 20px;
  margin-top: 0.5rem;
`

const TypographyText = styled(Container)`
display: flex;
font-size: 16px;
font-family: 'Source Sans Pro';
font-weight: 400;
line-height: 1.235;
letter-spacing: 0.00735em;
margin: 0;
`

export default ProductCard;