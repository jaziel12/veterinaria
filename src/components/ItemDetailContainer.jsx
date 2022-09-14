import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import ProductosArray from "./ProductosArray";

const ItemDetailContainer =() => {
    const [item, setItem] = useState({})

    const {id}= useParams()
    console.log(item)
    useEffect(()=>{
        const getProduct=()=>
        new Promise((resolve, reject) => {
            const products = ProductosArray.find((prod)=> prod.id === parseInt(id))
            setTimeout(()=>{
                resolve(products)
            }, 500)
        });
        getProduct() //acá puse el parse
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