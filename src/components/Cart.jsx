import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "./CartContext";
import CartItem from "./CartItem";


const Cart = () =>{
    const {cart,totalPrice,clearCart} = useCartContext();
//Ver si tengo que poner el "0" como string
    if(cart.length === 0){
        return(
            <>
                <p>NO hay elementos en el Carrito</p>
                <Link to={"/"}>Hacer compras</Link>
            </>
        )
    }
    return(
        <>
        {
            cart.map(item =><CartItem key={item.id} item={item} />)
        }
        {
            <p>Total: {totalPrice()} </p>
        }
        {        <button onClick={()=>clearCart()}>Eliminar Carrito</button>}
        </>
    )
}

export default Cart;