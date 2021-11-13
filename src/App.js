
import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './container/itemListContainer';
import ItemDetailContainer  from './container/ItemDetailContainer';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import {CartFunction} from "./context/CartContext"
import Cart from './components/Carrito/Cart';

function App() {
  const styles={};
  
  return (
    <BrowserRouter>
    <CartFunction>
    <div className="miApp">
    <NavBar />
    <Switch>
      {/* home por defecto */}
      <Route exact path="/">
      <ItemListContainer/>
          </Route>
          <Route path="/cart" exact>
            <Cart/>
            
            </Route>
          <Route path="/categoria/:categoriaId">
            <ItemListContainer greeting={'FILTRADO'} />
          </Route>
          
          <Route path="/producto/:id" component={ItemDetailContainer} />
          
        </Switch>
        </div>
        </CartFunction>
      </BrowserRouter>
);
}


export default App;
