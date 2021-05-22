import React, { useState, useEffect } from 'react';

//Componentes
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import Products from './Components/Products/Products';
import FilterSet from './Components/FilterSet/FilterSet';




function App() {

  const [data, setData] = useState([]);
  const [user, setUser] = useState("");
  const [points, setPoints] = useState(true);
  const [products, setProducts] = useState(true);





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
      setData(data.data);
      setUser();
 
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
      setData(data.data);
    }

    obtenerProducts();

  },[products])
  
  
  //Envía los puntos con el método POST
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
      setData(data.data);
      setPoints(true);
    }

    obtenerPoints();

  }, [points])


  
  return (
    <div>
      <Header data={data} user={user} />
      <Banner />
      <FilterSet />
      <Products data={data} products={products} setProducts={setProducts}/>
    </div>
  );
}

export default App;
