import React from 'react';
import "./styles.css";
// import { makeStyles } from '@material-ui/core/styles';
// import Pagination from '@material-ui/lab/Pagination';


import right from '../../Images/arrow-right.svg';
import left from '../../Images/arrow-left.svg';



/**
 * @description función Paginate maneja el paginador.
 * Mapea los números de página de acuerdo a la cantidad de registros encontrados
 */


 
 export default function Pagination() {

   const [page, setPage] = React.useState(1);
   const handleChange = (event, value) => {
     setPage(value);
   };
 
   return (
     
    <nav className="nav-pagination">
        <button
            type="button"
            className="page-item"
            href="!#"
            count={16}
            page={page}
            onChange={handleChange}
            variant="outlined"
            shape="rounded">
            <img src={right} alt="" />
        </button>
    </nav>
     
   );
 }