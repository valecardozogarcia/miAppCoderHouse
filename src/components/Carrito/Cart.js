import React,{useContext} from "react";
import {Context} from "../../context/CartContext"

const Cart=()=>{
    const {cart,total} = useContext(Context)

    return(
        <>
        <p> El total es {total} </p>
        {cart.map((item)=>
        <div>
            <h2>titulo:{item.titulo}</h2>
            <h2>precio:{item.precio}</h2>
            <h2>cantidad:{item.cantidad}</h2>
            <h2>subtotal:{item.subtotal}</h2>
            <button>{item.id}</button>
        </div>
        )}
        </>
    )
}
export default Cart