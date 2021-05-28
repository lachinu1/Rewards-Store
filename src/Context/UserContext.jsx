import React, { useState, useEffect } from 'react';
import axios from 'axios';


//Datos de la API
const API_URI = "https://coding-challenge-api.aerolab.co";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGIxMDE4MDliNzc4MTAwMjA5YzVhYWQiLCJpYXQiOjE2MjIyMTI5OTJ9.SUFmuuHpeHt8ZnTP-gz0jxPam3vP-R4uJkVuM6Pwx4A";
const headers = {
  "Content-Type": "application/json",
  "Accept" : "application/json",
  Authorization: `Bearer ${API_KEY}`
}


//Contexto
export const UserContext = React.createContext({
  _id: null,
  name: null,
  points: null,
  redeemHistory: [],
  createDate: null
})


//Proveedor 
export const UserProvider = ({ children }) => {
  

  //Maneja los estados de la info del usuario
  const [ userInfo, setUserInfo ] = useState(() => ({
    _id: null,
    name: null,
    points: null,
    redeemHistory: [],
    createDate: null,
    getUserInfo: () => getUserInfo()
  }))


  

  //Trae los usuarios con el método GET
  const getUserInfo = async () => {
    const userInfoFromAPI = await axios.get(`${API_URI}/user/me`, { headers })
    setUserInfo(s => ({...s, ...userInfoFromAPI.data}))
  }

  useEffect(() => {
    getUserInfo();
  }, [])



  return (
    <UserContext.Provider value={userInfo}>
      {children}
    </UserContext.Provider>
  );
}


