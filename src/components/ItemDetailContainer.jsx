import React, { useState } from "react";
import { useEffect } from "react";
import ItemDetail from "./ItemDetail";

const prod =  {
    id:1,
    tit:"$15.000",
    nombre:"Criadores Adulto 15kg",
    stock:10,
    detalles:"El Alimento Maintenance Criadores Adulto está desarrollado especialmente para perros adultos de todos los tamaños, de entre 1 y 7 años de edad. Su fórmula incluye proteínas de carne y pollo de alto valor biológico, fibras, minerales, vitaminas y ácidos grasos, resultando en una nutrición completa para tu mascota.",
    image:"https://puppis.vteximg.com.br/arquivos/ids/158003-600-600/150002.png?v=635894318957130000",

};



export const ItemDetailContainer = () =>{

    const [datos, setDatos] = useState({});

    useEffect(() =>{
        const getDatos = new Promise (resolve =>{
            setTimeout(()=>{
                resolve(prod);
            }, 4000);
        });
        getDatos.then(pepe => setDatos(pepe));

    }, []);

    
    return(
            <h1>
                <ItemDetail datos={datos} /> 
            </h1>
    )

}

export default ItemDetailContainer;