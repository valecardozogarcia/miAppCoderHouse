
import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './container/itemListContainer';
import ItemDetailContainer  from './container/ItemDetailContainer';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

function App() {
  const styles={};
  
  return (
    <BrowserRouter>
    <NavBar />
    <Switch>
      {/* home por defecto */}
      <Route exact path="/">
      <ItemListContainer/>
          </Route>
          <Route path="/categoria/:categoriaId">
            <ItemListContainer greeting={'FILTRADO'} />
          </Route>
          
          <Route path="/producto/:id" component={ItemDetailContainer} />
          
        </Switch>
      </BrowserRouter>
);
}


export default App;
