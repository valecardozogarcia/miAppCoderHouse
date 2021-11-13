import React from "react";
import CartWidget from "./Carrito/CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
    const categorias=[
        {id:"plantas",address:"/categoria/infusiones",text:"Infusiones"},
        {id:"otros",address:"/categoria/otros",text:"Otros"},
        {id:"Todos",address:"/",text:"Todos los productos"}];
    
    return(
    
    <section>
        <div className= "navBar">
    {categorias.map((cat) => {
        
    return(       
                                 
          
           <div className="item-nav" key={cat.id}>
            
            <NavLink to={cat.address} exact activeClassName="activeClass">
              {cat.text}
            </NavLink>   
                
                          


    </div>  
   )
   
    
    })}
    <NavLink to="/cart"><p>Cart</p></NavLink> 
        
    
    </div>
    </section>
    
    )

}

export default NavBar;