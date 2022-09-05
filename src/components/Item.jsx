import React from "react";
import ItemCount from "./butoon/ItemCount";

const Item=({Productos}) =>{
    const onAdd=(qty) => {
        alert('Agregaste ${qty} productos')
    };
    return(
            <div className="">
                    <h3>{Productos.nombre}</h3>
                    <p>{Productos.image} </p> 
                    <ItemCount />




            </div>



    )
}

export default Item;