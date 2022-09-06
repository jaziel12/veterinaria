import React, { useState } from "react";
import { useEffect } from "react";
import ItemList from "./ItemList";


const cache = [
    {
        id:1,
        tit:"$$",
        nombre:"Criadores Adulto 15kg",
        stock:10,
        image:"https://puppis.vteximg.com.br/arquivos/ids/158003-600-600/150002.png?v=635894318957130000",

    },

    {
        id:2,
        tit:"$$",
        nombre:"Criadores Adulto 15kg",
        stock:10,
        image:"https://puppis.vteximg.com.br/arquivos/ids/161933-1000-1000/80g.png?v=636459085239430000",

    }
]

export const ItemListContainer =({title})=>{

const [data,setData] = useState([]);


useEffect(() =>{
    const getData = new Promise(resolve=>{
        setTimeout(()=>{
            resolve(cache)
        }, 2000);
    })

    getData.then(res=> setData(res))
}, [])




    return (
        <div className=" flex bg-amber-300">
            <h1 className="text-center bg-slate-500" >{title}</h1>
            <ItemList data={data}/>
        </div>
    )
}

export default ItemListContainer;