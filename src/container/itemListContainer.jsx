import React, {useState,useEffect} from "react";
import productosdata from "../Datos/productosdata";
import ItemList from "./itemList";
import { useParams } from 'react-router-dom';

const ItemListContainer=(props)=>{
    const[productos,setProductos]=useState([]) //cargo productos
    const[cargando,setCargando]= useState(true)//para que cuando este cargando muestre en pantalla cargando
    
    const { categoriaId } = useParams();
    
    

    useEffect(() => {

        setCargando(true);
    const getItems = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productosdata);
      }, 1000);
    });

    getItems.then((res) => {
        
        categoriaId
          ? setProductos(res.filter((i) => i.categoria === categoriaId))
          : setProductos(res);
      })
      .finally(() => setCargando(false));
  }, [categoriaId]);

   
    
    return(
        <>
             <h1 className="text-center">{props.titulo}</h1>
             {cargando ? <h2 className="text-center">Cargando productos</h2> : <ItemList productos={productos}/>}
        
        </>
       
    )
    

}
    

export default ItemListContainer;