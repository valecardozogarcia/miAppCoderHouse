import React, { useState, useEffect } from 'react';
import { ItemDetail } from './ItemDetail';
import { useParams } from 'react-router-dom';

import db from './firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';

export const ItemDetailContainer = () => {
    const [producto, setProductos] = useState({});
    const [cargador,setCargador] = useState(true);
    
    const {itemId} = useParams();

    useEffect(() => {
        setCargador(true);

    const myItem = doc(db, 'productos', itemId);

    getDoc(myItem)
      .then((res) => {
        const result = { id: res.id, ...res.data() };
        setProductos(result);
      })
      .finally(() => {
        setCargador(false);
      });
  }, []);     
        
    
    return cargador? <h1>Cargando...</h1>:<ItemDetail {...producto}/>;
    

}
export default ItemDetailContainer;
