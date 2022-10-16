import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import ItemCount from "./ItemCount";
import { useCartContext } from "./CartContext";

export const ItemDetail = ({item})=>{

    const [cart,setCart] = useState(false)
    
    const {addProduct} = useCartContext();




        const onAdd = (qty) => {
            setCart(true)
            addProduct(item,qty)  
            
    
    }; 
    return( //acá stilar la card detalle
    <main className="h-min-main pb-6 items-center font-semibold">
        <div className="flex ">
        <img className="w-1/4 " src={item?.image} alt="" /> 
        <div className="text-center mt-40 flex flex-col">
        <p className="text-center">{item?.nombre}</p>
        <p>{item?.detalles}</p>
        <h2 className="text-red-700	">{item?.tit}</h2>
        {cart ? <Link className="text-blue-500 hover:bg-slate-400" to={"/cart"}>Terminar Compra</Link> : <ItemCount onAdd={onAdd} initial={1} stock={8}/>}
        </div>  
    </div>
    </main>
        
    )
}
export default ItemDetail;

