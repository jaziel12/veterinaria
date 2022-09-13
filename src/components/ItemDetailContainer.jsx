import React, { useState } from "react";
import { useEffect } from "react";
import ItemDetail from "./ItemDetail";
import ProductosArray from "./ProductosArray";

const ItemDetailContainer =() => {
    const [item, setItem] = useState({})

    useEffect(()=>{
        const getProduct=()=>
        new Promise((resolve, reject) => {
            const products = ProductosArray.find((prod)=> prod.id === 1)
            setTimeout(()=>{
                resolve(products)
            }, 4000)
        });
        getProduct()
        .then((info)=>{
            setItem(info)
        })
        .catch((error)=>{
            console.log(error)
        })
    }, [])

    return(
        <div>
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer;