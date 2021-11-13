//Destinado a mostrar info breve del producto, donde luego el usuario hace clic para ver los detalles
import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export const Item = ({id,titulo,precio,stock,img,categoria}) =>{
    return(
        
       
        <div className='item'>
        
        <Link to={`/producto/${id}`}>
        <img src={img} className={"small-img"}/>
        <h2>{titulo}</h2>
        <h4>{precio}</h4>
        </Link>
        <Button variant="primary">Ver más</Button>
        </div>
   

    
     );
        
       
  

};

    

export default Item;