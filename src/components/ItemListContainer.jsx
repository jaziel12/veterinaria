import React, { useState } from "react";
import { useEffect } from "react";
import ItemList from "./ItemList";
import ProductosArray from "./ProductosArray";
import { useParams } from "react-router-dom";


export const ItemListContainer =({title})=>{

const [item,setItem] = useState([]);

const {categoriaId}= useParams()


useEffect(() =>{
    const getProductos = new Promise(resolve=>{
        setTimeout(()=>{
            resolve(ProductosArray)
        }, 2000);   
    })
    if(categoriaId){
        getProductos.then(data=> setItem(data.filter(ProductosArray=>ProductosArray.category === categoriaId)));
    } else {
        getProductos.then(data=> setItem(data));

    }
}, [categoriaId])




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