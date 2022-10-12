import React from "react";
import { useCartContext } from "./CartContext";

const CartItem = ({item}) =>{
    const {removeProduct}=useCartContext();

    return(
//Acá puedo estilar
<div>
{/*         <section>
        <table className="p-2 table-fixed w-full border border-slate-600 uppercase border-separate border-spacing-3">
        <thead>
            <tr>
            <th>productos</th>
            <th>precio</th>
            <th>cantidad</th>
            <th>total</th>
            <th></th>
            </tr>
        </thead>
        </table>
        </section> */}
    <div className="container mx-auto mt-5 text-center">
        <div className="grid grid-cols-5 gap-4 my-2">
        <p className="bg-red-400"> {item?.nombre} </p>
        <p className="bg-red-400"> ${item?.tit}</p> 
        <p className="bg-red-400"> {item?.qty} </p>
        <p className="bg-red-400"> ${item?.qty * item.tit} </p>
        <button onClick={()=>removeProduct(item.id)}>Eliminar</button>
        </div>
    </div>
</div>
)
}

export default CartItem;