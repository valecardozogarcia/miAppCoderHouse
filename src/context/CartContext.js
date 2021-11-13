import React, {useState} from "react";

const Context = React.createContext()

const CartFunction = ({children})=>{
    const[cart, setCart]= useState([])
    const[stock, setStock]=useState(0)
    const [total, setTotal]=useState(0)

    const onAdd=(producto,cantidad) =>{
        const itemExiste=cart.find(item=>item.id==producto.id)
        //para no aceptar duplicados
        if(!itemExiste){
            setCart([...cart,{id:producto.id,titulo:producto.titulo,precio:producto.precio,cantidad:cantidad,subtotal:(producto.precio*cantidad)}])
            setTotal(total+(producto.precio*cantidad))
            setStock(stock+1)
        }
        else{
            const cartAux=cart.map((item)=>{
                if(item.id==producto.id){
                    item.cantidad+=cantidad
                    item.subtotal+=(producto.precio*cantidad)
                }
                return item
            })
            setCart(cartAux)
            setTotal(total+(producto.precio*cantidad))
        }
    }
    return <Context.Provider value={{cart,stock,total,onAdd}}>
        {children}
    </Context.Provider>
}
export {CartFunction, Context }