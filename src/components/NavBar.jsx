import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return(
        <header className="header">
            < nav className= "navBar">
                <img src= "../../logo.jpg" alt= "logo" className="logo"/>
                <h1 className="brandName" >Organics</h1>
                <a href="#" h1 className="item-nav" >Inicio</a>
                <a href="#" h1 className="item-nav">Productos</a>
                <a href="#" h1 className="item-nav">Contacto</a>
                <a href="#" h1 className="item-nav">Promociones</a>
                <CartWidget/>    
            </nav>
            
            
            </header>

    );
};

export default NavBar;