import React, {useState,useEffect} from "react";
import ItemList from "./itemList";
import { useParams } from 'react-router-dom';

import db from "../firebase/firebase";
import {collection, query, where, getDocs} from "firebase/firestore";

const ItemListContainer=({greeting})=>{
    const[productos,setProductos]=useState([]) //cargo productos
    const[cargando,setCargando]= useState(true)//para que cuando este cargando muestre en pantalla cargando
    
    const { categoryId } = useParams();
    
    

    useEffect(() => {
        setCargando(true);

    const myItems = categoryId
    ? query(collection(db,"productos"),where('category', '==', categoryId))
    : collection(db, 'productos');

    getDocs(myItems)
      .then((res) => {
        const results = res.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });

        setProductos(results);
      })
      .finally(() => setCargando(false));
  }, [categoryId]);
    
    return cargando ?(
      <h2>CARGANDO...</h2>
      ) : (
        <>
          <h3 style={{ textAlign: 'center' }}>{greeting}</h3>
          <ItemList items={productos} />
        </>
       
    )
    

}
    

export default ItemListContainer;