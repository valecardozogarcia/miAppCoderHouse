import React, {useState, useContext} from "react";
import { Link } from "react-router-dom";
import ItemCount from "./itemCount/itemCount";
import { Context } from "../context/CartContext";


const ItemDetail = ({ id,titulo,precio,stock,img}) => {
  const [buy, setBuy] = useState(false)
  const {onAdd}=useContext(Context)
  
  const agregar = (props)=>{
    setBuy(true)
    onAdd({id,titulo,precio},props.unidades)
    alert(`agregaste ${props.unidades} al carrito`)

}
  return (
      <div className='item'>
            <h2>Componente DETAIL</h2>
            <h2>{titulo}</h2>
            <h4>${precio}</h4>
            <img style={{width:"60%"}} src={img} alt={titulo} />
            {!buy ? <ItemCount stock={stock} onAdd={agregar}/> : <Link to='/cart'><button>Terminar compra</button></Link>}
        </div>
  );
};

export default ItemDetail









  
