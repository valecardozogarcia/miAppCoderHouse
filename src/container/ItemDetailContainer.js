import React,{ useState, useEffect } from "react"; 
import productosdata from '../Datos/productosdata';
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../components/ItemDetail';

export const ItemDetailContainer = () => {
    const [producto, setProductos] = useState({});
    const [cargador,setCargador] = useState(true);
    
    const {id} = useParams();

    useEffect(() => {
        setCargador(true);
        const getItems = new Promise((resolve) =>{
            setTimeout(()=>{
                resolve(productosdata);
            },1000);
        });
        getItems
        .then((res) => {
            setProductos(res.find((i)=> i.id === id));
        })
        .finally(()=> setCargador(false));
    },[id]);
    return cargador? <h3>Cargando...</h3>:<ItemDetail {...producto}/>;
    

}
export default ItemDetailContainer;
