import React, { useState, useEffect } from 'react';

//Componentes
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import FilterSet from './Components/FilterSet/FilterSet';
import Products from './Components/Products/Products';


//Proveedor
import { AppProvider } from './Context/AppContext';

function App() {


  const [userData, setUserData] = useState([]);

  

  //Trae los usuarios con el método GET
  useEffect(() =>{
    let petition = fetch("https://coding-challenge-api.aerolab.co/user/me",{
      headers: {
        "Content-type": "application/json",
        "Accept" : "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk",
      }
    });
    petition 
    .then((response) => {
      return response.json();
    })
    .then((results) => {
      setUserData(results);
      console.log(results);
    })
  });
  


  
  //Envía los puntos con el método POST  - Tira error 404, consultar... 
  // useEffect(() => {
  //   const obtenerPoints = async ()  => {
  //     const response = await fetch("https://coding-challenge-api.aerolab.co/user/points", {
  //       method: 'POST',
  //       body : {
  //         "amount": 1000,
  //       },
  //     headers: {
  //     "Content-type": "application/json",
  //     "Accept" : "application/json",
  //     "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk",
  //     }
  //   })
  //   const data = await response.json();
  //     console.log(data);
  //   }

  //   obtenerPoints();

  // }, [])


  
  return (
    <div>
      <Header
        userData={userData}
        setUserData={setUserData} 
      />
      <Banner />
      <AppProvider>
        <FilterSet />
      </AppProvider>
      <Products />
    </div>
  );
}


export default App;