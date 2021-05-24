import React, { Fragment } from 'react';
import "./styles.css";

//Proveedor de Productos
import { AppContext } from '../../Context/AppContext';


function FilterSet() {

// Recibe la info del proveedor
    const { productsItems,  updateCategorySelected } = React.useContext(AppContext);
    
    

    return (
        <Fragment>
            <div className="container-filter">
                <div className="line"></div>
                <span className="filter-1">
                    <h3 className="text">Ordenar por:</h3>
                </span>
                 {/* Filtros por precio */}
                <button className="filter" onClick={() => updateCategorySelected(productsItems.cost)}>Más recientes</button>
                <button className="filter">Menor precio</button>
                <button className="filter">Mayor precio</button>
            </div>

            {/* Filtros por categorías */}
            <div className="container-category">
                <div className="container-buttons">
                    <button className="btn-category" onClick={() => updateCategorySelected(productsItems.category)}>
                        <img className="icono" src="https://image.flaticon.com/icons/png/512/1077/1077969.png" alt="TODAS"></img>
                        TODAS
                    </button>
                    <button className="btn-category" onClick={() => updateCategorySelected(productsItems.category)}>
                        <img className="icono" src="https://img-premium.flaticon.com/png/512/1530/1530274.png?token=exp=1621710611~hmac=a204e814d0b552ad7fdcd6078341c990" alt=""></img>
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
        </Fragment>
    );
}


export default FilterSet;