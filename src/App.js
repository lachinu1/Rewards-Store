import React, { useState, useEffect } from 'react';

//Componentes
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import FilterSet from './Components/FilterSet/FilterSet';
import Products from './Components/Products/Products';




function App() {

  const [data, setData] = useState([]);
  //Maneja el estado del usuario
  const [user, setUser] = useState("");
   //Maneja el estado del puntos
  const [points, setPoints] = useState(0);
   //Maneja el estado de los productos
  const [products, setProducts] = useState([]);
  //Maneja el estado de los filtros de Categorías
  const [categorySelected, setCategorySelected] = useState('');



  //  Función para actualizar el estado de categorySelected
   function updateCategorySelected (categorySelected) {
    setCategorySelected(categorySelected)
   }
  
  


  //Trae los usuarios con el método GET
  useEffect(() => {
    const obtenerUsers = async ()  => {
    const response = await fetch("https://coding-challenge-api.aerolab.co/user/me",{
    headers: {
      "Content-type": "application/json",
      "Accept" : "application/json",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk",
      }
    })
    const data = await response.json();
      console.log(data);
      setData(data);
      setUser(true);
    }

    obtenerUsers();

  }, [user])
  


  //Trae los productos  con el método GET
  useEffect(() => {
    const obtenerProducts = async ()  => {
    const response = await fetch("https://coding-challenge-api.aerolab.co/products",{
    headers: {
      "Content-type": "application/json",
      "Accept" : "application/json",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk",
      }
    })
    const data = await response.json();
      console.log(data);
      setData(data);
      setProducts(true);
    }

    obtenerProducts();

  },[products])
  
  
  //Envía los puntos con el método POST  - Tira error 404, consultar... 
  useEffect(() => {
    const obtenerPoints = async ()  => {
      const response = await fetch("https://coding-challenge-api.aerolab.co/user/points", {
        method: 'POST',
        body : {
          "amount": 1000,
        },
      headers: {
      "Content-type": "application/json",
      "Accept" : "application/json",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk",
      }
    })
    const data = await response.json();
      console.log(data);
      setData(data);
      setPoints();
    }

    obtenerPoints();

  }, [points])


  
  return (
    <div>
      <Header
        data={data}
        setData={setData}
        
      
      />
      <Banner />
      <FilterSet
        data={data}
        setData={setData}
        updateCategorySelected={updateCategorySelected} />
      <Products
        data={data}
        setData={setData}
        products={products}
        setProducts={setProducts} />
    </div>
  );
}


export default App;