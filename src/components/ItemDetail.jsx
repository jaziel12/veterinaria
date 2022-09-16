import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = ({item})=>{

    const [cart,setCart] = useState(false)

        const onAdd = (qty) => {
            setCart(true)
    /* alert(`Agregaste ${qty} productos`); */
    }; 
    return( //acástilar la card detalle
        <div className="flex ">
        <img className="w-1/4 " src={item?.image} alt="" /> 
        <div className="text-center mt-40 flex flex-col">
        <p className="text-center">{item?.nombre}</p>
        <p>{item?.detalles}</p>
        <h2 className="text-red-700	">{item?.tit}</h2>
        {cart ? <Link className="text-blue-500" to={"/cart"}>Terminar Compra</Link> : <ItemCount onAdd={onAdd} initial={1} stock={8}/>}
        </div>  
    </div>
        
    )
}
export default ItemDetail;