import React, { useContext } from "react";
import { BsFillCartCheckFill } from "react-icons/bs";
import { CartContext, useCartContext } from "./CartContext";

const CardWitget = () => {
 /*    const {} = useContext(CartContext);  *///ver clase 1:10
    const {totalProduct} = useCartContext();

    return (
        <div className="cartidget">
            <div><BsFillCartCheckFill size="40px" color="orange"/></div>
            <span>{totalProduct() || '' }</span>
        </div>
    );
};

export default CardWitget;
