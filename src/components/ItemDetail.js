import React, {useState, useContext} from "react";
import { Link } from "react-router-dom";
import ItemCount from "./itemCount/itemCount";
import { Context } from "../context/CartContext";


const ItemDetail = ({ name,price,stock,image}) => {
  const [buy, setBuy] = useState(false)
  const {onAdd}=useContext(Context)
  
  const agregar = (props)=>{
    setBuy(true)
    onAdd({name,price},props.unidades)
    alert(`agregaste ${props.unidades} al carrito`)

}
  return (
      <div className='item'>
            <h2>Componente DETAIL</h2>
            <h2>{name}</h2>
            <h4>${price}</h4>
            <img style={{width:"60%"}} src={image} alt={name} />
            {!buy ? <ItemCount stock={stock} onAdd={agregar}/> : <Link to='/cart'><button>Terminar compra</button></Link>}
        </div>
  );
};

export default ItemDetail









  
