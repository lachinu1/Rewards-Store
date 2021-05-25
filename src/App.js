import React from 'react';
import {Route, Switch} from 'react-router-dom'; 



//Componentes
import Navigation from './components/navigation/Navigation';
import Home from './components/home/Home';
import Points from './components/points/Points';
import Products from './components/products/Products';
import History from './components/history/History';
// import FilterSet  from './components/filterSet/FilterSet';
// import {Footer} from './components/Footer/Footer';


//Proveedor
// import { AppProvider } from './context/AppContext';



function App()  { 
  
  return (
    <div>
      <Navigation />
        <Switch>
            <Route path = "/"  component = {Home} exact />
            <Route path = "/productos" component = {Products} exact />
            <Route path="/puntos" component = {Points} exact />
            <Route path="/mi-historial" component = {History} exact />
            {/* <Route path = "/notFound" component = {NotFound} exact /> */}
          </Switch>
      </div>
  );
}


export default App;