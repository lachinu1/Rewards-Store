import React from 'react';
import {Route, Switch} from 'react-router-dom'; 
import CssBaseline from '@material-ui/core/CssBaseline'


//Componentes
import Navigation from './components/navigation/Navigation';
import { Home } from './components/pages/home/Home';
import Points from './components/pages/points/Points';
import { History } from './components/pages/history/History';
import Footer from './components/footer/footer.jsx';

//Proveedor
import { UserProvider } from './context/UserContext';



function App() {
  
  return (
    <div>
      <UserProvider>
        <CssBaseline />
        <Navigation />
          <Switch>
            <Route path = "/rewards-store"  component = {Home} exact />
            <Route path="/puntos" component = {Points} exact />
            <Route path="/historial" component = {History} exact />
          </Switch>
      </UserProvider>
      <Footer />
      </div>
  );
}


export default App;