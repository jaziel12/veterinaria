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
                <p className="text-center">No hay elementos en el Carrito</p>
                <Link to={"/"}> <p className="text-center" >Hacer compras</p> </Link>
            </>
        )
    }
    //acá  estilar el Total, Checkout y Eliminar Todo
    return(
        <>
        {
                    <section>
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
                    </section>
        }
        {
            cart.map(item =><CartItem key={item.id} item={item} />)
        }
        {
    <table className="p-2 table-fixed w-full border border-slate-600 uppercase border-separate border-spacing-3">
        <thead>
            <tr>
            <th><button className=""  onClick={()=>clearCart()}> <p> Eliminar Todo</p> </button></th>
            <th><p className="text-center ">Total: {totalPrice()} </p></th>
            <th><Link to={"/checkout"}>  <p className="text-center ">Confirmar compra</p> </Link></th>
            <th></th>
            </tr>
        </thead>
    </table>
        }
{/*         {
            <p className="text-center ">Total: {totalPrice()} </p>
        }
        { <Link to={"/checkout"}>  <p className="text-center ">Confirmar compra</p> </Link> }
        {        <button className=""  onClick={()=>clearCart()}> <p> Eliminar Todo</p> </button>} */}
        </>
    )
}

export default Cart;