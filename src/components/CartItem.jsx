import React from "react";
import { useCartContext } from "./CartContext";

const CartItem = ({item}) =>{
    const {removeProduct}=useCartContext();

    return(

        <div>
        <p>Titulo:{item?.nombre} </p>
        <p>cantidad:{item?.qty} </p>
        <p>Precio:{item?.tit}</p> 
        <p>SubTotal:${item?.qty * item.tit} </p>
        <button onClick={()=>removeProduct(item.id)}>Eliminar</button>
    </div>
)
}

export default CartItem;