import React from 'react';
import {Route, Switch} from 'react-router-dom'; 

//Componentes
import Navigation from './components/navigation/Navigation';
import { Home } from './components/pages/home/Home';
import Points from './components/pages/points/Points';
import { History } from './components/pages/history/History';

//Proveedor
import { UserProvider } from './context/UserContext';



function App() {
  
  return (
    <div>
      <UserProvider>
        <Navigation />
          <Switch>
            <Route path = "/rewards-store"  component = {Home} exact />
            <Route path="/puntos" component = {Points} exact />
            <Route path="/mi-historial" component = {History} exact />
            {/* <Route path = "/notFound" component = {NotFound} exact /> */}
          </Switch>
        </UserProvider>
      </div>
  );
}


export default App;