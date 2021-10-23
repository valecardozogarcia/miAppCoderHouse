//Agrupador de un set de componentes item.js
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Item from "./item";



const ItemList = ({ productos })=>{
    //utilizar un array de items y un map
    return (
        <>
        <Container>
            <Row className="text-center">
                {productos?.map((items)=>(
                    <Col xs={11} md={4} key={items?.id}>
                    <Item
                        img={items?.img} 
                        titulo={items?.titulo} 
                        detalle={items?.detalle} 
                        precio={'$ ' + items?.precio.toLocaleString("es-UY")} 
                    />
                    </Col>
                ))}
            </Row>

        </Container>
            
        </>
    );
}

export default ItemList;