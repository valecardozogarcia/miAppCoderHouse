//Destinado a mostrar info breve del producto, donde luego el usuario hace clic para ver los detalles
import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Item = ({titulo,detalle,precio,img}) =>{
    return(
        <>
        <Card>
        <Card.Img variant="top" src={img}/>
        <Card.Body>
                <Card.Title>{titulo}</Card.Title>
                <Card.Text>{detalle}</Card.Text>
                <Card.Text>{precio}</Card.Text>
                <Button variant="primary">Comprar</Button>
            </Card.Body>
        </Card>
        </>
       
    );

    

};

    

export default Item;