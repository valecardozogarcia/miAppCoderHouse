import React from "react";


export const ItemDetail = ({ id,titulo,precio,img}) => {
  return !id ? (
    <h1>EL ITEM NO EXISTE</h1>
  ) : (
    <>
      <h1>{titulo.toUpperCase()}</h1>
      <img src={img} alt={titulo} />
      <p>$ {precio}</p>
      
    </>
  );
};









  
