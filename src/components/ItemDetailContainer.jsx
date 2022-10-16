import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';


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

