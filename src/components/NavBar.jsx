import React from "react";
import CartWidget from "./CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
    const categorias=[
        {id:"plantas",address:"/categoria/plantas",text:"Plantas"},
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
    <CartWidget/> 
    </div>
    </section>
    
    )

}

export default NavBar;