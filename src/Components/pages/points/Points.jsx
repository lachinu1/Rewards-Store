import React, { useState, useContext} from 'react';
import "./styles.css";
import axios from 'axios';

//Imagenes
import CoinIcon from '../../../Images/coin.svg';
import AddIcon from '../../../Images/add-circle-orange.svg';

//Contexto
import { UserContext } from '../../../context/UserContext';

//Estilos de Material-ui
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';



//Estilos de Material-ui
const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });
  
  //Estilos del título del mensaje
  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });
  
   //Estilos del contenido del mensaje
  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);
  
   //Estilos de las acciones del mensaje
  const DialogActions = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
  }))(MuiDialogActions);


//Datos API 
const API_URI = "https://coding-challenge-api.aerolab.co";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGIxMDE4MDliNzc4MTAwMjA5YzVhYWQiLCJpYXQiOjE2MjIyMTI5OTJ9.SUFmuuHpeHt8ZnTP-gz0jxPam3vP-R4uJkVuM6Pwx4A";
const headers = {
  "Content-Type": "application/json",
  "Accept" : "application/json",
  Authorization: `Bearer ${API_KEY}`
}


function Points() {
    //Maneja el estado del mensaje
    const [dialogOpen, setDialogOpen] = useState(false);
    
    //Proveedor
    const { getUserInfo } = useContext(UserContext);
  
    //Muestra el mensaje
    const handleClickCoins = () => {
    setDialogOpen(true);
    }


    //Hace el POST a la API para enviar los datos de los puntos agregados
    const handleDialogClose = async (points) => {
      if (points) {
        try {
          const response = await axios.post(`${API_URI}/user/points`, { amount: points }, { headers });
          const pointsUpdatedMessage = response.data?.message;
          if (pointsUpdatedMessage === "Points Updated") {
            setDialogOpen(false);
            getUserInfo();
          }
        } catch (error) {
          console.error(error)
        }
      } else {
        setDialogOpen(false);
      }
    } 

  

    return (
        <React.Fragment>
            <div className="container-banner-points">
                <div className="header-points">
                    <h3>No te quedes sin puntos<img className="coin-points" src={CoinIcon} alt="coin" /></h3>
                    <h5 className="puntos">Cargalos siempre que necesites y aprovechá los beneficios!</h5>
                    <button type="submit" className="btn-points" onClick={handleClickCoins}>Cargar Puntos</button>
                    <Dialog
                        open={dialogOpen}
                        onClose={() => handleDialogClose(0)}
                        aria-labelledby="customized-dialog-title"
                        >
                        <DialogTitle id="alert-dialog-title">{"¡Conseguir más puntos!"}</DialogTitle>
                            <DialogContent>
                                <Typography gutterBottom> 
                                        Podés conseguir más puntos con los siguiente montos
                                </Typography>
                            </DialogContent>
                        <DialogActions>
                            <Button autoFocus onClick={() => handleDialogClose(1000)} color="#ff7c00"><Avatar src={AddIcon}  />
                            1000
                            </Button>
                            <Button autoFocus onClick={() => handleDialogClose(5000)} color="#ff7c00"><Avatar src={AddIcon}  />
                            5000
                            </Button>
                            <Button autoFocus onClick={() => handleDialogClose(7500)} color="#ff7c00"><Avatar src={AddIcon}  />
                            7500
                            </Button>
                            <Button autoFocus onClick={() => handleDialogClose(0)} color="#ff7c00">
                            Cancelar
                            </Button>
                        </DialogActions>
                    </Dialog>
                    <div className="img"></div>
                </div>
            </div>
        </React.Fragment> 
       
    );
}

export default Points