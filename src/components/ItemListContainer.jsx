import React, { useState } from "react";
import { useEffect } from "react";
import ItemList from "./ItemList";
import { db } from "./firebaseConfig";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { collection, getDocs, query, where } from 'firebase/firestore';


export const ItemListContainer =({title})=>{

const [item,setItem] = useState([]);

/* const valores = useContext(CartContext); //
console.log(valores) */

const {categoriaId}= useParams();


useEffect(() =>{
    const prodColecction = collection(db, 'Balanceado');
    const ref = categoriaId
        ? query(prodColecction, where('category', '==', categoriaId))
        : prodColecction;

    getDocs(ref).then((response) => {
        //console.log(response.docs);
        // data() método que nos provee firestore para transformar la información
        const products = response.docs.map((prod) => {
            console.log(prod);
            return {
                id: prod.id,
                ...prod.data(),
            };
        });
        setItem(products);
    });


}, [categoriaId])




    return (
        <main className="h-min-main pb-6">

        <section className="flex flex-col items-center bg-gray-900">
            <h1 className=" bg-slate-500 w-full text-center" >{title}</h1>
            <div className=" text-center">
            <ItemList item={item}/>
        </div>
        </section>
        </main>
    )
}

export default ItemListContainer;
/*     const getProductos = new Promise(resolve=>{
        setTimeout(()=>{
            resolve(ProductosArray)
        }, 2000);   
    })
    if(categoriaId){
        getProductos.then(data=> setItem(data.filter(ProductosArray=>ProductosArray.category === categoriaId)));
    } else {
        getProductos.then(data=> setItem(data));

    } */
/*     const db = getFirestore();
    const itemsCollection = collection(db,"Balanceado")
    getDocs(itemsCollection).then((snapShot) =>{})
    const respuesta = doc(db, "mCwly0bdQxG1tLpb5lR6")
    getDoc(respuesta).then((snapShot)=>{
        console.log(snapShot.data())
    }) */

/* 
    const prodColeccion = collection (db, "Balanceado")
    const ref= categoriaId ? query(prodColeccion, where("category", "==", "Perros",categoriaId)) : prodColeccion

    getDocs(ref).then((res)=>{
        const produ = res.docs.map((prod)=>{
            console.log(prod)
            return{
                id:prod.d,
                ...prod.data()
            }
            
        })

            setItem(produ)
    }) */