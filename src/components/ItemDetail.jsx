import React from "react";
import ItemCount from "./ItemCount";

export const ItemDetail = ({datos}) =>{

    const onAdd = (qty) => {
        alert(`Agregaste ${qty} productos`);
    };
    return(
            <div className="flex ">
                <img className="" src={datos.image} alt="" /> 
                <div className="text-center mt-40">
                <p>{datos.detalles}</p>
                <h2 className="text-red-700	">{datos.tit}</h2>
                <ItemCount onAdd={onAdd} initial={1} stock={8}/>
                </div>  
            </div>
    )

}

export default ItemDetail;