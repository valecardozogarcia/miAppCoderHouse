//Destinado a mostrar info breve del producto, donde luego el usuario hace clic para ver los detalles
import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export const Item = ({id,titulo,precio,img,categoria}) =>{
    return(
        
        <Link to={`/producto/${id}`}>
        <div className={`items ${categoria}-categoria`}>

        <Card style={{ width: '18rem' }}>

        <Card.Header as="h5">{titulo.toUpperCase()}</Card.Header>
        <Card.Body>
        <Card.Img src={img} variant="bottom" className={'small-img'}/>

                <Card.Text>{precio}</Card.Text>
                <Button variant="primary">Ver más</Button>
            </Card.Body>

        </Card>
        </div>

        </Link>
    
     );
        
       
  

};

    

export default Item;