import React, { useState } from 'react';

//Creamos el contexto
export const ProductContext = React.createContext();


//Creamos el proveedor 
export const ProductProvider = ({ children }) => {
  
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);


  return (
    <ProductContext.Provider value={{ data, setData, products, setProducts }} >
      {children}
    </ProductContext.Provider>
  );
}


