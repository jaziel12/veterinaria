import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';
/* import ProductosArray from "./ProductosArray";
 */
const ItemDetailContainer =() => {
    const [item, setItem] = useState({})
    const {id}= useParams()

    useEffect(()=>{
        const prodColecction = collection(db, 'Balanceado');
        const ref = doc(prodColecction, id);
        getDoc(ref).then((res) => {
            setItem({
                id: res.id,
                ...res.data(),
            });
        });
    

    }, [id])

    return(
        <div className="h-min-main pb-6">
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer;

/* const getProduct=()=>
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
}) */


/* const querydb = getFirestore();
const queryDoc = doc(querydb, "Balanceado", "9lSbgUYOJHWLCe3jHSST") 
getDoc(queryDoc)
.then(res => console.log(res))
 */

/* const prodColeccion = collection(db, "Balanceado")
const ref = doc(prodColeccion, id)
getDoc(ref).then((res)=>  { setItem({
    id: res.id,
    ...res.data()
})}); */