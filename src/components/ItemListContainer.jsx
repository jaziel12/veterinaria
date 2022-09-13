import React, { useState } from "react";
import { useEffect } from "react";
import ItemList from "./ItemList";
import ProductosArray from "./ProductosArray";


export const ItemListContainer =({title})=>{

const [item,setItem] = useState([]);


useEffect(() =>{
    const getProductos = new Promise(resolve=>{
        setTimeout(()=>{
            resolve(ProductosArray)
        }, 2000);
    })

    getProductos.then(data=> setItem(data));
}, [])




    return (
        <section className="flex flex-col items-center bg-gray-900">
            <h1 className=" bg-slate-500 w-full text-center" >{title}</h1>
            <div className=" text-center">
            <ItemList item={item}/>
        </div>
        </section>
    )
}

export default ItemListContainer;