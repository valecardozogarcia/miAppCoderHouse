//Destinado a mostrar info breve del producto, donde luego el usuario hace clic para ver los detalles
import React from "react";

import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export const Item = ({name,price,stock,image,category}) =>{
    
    return(
        
        <Link to={`/product/${id}`}>
        <div className='item'>
        
        <div className={`item_card ${category}-category`}>
        <span>{name}</span>
        <span>Cat: {category}</span>
        <span>
          <img src={image} alt={name} className={'small-img'} />
        </span>
        <span>$ {price}</span>
      </div>
        <Button variant="primary">Ver más</Button>
        </div>
        </Link>
        
   

    
     );
        
       
  

};

    

export default Item;