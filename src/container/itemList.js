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
            <section className="flex-row">
                {productos?.map((items)=>(
                    <Col xs={11} md={4} key={items?.id}>
                    <Item
                        {...items} key={items.id}
                        image={items?.image} 
                        category={items?.category}
                        name={items?.name} 
                        //detalle={items?.detalle} 
                        price={'$ ' + items?.price.toLocaleString("es-UY")}
                        stock={'$ ' + items?.stock.toLocaleString("es-UY")} 
                        
                    />
                    </Col>
                ))}
            </section>

        </Container>
            
        </>
    );
}

export default ItemList;