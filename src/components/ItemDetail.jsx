import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import ItemCount from "./ItemCount";
import { useCartContext } from "./CartContext";

export const ItemDetail = ({item})=>{

    const [cart,setCart] = useState(false)
    
    const {addProduct} = useCartContext();


/*     const {addToCart} = useContext(CartContext); estoy es de la clase, se puede volver a ponerlo como funcion
 */// prueba de abajo
/* const [addProduct] = useContext(CartContext) */ //nuevo

        const onAdd = (qty) => {
            setCart(true)
            addProduct(item,qty) // esto es nuevo //esto es lo de antes addToCart(item,qty) 
            
    /* alert(`Agregaste ${qty} productos`); */
    }; 
    return( //acá stilar la card detalle
    <main className="h-min-main pb-6">
        <div className="flex ">
        <img className="w-1/4 " src={item?.image} alt="" /> 
        <div className="text-center mt-40 flex flex-col">
        <p className="text-center">{item?.nombre}</p>
        <p>{item?.detalles}</p>
        <h2 className="text-red-700	">{item?.tit}</h2>
        {cart ? <Link className="text-blue-500" to={"/cart"}>Terminar Compra</Link> : <ItemCount onAdd={onAdd} initial={1} stock={8}/>}
        </div>  
    </div>
    </main>
        
    )
}
export default ItemDetail;

/* {cart ? <Link className="text-blue-500" to={"/cart"}>Terminar Compra</Link> : <ItemCount onAdd={onAdd} initial={1} stock={8}/>} iba en la línea 32
 */