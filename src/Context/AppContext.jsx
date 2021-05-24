import React, { useState } from 'react';

//Creamos el contexto
export const AppContext = React.createContext();


//Creamos el proveedor 
export const AppProvider = ({ children }) => {
  
  
  //Maneja el estado de los Productos
  const [productsItems, setProductsItems] = useState([]);

  //Maneja el estado de los filtros de Categorías
  const [categorySelected, setCategorySelected] = useState('');

   //Función para actualizar el estado de categorySelected
   function updateCategorySelected (categorySelected) {
    setCategorySelected(categorySelected)
    }


  return (
    <AppContext.Provider value={{ productsItems, setProductsItems, categorySelected, setCategorySelected, updateCategorySelected }} >
      {children}
    </AppContext.Provider>
  );
}


