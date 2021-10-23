import react, {useState,useEffect} from "react";
import productosdata from "../Datos/productosdata";
import ItemList from "./itemList";

const ItemListContainer=(props)=>{
    const[productos,setProductos]=useState([]) //cargo productos
    const[cargando,setCargando]= useState(true)//para que cuando este cargando muestre en pantalla cargando
    
    useEffect( () => {

        const listaProductos= new Promise( (resolve,reject) => {
            setTimeout(() => {resolve(productosdata)},2000);
        });
        listaProductos.then((datosDeProductos) => {
            setProductos(datosDeProductos)
            setCargando(false)
        });
        
    },[productos])
    
    return(
        <>
             <h1 className="text-center">{props.titulo}</h1>
             {cargando ? <h2 className="text-center">Cargando productos</h2> : <ItemList productos={productos}/>}
        
        </>
       
    )
    

}
    

export default ItemListContainer;