import React, { useState } from "react";
import { useEffect } from "react";
import ItemList from "./ItemList";


const cache = [
    {
        id:1,
        tit:"$15.000",
        nombre:"Criadores Adulto 15kg",
        stock:10,
        image:"https://puppis.vteximg.com.br/arquivos/ids/158003-600-600/150002.png?v=635894318957130000",

    },

    {
        id:2,
        tit:"$10.000",
        nombre:"Dog Chow 15kg",
        stock:10,
        image:"https://puppis.vteximg.com.br/arquivos/ids/179252-1000-1000/7891000244722-1.jpg?v=637570857666700000",

    },
    {
        id:3,
        tit:"$12.700",
        nombre:"Royal Canin 15kg",
        stock:10,
        image:"https://puppis.vteximg.com.br/arquivos/ids/176760-1000-1000/156157.jpg?v=637556935573830000",

    },
    {
        id:4,
        tit:"$15.000",
        nombre:"Pro Plan Adulto 15kg",
        stock:10,
        image:"https://puppis.vteximg.com.br/arquivos/ids/179607-600-600/7891000246382-1.jpg?v=637570859637630000",

    },

    {
        id:5,
        tit:"$10.000",
        nombre:"Pedigree Pollo 15kg",
        stock:10,
        image:"https://puppis.vteximg.com.br/arquivos/ids/182154-1000-1000/135045.jpg?v=637650377496400000",

    },
    {
        id:6,
        tit:"$12.700",
        nombre:"Pouch Optimum 15kg",
        stock:10,
        image:"https://puppis.vteximg.com.br/arquivos/ids/174415-1000-1000/154004-1.jpg?v=637443858666270000",

    },
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
        <section className="flex flex-col items-center bg-gray-900">

        <div className=" text-center">
            <h1 className=" bg-slate-500 " >{title}</h1>
            <ItemList data={data}/>
        </div>
        </section>
    )
}

export default ItemListContainer;