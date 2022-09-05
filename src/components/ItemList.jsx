import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Productos } from "./Productos/";
const ItemList= () =>{
    const [Productos, setProductos] = useState([]);
    //Promesa
    const getProductos= new Promise((resolve, reject) =>{
        setTimeout(() =>{
            if(true){
                resolve(Productos);

            } else{
                reject("La promesa no fue complida")
            }
        }, 2000);
    });

    useEffect(()=>{
        getProductos
            .then(data=> setProductos(data))
            .catch(error=>console.error(error));
    },[]);

    return(
        <div className="">

            {Productos.length > 0
                ?Productos.map(Productos=> <Item key={Productos.id}  Productos={Productos} /> )
                : <p>Cargando productos ¡Prueba!</p>
            }

        </div>
    )
}

export default ItemList;